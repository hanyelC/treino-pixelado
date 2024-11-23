import { Router } from 'express';
import { createExercise } from '../controllers/exerciseController/CreateExercise';
import { getExercises } from '../controllers/exerciseController/GetExercises';

const routes = Router();

routes.post('/exercise', createExercise);
routes.get('/exercises', getExercises);

export default routes;
