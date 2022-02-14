import { Request, Response } from "express";
import { ICreateCourseInterface } from "../../../interface/create_course_interface";
import { CreateCourseService } from "./create_course_service";

class CreateCourseController {
  constructor(private createCourseService: CreateCourseService) {}

  async handle(request: Request, response: Response) {
    const data: ICreateCourseInterface = request.body;

    const course = await this.createCourseService.execute(data);

    return response.json(course);
  }
}

export { CreateCourseController };
