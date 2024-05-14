'use client';

import { goals } from "@/utils/constants/goals";
import React, { useState } from "react";
import GoalItem from "./GoalItem";
import { Bar } from "react-chartjs-2";
import BarDiagram from "./BarDiagram";
import { useSelector } from "react-redux";
import { goalCompletion } from "@/lib/redux/features/goalCounter/goalCounterSlice";
import SwipButton from "./SwipButton";
import { SwipeableButton } from "react-swipeable-button";

const Goals = () => {
  const [allState, setAllState] = useState<boolean>(false);

  const onSuccess = () => {
    setAllState(!allState);
  };

  return (
    <>
      <div className="left-0 right-0 flex flex-col mx-2 my-3 space-y-4">
        {goals.map((goal, index) => (
          <GoalItem key={index} goal={goal} allState={allState}/>
        ))}
      </div>
      <div className="left-0 right-0 my-10 mx-4 wrapper">
        <SwipeableButton
          onSuccess={onSuccess} //callback function
          text="Swipe to track all" //string
          text_unlocked="All task done!" //string
          color="#ffff" //css hex color
        />
      </div>
      {/* <BarDiagram percentage={percentage}/> */}
    </>
  );
};

export default Goals;
