import React from "react";
import { useEffect } from "react";
import axios from "axios";

const NaverLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const state = new URL(window.location.href).searchParams.get("state");
  console.log(code);
  console.log(state);
  // useEffect(() => {
  //   const naver = async () => {
  //     return await axios.get(
  //       `http://43.200.115.252/user/kakao/callback?code=${code}`
  //     )
  //     // .then(() => {
  //     //   navigate("/projectList");
  //     // })
  //     // .catch(() => {
  //     //   navigate("/");
  //     // });
  //   };
  //   if (code) {
  //     naver(code);
  //   }
  // }, [
  //   code,
  //   // navigate
  // ]);
  return <div>로딩페이지컴포넌트</div>;
};

export default NaverLogin;
