import React from "react";

import LoginForm from "./LoginForm";
import PasswordRecoveryLink from "./PasswordRecoveryLink";
import RegistrationLink from "./RegistrationLink";

const Body = () => {
  return (
    <div>
      <LoginForm />
      <PasswordRecoveryLink />
      <RegistrationLink />
    </div>
  );
};

export default Body;
