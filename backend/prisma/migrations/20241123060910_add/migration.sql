/*
  Warnings:

  - You are about to drop the column `workoutId` on the `exercise` table. All the data in the column will be lost.
  - Added the required column `workout_id` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `exercise` DROP FOREIGN KEY `Exercise_workoutId_fkey`;

-- AlterTable
ALTER TABLE `exercise` DROP COLUMN `workoutId`,
    ADD COLUMN `workout_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_workout_id_fkey` FOREIGN KEY (`workout_id`) REFERENCES `Workout`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
