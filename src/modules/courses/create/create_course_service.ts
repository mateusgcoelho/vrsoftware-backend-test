import { prisma } from "../../../database/client";

import { ICreateCourseInterface } from "../../../interface/create_course_interface";

import AppError from "../../../services/app_error";

class CreateCourseService {
  async execute(data: ICreateCourseInterface) {
    try {
      return await prisma.course
        .create({
          data,
        })
        .then((course) => course);
    } catch (error) {
      throw new AppError("Internal error on create course!");
    }
  }
}

export { CreateCourseService };
