import { Router } from 'express';
import {
  createWorkoutPlanController,
  deleteWorkoutPlanController,
  getWorkoutPlanController,
} from '../config/dependencies';

const routes = Router();

routes.post('/workoutplan', (req, res) =>
  createWorkoutPlanController.handle(req, res)
);
routes.get('/workoutsplan', (req, res) =>
  getWorkoutPlanController.handle(req, res)
);
routes.delete('/workoutplan/:id', (req, res) =>
  deleteWorkoutPlanController.handle(req, res)
);

export default routes;
