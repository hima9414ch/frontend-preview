import React from "react";

import HeroSection from "./HeroSection";
import FeaturedProducts from "./FeaturedProducts";
import Testimonials from "./Testimonials";
import NewsletterSignup from "./NewsletterSignup";
import BlogHighlights from "./BlogHighlights";
import AboutUsBrief from "./AboutUsBrief";
import ContactForm from "./ContactForm";
import ServicesOverview from "./ServicesOverview";

const Body = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <Testimonials />
      <NewsletterSignup />
      <BlogHighlights />
      <AboutUsBrief />
      <ContactForm />
      <ServicesOverview />
    </div>
  );
};

export default Body;
