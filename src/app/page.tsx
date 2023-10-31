import RootLayout from "./layout";
import NavBar from "./components/ui/navbar";
import Hero from "./components/ui/hero";
import IntroOne from "./components/introSection/introOne";
import IntroTwo from "./components/introSection/introTwo";

import dynamic from "next/dynamic";
import { FeaturedLocation } from "./components/FeaturedLocation/featuredLocation";
import FeaturedTour from "./components/FeaturedTour/featuredTour";

function Home() {
  return (
    <RootLayout>
      <NavBar />
      <div>
        <Hero></Hero>
        <IntroOne />
        <FeaturedLocation />
        <IntroTwo />
        <FeaturedTour />
      </div>
    </RootLayout>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
