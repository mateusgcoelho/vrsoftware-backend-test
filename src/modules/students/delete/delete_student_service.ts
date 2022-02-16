import { prisma } from "../../../database/client";
import AppError from "../../../services/app_error";

class DeleteStudentService {
  async execute(id: number) {
    if (isNaN(id)) {
      return new AppError("Invalid ID format!");
    }

    return await prisma.student
      .findUnique({
        where: {
          id,
        },
        include: {
          courses: true,
        },
      })
      .then(async (student) => {
        if (student!.courses.length <= 0) {
          await prisma.student
            .delete({
              where: {
                id,
              },
            })
            .then(() => {
              return;
            })
            .catch((error) => {
              return new AppError(error);
            });
        } else {
          return new AppError("This student has courses registred!");
        }
      })
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { DeleteStudentService };
