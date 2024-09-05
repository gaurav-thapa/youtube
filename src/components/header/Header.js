import React from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-2 dark:bg-black dark:text-white justify-between items-center px-5 py-2">
      <div className="flex gap-2 items-center">
        <button className="sm:hidden">
          <i className="bi bi-list text-2xl"></i>
        </button>
        <div className="ms-4 text-red-600">
          <i className="text-4xl bi bi-youtube"></i>
        </div>
        <Link to={'/youtube/'} className="font-bold hidden md:block md:text-nowrap text-lg">Gaurav's YouTube</Link>
      </div>
      <Searchbar />
      <div>
        <i className="bi bi-person-circle text-3xl"></i>
      </div>
    </div>
  );
};

export default Header;
