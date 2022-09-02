import React from "react";
import { useEffect } from "react";
import axios from "axios";

const GoogleLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  // useEffect(() => {
  //   const google = async () => {
  //     return await axios.get(
  //       `http://43.200.115.252/user/kakao/callback?code=${code}`
  //     );
  //     // .then(() => {
  //     //   navigate("/projectList");
  //     // })
  //     // .catch(() => {
  //     //   navigate("/");
  //     // });
  //   };
  //   if (code) {
  //     google(code);
  //   }
  // }, [
  //   code,
  //   // navigate
  // ]);
  return <div>로딩페이지컴포넌트</div>;
};

export default GoogleLogin;
