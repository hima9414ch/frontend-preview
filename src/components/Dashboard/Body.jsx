import React from "react";

import UserProfile from "./UserProfile";
import PostList from "./PostList";
import PostEditorModal from "./PostEditorModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const Body = () => {
  return (
    <div>
      <UserProfile />
      <PostList />
      <PostEditorModal />
      <DeleteConfirmationModal />
    </div>
  );
};

export default Body;
