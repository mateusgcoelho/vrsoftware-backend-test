import { Request, Response } from "express";
import { UnsubscribeStudentService } from "./unsubscribe_student_service";

class UnsubscribeStudentController {
  constructor(private unsubscribeStudentService: UnsubscribeStudentService) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { code } = request.body;

    const studentId = Number(id);
    const courseCode = Number(code);

    await this.unsubscribeStudentService.execute(studentId, courseCode);

    return response.status(204).json({
      message: "Student has unsubscribed!",
    });
  }
}

export { UnsubscribeStudentController };
