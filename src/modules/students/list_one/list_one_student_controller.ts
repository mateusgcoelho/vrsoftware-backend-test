import { Request, Response } from "express";

import AppError from "../../../services/app_error";

import { ListOneStudentService } from "./list_one_student_service";

class ListOneStudentController {
  constructor(private listOneStudentService: ListOneStudentService) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    if (!id) throw new Error("Invalid ID param!");

    try {
      const studentId = Number(id);

      const student = await this.listOneStudentService.execute(studentId);

      if (!student) throw new AppError("Student not's found!");

      return response.json(student);
    } catch (error) {
      throw new AppError("Internal error on list one student!");
    }
  }
}

export { ListOneStudentController };
