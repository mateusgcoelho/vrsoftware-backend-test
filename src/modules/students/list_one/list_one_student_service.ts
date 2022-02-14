import { prisma } from "../../../database/client";
import AppError from "../../../services/app_error";

class ListOneStudentService {
  async execute(id: number) {
    try {
      return await prisma.student
        .findUnique({
          where: {
            id,
          },
        })
        .then((student) => student);
    } catch (error) {
      throw new AppError("Internal error on list one student!");
    }
  }
}

export { ListOneStudentService };
