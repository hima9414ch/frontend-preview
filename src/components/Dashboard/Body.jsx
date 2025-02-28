import React from "react";

import PostForm from "./PostForm";
import PostList from "./PostList";
import PostListItem from "./PostListItem";

const Body = () => {
  return (
    <div>
      <PostForm />
      <PostList />
      <PostListItem />
    </div>
  );
};

export default Body;
