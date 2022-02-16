import { prisma } from "../../../database/client";
import AppError from "../../../services/app_error";

class DeleteCourseService {
  async execute(code: number) {
    if (isNaN(code)) {
      return new AppError("Invalid ID format!");
    }

    return await prisma.course
      .findUnique({
        where: {
          code,
        },
        include: {
          students: true,
        },
      })
      .then(async (course) => {
        if (course!.students.length <= 0) {
          await prisma.course
            .delete({
              where: {
                code,
              },
            })
            .then(() => {
              return;
            })
            .catch((error) => {
              return new AppError(error);
            });
        } else {
          return new AppError("This course has students registred!");
        }
      })
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { DeleteCourseService };
