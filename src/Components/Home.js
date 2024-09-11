import { useState } from 'react';
import Plate from './Images/plate.png'
function App() {
  const [address, setAddress] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Address:', address);
  };

  return (
    <div className="bg-yellow-400  flex justify-center ">
      <div className="flex items-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Are you starving?</h1>
          <p className="text-gray-700 mb-6">
            Within a few clicks, find meals that are accessible near you.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md rounded-lg shadow-lg p-6 bg-white">
            <div className="flex space-x-4">
              <button type="button" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
               <i class="fa-solid fa-moped"></i> Delivery
              </button>
              <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                 Pickup
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
               
              <i class="fa-solid fa-location-dot"></i><input
                  type="text"
                  placeholder="Enter Your Address"
                  className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  
                />
                <button type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
                    <i class="fa-solid fa-magnifying-glass"></i>Find Food
                </button>
              </div>
            </div>

            
          </form>
        </div>
        <div className="ml-10">
          <img
            src={Plate}
            alt="Noodles"
            className="w-100 h-100 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default App;