import React from "react";

import SearchBar from "./SearchBar";
import FeaturedPropertiesCarousel from "./FeaturedPropertiesCarousel";
import QuickSearchFilters from "./QuickSearchFilters";
import LatestPropertiesSection from "./LatestPropertiesSection";
import MapIntegrationForProperties from "./MapIntegrationForProperties";
import UserTestimonialsCarousel from "./UserTestimonialsCarousel";
import ContactForm from "./ContactForm";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FeaturedPropertiesCarousel />
      <QuickSearchFilters />
      <LatestPropertiesSection />
      <MapIntegrationForProperties />
      <UserTestimonialsCarousel />
      <ContactForm />
    </div>
  );
};

export default Body;
