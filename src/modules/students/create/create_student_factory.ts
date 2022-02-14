import { CreateStudentController } from "./create_student_controller";
import { CreateStudentService } from "./create_student_service";

const createStudentFactory = () => {
  const createStudentService = new CreateStudentService();
  const createStudentController = new CreateStudentController(
    createStudentService
  );

  return createStudentController;
};

export { createStudentFactory };
