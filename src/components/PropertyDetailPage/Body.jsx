import React from "react";

import PropertyGallery from "./PropertyGallery";
import PropertyPrice from "./PropertyPrice";
import PropertyDescription from "./PropertyDescription";
import UserReviews from "./UserReviews";

const Body = () => {
  return (
    <div>
      <PropertyGallery />
      <PropertyPrice />
      <PropertyDescription />
      <UserReviews />
    </div>
  );
};

export default Body;
