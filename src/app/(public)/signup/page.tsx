import Link from "next/link";
import React from "react";

import { Metadata } from "next";
import SignupPage from "@/app/components/Signup/signup";


export const metadata: Metadata = {
  title: "Sign Up | TRAVERSE ",
};

const Signup = () => {
  return (
    <>
      <SignupPage />
    </>
  );
};

export default Signup;
