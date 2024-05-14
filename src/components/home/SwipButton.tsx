import React from 'react'
import { SwipeableButton } from "react-swipeable-button";

const SwipButton = () => {
    const onSuccess = () => {
      console.log("Successfully Swiped!");
    };
  return (
    <div className="left-0 right-0 my-10 mx-4 wrapper" >
      <SwipeableButton
        onSuccess={onSuccess} //callback function
        text="Swipe to track all" //string
        text_unlocked="All task done!" //string
        color="#ffff" //css hex color
        
      />
    </div>
  );
}

export default SwipButton