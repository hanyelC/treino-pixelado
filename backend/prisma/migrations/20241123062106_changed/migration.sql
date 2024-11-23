/*
  Warnings:

  - You are about to drop the column `workoutPlanId` on the `workout` table. All the data in the column will be lost.
  - Added the required column `workout_plan_id` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `workout` DROP FOREIGN KEY `Workout_workoutPlanId_fkey`;

-- AlterTable
ALTER TABLE `workout` DROP COLUMN `workoutPlanId`,
    ADD COLUMN `workout_plan_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Workout` ADD CONSTRAINT `Workout_workout_plan_id_fkey` FOREIGN KEY (`workout_plan_id`) REFERENCES `WorkoutPlan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
