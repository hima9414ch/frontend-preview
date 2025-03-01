import React from "react";

import LoginForm from "./LoginForm";
import PasswordVisibilityToggle from "./PasswordVisibilityToggle";
import PasswordRecoveryLink from "./PasswordRecoveryLink";
import RegistrationRedirectLink from "./RegistrationRedirectLink";

const Body = () => {
  return (
    <div>
      <LoginForm />
      <PasswordVisibilityToggle />
      <PasswordRecoveryLink />
      <RegistrationRedirectLink />
    </div>
  );
};

export default Body;
