import { Router } from "express";
import { createWorkout } from "../controllers/workoutController/CreateWorkout";
import { getWorkout } from "../controllers/workoutController/GetWorkout";

const routes = Router();

routes.post("/workout", createWorkout);
routes.get("/workouts", getWorkout);

export default routes;
