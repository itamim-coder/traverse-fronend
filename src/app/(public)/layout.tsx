import React from "react";
import NavBar from "../components/ui/navbar";

const WebLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    
        <NavBar />
        {children}
 
    </>
  );
};

export default WebLayout;
