import { prisma } from "../../../database/client";

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
      throw new Error("Internal error list one course!");
    }
  }
}

export { ListOneCourseService };
