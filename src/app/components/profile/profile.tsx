"use client";

import { useUserProfileQuery } from "@/redux/api/userApi";
import React from "react";
import EditProfile from "../ui/Modal/EditProfile/EditProfile";
import Loading from "../Loading";
const upcomingTrips = [
  { id: 1, destination: "Paris", date: "2024-12-15" },
  { id: 2, destination: "Tokyo", date: "2025-01-10" },
];

const pastTrips = [
  { id: 1, destination: "Rome", date: "2023-09-20" },
  { id: 2, destination: "New York", date: "2023-07-15" },
];
const ProfilePage = () => {
  const { data: profileData, isLoading } = useUserProfileQuery(undefined);
  console.log(profileData);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="p-4 md:p-8">
          {/* Profile Overview Section */}
          <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              className="w-32 h-32 rounded-full md:w-48 md:h-48 object-cover"
              src={
                profileData?.profileImg ||
                "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
              }
              alt="User Profile"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-bold"> {profileData?.name}</h1>
              <p className="text-gray-600">Traveler | Adventure Seeker</p>
              <p className="mt-2">📧 {profileData?.email}</p>
              <p className="mt-2">📞 {profileData?.contactNo}</p>
              <p className="mt-2">🏡 {profileData?.address}</p>
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg"
              >
                Edit Profile
              </button>
            </div>
          </section>

          {/* Upcoming Trips Section */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Upcoming Trips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {upcomingTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white shadow-lg p-4 rounded-lg"
                >
                  <p className="text-lg font-semibold">{trip.destination}</p>
                  <p className="text-gray-500">Date: {trip.date}</p>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Past Trips Section */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Past Trips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {pastTrips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-white shadow-lg p-4 rounded-lg"
                >
                  <p className="text-lg font-semibold">{trip.destination}</p>
                  <p className="text-gray-500">Date: {trip.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Saved Destinations Section */}
          {/* <section className="mt-10">
            <h2 className="text-2xl font-semibold">Saved Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            
              <div className="bg-white shadow-lg p-4 rounded-lg">
                <p className="text-lg font-semibold">Bali</p>
                <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg">
                  Book Now
                </button>
              </div>
            </div>
          </section> */}

          {/* Reviews Section */}
          <section className="mt-10">
            <h2 className="text-2xl font-semibold">Your Reviews</h2>
            <div className="bg-white shadow-lg p-4 rounded-lg mt-4">
              <p className="text-lg font-semibold">
                Rome - Wonderful Experience!
              </p>
              <p className="text-gray-600">
                "The food and culture were amazing, the guide was very
                professional."
              </p>
            </div>
          </section>

          {/* Account Settings Section */}
          {/* <section className="mt-10">
            <h2 className="text-2xl font-semibold">Account Settings</h2>
            <div className="bg-white shadow-lg p-4 rounded-lg mt-4">
              <button className="bg-gray-500 text-white py-2 px-4 rounded-lg">
                Change Password
              </button>
              <button className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-lg">
                Update Payment Method
              </button>
            </div>
          </section> */}
        </div>
      </div>

      <EditProfile props={profileData} />
    </>
  );
};

export default ProfilePage;
