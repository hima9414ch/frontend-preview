import React from "react";

import PropertyGallery from "./PropertyGallery";
import VirtualTour from "./VirtualTour";
import PropertyDetailsCard from "./PropertyDetailsCard";
import LocationMapInteractive from "./LocationMapInteractive";

const Body = () => {
  return (
    <div>
      <PropertyGallery />
      <VirtualTour />
      <PropertyDetailsCard />
      <LocationMapInteractive />
    </div>
  );
};

export default Body;
