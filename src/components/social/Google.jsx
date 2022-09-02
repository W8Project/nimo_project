import React from "react";

const Google = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_KEY;

  const googleRedirectUrl = process.env.REACT_APP_GOOGLE_REDIRECT_URI;

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUrl}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email`;

  const loginHandler = () => {
    window.location.href = googleAuthUrl;
  };
  return <button onClick={loginHandler}> 구글로 로그인 </button>;
};

export default Google;
