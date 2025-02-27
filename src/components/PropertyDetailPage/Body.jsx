import React from "react";

import PropertyGallery from "./PropertyGallery";
import PropertyDescription from "./PropertyDescription";
import ContactAgentForm from "./ContactAgentForm";

const Body = () => {
  return (
    <div>
      <PropertyGallery />
      <PropertyDescription />
      <ContactAgentForm />
    </div>
  );
};

export default Body;
