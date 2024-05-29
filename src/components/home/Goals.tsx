"use client";

import { goals } from "@/utils/constants/goals";
import React, { useRef, useState } from "react";
import GoalItem from "./GoalItem";
import Image from "next/image";
import SwipeButton, { SwipeButtonRef } from "./SwipeableButton";


const Goals = () => {
  const [allState, setAllState] = useState<boolean>(false);

  const swipeButtonRef = useRef<SwipeButtonRef>(null);

  const handleSuccess = () => {
    console.log('Button successfully swiped!');
  };

  const handleReset = () => {
    console.log('Button reset in App component');
  };

  return (
    <div className="mx-2 my-3">
      {/* title */}
      <div className="left-0 right-0 flex flex-row justify-between items-center mt-5 pb-3 mx-2">
        <span className="text-white text-lg font-medium">{`${"Today's goal"}`}</span>
        <Image
          src="https://s3-alpha-sig.figma.com/img/210a/8de5/6f295743678d95c92f172e86e2102679?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqaScr0cZULLFRy0Rhb10SJBfTyMah78dAgRkLCntQYtTPPbaXppBnjp-6pO2pcozux3hIpAs0Sz1kLhPS-7L97KnHDk0RJDph-OVM-zYJwZmBPyz5Pjb6~RVNjvuQowImy2T-T4GKCWTGaMdZcX06vOysrW6OwWEALnDO7P5NdT~ffeNF6l2Pk9wE-DlNznoDnrovqnTcWp8AFDg8NN--lbW2srl4WxwOjL2I2nGNSp03VAcRJkQuj0uoFQAY4T2qItw3wHiv2XxXT9nrxJynbWuVpocKQs06YSVYliERKCjPnBM5bia6Lh3ACdLj4rVaN8bAmlW7nIWLlKGnSmTQ__"
          alt="_gif"
          height={50}
          width={54}
          className="h-12 w-14"
          priority={false}
        />
      </div>

      {/* goal components */}
      <div className="left-0 right-0 flex flex-col space-y-4">
        {goals.map((goal, index) => (
          <GoalItem key={index} goal={goal} allState={allState} />
        ))}
      </div>

      {/* swip button */}
      <div className="left-0 right-0 mx-4 wrapper my-4 h-8">
        <SwipeButton
          ref={swipeButtonRef}
          onSuccess={handleSuccess}
          height={50}
          width={300}
          reset={handleReset}
          unLockButtonBackground="#388e3c"
          lockButtonBackground="#ccc"
          unLockedCircleColor="#fff"
          lockedCircleColor="#000"
          text="Swipe this button MF"
          text_unlocked="This button is Swipped"
        />
        <button onClick={() => swipeButtonRef.current?.reset()}>
          Reset Swipe Button
        </button>
      </div>
    </div>
  );
};

export default Goals;
