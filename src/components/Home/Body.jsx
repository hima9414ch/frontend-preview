import React from "react";

import CategoryFilterDropdown from "./CategoryFilterDropdown";
import SearchBar from "./SearchBar";
import PostList from "./PostList";
import PostSnippet from "./PostSnippet";
import ResponsiveImage from "./ResponsiveImage";
import SummaryText from "./SummaryText";
import ReadMoreLink from "./ReadMoreLink";

const Body = () => {
  return (
    <div>
      <CategoryFilterDropdown />
      <SearchBar />
      <PostList />
      <PostSnippet />
      <ResponsiveImage />
      <SummaryText />
      <ReadMoreLink />
    </div>
  );
};

export default Body;
