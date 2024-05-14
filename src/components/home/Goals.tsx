'use client';

import { goals } from "@/utils/constants/goals";
import React, { useState } from "react";
import GoalItem from "./GoalItem";
import { SwipeableButton } from "react-swipeable-button";

const Goals = () => {
  const [allState, setAllState] = useState<boolean>(false);

  const onSuccess = () => {
    setAllState(!allState);
  };

  return (
    <>
    {/* goal components */}
      <div className="left-0 right-0 flex flex-col mx-2 my-3 space-y-4">
        {goals.map((goal, index) => (
          <GoalItem key={index} goal={goal} allState={allState}/>
        ))}
      </div>

      {/* swip button */}
      <div className="left-0 right-0 my-10 mx-4 wrapper">
        <SwipeableButton
          onSuccess={onSuccess}
          text="Swipe to track all" 
          text_unlocked="All task done!"
          color="#ffff" 
        />
      </div>
    </>
  );
};

export default Goals;
