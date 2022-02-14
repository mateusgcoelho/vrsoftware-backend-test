import { Request, Response, Router } from "express";
import { createStudentFactory } from "../modules/students/create/create_student_factory";
import { listAllStudentsFactory } from "../modules/students/list_all/list_all_students_factory";
import { listOneStudentFactory } from "../modules/students/list_one/list_one_student_factory";

const studentsRoutes = Router();

studentsRoutes.post("/", async (request: Request, response: Response) => {
  await createStudentFactory().handle(request, response);
});

studentsRoutes.get("/:id", async (request: Request, response: Response) => {
  await listOneStudentFactory().handle(request, response);
});

studentsRoutes.get("/", async (request: Request, response) => {
  await listAllStudentsFactory().handle(request, response);
});

export { studentsRoutes };
