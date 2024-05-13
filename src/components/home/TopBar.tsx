import React from "react";
import "./style.css";


const TopBar = () => {
  return (
    <div
      className="absolute mt-4 mx-4 left-0 right-0 rounded-2xl top-0 flex flex-row items-center space-x-2 justify-evenly min-h-16 py-2 px-2"
      id="topbar"
    >
      {/* circular ring */}
      <div className=" h-20 min-h-16 w-20 min-w-16 rounded-full circle flex items-center justify-center shadow-lg">
        <div className="m-2 bg-white h-14 min-h-10 w-14 min-w-10 rounded-full flex items-center justify-center shadow-lg">
          <div className="h-9 w-9 min-h-7 min-w-7 rounded-full circle flex items-center justify-center">
            <div className="h-3 w-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* progress */}
      <div className="flex flex-col text-white space-y-3 max-w-[80%] mr-3">
        <div className="flex flex-col">
          <span className=" text-base font-medium">
            Your Daily Goal Almost Done
          </span>
          <span className="text-sm">4 of 5 completed</span>
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full bg-[#87BFFE] rounded-full h-1 mb-1">
            <div
              className="bg-white h-1 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="text-end text-sm">45%</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
