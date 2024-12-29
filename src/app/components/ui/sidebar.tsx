import { getUserInfo } from "@/app/services/auth.services";
import { SideBarItems } from "@/constants/sidebarItem";
import { authOptions } from "@/lib/AuthOptions";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/assets/traverse.png";
const SideBar = () => {
  const session = useSession();

  console.log("sidebar", session);
  const [userRole, setUserRole] = useState("");
  // const [isActive, setIsActive] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(null);
  // const handleToggle = (idx) => {
  //   setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  // };
  const handleAccordionToggle = (idx) => {
    setActiveAccordion((prevIdx) => (prevIdx === idx ? null : idx));
  };
  // const userRole = session?.data?.data?.role;
  useEffect(() => {
    const { role } = getUserInfo() as any;
    console.log(role);
    setUserRole(role);
    if (!role) {
      setUserRole(session?.data?.data?.role);
    }
  }, []);

  const menus = SideBarItems(userRole);

  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <Link
            href="/"
            className="flex bg-gray-300 rounded  justify-center items-center  border-gray-500"
          >
            <img
              src="/assets/traverse.png"
              alt="Logo"
              className="h-20  mt-3 object-cover w-full"
            />
          </Link>

          {menus?.map((menu) => (
            <li key={menu.id} className="mb-2">
              {menu.submenus ? (
                <div
                  onClick={() => handleAccordionToggle(menu.id)}
                  className="cursor-pointer"
                >
                  <span className="text-base font-semibold hover:text-secondary flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d={menu.icon}></path>
                    </svg>
                    <div className="ml-2">{menu.text}</div>
                  </span>
                </div>
              ) : (
                <Link
                  href={menu.linkTo}
                  className="text-base font-semibold hover:text-secondary"
                >
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d={menu.icon}></path>
                    </svg>
                    <div className="ml-2">{menu.text}</div>
                  </span>
                </Link>
              )}

              {activeAccordion === menu.id && (
                <ul
                  className={
                    activeAccordion === menu.id ? "submenu active" : "submenu"
                  }
                >
                  {menu.submenus.map((submenu) => (
                    <li key={submenu.id}>
                      <Link
                        href={submenu.linkTo}
                        className="text-base font-semibold hover:text-secondary"
                      >
                        {submenu.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
