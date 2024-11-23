import { PrismaClient } from "@prisma/client";
import { ExerciseRepository } from "../repository/ExerciseRepository";
import { WorkoutRepository } from "../repository/WorkoutRepository";
import { ExerciseService } from "../services/ExerciseService";
import { WorkoutService } from "../services/WorkoutService";
import { createWorkout } from "../controllers/workoutController/CreateWorkout";
import { WorkoutPlanService } from "../services/WorkoutPlanService";
import { WorkoutPlanRepository } from "../repository/WorkoutPlanRepository";
import { getWorkout } from "../controllers/workoutController/GetWorkout";

const prisma = new PrismaClient();

export const exerciseService = new ExerciseService(
  new ExerciseRepository(prisma)
);
export const workoutService = new WorkoutService(new WorkoutRepository(prisma));
export const workoutPlanService = new WorkoutPlanService(
  new WorkoutPlanRepository(prisma)
);
