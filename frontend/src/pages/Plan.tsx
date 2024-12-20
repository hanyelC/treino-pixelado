import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import banner from "../assets/download 1.png"

const days = [
  { day: "Day 1", workout: "Chest" },
  { day: "Day 2", workout: "Back" },
  { day: "Day 3", workout: "Legs" },
  { day: "Day 4", workout: "Shoulders" },
  { day: "Day 5", workout: "Arms" },
  { day: "Day 6", workout: "Core" },
  { day: "Day 7", workout: "Rest" },
];

export function Plan() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("PLAN");
  const navigate = useNavigate();

  // Função para alterar o estado ao clicar em um item
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "TRAINING") navigate("/workoutPlan"); 
  };

  const handleItemClick = (index: number) => {
    setSelectedDay(index === selectedDay ? null : index); // Se o mesmo item for clicado, desmarque a seleção
  };

  return( 
   <div className="bg-slate-400 w-full relative">
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
    <div className="px-3 pt-16">
      <img src={banner} alt="Logo do site" className="rounded-xl" />
    </div>
    {days.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between py-5 px-3 mx-3 my-3 rounded-[10px] ${
              selectedDay === index ? "bg-orange-500" : "bg-slate-100"
            }`}
            onClick={() => handleItemClick(index)} // Ao clicar, chama a função para alterar o estado
          >
            <div className="flex-col">
            <p
                className={`${
                  selectedDay === index ? "text-white" : "text-black"
                } text-xl`}
              >
                {item.day}
              </p>
              <p
                className={`${
                  selectedDay === index ? "text-white" : "text-black"
                } text-xs`}
              >
                {item.workout}
              </p>
            </div>
            <button
              className={`${
                selectedDay === index ? "bg-white text-orange-500" : "bg-orange-500 text-white"
              } rounded-lg py-1 px-7`}
            >
              <p>Start</p>
            </button>
          </div>
        ))}
  </div>
  )
}