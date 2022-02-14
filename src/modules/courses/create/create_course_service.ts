import { prisma } from "../../../database/client";
import { ICreateCourseInterface } from "../../../interface/create_course_interface";

class CreateCourseService {
  async execute(data: ICreateCourseInterface) {
    try {
      return await prisma.course
        .create({
          data,
        })
        .then((course) => course);
    } catch (error) {
      throw new Error("Internal error on create course!");
    }
  }
}

export { CreateCourseService };
