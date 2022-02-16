import { UnsubscribeStudentController } from "./unsubscribe_student_controller";
import { UnsubscribeStudentService } from "./unsubscribe_student_service";

const unsubscribeStudentFactory = () => {
  const unsubscribeStudentService = new UnsubscribeStudentService();
  const unsubscribeStudentController = new UnsubscribeStudentController(
    unsubscribeStudentService
  );

  return unsubscribeStudentController;
};

export { unsubscribeStudentFactory };
