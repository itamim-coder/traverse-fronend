import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-background">
      <div className="max-w-7xl  mx-auto min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Section 1 - Introduction */}
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            About Us
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto">
            Welcome to TraVerse, your trusted travel partner! We're passionate
            about helping you create unforgettable travel experiences, whether
            you're planning a relaxing getaway or an adventurous journey. At
            TraVerse, we believe in offering seamless travel booking
            experiences, hotel reservations, and customizable tour packages that
            fit your needs and budget.
          </p>
        </section>

        {/* Section 2 - Our Vision and Mission */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Our Vision & Mission
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-8 mt-8">
            <div className="max-w-xs sm:max-w-sm">
              <h3 className="text-xl font-semibold text-gray-700">
                Our Vision
              </h3>
              <p className="mt-2 text-gray-500">
                To become the go-to platform for discovering and booking
                memorable travel experiences that offer the perfect blend of
                comfort, adventure, and value.
              </p>
            </div>
            <div className="max-w-xs sm:max-w-sm">
              <h3 className="text-xl font-semibold text-gray-700">
                Our Mission
              </h3>
              <p className="mt-2 text-gray-500">
                To provide travelers with the best variety of destinations,
                reliable hotel bookings, and customized tour packages. Through
                technology and customer -focused solutions, we aim to create
                smooth and exciting journeys for all our travelers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Our Services */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hotel Booking"
                className="w-88 h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hotel Booking"
                className="w-88 h-64 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hotel Booking"
                className="w-88 h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Section 4 - Our Journey */}
        <section className="bg-gray-100 py-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Our Journey
          </h2>
          <div className="flex justify-center text-gray-700 text-lg max-w-4xl mx-auto">
            <p>
              TraVerse started with a simple yet ambitious goal – to help
              travelers experience the world hassle-free. Over the years, we
              have expanded our network, increased our offerings, and built
              lasting relationships with hotels, tour operators, and transport
              services globally. Our journey has always been focused on
              delivering outstanding service and simplifying travel planning so
              you can enjoy each moment. Our passion for travel drives us every
              day to help you explore new places and create unforgettable
              memories.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
