import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  FC,
} from "react";
import styled from "styled-components";

interface SwipeButtonProps {
  onSuccess?: () => void;
  text?: string;
  text_unlocked?: string;
  height?: number;
  width?: number;
  unLockButtonBackground?: string;
  lockButtonBackground?: string;
  unLockedCircleColor?: string;
  lockedCircleColor?: string;
  reset?: () => void;
}

export interface SwipeButtonRef {
  reset: () => void;
}

const Container = styled.div<{
  unlocked: boolean;
  width: number;
  height: number;
  unLockButtonBackground: string;
  lockButtonBackground: string;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ height }) => height / 2}px;
  background-color: ${({
    unlocked,
    unLockButtonBackground,
    lockButtonBackground,
  }) => (unlocked ? unLockButtonBackground : lockButtonBackground)};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: background-color 0.3s ease;
`;

const Circle = styled.div<{
  left: number;
  unlocked: boolean;
  circleColor: string;
}>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ circleColor }) => circleColor};
  position: absolute;
  left: ${({ left }) => left}px;
  top: 0;
  transition: left 0.3s ease;
`;

const Text = styled.span<{ unlocked: boolean; textColor: string }>`
  font-size: 16px;
  color: ${({ textColor }) => textColor};
  z-index: 1;
  transition: color 0.3s ease;
`;

const SwipeButton = forwardRef<SwipeButtonRef, SwipeButtonProps>(
  (
    {
      onSuccess,
      text = "Swipe me",
      text_unlocked = "The button is swiped",
      height = 50,
      width = 300,
      unLockButtonBackground = "#4caf50",
      lockButtonBackground = "#ccc",
      unLockedCircleColor = "#fff",
      lockedCircleColor = "#000",
      reset: resetProp,
    },
    ref
  ) => {
    const [unlocked, setUnlocked] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [left, setLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const startX = useRef(0);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
      setIsTouchDevice("ontouchstart" in document.documentElement);

      const handleDrag = (e: MouseEvent | TouchEvent) => {
        if (unlocked || !isDragging) return;
        const clientX = isTouchDevice
          ? (e as TouchEvent).touches[0].clientX
          : (e as MouseEvent).clientX;
        const newLeft = Math.min(
          Math.max(0, clientX - startX.current),
          containerRef.current!.clientWidth - 50
        );
        setLeft(newLeft);
      };

      const stopDrag = () => {
        if (unlocked || !isDragging) return;
        setIsDragging(false);
        if (left > containerRef.current!.clientWidth * 0.75) {
          setLeft(containerRef.current!.clientWidth - 50);
          if (onSuccess) {
            onSuccess();
          }
          setUnlocked(true);
        } else {
          setLeft(0);
        }
      };

      if (isTouchDevice) {
        document.addEventListener("touchmove", handleDrag);
        document.addEventListener("touchend", stopDrag);
      } else {
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", stopDrag);
      }

      return () => {
        if (isTouchDevice) {
          document.removeEventListener("touchmove", handleDrag);
          document.removeEventListener("touchend", stopDrag);
        } else {
          document.removeEventListener("mousemove", handleDrag);
          document.removeEventListener("mouseup", stopDrag);
        }
      };
    }, [isDragging, left, unlocked, onSuccess, isTouchDevice]);

    const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
      if (unlocked) return;
      setIsDragging(true);
      startX.current = isTouchDevice
        ? (e as React.TouchEvent).touches[0].clientX
        : (e as React.MouseEvent).clientX;
    };

    const reset = () => {
      setUnlocked(false);
      setLeft(0);
      if (resetProp) {
        resetProp();
      }
    };

    useImperativeHandle(ref, () => ({
      reset,
    }));

    return (
      <Container
        ref={containerRef}
        unlocked={unlocked}
        width={width}
        height={height}
        unLockButtonBackground={unLockButtonBackground}
        lockButtonBackground={lockButtonBackground}
      >
        <Circle
          ref={sliderRef}
          left={left}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          unlocked={unlocked}
          circleColor={unlocked ? unLockedCircleColor : lockedCircleColor}
        />
        <Text unlocked={unlocked} textColor={unlocked ? "#fff" : "#000"}>
          {unlocked ? text_unlocked : text}
        </Text>
      </Container>
    );
  }
);

export default SwipeButton;
