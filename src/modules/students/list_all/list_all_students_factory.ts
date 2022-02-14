import { ListAllStudentsController } from "./list_all_students_controller";
import { ListAllStudentsService } from "./list_all_students_service";

const listAllStudentsFactory = () => {
  const listAllStudentsService = new ListAllStudentsService();
  const listAllStudentsController = new ListAllStudentsController(
    listAllStudentsService
  );

  return listAllStudentsController;
};

export { listAllStudentsFactory };
