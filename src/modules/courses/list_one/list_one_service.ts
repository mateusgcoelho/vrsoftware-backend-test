import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class ListOneCourseService {
  async execute(code: number) {
    return await prisma.course
      .findUnique({
        where: {
          code: code,
        },
      })
      .then((course) => {
        if (!course) return new AppError("Course not's found!");

        return course;
      })
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { ListOneCourseService };
