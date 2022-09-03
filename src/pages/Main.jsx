import styled from "styled-components";
import { ReactComponent as Plus } from "../image/add-button.svg";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTimer } from "../redux/modules/timer";
import { useCounter } from "./CheckIn";
import Header from "../components/common/Header";

const Main = () => {
  // 타이머 기능

  return (
    <MainContainer>
      {/* <h1>
        {currentHours < 10 ? `0${currentHours}` : currentHours} :
        {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
        {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>  */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const PlusIcon = styled(Plus)`
  /* width: 125px; */
  /* height: 125px; */
`;
export default Main;
