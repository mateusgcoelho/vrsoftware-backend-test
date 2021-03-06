import { prisma } from "../../../database/client";
import { ICreateStudentInterface } from "../../../interface/create_student_interface";
import AppError from "../../../services/app_error";

class CreateStudentService {
  async execute(data: any) {
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
      .create(dataToSendPrisma)
      .then((student) => student)
      .catch((error) => {
        return new AppError(error);
      })
      .finally(() => prisma.$disconnect());
  }
}

export { CreateStudentService };
