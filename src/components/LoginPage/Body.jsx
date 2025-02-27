import React from "react";

import LoginForm from "./LoginForm";
import SocialLoginButtons from "./SocialLoginButtons";
import PasswordRecoveryLink from "./PasswordRecoveryLink";

const Body = () => {
  return (
    <div>
      <LoginForm />
      <SocialLoginButtons />
      <PasswordRecoveryLink />
    </div>
  );
};

export default Body;
