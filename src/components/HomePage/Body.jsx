import React from "react";

import HeroBanner from "./HeroBanner";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import NewsletterSignup from "./NewsletterSignup";
import BlogHighlights from "./BlogHighlights";
import AboutUsBrief from "./AboutUsBrief";
import ContactForm from "./ContactForm";

const Body = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturedProducts />
      <Testimonials />
      <NewsletterSignup />
      <BlogHighlights />
      <AboutUsBrief />
      <ContactForm />
    </div>
  );
};

export default Body;
