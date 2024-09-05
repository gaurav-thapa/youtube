import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItemClasses =
    "lg:flex-row lg:text-base lg:ps-3 lg:pe-10 lg:gap-6 sm:py-2 sm:text-xs sm:px-1 rounded-xl flex sm:flex-col sm:items-center dark:hover:bg-gray-900 hover:bg-gray-200 hover:cursor-pointer";
  return (
    <div className="hidden  dark:bg-black dark:text-white sm:block sm:p-0 lg:p-3">
      <ul className={"flex flex-col w-full sm:gap-1"}>
        <li className={menuItemClasses}>
          <i className="text-xl bi bi-house-door-fill"></i>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={menuItemClasses}>
          <i className="text-xl bi bi-file-earmark-play"></i>Shorts
        </li>
        <li className={menuItemClasses}>
          <i className="text-xl bi bi-play-btn"></i>Subscriptions
        </li>
        <div className="border-t border-gray-400 my-2"></div>
        <li className={menuItemClasses}>
          <i className="text-xl bi bi-person-video"></i>You
        </li>
        <li className={menuItemClasses}>
          <i className="text-xl bi bi-clock-history"></i>History
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
