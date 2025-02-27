import React from "react";

import ProfilePicture from "./ProfilePicture";
import BioSection from "./BioSection";
import ContactInformation from "./ContactInformation";
import SkillsList from "./SkillsList";
import RecentActivityFeed from "./RecentActivityFeed";
import EditProfileButton from "./EditProfileButton";
import PrivacySettings from "./PrivacySettings";

const Body = () => {
  return (
    <div>
      <ProfilePicture />
      <BioSection />
      <ContactInformation />
      <SkillsList />
      <RecentActivityFeed />
      <EditProfileButton />
      <PrivacySettings />
    </div>
  );
};

export default Body;
