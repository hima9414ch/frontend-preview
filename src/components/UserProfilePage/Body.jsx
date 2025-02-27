import React from "react";

import ProfileDetailsCard from "./ProfileDetailsCard";
import ActivityFeed from "./ActivityFeed";
import SettingsMenu from "./SettingsMenu";

const Body = () => {
  return (
    <div>
      <ProfileDetailsCard />
      <ActivityFeed />
      <SettingsMenu />
    </div>
  );
};

export default Body;
