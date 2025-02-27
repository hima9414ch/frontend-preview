import React from "react";

import SearchBar from "./SearchBar";
import FiltersSidebar from "./FiltersSidebar";
import ItemList from "./ItemList";
import Pagination from "./Pagination";
import SortDropdown from "./SortDropdown";
import MapViewToggle from "./MapViewToggle";
import Breadcrumbs from "./Breadcrumbs";
import AdBanner from "./AdBanner";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <FiltersSidebar />
      <ItemList />
      <Pagination />
      <SortDropdown />
      <MapViewToggle />
      <Breadcrumbs />
      <AdBanner />
    </div>
  );
};

export default Body;
