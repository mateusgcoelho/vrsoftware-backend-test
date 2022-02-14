import { prisma } from "../../../database/client";
import { ICreateStudentInterface } from "../../../interface/create_student_interface";
import AppError from "../../../services/app_error";

class CreateStudentService {
  async execute(data: any) {
    return await prisma.student
      .create({
        data,
      })
      .then((student) => student)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { CreateStudentService };
