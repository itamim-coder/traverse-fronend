import React from "react";
import NavBar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { Jost } from "next/font/google";
const jost = Jost({ subsets: ["latin"] });
const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={jost.className}>
      {/* <NavBar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default WebLayout;
