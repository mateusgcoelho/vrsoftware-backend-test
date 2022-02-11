import { Request, Response, Router } from "express";

import { listAllCoursesFactory } from "../modules/courses/list_all/list_all_factory";

const coursesRoutes = Router();

coursesRoutes.get("/", (request: Request, response: Response) => {
  listAllCoursesFactory().handle(request, response);
});

export { coursesRoutes };
