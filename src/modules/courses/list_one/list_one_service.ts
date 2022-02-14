import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class ListOneCourseService {
  async execute(code: number) {
    try {
      return await prisma.course
        .findUnique({
          where: {
            code: code,
          },
        })
        .then((course) => course);
    } catch (error) {
      throw new AppError("Internal error list one course!");
    }
  }
}

export { ListOneCourseService };
