import { Request, Response } from "express";

import { UpdateStudentService } from "./update_student_service";

class UpdateStudentController {
  constructor(private updateStudentService: UpdateStudentService) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const studentId = Number(id);

    const data = request.body;

    const newStudent = await this.updateStudentService.execute(studentId, data);

    return response.json(newStudent);
  }
}

export { UpdateStudentController };
