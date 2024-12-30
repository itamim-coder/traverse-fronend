"use client";

import { getUserInfo, removeUserInfo } from "@/app/services/auth.services";
import { authKey } from "@/constants/storageKey";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { CgProfile } from "react-icons/cg";
import typoLogo from "../../../../public/assets/Black and White Square Entertainment Logo.png";
import Logo from "../../../../public/assets/Green Modern and Minimalistic Travel Typography Logo.png";
const NavBar = ({ session }: { session: any }) => {
  console.log("session", session);

  const { email } = getUserInfo();

  // useEffect(() => {
  //   const authToken = getUserInfo().accessToken;
  //   if (authToken) {
  //     if (isTokenExpired(authToken)) {
  //       handleLogout();
  //     } else {
  //       setEmail(getUserInfo().email);
  //     }
  //   }
  // }, []);
  console.log("navbar", email);
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.refresh();
  };
  const googleLogout = () => {
    signOut().then(() => {
      logOut(); // Trigger local log out after Google logout
    });
  };
  return (
    <div className="navbar max-w-7xl mx-auto   bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label> */}
          {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul> */}
        </div>
        <Link href="/" className="flex  text-xl">
          <Image
            src={typoLogo}
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full border border-black"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li tabIndex={0}>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link href={"/about"} className="justify-between">
              About
              {/* <span className="badge">New</span> */}
            </Link>
          </li>
          <li>
            <Link href={"/travel-guide"} className="justify-between">
              Travel Guide
              {/* <span className="badge">New</span> */}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session?.user || email ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/profile"} className="justify-between">
                    Profile
                    {/* <span className="badge">New</span> */}
                  </Link>
                </li>
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
            <Link href={"/login"} className="btn btn-outline btn-info">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
