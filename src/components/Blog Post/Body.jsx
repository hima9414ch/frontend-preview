import React from "react";

import BlogPostDetail from "./BlogPostDetail";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import SocialShareButtons from "./SocialShareButtons";

const Body = () => {
  return (
    <div>
      <BlogPostDetail />
      <CommentList />
      <CommentForm />
      <SocialShareButtons />
    </div>
  );
};

export default Body;
