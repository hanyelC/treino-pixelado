/*
  Warnings:

  - Made the column `img_url` on table `workout` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `workout` MODIFY `img_url` VARCHAR(191) NOT NULL;
