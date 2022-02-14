import { prisma } from "../../../database/client";

import { ICreateCourseInterface } from "../../../interface/create_course_interface";

import AppError from "../../../services/app_error";

class CreateCourseService {
  async execute(data: ICreateCourseInterface) {
    return await prisma.course
      .create({
        data,
      })
      .then((course) => course)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { CreateCourseService };
