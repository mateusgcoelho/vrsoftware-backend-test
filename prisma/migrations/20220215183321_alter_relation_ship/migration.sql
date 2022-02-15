/*
  Warnings:

  - You are about to drop the column `course_code` on the `student` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_course_code_fkey";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "course_code";

-- CreateTable
CREATE TABLE "_courseTostudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_courseTostudent_AB_unique" ON "_courseTostudent"("A", "B");

-- CreateIndex
CREATE INDEX "_courseTostudent_B_index" ON "_courseTostudent"("B");

-- AddForeignKey
ALTER TABLE "_courseTostudent" ADD FOREIGN KEY ("A") REFERENCES "course"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_courseTostudent" ADD FOREIGN KEY ("B") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
