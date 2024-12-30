import React from "react";

const TravelGuidePage = () => {
  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto min-h-screen  py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl ">
                Your Ultimate Travel Guide: Discover, Explore, and Experience
              </h2>

              <p className="hidden max-w-screen-sm text-gray-500  md:block">
                Embark on a journey filled with adventure, culture, and
                unforgettable memories. Our comprehensive travel guide is your
                trusted companion for discovering breathtaking destinations,
                exploring hidden gems, and making the most of every moment.
                Whether you're a seasoned explorer or planning your first trip,
                we've got everything you need to inspire your wanderlust and
                guide your travels.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogT7E5zfBXt5e7yVKtyYLOOxzKlhyB9x-y.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="pointer-events-none absolute inset-0 bg-black opacity-20 transition-opacity duration-200 group-hover:opacity-40"></div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Discover the Richness of Bangladesh Through “Otithi” - A
                Community Tourism Project
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogcjUgwiEcBwN-v6XOSUmM0xmK0BBQhAEO.png"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="pointer-events-none absolute inset-0 bg-black opacity-20 transition-opacity duration-200 group-hover:opacity-40"></div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Snap, Savour, & Enjoy Maafushi: Instagrammable Spots, Must-Try
                Dishes, and Unique Activities in 2024
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogIe3YIg1muI4p63Wut_FzWMJO4JogEAPa.webp"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="pointer-events-none absolute inset-0 bg-black opacity-20 transition-opacity duration-200 group-hover:opacity-40"></div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                25 Best Things to Do in Hanoi (2024): Your Ultimate Travel Guide
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogbrqXsdB0Edu2K71dfhY62DEsLgiRBxCc.png"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-200 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="pointer-events-none absolute inset-0 bg-black opacity-20 transition-opacity duration-200 group-hover:opacity-40"></div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Adventure Travel: Thrilling Activities to Try in Various Parts
                of the World
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuidePage;
