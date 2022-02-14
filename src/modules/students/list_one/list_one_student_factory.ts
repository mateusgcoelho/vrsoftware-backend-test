import { ListOneStudentController } from "./list_one_student_controller";
import { ListOneStudentService } from "./list_one_student_service";

const listOneStudentFactory = () => {
  const listOneStudentService = new ListOneStudentService();
  const listOneStudentController = new ListOneStudentController(
    listOneStudentService
  );

  return listOneStudentController;
};

export { listOneStudentFactory };
