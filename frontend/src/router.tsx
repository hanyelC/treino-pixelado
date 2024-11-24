import { createBrowserRouter } from "react-router";
import { Workout } from "./pages/Workout";
import { WorkoutPlan } from "./pages/WorkoutPlan";
import { Plan } from "./pages/Plan";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Plan />,
  },
  {
    path: "/WorkoutPlan",
    element: <WorkoutPlan />,
  },
  {
    path: "/workout",
    element: <Workout />,
  },
]);
