import React from "react";

import UserProfileForm from "./UserProfileForm";
import UserListings from "./UserListings";
import FavoritesList from "./FavoritesList";
import EditProfileButton from "./EditProfileButton";

const Body = () => {
  return (
    <div>
      <UserProfileForm />
      <UserListings />
      <FavoritesList />
      <EditProfileButton />
    </div>
  );
};

export default Body;
