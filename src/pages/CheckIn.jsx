import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { __getCheckInTimer } from "../redux/modules/timer";

// 사용자 정의 hook
export const useCounter = (initialValue, ms) => {
  const time = useSelector((state) => state.timer.timeWatch);
  const hh = useSelector((state) => state.timer.hh);
  const mm = useSelector((state) => state.timer.mm);
  const ss = useSelector((state) => state.timer.ss);

  const [checkIn, setCheckIn] = useState(time);
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  console.log(time);

  const start = useCallback(() => {
    if (intervalRef.current != null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, ms);
  }, []);

  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  // console.log(checkIn);

  return { checkIn, count, start, stop };
};
