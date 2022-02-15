import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class ListAllStudentsService {
  async execute() {
    return await prisma.student
      .findMany({
        include: {
          course: true,
        },
      })
      .then((students) => students)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { ListAllStudentsService };
