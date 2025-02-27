import React from "react";

import RegistrationForm from "./RegistrationForm";
import SocialMediaSignUp from "./SocialMediaSignUp";
import PrivacyPolicyLink from "./PrivacyPolicyLink";
import TermsOfServiceLink from "./TermsOfServiceLink";
import RegistrationStepsIndicator from "./RegistrationStepsIndicator";
import EmailVerificationPrompt from "./EmailVerificationPrompt";
import ErrorNotification from "./ErrorNotification";

const Body = () => {
  return (
    <div>
      <RegistrationForm />
      <SocialMediaSignUp />
      <PrivacyPolicyLink />
      <TermsOfServiceLink />
      <RegistrationStepsIndicator />
      <EmailVerificationPrompt />
      <ErrorNotification />
    </div>
  );
};

export default Body;
