import React from "react";

import LoginForm from "./LoginForm";
import SocialLoginButtons from "./SocialLoginButtons";
import PasswordResetLink from "./PasswordResetLink";
import SignUpLink from "./SignUpLink";
import RememberMeCheckbox from "./RememberMeCheckbox";
import LoginButton from "./LoginButton";
import CaptchaVerification from "./CaptchaVerification";

const Body = () => {
  return (
    <div>
      <LoginForm />
      <SocialLoginButtons />
      <PasswordResetLink />
      <SignUpLink />
      <RememberMeCheckbox />
      <LoginButton />
      <CaptchaVerification />
    </div>
  );
};

export default Body;
