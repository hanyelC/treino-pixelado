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
    <div className="flex flex-col bg-slate-400 h-full">
      <Header>
      <div className="flex flex-col items-center cursor-pointer"
        onClick={() => handleTabClick("PLAN")}
      >
        <p className={`text-lg ${
                activeTab === "PLAN" ? "text-orange-500" : "text-black"
              }`}>PLAN</p>
      </div>
      <div className="flex flex-col items-center cursor-pointer"
            onClick={() => handleTabClick("TRAINING")}>
        <p className={`text-lg ${
          activeTab === "TRAINING" ? "text-orange-500" : "text-black"
        }`}>
          TRAINING
        </p>
      </div>
    </Header>

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
