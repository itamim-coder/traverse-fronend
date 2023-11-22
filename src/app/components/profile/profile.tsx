"use client";

import { useUserProfileQuery } from "@/redux/api/userApi";
import React from "react";

const ProfilePage = () => {
  const { data: profileData } = useUserProfileQuery(undefined);
  console.log(profileData);
  return (
    <>
      <div>
        <div className="flex items-center" >
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
              alt=""
              className="h-52 w-64 rounded-full object-cover"
            />
          </div>
          <div>
            <p>Name  : {profileData?.name}</p>
            <p>Email : {profileData?.email}</p>
            <p>Contact No : {profileData?.contactNo}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
