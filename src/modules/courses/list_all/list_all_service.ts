import { prisma } from "../../../database/client";

import AppError from "../../../services/app_error";

class ListAllCoursesService {
  async execute() {
    try {
      return await prisma.course.findMany().then((courses) => courses);
    } catch (error) {
      throw new AppError("Internal error list all courses!");
    }
  }
}

export { ListAllCoursesService };
