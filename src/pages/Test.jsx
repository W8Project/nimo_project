import React from "react";
import styled, { keyframes } from "styled-components";
import NimoTail from "../image/nimo/NimoTail.svg";
import NimoBody from "../image/nimo/NimoBody.svg";
import NimoHand from "../image/nimo/NimoHand.svg";
import NimoHand2 from "../image/nimo/NimoHand2.svg";

const Test = () => {
  return (
    <>
      <NimoContainer>
        <Nimo>
          <Tail src={NimoTail} />
          <Body src={NimoBody} />
          <Hand src={NimoHand} />
          <Hand2 src={NimoHand2} />
        </Nimo>

        <Nimo2>
          <Tail src={NimoTail} />
          <Body src={NimoBody} />
          <Hand src={NimoHand} />
          <Hand2 src={NimoHand2} />
        </Nimo2>

        <Nimo3>
          <Tail src={NimoTail} />
          <Body src={NimoBody} />
          <Hand src={NimoHand} />
          <Hand2 src={NimoHand2} />
        </Nimo3>

        <Nimo4>
          <Tail src={NimoTail} />
          <Body src={NimoBody} />
          <Hand src={NimoHand} />
          <Hand2 src={NimoHand2} />
        </Nimo4>
      </NimoContainer>
    </>
  );
};

export default Test;

const animation = keyframes`
  0% {
    transform:rotate(15deg) ;
  }
  50% {
    transform:rotate(-15deg);
  }
  100%{
    transform:rotate(15deg);
  }
`;
const animation2 = keyframes`
  0% {
    transform:rotate(5deg) ;
  }
  50% {
    transform:rotate(-5deg);
  }
  100%{
    transform:rotate(5deg);
  }
`;
const animation3 = keyframes`
  0% {
    transform:rotate(-5deg) ;
  }
  50% {
    transform:rotate(5deg);
  }
  100%{
    transform:rotate(-5deg);
  }
`;

const nimo1 = keyframes`
  0% {
    transform: rotate(30deg) translate(-50%);
    opacity: 0;
    
  }
  100% {
    transform: rotate(30deg) translate(250%);
  }
`;

const nimo2 = keyframes`
  0% {
    transform: scaleX(-1) rotate(30deg) translate(-50%);
    opacity: 0;
    
  }
  100% {
    transform: scaleX(-1) rotate(30deg) translate(250%);
  }
`;

const nimo3 = keyframes`
  0% {
    transform: scaleX(-1) rotate(-20deg) translate(-80%);
    opacity: 0;
    
  }
  100% {
    transform: scaleX(-1) rotate(-20deg) translate(200%);
  }
`;

const nimo4 = keyframes`
  0% {
    transform:  rotate(-20deg) translate(-70%);
    opacity: 0;
    
  }
  100% {
    transform:  rotate(-20deg) translate(200%);
  }
`;

const NimoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Nimo = styled.div`
  position: absolute;
  left: 0;
  width: 15%;
  border: solid blue 1px;
  animation: ${nimo1} 2.5s ease-in-out forwards;
  img {
    border: solid red 1px;
    position: absolute;
  }
`;

const Nimo2 = styled.div`
  position: absolute;
  right: 0;
  width: 15%;
  border: solid blue 4px;
  animation: ${nimo2} 3.5s ease-in-out forwards;
  img {
    border: solid red 1px;
    position: absolute;
  }
`;

const Nimo3 = styled.div`
  position: absolute;
  top: 600px;
  right: 0;
  width: 15%;
  border: solid blue 1px;
  animation: ${nimo3} 3s ease-in-out forwards;
  img {
    border: solid red 1px;
    position: absolute;
  }
`;

const Nimo4 = styled.div`
  position: absolute;
  left: 0;
  top: 600px;
  width: 15%;
  border: solid blue 1px;
  animation: ${nimo4} 2s ease-in-out forwards;
  img {
    border: solid red 1px;
    position: absolute;
  }
`;
const Tail = styled.img`
  transform-origin: 40% 50%;
  animation: ${animation} 1.5s ease-in-out infinite;
  width: 100%;
`;

const Body = styled.img`
  animation: ${animation2} 1s linear infinite;
  width: 100%;
`;

const Hand = styled.img`
  animation: ${animation2} 1s linear infinite;
  width: 100%;
`;

const Hand2 = styled.img`
  transform-origin: 60% 50%;
  animation: ${animation3} 1.5s ease-in-out infinite;
  width: 100%;
`;
