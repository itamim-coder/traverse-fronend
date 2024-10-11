"use client";

import Link from "next/link";
import React from "react";
import Form from "../Forms/form";
import FormInput from "../Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/app/services/auth.services";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Alert from "../ui/Alert/alert";
import { signIn } from "next-auth/react";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log("login", data);
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log("rs login", res);
      if (res?.accessToken) {
        toast("Login Successfully");
        storeUserInfo({ accessToken: res?.accessToken });
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      // toast.error("Error!!");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-black">
          <h1 className="text-2xl font-bold text-center">Login</h1>

          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="email"
                type="text"
                size="large"
                label="User Email"
                className="w-full flex px-4 py-3 rounded-md 0 bg-violet-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="my-4">
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User Password"
                className="w-full flex px-4 py-3 rounded-md 0 bg-violet-100 focus:dark:border-violet-400"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </Form>

          <div className="my-4 flex justify-between ">
            <div className="border-1 border p-2 rounded-md">
              <span className="font-bold "> User credential</span> <br /> email
              : user@user.com <br /> pass : 123456
            </div>
            <div className="border-1 border p-2 rounded-md">
              <span className="font-bold "> Admin credential</span> <br /> email
              : admin@admin.com <br /> pass : 123456
            </div>
          </div>

          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000",
                })
              }
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 ">
            Don't have an account?
            <Link
              href={"/signup"}
              rel="noopener noreferrer"
              className="underline "
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Alert />
    </>
  );
};

export default LoginPage;
