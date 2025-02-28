import React from "react";

import SearchBar from "./SearchBar";
import FeaturedPropertiesSection from "./FeaturedPropertiesSection";
import RecentPropertiesList from "./RecentPropertiesList";
import PropertyTypeFilter from "./PropertyTypeFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import LocationFilter from "./LocationFilter";
import CallToActionSection from "./CallToActionSection";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FeaturedPropertiesSection />
      <RecentPropertiesList />
      <PropertyTypeFilter />
      <PriceRangeFilter />
      <LocationFilter />
      <CallToActionSection />
    </div>
  );
};

export default Body;
