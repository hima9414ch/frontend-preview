import React from "react";

import PropertyList from "./PropertyList";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";

const Body = () => {
  return (
    <div>
      <PropertyList />
      <FilterSidebar />
      <Pagination />
    </div>
  );
};

export default Body;
