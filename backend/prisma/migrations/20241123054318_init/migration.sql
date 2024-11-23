/*
  Warnings:

  - You are about to drop the column `userId` on the `workoutplan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `workoutplan` DROP FOREIGN KEY `WorkoutPlan_userId_fkey`;

-- AlterTable
ALTER TABLE `workoutplan` DROP COLUMN `userId`;
