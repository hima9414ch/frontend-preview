import React from "react";

import SearchBar from "./SearchBar";
import FeaturedProperties from "./FeaturedProperties";
import CategoryLinks from "./CategoryLinks";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FeaturedProperties />
      <CategoryLinks />
    </div>
  );
};

export default Body;
