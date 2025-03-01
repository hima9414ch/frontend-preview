import React from "react";

import FilterSidebar from "./FilterSidebar";
import PropertyCardList from "./PropertyCardList";
import PaginationControls from "./PaginationControls";

const Body = () => {
  return (
    <div>
      <FilterSidebar />
      <PropertyCardList />
      <PaginationControls />
    </div>
  );
};

export default Body;
