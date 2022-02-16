import { Request, Response } from "express";

import { DeleteCourseService } from "./delete_course_service";

class DeleteCourseController {
  constructor(private deleteCourseService: DeleteCourseService) {}

  async handle(request: Request, response: Response) {
    const { code } = request.params;

    const courseId = Number(code);

    const deletedCourse = await this.deleteCourseService.execute(courseId);

    return response.json(deletedCourse);
  }
}

export { DeleteCourseController };
