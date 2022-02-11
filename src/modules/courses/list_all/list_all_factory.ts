import { ListAllCoursesController } from "./list_all_controller";
import { ListAllCoursesService } from "./list_all_service";

const listAllCoursesFactory = () => {
  const listAllCoursesService = new ListAllCoursesService();
  const listAllCoursesController = new ListAllCoursesController(
    listAllCoursesService
  );

  return listAllCoursesController;
};

export { listAllCoursesFactory };
