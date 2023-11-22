"use client";

import { Link } from "react-scroll";
import React, { useState } from "react";
import Image from "next/image";
import HotelBooking from "@/app/components/hotelBooking/hotelBooking";
import TourBooking from "@/app/components/tourBooking/tourBooking";

const BookingPage = () => {
  const [activeSection, setActiveSection] = useState("hotel");

  const handleSectionChange = (sectionId: React.SetStateAction<string>) => {
    setActiveSection(sectionId);
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="">
          <div className="">
            <div className="">
              <div className="flex mb-4 justify-center">
                <Link
                  to="hotel"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`px-16 ${
                    activeSection === "hotel"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleSectionChange("hotel")}
                >
                  Hotel
                </Link>
                <Link
                  to="tour"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`px-16 ${
                    activeSection === "tour"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleSectionChange("tour")}
                >
                  Tour
                </Link>
              </div>
              <div
                id="hotel"
                style={{
                  display: activeSection === "hotel" ? "block" : "none",
                }}
              >
                {/* ... Description content ... */}
                <HotelBooking />
              </div>
              <div
                id="tour"
                style={{
                  display: activeSection === "tour" ? "block" : "none",
                }}
              >
                <TourBooking />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
