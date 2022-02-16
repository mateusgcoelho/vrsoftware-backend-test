import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class UpdateStudentService {
  async execute(id: number, data: any) {
    if (isNaN(id)) {
      return new AppError("Invalid ID format!");
    }

    let dataToSendPrisma: any =
      data.courses == null
        ? {
            data: {
              name: data.name,
            },
          }
        : {
            data: {
              name: data.name,
              courses: {
                connect: data.courses,
              },
            },
          };

    return await prisma.student
      .update({
        where: {
          id,
        },
        ...dataToSendPrisma,
      })
      .then((student) => student)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { UpdateStudentService };
