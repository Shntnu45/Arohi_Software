import React from 'react';
import Pizza from './Images/pizza1.jpeg'
import Burger from './Images/Burger (2).jpg'
import Noodles from './Images/noodles.jpg'
import SabSandwich from './Images/sab-sandwich.jpg'
import Chowmein from './Images/chowmine.jpeg'
import Stake from './Images/stake.jpeg'

function Searchbar() {
  return (
    <>
    <div className="bg-gray-100 ">
      {/* Search by  section   */}
      <div className="flex justify-between items-center mb-4 ml-20 mr-20 pt-20">
        <h2 className="text-2xl font-bold mb-4 text-center flex">Search by Food</h2>
        <div className="flex gap-3">
        <button className="px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-yellow-500">
            View All          <i class="fa-solid fa-angle-right"></i>  

        </button>
          <button className="rounded-full bg-yellow-500 hover:bg-Yellow-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <i class="fa-solid fa-angle-right"></i>  
          </button>
            <button className="rounded-full bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            <i class="fa-solid fa-angle-left"></i>  
            </button>
        </div>
      </div>
      <div className="flex justify-center gap-8 flex-wrap pb-20">
        <div className="relative flex flex-col items-center">
          <img
            src={Pizza}
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-center mt-2 font-bold text-gray-700 ">Pizza</p>
        </div>
        <div className="relative flex flex-col items-center">
          <img
            src={Burger}
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-center mt-2 font-bold text-gray-700">Burger</p>
        </div>
        <div className="relative flex flex-col items-center">
          <img
            src={Noodles}
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-center mt-2 font-bold text-gray-700">Noodles</p>
        </div>
        <div className="relative flex flex-col items-center">
          <img
            src={SabSandwich}
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-center mt-2 font-bold text-gray-700">Sub-sandwich</p>
        </div>
        <div className="relative flex flex-col items-center">
          <img
            src={Chowmein}
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-center mt-2 font-bold text-gray-700">Chowmein</p>
        </div>
        <div className="relative flex flex-col items-center">
          <img
            src={Stake}
            className="rounded-full w-40 h-40 object-cover"
          />
          <p className="text-center mt-2 font-bold text-gray-700">Steak</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Searchbar;


