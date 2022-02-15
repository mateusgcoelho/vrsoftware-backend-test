import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class ListAllCoursesService {
  async execute() {
    return await prisma.course
      .findMany({
        include: {
          students: true,
        },
      })
      .then((courses) => courses)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { ListAllCoursesService };
