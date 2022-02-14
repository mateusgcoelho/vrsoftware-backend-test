import { Request, Response } from "express";

import { ListOneStudentService } from "./list_one_student_service";

class ListOneStudentController {
  constructor(private listOneStudentService: ListOneStudentService) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) throw new Error("Invalid ID param!");

    try {
      const studentId = Number(id);

      const student = await this.listOneStudentService.execute(studentId);

      return response.json(student);
    } catch (error) {
      throw new Error("Internal error on list one student!");
    }
  }
}

export { ListOneStudentController };
