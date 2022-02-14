import { ListOneCourseController } from "./list_one_controller";
import { ListOneCourseService } from "./list_one_service";

const listOneCourseFactory = () => {
    const listOneCourseService = new ListOneCourseService();
    const listOneCourseController = new ListOneCourseController(listOneCourseService);

    return listOneCourseController;
}

export { listOneCourseFactory };
