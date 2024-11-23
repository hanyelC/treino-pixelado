-- DropForeignKey
ALTER TABLE `workout` DROP FOREIGN KEY `Workout_workout_plan_id_fkey`;

-- AddForeignKey
ALTER TABLE `Workout` ADD CONSTRAINT `Workout_workout_plan_id_fkey` FOREIGN KEY (`workout_plan_id`) REFERENCES `WorkoutPlan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
