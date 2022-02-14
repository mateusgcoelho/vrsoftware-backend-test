import { Request, Response } from "express";

import AppError from "../../../services/app_error";

import { ListOneStudentService } from "./list_one_student_service";

class ListOneStudentController {
  constructor(private listOneStudentService: ListOneStudentService) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const studentId = Number(id);

    const student = await this.listOneStudentService.execute(studentId);

    return response.json(student);
  }
}

export { ListOneStudentController };
