import React from "react";

import BlogPostDetail from "./BlogPostDetail";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import SocialShareButtons from "./SocialShareButtons";

const Body = () => {
  return (
    <div>
      <BlogPostDetail />
      <CommentForm />
      <CommentList />
      <SocialShareButtons />
    </div>
  );
};

export default Body;
