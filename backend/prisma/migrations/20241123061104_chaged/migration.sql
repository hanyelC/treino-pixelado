/*
  Warnings:

  - You are about to drop the column `gifUrl` on the `exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `exercise` DROP COLUMN `gifUrl`,
    ADD COLUMN `gif_url` VARCHAR(191) NULL;
