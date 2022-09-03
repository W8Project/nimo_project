import React from "react";
import { useEffect } from "react";
import axios from "axios";

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakao = async () => {
      return await axios
        .get(`http://43.200.115.252/api/v1/members/kakaoLogin?code=${code}`)
        .then((res) => console.log(res));
      //     .then(() => {
      //       navigate("/projectList");
      //     })
      //     .catch(() => {
      //       navigate("/");
      //     });
    };
    if (code) {
      kakao(code);
    }
  }, [
    code,
    // navigate
  ]);

  return <div>로딩페이지컴포넌트</div>;
};

export default KakaoLogin;
