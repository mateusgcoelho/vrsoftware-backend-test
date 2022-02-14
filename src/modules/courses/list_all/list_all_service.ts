import { prisma } from "../../../database/client";

class ListAllCoursesService {
  async execute() {
    try {
      return await prisma.course.findMany().then((courses) => courses);
    } catch (error) {
      throw new Error("Internal error list all courses!");
    }
  }
}

export { ListAllCoursesService };
