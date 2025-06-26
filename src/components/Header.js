import React, { useState } from 'react';
import { GoQuestion } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <div className="fixed w-full h-[68px] bg-darkBlack flex items-center justify-between px-4 sm:px-12">
      <p className="text-white text-lg font-semibold">Deploy AI</p>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search input on md+ screens */}
        <div className="relative hidden md:flex w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 rounded-lg bg-lightBlack text-white placeholder-gray-400"
          />
          <CiSearch className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>

        {/* Search icon for mobile */}
        <button className="block md:hidden text-white text-xl">
          <CiSearch />
        </button>

        {/* Icons (only shown inline on large screens and up) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* + Icon with Tooltip */}
          <div className="relative group">
            <button className="nav-btn text-white text-xl">+</button>
            <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Add
            </span>
          </div>

          {/* Help Icon with Tooltip */}
          <div className="relative group">
            <button className="nav-btn text-white text-xl">
              <GoQuestion />
            </button>
            <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Help
            </span>
          </div>

          {/* Settings Icon with Tooltip */}
          <div className="relative group">
            <button className="nav-btn text-white text-xl">
              <IoSettingsOutline />
            </button>
            <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
              Settings
            </span>
          </div>

          {/* Profile Icon (no tooltip needed here, but you can add one if desired) */}
          <button className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm focus:outline-none">
            MZ
          </button>
        </div>

        {/* Profile icon with dropdown (only visible on mobile/tablet) */}
        <div className="relative block lg:hidden">
          <button
            onClick={toggleDropdown}
            className="w-9 h-9 bg-gray-600 rounded-full flex items-center justify-center text-white text-sm focus:outline-none"
          >
            MZ
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-lightBlack text-white rounded-lg shadow-lg py-2 z-10">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-700">+ Add</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <GoQuestion /> Help
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <IoSettingsOutline /> Settings
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
