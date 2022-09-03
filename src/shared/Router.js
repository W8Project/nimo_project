import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Intro from "../pages/Intro";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/intro" element={<Intro />} />
          <Route path="/main" element={<Main />} />
        </Route>
        {/* <Route element={Main} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
