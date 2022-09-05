import React from "react";
import styled, { keyframes } from "styled-components";
import NimoTail from "../image/nimo/NimoTail.svg";
import NimoBody from "../image/nimo/NimoBody.svg";
import NimoHand from "../image/nimo/NimoHand.svg";
import NimoHand2 from "../image/nimo/NimoHand2.svg";
import HeadFish from "../components/fish/HeadFish";

const Test = () => {
  return (
    <>
      <Nimo>
        <Tail src={NimoTail} />
        <Body src={NimoBody} />
        <Hand src={NimoHand} />
        <Hand2 src={NimoHand2} />
      </Nimo>
      <HeadFish />
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

const Nimo = styled.div`
  position: absolute;
  width: 20%;
  height: 20%;
  border: solid blue 1px;
  &:active {
    img:first-child {
      animation: ${animation} 0.4s ease-in-out infinite;
    }
    img {
      animation: ${animation2} 0.3s ease-in-out infinite;
    }
    img:last-child {
      animation: ${animation3} 0.3s ease-in-out infinite;
    }
  }
  img {
    width: 100%;
    position: absolute;
  }
`;
const Tail = styled.img`
  transform-origin: 40% 50%;
  animation: ${animation} 1.5s ease-in-out infinite;
`;

const Body = styled.img`
  animation: ${animation2} 1s linear infinite;
`;

const Hand = styled.img`
  animation: ${animation2} 1s linear infinite;
`;

const Hand2 = styled.img`
  transform-origin: 60% 50%;
  animation: ${animation3} 1.5s ease-in-out infinite;
`;
