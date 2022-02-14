import { prisma } from "../../../database/client";
import { ICreateStudentInterface } from "../../../interface/create_student_interface";

class CreateStudentService {
  async execute(data: any) {
    try {
      return await prisma.student
        .create({
          data,
        })
        .then((student) => student);
    } catch (error) {
      throw new Error("Internal error on create student!");
    }
  }
}

export { CreateStudentService };
