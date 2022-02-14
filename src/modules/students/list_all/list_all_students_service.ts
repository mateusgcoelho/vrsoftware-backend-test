import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class ListAllStudentsService {
  async execute() {
    try {
      return await prisma.student.findMany().then((students) => students);
    } catch (error) {
      throw new AppError("Internal error on list all students!");
    }
  }
}

export { ListAllStudentsService };
