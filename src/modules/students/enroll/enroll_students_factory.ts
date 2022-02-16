import { EnrollStudentsController } from "./enroll_students_controller";
import { EnrollStudentsService } from "./enroll_students_service";

const enrollStudentsFactory = () => {
  const enrollStudentsService = new EnrollStudentsService();
  const enrollStudentsController = new EnrollStudentsController(
    enrollStudentsService
  );

  return enrollStudentsController;
};

export { enrollStudentsFactory };
