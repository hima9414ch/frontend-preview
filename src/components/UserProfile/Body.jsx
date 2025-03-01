import React from "react";

import UserProfileCard from "./UserProfileCard";
import EditProfileForm from "./EditProfileForm";
import UserInteractionHistory from "./UserInteractionHistory";

const Body = () => {
  return (
    <div>
      <UserProfileCard />
      <EditProfileForm />
      <UserInteractionHistory />
    </div>
  );
};

export default Body;
