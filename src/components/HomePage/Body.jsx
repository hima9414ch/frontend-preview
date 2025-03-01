import React from "react";

import WelcomingBanner from "./WelcomingBanner";
import SearchBar from "./SearchBar";
import FeaturedPropertiesShowcase from "./FeaturedPropertiesShowcase";
import UserTestimonials from "./UserTestimonials";
import LatestNews from "./LatestNews";
import ContactForm from "./ContactForm";
import CallToAction from "./CallToAction";

const Body = () => {
  return (
    <div>
      <WelcomingBanner />
      <SearchBar />
      <FeaturedPropertiesShowcase />
      <UserTestimonials />
      <LatestNews />
      <ContactForm />
      <CallToAction />
    </div>
  );
};

export default Body;
