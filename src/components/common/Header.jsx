import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useCounter } from "../../pages/CheckIn";
import Main from "../../pages/Main";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo>Logo</HeaderLogo>
      </HeaderLogoContainer>
      <HeaderTimerContainer>
        <HeaderTimer></HeaderTimer>
        {/* <CheckIn /> */}
      </HeaderTimerContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: #28293a;
  padding: 0px 56px;
`;

const HeaderLogoContainer = styled.div`
  display: flex;
`;

const HeaderLogo = styled.span`
  font-weight: 700;
  font-size: 32px;
  width: 118px;
  height: 47px;
  color: #fff;
`;

const HeaderLoginContainer = styled.div`
  display: flex;
`;

const HeaderLoginButton = styled.button`
  border: 2px solid blue;
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
  margin-right: 10px;
`;

const HeaderSigninButton = styled.button`
  border: 2px solid blue;
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const HeaderTimerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HeaderTimer = styled.span`
  color: #fff;
  font-size: 32px;
`;

export default Header;
