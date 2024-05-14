'use client';

import { goals } from "@/utils/constants/goals";
import React from "react";
import GoalItem from "./GoalItem";
import { Bar } from "react-chartjs-2";
import BarDiagram from "./BarDiagram";
import { useSelector } from "react-redux";
import { goalCompletion } from "@/lib/redux/features/goalCounter/goalCounterSlice";
import SwipButton from "./SwipButton";

const Goals = () => {
  // const percentage = useSelector(goalCompletion);
  return (
    <>
      <div className="left-0 right-0 flex flex-col mx-2 my-3 space-y-4">
        {goals.map((goal, index) => (
          <GoalItem key={index} goal={goal} />
        ))}
      </div>
      <SwipButton />
      {/* <BarDiagram percentage={percentage}/> */}
    </>
  );
};

export default Goals;
