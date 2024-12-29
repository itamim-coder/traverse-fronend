"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/app/services/auth.services";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import Alert from "../ui/Alert/alert";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const handleCredentials = (type: string) => {
    const newCredentials =
      type === "user"
        ? { email: "user@user.com", password: "123456" }
        : { email: "admin@admin.com", password: "123456" };

    // Programmatically set the input values
    setValue("email", newCredentials.email);
    setValue("password", newCredentials.password);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      if (res?.accessToken) {
        toast.success("Login Successfully");
        storeUserInfo({ accessToken: res?.accessToken });
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error during login!");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-black">
          <h1 className="text-2xl font-bold text-center">Login</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="text"
                {...register("email")}
                className="w-full px-4 py-3 rounded-md bg-violet-100 focus:border-violet-400"
              />
            </div>
            <div className="my-4">
              <label className="block text-sm font-medium">User Password</label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-4 py-3 rounded-md bg-violet-100 focus:border-violet-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign in
            </button>
          </form>

          <div className="flex justify-between mt-4">
            <button
              onClick={() => handleCredentials("user")}
              className="flex w-full items-center justify-center gap-3.5 rounded-[20px] border border-stroke bg-gray p-2 hover:bg-opacity-50  max-w-[150px] shadow shadow-[#F4F6FB]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#4285F4"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              User
            </button>
            <button
              onClick={() => handleCredentials("admin")}
              className="flex w-full items-center justify-center gap-3.5 rounded-[20px] border border-stroke bg-gray p-2 hover:bg-opacity-50  max-w-[150px] shadow shadow-[#F4F6FB]"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#75FBFD"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z M18,18H6v-0.78c0-0.38,0.2-0.72,0.52-0.88C7.71,15.73,9.63,15,12,15 c2.37,0,4.29,0.73,5.48,1.34C17.8,16.5,18,16.84,18,17.22V18z" />
                      <path d="M12,12c2.21,0,4-1.79,4-4c0-1.37,0-3.5,0-3.5C16,3.67,15.33,3,14.5,3c-0.52,0-0.98,0.27-1.25,0.67 C12.98,3.27,12.52,3,12,3s-0.98,0.27-1.25,0.67C10.48,3.27,10.02,3,9.5,3C8.67,3,8,3.67,8,4.5c0,0,0,2.12,0,3.5 C8,10.21,9.79,12,12,12z M10,5.5h4V8c0,1.1-0.9,2-2,2s-2-0.9-2-2V5.5z" />
                    </g>
                  </g>
                </svg>
              </span>
              Admin
            </button>
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
                signIn("google", { callbackUrl: "http://localhost:3000" })
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
          <p className="text-xs text-center sm:px-6 mt-4">
            Don't have an account?{" "}
            <Link href={"/signup"} className="underline">
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
