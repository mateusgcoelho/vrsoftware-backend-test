import { prisma } from "../database/client";

const initDefaultDatabase = async () => {
  await prisma.course
    .findMany()
    .then(async (courses) => {
      if (courses.length <= 0)
        await prisma.course.create({
          data: {
            code: 1,
            description: "INFORMATICA BASICA",
            ementa: "Descrição padrão e breve do curso!",
          },
        });
    })
    .finally(() => prisma.$disconnect());

  await prisma.student
    .findMany()
    .then(async (students) => {
      if (students.length <= 0)
        await prisma.student.create({
          data: {
            courses: {
              connect: {
                code: 1,
              },
            },
            name: "João Mateus",
          },
        });
    })
    .finally(() => prisma.$disconnect());
};

export { initDefaultDatabase };
