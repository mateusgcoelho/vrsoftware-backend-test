import { prisma } from "../../../database/client";
import AppError from "../../../services/app_error";

class ListOneStudentService {
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
      .then((student) => {
        if (!student) return new AppError("Student not's found!");

        return student;
      })
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { ListOneStudentService };
