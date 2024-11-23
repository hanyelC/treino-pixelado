-- DropForeignKey
ALTER TABLE `workoutplan` DROP FOREIGN KEY `WorkoutPlan_userId_fkey`;

-- AlterTable
ALTER TABLE `workoutplan` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `WorkoutPlan` ADD CONSTRAINT `WorkoutPlan_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
