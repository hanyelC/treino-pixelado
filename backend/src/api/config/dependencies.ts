import { PrismaClient } from '@prisma/client';
import { CreateExerciseController } from '../controllers/exerciseController/CreateExercise';
import { GetExercisesController } from '../controllers/exerciseController/GetExercises';
import { CreateWorkoutController } from '../controllers/workoutController/CreateWorkout';
import { GetWorkoutController } from '../controllers/workoutController/GetWorkout';
import { CreateWorkoutPlanController } from '../controllers/workoutPlanController/CreateWorkoutPlan';
import { DeleteWorkoutPlanController } from '../controllers/workoutPlanController/DeleteWorkoutPlan';
import { GetWorkoutPlanController } from '../controllers/workoutPlanController/GetWorkoutPlan';
import { ExerciseRepository } from '../repository/ExerciseRepository';
import { WorkoutPlanRepository } from '../repository/WorkoutPlanRepository';
import { WorkoutRepository } from '../repository/WorkoutRepository';
import { ExerciseService } from '../services/ExerciseService';
import { WorkoutPlanService } from '../services/WorkoutPlanService';
import { WorkoutService } from '../services/WorkoutService';

const prisma = new PrismaClient();

const exerciseService = new ExerciseService(new ExerciseRepository(prisma));
const workoutService = new WorkoutService(new WorkoutRepository(prisma));
const workoutPlanService = new WorkoutPlanService(
  new WorkoutPlanRepository(prisma)
);

// workout
export const getWorkoutController = new GetWorkoutController(workoutService);
export const createWorkoutController = new CreateWorkoutController(
  workoutService
);

// exercise
export const getExerciseController = new GetExercisesController(
  exerciseService
);
export const createExerciseController = new CreateExerciseController(
  exerciseService
);

// workout plan
export const createWorkoutPlanController = new CreateWorkoutPlanController(
  workoutPlanService
);
export const getWorkoutPlanController = new GetWorkoutPlanController(
  workoutPlanService
);
export const deleteWorkoutPlanController = new DeleteWorkoutPlanController(
  workoutPlanService
);
