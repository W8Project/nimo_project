import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getTimer } from "../redux/modules/timer";

// 사용자 정의 hook
export const useCounter = (initialValue, ms) => {
  // const timer = useSelector((state) => state);
  const [count, setCount] = useState(initialValue);
  const dispatch = useDispatch();
  const intervalRef = useRef(null);
  const start = useCallback(() => {
    if (intervalRef.current != null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, ms);
    dispatch(__getTimer);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  return { count, start, stop };
};

// 타이머 기능
// const timer = () => {
//   // 시, 분, 초를 state로 저장
//   const [currentHours, setCurrentHours] = useState(0);
//   const [currentMinutes, setCurrentMinutes] = useState(0);
//   const [currentSeconds, setCurrentSeconds] = useState(0);
//   const { count, start, stop } = useCounter(0, 1000);

//   const checkMinutes = Math.floor(count / 60);
//   const hours = Math.floor(count / 3600);
//   const minutes = checkMinutes % 60;
//   const seconds = count % 60;

//   setCurrentHours(hours);
//   setCurrentMinutes(minutes);
//   setCurrentSeconds(seconds);

//   // count의 변화에 따라 timer 함수 렌더링
//   useEffect(timer, [count]);

//   return (
//     <>
//       <h1>
//         {currentHours < 10 ? `0${currentHours}` : currentHours} :
//         {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
//         {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
//       </h1>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </>
//   );
// };
