import { Request, Response } from "express";

import { CreateStudentService } from "./create_student_service";

class CreateStudentController {
  constructor(private createStudentService: CreateStudentService) {}

  async handle(request: Request, response: Response) {
    const data: any = request.body;

    const student = await this.createStudentService.execute(data);

    return response.json(student);
  }
}

export { CreateStudentController };
