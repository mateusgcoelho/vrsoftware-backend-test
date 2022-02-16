import { UpdateStudentController } from "./update_student_controller";
import { UpdateStudentService } from "./update_student_service";

const updateStudentFactory = () => {
  const updateStudentService = new UpdateStudentService();
  const updateStudentController = new UpdateStudentController(
    updateStudentService
  );

  return updateStudentController;
};

export { updateStudentFactory };
