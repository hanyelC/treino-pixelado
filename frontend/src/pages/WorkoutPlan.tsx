import { useNavigate } from "react-router";
import Header from "../components/Header";
import { WorkoutCard } from "../components/WorkoutCard";
import { useState } from "react";

export function WorkoutPlan() {
  const [activeTab, setActiveTab] = useState("TRAINING");
  const navigate = useNavigate();

  // Função para alterar o estado ao clicar em um item
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "PLAN") navigate("/");
  };

  return (
    <div className="flex flex-col bg-gray-200 h-full">
      <Header>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleTabClick("PLAN")}
        >
          <p
            className={`text-lg ${
              activeTab === "PLAN" ? "text-orange-500" : "text-black"
            }`}
          >
            PLAN
          </p>
        </div>
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleTabClick("TRAINING")}
        >
          <p
            className={`text-lg ${
              activeTab === "TRAINING" ? "text-orange-500" : "text-black"
            }`}
          >
            TRAINING
          </p>
        </div>
      </Header>

      <div className="mt-[50px] flex flex-col gap-3 p-3 bg-gray-200">
        {workouts.map((w, i) => (
          <WorkoutCard
            name={w.name}
            exercises={w.exercises}
            imageUrl={w.imageUrl}
            description={w.description}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

const workouts = [
  {
    name: "Full Body Workout",
    imageUrl: "https://picsum.photos/200",
    description:
      "Esse treino é ideal para fortalecer e definir os músculos dos braços e do peitoral.",
    exercises: [
      {
        name: "Burpee",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
      {
        name: "Glute Bridge",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
      {
        name: "Push-UP",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
    ],
  },
  {
    name: "Chest & Biceps",
    imageUrl: "https://picsum.photos/200",
    description:
      "Esse treino é ideal para fortalecer e definir os músculos dos braços e do peitoral.",
    exercises: [
      {
        name: "Burpee",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
      {
        name: "Glute Bridge",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
      {
        name: "Push-UP",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
    ],
  },
  {
    name: "Full Body Workout",
    imageUrl: "https://picsum.photos/200",
    description:
      "Esse treino é ideal para fortalecer e definir os músculos dos braços e do peitoral.",
    exercises: [
      {
        name: "Burpee",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
      {
        name: "Glute Bridge",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
      },
      {
        name: "Push-UP",
        series: "4x8",
        imageUrl: "https://picsum.photos/200",
        description:
          "Esse treino é ideal para fortalecer e definir os músculos dos braços e do peitoral.",
      },
    ],
  },
];
