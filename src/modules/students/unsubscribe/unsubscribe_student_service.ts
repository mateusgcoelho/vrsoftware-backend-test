import { prisma } from "../../../database/client";
import AppError from "../../../services/app_error";

class UnsubscribeStudentService {
  async execute(id: number, courseCode: number) {
    if (isNaN(id) || isNaN(courseCode)) {
      return new AppError("Invalid ID format!");
    }

    return await prisma.student
      .update({
        where: {
          id,
        },
        data: {
          courses: {
            disconnect: {
              code: courseCode,
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

export { UnsubscribeStudentService };
