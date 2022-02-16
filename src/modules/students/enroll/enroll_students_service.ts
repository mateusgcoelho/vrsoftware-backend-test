import AppError from "../../../services/app_error";

import { prisma } from "../../../database/client";

class EnrollStudentsService {
  async execute(id: number, data: any) {
    if (isNaN(id)) {
      return new AppError("Invalid ID format!");
    }

    return await prisma.student
      .update({
        where: {
          id,
        },
        data: {
          courses: {
            connect: {
              code: data.code,
            },
          },
        },
      })
      .then((student) => student)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { EnrollStudentsService };
