import { Request, Response, Router } from "express";
import { createStudentFactory } from "../modules/students/create/create_student_factory";
import { deleteStudentFactory } from "../modules/students/delete/delete_student_factory";
import { enrollStudentsFactory } from "../modules/students/enroll/enroll_students_factory";
import { listAllStudentsFactory } from "../modules/students/list_all/list_all_students_factory";
import { listOneStudentFactory } from "../modules/students/list_one/list_one_student_factory";
import { unsubscribeStudentFactory } from "../modules/students/unsubscribe/unsubscribe_student_factory";
import { updateStudentFactory } from "../modules/students/update/update_student_factory";

const studentsRoutes = Router();

studentsRoutes.post("/", async (request: Request, response: Response) => {
  await createStudentFactory().handle(request, response);
});

studentsRoutes.put("/:id", async (request: Request, response) => {
  await updateStudentFactory().handle(request, response);
});

studentsRoutes.patch("/unsubscribe/:id", async (request: Request, response) => {
  await unsubscribeStudentFactory().handle(request, response);
});

studentsRoutes.patch("/enroll/:id", async (request: Request, response) => {
  await enrollStudentsFactory().handle(request, response);
});

studentsRoutes.get("/:id", async (request: Request, response: Response) => {
  await listOneStudentFactory().handle(request, response);
});

studentsRoutes.delete("/:id", async (request: Request, response: Response) => {
  await deleteStudentFactory().handle(request, response);
});

studentsRoutes.get("/", async (request: Request, response) => {
  await listAllStudentsFactory().handle(request, response);
});

export { studentsRoutes };
