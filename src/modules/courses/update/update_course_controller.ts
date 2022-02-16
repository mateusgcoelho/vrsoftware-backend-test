import { Request, Response } from "express";

import { UpdateCourseService } from "./update_course_service";

class UpdateCourseController {
  constructor(private updateCourseService: UpdateCourseService) {}

  async handle(request: Request, response: Response) {
    const { code } = request.params;

    const courseCode = Number(code);

    const data = request.body;

    const newCourse = await this.updateCourseService.execute(courseCode, data);

    return response.json(newCourse);
  }
}

export { UpdateCourseController };
