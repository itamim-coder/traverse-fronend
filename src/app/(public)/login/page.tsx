import React from "react";
import { Metadata } from "next";
import LoginPage from "@/app/components/Login/loginPage";

export const metadata: Metadata = {
  title: "Login | TRAVERSE ",
};

const Login = () => {
  return (
    <>
      <LoginPage></LoginPage>
    </>
  );
};

export default Login;
