import RootLayout from "./layout";
import NavBar from "./components/ui/navbar";
import Hero from "./components/ui/hero";
import IntroOne from "./components/introSection/introOne";
import IntroTwo from "./components/introSection/introTwo";

import dynamic from "next/dynamic";
import { FeaturedLocation } from "./components/FeaturedLocation/featuredLocation";
import FeaturedTour from "./components/FeaturedTour/featuredTour";
import Footer from "./components/ui/footer";
import { Toaster } from "react-hot-toast";
import WhyUs from "./components/WhyUs/whyus";
import Review from "./components/Review/Review";
import CtaSection from "./components/ui/Cta";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <RootLayout>
      <NavBar session={session} />
      <div className="bg-background">
        <Hero></Hero>
        <IntroOne />
        <FeaturedLocation />
        <IntroTwo />
        <FeaturedTour />
        <WhyUs />
        <Review />
        <CtaSection />
      </div>
      <Footer />
      <Toaster />
    </RootLayout>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
