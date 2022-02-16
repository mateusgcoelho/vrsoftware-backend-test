import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class ListAllCoursesService {
  async execute() {
    return await prisma.course
      .findMany({
        include: {
          students: {
            select: {
              id: true,
              name: true,
              created_at: true,
              courses: true,
            },
          },
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
