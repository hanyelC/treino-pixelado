import { NextFunction, Request, Response } from "express";
import { ExerciseRepository } from "../../repository/ExerciseRepository";
import { ExerciseService } from "../../services/ExerciseService";

export const createExercise = async (req: Request, res: Response) => {
  try {
    const { name, duration, repetitions, gif_url, workout_id } = req.body;

    const createExercises = new ExerciseService(new ExerciseRepository());

    const exercise = await createExercises.createExercise(
      name,
      duration,
      repetitions,
      gif_url,
      workout_id
    );

    res.status(200).json(exercise);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
