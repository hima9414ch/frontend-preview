import React from "react";

import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import PaginationControls from "./PaginationControls";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <ProductList />
      <PaginationControls />
    </div>
  );
};

export default Body;
