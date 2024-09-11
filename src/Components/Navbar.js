import React from 'react';
import Logo from './Images/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-5">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="Foodwagon" className="h-20 w-auto" />
            <h1 className="text-3xl font-bold ml-2 font-mono">
              <span className="text-orange-500">Food</span>
              <span className="text-yellow-500">wagon</span>
            </h1>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input type="text" placeholder="Deliver to" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <span className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
    
              </span>
            </div>
            <button className="ml-4 px-4 py-2 rounded-md font-bold  text-orange-500"> <i class="fa-solid fa-magnifying-glass"></i>Search Food</button>
            <button className="ml-4 px-4 py-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;