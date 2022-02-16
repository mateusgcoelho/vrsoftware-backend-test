import { UpdateCourseController } from "./update_course_controller";
import { UpdateCourseService } from "./update_course_service";

const updateCourseFactory = () => {
  const updateCourseService = new UpdateCourseService();
  const updateCourseController = new UpdateCourseController(
    updateCourseService
  );

  return updateCourseController;
};

export { updateCourseFactory };
