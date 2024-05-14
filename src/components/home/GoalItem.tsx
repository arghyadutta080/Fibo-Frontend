"use client";

import React, { useEffect, useState } from "react";
import { Goal } from "../../lib/types/goal";
import Image from "next/image";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { addGoal, deleteGoal } from "@/lib/redux/features/goalCounter/goalCounterSlice";
import { set } from "mongoose";

interface Props {
  goal: Goal;
  allState: boolean;
}

const GoalItem: React.FC<Props> = ({ goal, allState }) => {
  const goals = useSelector((state: RootState) => state.counter.goals);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const trackGoal = () => {
    if (checked) {
      console.log(checked, goal.id);
      dispatch(addGoal(goal));
    } else {
      console.log(checked, goal.id);
      dispatch(deleteGoal(goal.id));
    }
  }

  const trackAllGoal = () => {
    if (allState) {
      setChecked(true);
      console.log(allState, goal.id);
    } else {
      setChecked(false);
      console.log(allState, goal.id);
    }
  }

  useEffect(() => {
    trackAllGoal();
  }, [allState]);

  useEffect(() => {
    trackGoal();
  }, [checked]);

  console.log(goals);

  return (
    <div className="bg-[#282828] flex flex-row p-4 justify-between items-center mx-2 rounded-xl">
      <div className="flex flex-row justify-start items-center space-x-4">
        <div className={`bg-[#3D3D3D] rounded-xl text-${goal.icon_color} p-2`}>
          <Image
            src={goal.icon}
            width={50}
            height={50}
            className="h-8 w-8"
            alt="_goal_icon"
          />
        </div>
        <span className="text-white text-base font-medium">{goal.desc}</span>
      </div>
      <input
        className={`h-10 w-10 rounded-xl cursor-pointer`}
        style={{ backgroundColor: `${goal.icon_color}` }}
        type="checkbox"
        checked={checked}
        onClick={() => {
          setChecked(!checked);
        }}
      />
    </div>
  );
};

export default GoalItem;
