import { create } from "zustand";
import { API_URL } from "../constants";
import { WorkoutPlan } from "../types/WorkoutPlan.type";

type WorkoutPlanStore = {
  workouts: WorkoutPlan[];
  error: null | string;
  loading: boolean;
  fetchWorkouts: () => Promise<void>;
};

export const workoutPlanStore = create<WorkoutPlanStore>((set) => ({
  workouts: [],
  error: null,
  loading: false,
  fetchWorkouts: async () => {
    try {
      set({ loading: true, error: null });
      const res = await fetch(API_URL + "/workoutsplan", {
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();

      if (res.status == 200) {
        set({ workouts: data.workoutsPlan, loading: false });
      } else set({ error: data.error, loading: false });
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else throw error;
    }
  },
}));
