"use client";

import React, { useState } from "react";
import { Goal } from "../lib/types/goal";
import Image from "next/image";
import "./style.css"

interface Props {
    goal: Goal;
    }

const GoalItem: React.FC<Props> = ({goal}) => {
  const [checked, setChecked] = useState(false);
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
        style={{ backgroundColor: `${goal.icon_color}`,  }}
        type="checkbox"
        checked={checked}
        onClick={() => {
          setChecked(!checked);
          console.log(checked, goal.id);
        }}
      />
    </div>
  );
};

export default GoalItem;
