import React from "react";
import Google from "../components/social/Google";
import Kakao from "../components/social/Kakao";
import Naver from "../components/social/Naver";
import BurgerSidebar from "../components/sidebar/BurgerSidebar";
import ProfileSidebar from "../components/sidebar/ProfileSidebar";
import TodoSidebar from "../components/sidebar/TodoSidebar";
import CalendarSidebar from "../components/sidebar/CalendarSidebar";

const Main = () => {
  return (
    <div>
      <Kakao />
      <Naver />
      <Google />
      <TodoSidebar />
      <ProfileSidebar />
      <BurgerSidebar />
      <CalendarSidebar />
    </div>
  );
};

export default Main;
