import { WorkoutCard } from "../components/WorkoutCard";

export function WorkoutPlan() {
  return (
    <div className="flex flex-col h-full ">
      <h1>workout plan</h1>

      {workouts.map((w, i) => (
        <WorkoutCard name={w.name} key={i} />
      ))}
    </div>
  );
}

const workouts = [
  {
    name: "costas",
  },
  {
    name: "peito",
  },
];
