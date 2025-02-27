import React from "react";

import HeroBanner from "./HeroBanner";
import ServiceHighlights from "./ServiceHighlights";
import Testimonials from "./Testimonials";

const Body = () => {
  return (
    <div>
      <HeroBanner />
      <ServiceHighlights />
      <Testimonials />
    </div>
  );
};

export default Body;
