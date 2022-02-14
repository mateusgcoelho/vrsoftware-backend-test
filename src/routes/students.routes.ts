import { Request, Response, Router } from "express";
import { createStudentFactory } from "../modules/students/create/create_student_factory";
import { listOneStudentFactory } from "../modules/students/list_one/list_one_student_factory";

const studentsRoutes = Router();

studentsRoutes.post("/", (request: Request, response: Response) => {
  createStudentFactory().handle(request, response);
});

studentsRoutes.get("/:id", (request: Request, response: Response) => {
  listOneStudentFactory().handle(request, response);
});

export { studentsRoutes };
