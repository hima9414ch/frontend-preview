import React from "react";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import PostList from "./PostList";
import PostSummary from "./PostSummary";
import ReadMoreLink from "./ReadMoreLink";
import Sidebar from "./Sidebar";
import PopularPosts from "./PopularPosts";
import AuthorInfo from "./AuthorInfo";

const Body = () => {
  return (
    <div>
      <SearchBar />
      <CategoryFilter />
      <PostList />
      <PostSummary />
      <ReadMoreLink />
      <Sidebar />
      <PopularPosts />
      <AuthorInfo />
    </div>
  );
};

export default Body;
