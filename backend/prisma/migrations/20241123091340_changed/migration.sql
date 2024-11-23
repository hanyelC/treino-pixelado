/*
  Warnings:

  - Made the column `duration` on table `exercise` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gif_url` on table `exercise` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `exercise` MODIFY `duration` INTEGER NOT NULL,
    MODIFY `gif_url` VARCHAR(191) NOT NULL;
