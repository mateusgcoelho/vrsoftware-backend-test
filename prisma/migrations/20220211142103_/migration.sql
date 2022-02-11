-- CreateTable
CREATE TABLE "course" (
    "code" SERIAL NOT NULL,
    "description" VARCHAR(50) NOT NULL,
    "ementa" TEXT NOT NULL,

    CONSTRAINT "course_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "course_code" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_course_code_fkey" FOREIGN KEY ("course_code") REFERENCES "course"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
