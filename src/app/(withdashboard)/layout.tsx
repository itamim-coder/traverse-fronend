"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../components/ui/sidebar";
import {
  getUserInfo,
  isLoggedIn,
  removeUserInfo,
  token,
} from "../services/auth.services";
import { useRouter } from "next/navigation";

import { authKey } from "@/constants/storageKey";

import { signOut, useSession } from "next-auth/react";

import { Jost } from "next/font/google";
import Link from "next/link";
const jost = Jost({ subsets: ["latin"] });
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { email } = getUserInfo();
  // console.log("userlog", userLoggedIn);
  // const session = await getServerSession(authOptions);
  // console.log("dashboard", session);
  const session = useSession();
  console.log("session from layout", session);
  // const authToken = getFromLocalStorage("next-auth.session-token");
  // console.log("layout auth", authToken);
  useEffect(() => {
    if (!isLoggedIn() && !session.data?.data?.email) {
      // removeUserInfo(authKey);
      return router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, session]);

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/");
  };
  const googleLogout = () => {
    signOut().then(() => {
      logOut(); // Trigger local log out after Google logout
      router.push("/");
    });
  };
  return (
    <>
      <html lang="en">
        <body className={jost.className}>
          {/* <NavBar /> */}
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content overflow-x-hidden">
              {/* Page content here */}
              <div className="navbar bg-base-100">
                <div className="flex-1">
                  <label
                    htmlFor="my-drawer-2"
                    className="btn btn-ghost drawer-button lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="hsl(var(--n))"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                    </svg>
                  </label>
                </div>
                <div className="flex-none gap-2">
                  {session?.user || email ? (
                    <>
                      <div className="dropdown dropdown-end">
                        <label
                          tabIndex={0}
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                          </div>
                        </label>
                        <ul
                          tabIndex={0}
                          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                        >
                          {/* <li>
                  <a>Settings</a>
                </li> */}
                          <li>
                            {session?.user ? (
                              <>
                                <a onClick={googleLogout} key="googleLogout">
                                  Logout
                                </a>
                              </>
                            ) : (
                              <>
                                {" "}
                                <a onClick={logOut} key="logout">
                                  Logout
                                </a>
                              </>
                            )}
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href={"/login"}
                        className="btn btn-outline btn-info"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <hr />
              {children}
            </div>
            <SideBar />
          </div>
        </body>
      </html>
    </>
  );
}
