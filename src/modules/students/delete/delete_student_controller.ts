import { Request, Response } from "express";

import { DeleteStudentService } from "./delete_student_service";

class DeleteStudentController {
  constructor(private deleteStudentService: DeleteStudentService) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const studentId = Number(id);

    const deletedStudent = await this.deleteStudentService.execute(studentId);

    return response.json(deletedStudent);
  }
}

export { DeleteStudentController };
