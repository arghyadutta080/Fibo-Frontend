"use client";

import React from "react";
import "./style.css";
import { goalCompletion } from "@/lib/redux/features/goalCounter/goalCounterSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { goals } from "@/utils/constants/goals";

const TopBar = () => {
  const percentage = useSelector(goalCompletion);
  const goalInReducer = useSelector((state: RootState) => state.counter.goals);
  const totalGoals = goals;
  return (
    <div
      className=" mt-4 mx-4 rounded-2xl grid grid-cols-12 gap-1 items-center justify-evenly min-h-16 py-3 px-2"
      id="topbar"
    >
      {/* circular ring */}
      <div className="col-span-3 flex justify-center px-1">
        <div className=" h-20 min-h-16 w-20 min-w-16 rounded-full circle flex items-center justify-center shadow-lg">
          <div className="m-2 bg-white h-14 min-h-10 w-14 min-w-10 rounded-full flex items-center justify-center shadow-lg">
            <div className="h-9 w-9 min-h-7 min-w-7 rounded-full circle flex items-center justify-center">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* progress */}
      <div className=" col-span-9 flex justify-start px-3">
        <div className="flex flex-col text-white space-y-3 w-full">
          <div className="flex flex-col">
            <span className=" text-base font-medium transition-all duration-300">
              {percentage == 0
                ? "Start Completing your goals"
                : percentage > 0 && percentage < 50
                ? "Good Going. Keep it up ..."
                : percentage >= 50 && percentage < 100
                ? "Your Daily Goal is Almost Done"
                : "Your daily goal is Completed"}
            </span>
            <span className="text-sm">{`${goalInReducer.length} of ${totalGoals.length} completed`}</span>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full bg-[#87BFFE] rounded-full h-1 mb-1">
              <div
                className="bg-white h-1 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <div className="text-end text-sm">{percentage}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
