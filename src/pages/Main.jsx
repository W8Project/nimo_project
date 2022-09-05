import styled from "styled-components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getCheckInTimer, __getCheckOutTimer } from "../redux/modules/timer";
import { useCounter } from "./CheckIn";

const Main = () => {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.timer.timeWatch);
  // const hh = useSelector((state) => state.timer.hh);
  // const mm = useSelector((state) => state.timer.mm);
  // const ss = useSelector((state) => state.timer.ss);

  console.log(time);

  const { checkIn, count, start, stop } = useCounter(time, 1000);
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes % 60;
    const seconds = count % 60;

    console.log(count);
    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  };
  useEffect(() => {
    dispatch(__getCheckOutTimer());
    dispatch(__getCheckInTimer());
  }, []);

  // console.log(Timer);

  const clickStart = () => {
    dispatch(__getCheckInTimer());
    start();
  };

  const clickStop = () => {
    dispatch(__getCheckOutTimer());
    stop();
  };

  // count의 변화에 따라 timer 함수 렌더링
  useEffect(timer, [count]);

  return (
    <MainContainer>
      <>
        {time}
        <h1>
          {currentHours < 10 ? `0${currentHours}` : currentHours} :
          {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
          {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
        </h1>
        <button onClick={clickStart}>Start</button>
        <button onClick={clickStop}>Stop</button>
      </>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

export default Main;
