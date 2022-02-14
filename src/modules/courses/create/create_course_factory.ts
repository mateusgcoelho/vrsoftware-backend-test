import { CreateCourseController } from "./create_course_controller";
import { CreateCourseService } from "./create_course_service";

const createCourseFactory = () => {
  const createCourseService = new CreateCourseService();
  const createCourseController = new CreateCourseController(
    createCourseService
  );

  return createCourseController;
};

export { createCourseFactory };
