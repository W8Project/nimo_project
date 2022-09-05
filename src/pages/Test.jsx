import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NimoTail from "../image/nimo/NimoTail.svg";
import NimoBody from "../image/nimo/NimoBody.svg";
import NimoHand from "../image/nimo/NimoHand.svg";
import NimoHand2 from "../image/nimo/NimoHand2.svg";

const Test = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const startAnimtaionBtn = () => {
    setStartAnimation(!startAnimation);
  };
  console.log(startAnimation);
  return (
    <>
      <NimoContainer>
        <NimoWrapper>
          <h1>한국에서'도마도'로 호칭되기도 했으며</h1>
          {startAnimation && (
            <>
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
            </>
          )}

          <StartButtonContainer>
            {startAnimation && (
              <BubbleContainer>
                <div className="colorA" />
                <div className="colorC" />
                <div className="colorB" />
                <div className="colorA" />
                <div className="colorA" />
                <div className="colorB" />
                <div className="colorC" />
                <div className="colorA" />
                <div className="colorC" />
                <div className="colorA" />
                <div className="colorB" />
              </BubbleContainer>
            )}
            <StartButton onClick={startAnimtaionBtn}>시작하기</StartButton>
          </StartButtonContainer>
        </NimoWrapper>
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
    transform: rotate(32deg) translate(-100vw);
    opacity: 0;
    
  }
  100% {
    transform: rotate(32deg) translate(45vw);
  }
`;

const nimo2 = keyframes`
  0% {
    transform: scaleX(-1) rotate(32deg) translate(-100vw);
    opacity: 0;
    
  }
  100% {
    position: absolute;
    transform: scaleX(-1) rotate(32deg) translate(45vw);
  }
`;

const nimo3 = keyframes`
  0% {
    transform: scaleX(-1) rotate(-22deg) translate(-100vw);
    opacity: 0;
    
  }
  100% {
    transform: scaleX(-1) rotate(-22deg) translate(38vw);
  }
`;

const nimo4 = keyframes`
  0% {
    transform:  rotate(-22deg) translate(-100vw);
    opacity: 0;
    
  }
  100% {
    transform:  rotate(-22deg) translate(38vw);
  }
`;

const NimoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 4px solid red;
  background-color: aliceblue;
`;

const NimoWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StartButtonContainer = styled.div`
  display: flex;
  margin-top: 10%;
  position: relative;
`;

const bubble = keyframes`
  0% {
    display:none;
    opacity: 0;
    
  }
  100% {
    display:flex;
    opacity: 1;
  }
`;

const StartButton = styled.button`
  width: 200px;
  height: 70px;
  border: none;
  color: white;
  border-radius: 9999px;
  cursor: pointer;
  background-color: #fdde83;
`;

const BubbleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  .colorA {
    background-color: #f8a456;
  }
  .colorB {
    background-color: #fcc17c;
  }
  .colorC {
    background-color: #ffb26c;
  }
  div {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 9999px;
    &:nth-child(1) {
      margin: 10px 20px 30px 40px;
      animation-delay: 4.1s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(2) {
      margin: -20px 0px 20px 0px;
      animation-delay: 4.5s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(3) {
      margin: -30px 0px 20px 80px;
      animation-delay: 4.2s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(4) {
      margin: -20px 0px 0px 30px;
      animation-delay: 4.1s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(5) {
      margin: -10px 0px 20px 80px;
      animation-delay: 4.6s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(6) {
      margin: 20px 0px 0px 140px;
      animation-delay: 4s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(7) {
      margin: 20px 0px 0px 90px;
      animation-delay: 4.4s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(8) {
      margin: -20px 0px 20px 130px;
      animation-delay: 4.7s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(9) {
      margin: 0px 0px 0px 135px;
      animation-delay: 4.8s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(10) {
      margin: 20px 0px 0px -20px;
      animation-delay: 4.2s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
    &:nth-child(11) {
      margin: 15px 0px 0px 20px;
      animation-delay: 4.2s;
      animation-duration: 0.5s;
      animation-name: ${bubble};
      animation-timing-function: ease-in;
      animation-fill-mode: backwards;
    }
  }
`;

const Nimo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 150px;
  animation: ${nimo1} 2.5s ease-in-out forwards;
  img {
    position: absolute;
  }
`;

const Nimo2 = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 150px;
  animation: ${nimo2} 3.5s ease-in-out forwards;
  img {
    position: absolute;
  }
`;

const Nimo3 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 150px;

  animation: ${nimo3} 3s ease-in-out forwards;
  img {
    position: absolute;
  }
`;

const Nimo4 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;

  animation: ${nimo4} 2s ease-in-out forwards;
  img {
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
