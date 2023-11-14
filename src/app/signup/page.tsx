import Link from "next/link";
import React from "react";
import SignupPage from "../components/Signup/signup";
import { Metadata } from "next";


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
