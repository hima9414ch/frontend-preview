import React from "react";

import SearchBar from "./SearchBar";
import FeaturedPropertiesCarousel from "./FeaturedPropertiesCarousel";
import PropertyTeaserCards from "./PropertyTeaserCards";
import QuickLinks from "./QuickLinks";
import MapDisplay from "./MapDisplay";
import PropertiesFilter from "./PropertiesFilter";
import PropertyDetailsModal from "./PropertyDetailsModal";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FeaturedPropertiesCarousel />
      <PropertyTeaserCards />
      <QuickLinks />
      <MapDisplay />
      <PropertiesFilter />
      <PropertyDetailsModal />
    </div>
  );
};

export default Body;
