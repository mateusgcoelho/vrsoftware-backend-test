-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_course_code_fkey";

-- AlterTable
ALTER TABLE "student" ALTER COLUMN "course_code" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_course_code_fkey" FOREIGN KEY ("course_code") REFERENCES "course"("code") ON DELETE SET NULL ON UPDATE CASCADE;
