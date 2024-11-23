/*
  Warnings:

  - Added the required column `img_url` to the `WorkoutPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `workoutplan` ADD COLUMN `img_url` VARCHAR(191) NOT NULL;
