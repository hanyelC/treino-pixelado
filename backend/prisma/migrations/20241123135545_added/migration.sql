-- DropForeignKey
ALTER TABLE `exercise` DROP FOREIGN KEY `Exercise_workout_id_fkey`;

-- AddForeignKey
ALTER TABLE `Exercise` ADD CONSTRAINT `Exercise_workout_id_fkey` FOREIGN KEY (`workout_id`) REFERENCES `Workout`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
