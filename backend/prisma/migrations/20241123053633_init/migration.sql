/*
  Warnings:

  - You are about to drop the column `createdAt` on the `workoutplan` table. All the data in the column will be lost.
  - You are about to drop the column `isCustom` on the `workoutplan` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `workoutplan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `workoutplan` DROP COLUMN `createdAt`,
    DROP COLUMN `isCustom`,
    DROP COLUMN `updatedAt`;
