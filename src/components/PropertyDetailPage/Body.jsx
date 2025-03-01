import React from "react";

import PropertyPhotoGallery from "./PropertyPhotoGallery";
import PropertyDetails from "./PropertyDetails";
import BookingOrInquiryForm from "./BookingOrInquiryForm";

const Body = () => {
  return (
    <div>
      <PropertyPhotoGallery />
      <PropertyDetails />
      <BookingOrInquiryForm />
    </div>
  );
};

export default Body;
