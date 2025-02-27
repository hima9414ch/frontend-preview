import React from "react";

import PropertyFilterComponent from "./PropertyFilterComponent";
import PropertySortComponent from "./PropertySortComponent";
import PropertyListView from "./PropertyListView";
import PaginationComponent from "./PaginationComponent";

const Body = () => {
  return (
    <div>
      <PropertyFilterComponent />
      <PropertySortComponent />
      <PropertyListView />
      <PaginationComponent />
    </div>
  );
};

export default Body;
