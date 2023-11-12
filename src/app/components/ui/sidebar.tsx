import { SideBarItems } from "@/constants/sidebarItem";
import Link from "next/link";
import React from "react";



const menus = SideBarItems("customer")

const SideBar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        {menus?.map((menu) => (
          <li key={menu.id} className="mb-2">
            <Link
              href={menu.linkTo}
              className="text-base font-semibold hover:text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="hsl(var(--s))"
                viewBox="0 0 256 256"
              >
                <path d={menu.icon}></path>
              </svg>
              {menu.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
