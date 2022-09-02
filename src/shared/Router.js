import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/Main';
import KakaoLogin from '../pages/KakaoLogin';
import NaverLogin from '../pages/NaverLogin';
import GoogleLogin from '../pages/GoogleLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Main/>} />
        <Route path="/kakaoLogin" element={<KakaoLogin/>} />
        <Route path="/naverLogin" element={<NaverLogin/>} />
        <Route path="/googleLogin" element={<GoogleLogin/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;