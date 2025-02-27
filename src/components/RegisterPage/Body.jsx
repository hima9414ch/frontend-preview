import React from "react";

import RegistrationForm from "./RegistrationForm";
import InputValidation from "./InputValidation";
import SubmitButton from "./SubmitButton";
import SuccessMessageDisplay from "./SuccessMessageDisplay";

const Body = () => {
  return (
    <div>
      <RegistrationForm />
      <InputValidation />
      <SubmitButton />
      <SuccessMessageDisplay />
    </div>
  );
};

export default Body;
