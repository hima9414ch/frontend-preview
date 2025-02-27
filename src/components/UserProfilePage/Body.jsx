import React from "react";

import SearchBar from "./SearchBar";
import FeaturedPropertiesCarousel from "./FeaturedPropertiesCarousel";
import PropertyThumbnail from "./PropertyThumbnail";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FeaturedPropertiesCarousel />
      <PropertyThumbnail />
    </div>
  );
};

export default Body;
