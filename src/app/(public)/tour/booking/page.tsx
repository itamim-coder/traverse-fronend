"use client";

import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const TourBooking = () => {
  const router = useRouter();
  const { dates, days, selectedRooms, totalAmount, options, roomInfo } =
    useAppSelector((state) => state.hotelBooking);
  const lastDay = dates.length - 1;
  const date1 = new Date(dates[0]);
  const date2 = new Date(dates[lastDay]);
  const pathname = usePathname()
  console.log(pathname)
  const checkin = date1.toLocaleDateString();
  const checkout = date2.toLocaleDateString();
  console.log(checkin);
  console.log(window.history);
  const hotelId = roomInfo?.hotel?.id


 
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';

      // Use the Next.js router to navigate back to the previous page
      router.back();
    };

    // Add the event listener for beforeunload to capture browser refresh
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router]);

  return (
    <div>
      <h1>Tour Booking</h1>
    </div>
  );
};

export default TourBooking;
