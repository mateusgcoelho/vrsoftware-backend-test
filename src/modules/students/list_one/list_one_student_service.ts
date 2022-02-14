import { prisma } from "../../../database/client";

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
      throw new Error("Internal error on list one student!");
    }
  }
}

export { ListOneStudentService };
