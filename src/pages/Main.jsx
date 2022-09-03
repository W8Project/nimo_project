import React from "react";
import styled from "styled-components";
import { ReactComponent as Plus } from "../image/add-button.svg";

const Main = () => {
  return (
    <MainContainer>
      <PlusIcon />
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
