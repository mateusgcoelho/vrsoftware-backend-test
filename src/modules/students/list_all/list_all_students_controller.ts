import { Request, Response } from "express";

import { ListAllStudentsService } from "./list_all_students_service";

class ListAllStudentsController {
  constructor(private listAllStudentsService: ListAllStudentsService) {}

  async handle(request: Request, response: Response) {
    const students = await this.listAllStudentsService.execute();

    return response.json(students);
  }
}

export { ListAllStudentsController };
