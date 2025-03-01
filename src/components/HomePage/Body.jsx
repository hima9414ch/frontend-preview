import React from "react";

import PromotionalBanner from "./PromotionalBanner";
import TopSellingProductsCarousel from "./TopSellingProductsCarousel";
import ProductCategoriesList from "./ProductCategoriesList";
import FeaturedProductsGrid from "./FeaturedProductsGrid";
import SearchBar from "./SearchBar";
import NewsletterSignUp from "./NewsletterSignUp";
import DailyDealsSection from "./DailyDealsSection";

const Body = () => {
  return (
    <div>
      <PromotionalBanner />
      <TopSellingProductsCarousel />
      <ProductCategoriesList />
      <FeaturedProductsGrid />
      <SearchBar />
      <NewsletterSignUp />
      <DailyDealsSection />
    </div>
  );
};

export default Body;
