-- CreateTable
CREATE TABLE "Curso" (
    "codigo" SERIAL NOT NULL,
    "description" VARCHAR(50) NOT NULL,
    "ementa" TEXT NOT NULL,

    CONSTRAINT "Curso_pkey" PRIMARY KEY ("codigo")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" SERIAL NOT NULL,
    "curso_codigo" INTEGER NOT NULL,
    "nome" VARCHAR(50) NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_curso_codigo_fkey" FOREIGN KEY ("curso_codigo") REFERENCES "Curso"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
