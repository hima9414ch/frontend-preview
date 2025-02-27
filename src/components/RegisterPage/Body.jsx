import React from "react";

import SignUpForm from "./SignUpForm";
import SocialLoginButtons from "./SocialLoginButtons";
import RegistrationSuccessModal from "./RegistrationSuccessModal";

const Body = () => {
  return (
    <div>
      <SignUpForm />
      <SocialLoginButtons />
      <RegistrationSuccessModal />
    </div>
  );
};

export default Body;
