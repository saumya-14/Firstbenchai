import { useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left section */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center space-x-2">
            <img
              src="/logo.png" 
              alt="Firstbench Logo"
              className="h-10"
            />
            <span>Firstbench</span>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Dashboard */}
            <div className="flex items-center space-x-2">
              <img src="/dashboard.svg" alt="Dashboard" className="h-6" />
              <a href="#" className="hover:text-teal-400">Dashboard</a>
            </div>
            {/* FirstGuru */}
            <div className="flex items-center space-x-2">
              <img src="/stars.svg" alt="FirstGuru" className="h-6" />
              <a href="#" className="hover:text-teal-400">FirstGuru</a>
            </div>
            {/* TownHall */}
            <div className="flex items-center space-x-2">
              <img src="/townhall.svg" alt="TownHall" className="h-6" />
              <a href="#" className="hover:text-teal-400">TownHall</a>
            </div>
            {/* AI Evaluation */}
            <div className="flex items-center space-x-2">
              <img src="/lightning.svg" alt="AI Evaluation" className="h-6" />
              <a href="#" className="hover:text-teal-400">AI Evaluation</a>
            </div>
            {/* Performance */}
            <div className="flex items-center space-x-2">
              <img src="/performance.svg" alt="Performance" className="h-6" />
              <a href="#" className="hover:text-teal-400">Performance</a>
            </div>
            {/* Mock Test */}
            <div className="flex items-center space-x-2">
              <img src="/test.svg" alt="Mock Test" className="h-6" />
              <a href="#" className="hover:text-teal-400">Mock Test</a>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
            <div>
                <img src="/bell.svg" alt="bell"  className="h-6"/>
            </div>
          {/* Profile Box */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-center space-x-2 bg-gray-900 text-white px-3 py-1 rounded-md focus:outline-none "
            >
              <div className="w-8  h-8 rounded-md bg-red-300   flex items-center justify-center text-2xl font-normal text-red-950">
                P
              </div>
              <span className="font-medium">Profile</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg overflow-hidden z-10">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
