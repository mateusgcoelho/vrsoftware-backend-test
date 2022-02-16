import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class UpdateCourseService {
  async execute(code: number, data: any) {
    if (isNaN(code)) {
      return new AppError("Invalid ID format!");
    }

    return await prisma.course
      .update({
        where: {
          code,
        },
        data,
      })
      .then((course) => course)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { UpdateCourseService };
