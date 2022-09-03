import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import Main from "../pages/Main";
import KakaoLogin from "../pages/KakaoLogin";
import NaverLogin from "../pages/NaverLogin";
import GoogleLogin from "../pages/GoogleLogin";
import Login from "../pages/Login";
import Test from "../pages/Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/intro" element={<Intro />} />
          <Route path="/main" element={<Main />} />
        </Route>

        {/* 로그인 페이지 */}
        <Route path="/login" element={<Login />}>
          <Route path="/login/kakaoLogin" element={<KakaoLogin />} />
          <Route path="/login/naverLogin" element={<NaverLogin />} />
          <Route path="/login/googleLogin" element={<GoogleLogin />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
