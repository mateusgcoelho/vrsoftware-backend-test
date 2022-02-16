import { DeleteCourseController } from "./delete_course_controller";
import { DeleteCourseService } from "./delete_course_service";

const deleteCourseFactory = () => {
  const deleteCourseService = new DeleteCourseService();
  const deleteCourseController = new DeleteCourseController(
    deleteCourseService
  );

  return deleteCourseController;
};

export { deleteCourseFactory };
