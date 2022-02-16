import { Request, Response, Router } from "express";

import { createCourseFactory } from "../modules/courses/create/create_course_factory";
import { deleteCourseFactory } from "../modules/courses/delete/delete_course_factory";
import { listAllCoursesFactory } from "../modules/courses/list_all/list_all_factory";
import { listOneCourseFactory } from "../modules/courses/list_one/list_one_factory";
import { updateCourseFactory } from "../modules/courses/update/update_course_factory";

const coursesRoutes = Router();

coursesRoutes.get("/", async (request: Request, response: Response) => {
  await listAllCoursesFactory().handle(request, response);
});

coursesRoutes.get("/:code", async (request: Request, response: Response) => {
  await listOneCourseFactory().handle(request, response);
});

coursesRoutes.post("/", async (request: Request, response: Response) => {
  await createCourseFactory().handle(request, response);
});

coursesRoutes.put("/:code", async (request: Request, response: Response) => {
  await updateCourseFactory().handle(request, response);
});

coursesRoutes.delete("/:code", async (request: Request, response: Response) => {
  await deleteCourseFactory().handle(request, response);
});

export { coursesRoutes };
