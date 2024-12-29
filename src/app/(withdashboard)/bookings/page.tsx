"use client";

import { Link } from "react-scroll";
import React, { useState } from "react";
import HotelBooking from "@/app/components/hotelBooking/hotelBooking";
import TourBooking from "@/app/components/tourBooking/tourBooking";
import { LiaHotelSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";

const BookingPage = () => {
  const [activeSection, setActiveSection] = useState("hotel");

  const handleSectionChange = (sectionId: React.SetStateAction<string>) => {
    setActiveSection(sectionId);
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="flex flex-col items-center">
        {/* Navigation Links */}
        <div className="flex mb-4 justify-center space-x-8">
          <Link
            to="hotel"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer flex items-center px-16 py-2 text-lg font-semibold ${
              activeSection === "hotel" ? "text-main" : ""
            }`}
            onClick={() => handleSectionChange("hotel")}
          >
            <LiaHotelSolid className="mr-2" />
            Hotel
          </Link>

          <Link
            to="tour"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer flex items-center px-16 py-2 text-lg font-semibold ${
              activeSection === "tour" ? "text-main" : ""
            }`}
            onClick={() => handleSectionChange("tour")}
          >
            <SlLocationPin className="mr-2" />
            Tour
          </Link>
        </div>

        {/* Hotel Section */}
        <div
          id="hotel"
          style={{
            display: activeSection === "hotel" ? "block" : "none",
          }}
        >
          <HotelBooking />
        </div>

        {/* Tour Section */}
        <div
          id="tour"
          style={{
            display: activeSection === "tour" ? "block" : "none",
          }}
        >
          <TourBooking />
        </div>
      </div>
    </section>
  );
};

export default BookingPage;
