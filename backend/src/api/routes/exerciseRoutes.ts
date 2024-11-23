import { Router } from "express";
import { createExercise } from "../controllers/exerciseController/CreateExercise";
import { getExercises } from "../controllers/exerciseController/GetExercises";
import { exerciseService } from "../config/dependencies";

const routes = Router();

routes.post("/exercise", createExercise(exerciseService));
routes.get("/exercises", getExercises(exerciseService));

export default routes;
