import { Router } from "express";
import { createWorkoutPlan } from "../controllers/workoutPlanController/CreateWorkoutPlan";
import { getWorkoutPlan } from "../controllers/workoutPlanController/GetWorkoutPlan";
import { deleteWorkoutPlan } from "../controllers/workoutPlanController/DeleteWorkoutPlan";

const routes = Router();

routes.post("/workoutplan", createWorkoutPlan);
routes.get("/workoutsplan", getWorkoutPlan);
routes.delete("/workoutplan/:id", deleteWorkoutPlan);

export default routes;
