import React from "react";

import PropertyDetailComponent from "./PropertyDetailComponent";
import ImageGalleryComponent from "./ImageGalleryComponent";
import ContactFormComponent from "./ContactFormComponent";
import PropertyFeaturesComponent from "./PropertyFeaturesComponent";

const Body = () => {
  return (
    <div>
      <PropertyDetailComponent />
      <ImageGalleryComponent />
      <ContactFormComponent />
      <PropertyFeaturesComponent />
    </div>
  );
};

export default Body;
