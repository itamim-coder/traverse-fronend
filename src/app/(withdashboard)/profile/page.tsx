import ProfilePage from "@/app/components/profile/profile";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "PROFILE | TRAVERSE",
  description: "Profile Page",
};

const Profile = () => {
  return (
    <>
      <ProfilePage />
    </>
  );
};

export default Profile;
