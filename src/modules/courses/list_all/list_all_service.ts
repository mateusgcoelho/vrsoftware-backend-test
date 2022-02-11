import { prisma } from "../../../database/client";

class ListAllCoursesService {
  async execute() {
    try {
      const users = await prisma.course.findMany();

      return users;
    } catch (error) {
      throw new Error("Internal error list all courses!");
    }
  }
}

export { ListAllCoursesService };
