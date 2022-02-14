import { Router } from "express";

import { coursesRoutes } from "./courses.routes";
import { studentsRoutes } from "./students.routes";

const routes = Router();

routes.use("/courses", coursesRoutes);
routes.use("/students", studentsRoutes);

export { routes };
