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
