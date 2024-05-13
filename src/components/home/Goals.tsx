import { goals } from "@/utils/constants/goals";
import React from "react";
import GoalItem from "./GoalItem";

const Goals = () => {
  return (
    <div className="left-0 right-0 flex flex-col mx-2 my-3 space-y-4">
      {goals.map((goal, index) => (
        <GoalItem key={index} goal={goal} />
      ))}
    </div>
  );
};

export default Goals;
