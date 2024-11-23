import { PrismaClient } from '@prisma/client';
import { ExerciseRepository } from '../repository/ExerciseRepository';
import { WorkoutRepository } from '../repository/WorkoutRepository';
import { ExerciseService } from '../services/ExerciseService';
import { WorkoutService } from '../services/WorkoutService';

const prisma = new PrismaClient();

const exerciseService = new ExerciseService(new ExerciseRepository());
const workoutService = new WorkoutService(new WorkoutRepository(prisma));

export const workoutController = new clasaskdf();
