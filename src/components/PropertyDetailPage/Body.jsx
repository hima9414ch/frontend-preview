import React from "react";

import PropertyImagesCarousel from "./PropertyImagesCarousel";
import PropertyDescription from "./PropertyDescription";
import AmenitiesList from "./AmenitiesList";
import LocationMap from "./LocationMap";
import ContactForm from "./ContactForm";
import PriceDetails from "./PriceDetails";
import MortgageCalculator from "./MortgageCalculator";
import PropertyReviews from "./PropertyReviews";

const Body = () => {
  return (
    <div>
      <PropertyImagesCarousel />
      <PropertyDescription />
      <AmenitiesList />
      <LocationMap />
      <ContactForm />
      <PriceDetails />
      <MortgageCalculator />
      <PropertyReviews />
    </div>
  );
};

export default Body;
