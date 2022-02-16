import { DeleteStudentController } from "./delete_student_controller";
import { DeleteStudentService } from "./delete_student_service";

const deleteStudentFactory = () => {
  const deleteStudentService = new DeleteStudentService();
  const deleteStudentController = new DeleteStudentController(
    deleteStudentService
  );

  return deleteStudentController;
};

export { deleteStudentFactory };
