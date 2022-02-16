import { Request, Response } from "express";
import { EnrollStudentsService } from "./enroll_students_service";

class EnrollStudentsController {
  constructor(private enrollStudentsService: EnrollStudentsService) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const data = request.body;

    const studentId = Number(id);

    const student = await this.enrollStudentsService.execute(studentId, data);

    return response.json(student);
  }
}

export { EnrollStudentsController };
