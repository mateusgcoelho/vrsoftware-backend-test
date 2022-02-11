import { Request, Response } from "express";

import { ListAllCoursesService } from "./list_all_service";

class ListAllCoursesController {
  constructor(private listAllCoursesService: ListAllCoursesService) {}

  async handle(request: Request, response: Response) {
    const users = await this.listAllCoursesService.execute();

    return response.json(users);
  }
}

export { ListAllCoursesController };
