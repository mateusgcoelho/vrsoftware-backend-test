import { Request, Response, Router } from "express";

import { listAllCoursesFactory } from "../modules/courses/list_all/list_all_factory";
import { listOneCourseFactory } from "../modules/courses/list_one/list_one_factory";

const coursesRoutes = Router();

coursesRoutes.get("/", (request: Request, response: Response) => {
  listAllCoursesFactory().handle(request, response);
});

coursesRoutes.get("/:code", (request: Request, response: Response) => {
  listOneCourseFactory().handle(request, response);
})

export { coursesRoutes };
