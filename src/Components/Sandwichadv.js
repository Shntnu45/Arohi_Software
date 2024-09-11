import React from "react";
import Sandwichimg from "./Images/Sandwich.jpg";
import Pizza from './Images/pizza1.jpeg'


function App() {
  return (
    < >
    <div className="bg-gray-100 ">
    {/* // --------------------------First slide of adv -------------------------------------------- */}
<div className="py-12 px-4 sm:px-6 lg:px-8 flex items-center">
  <div className="bg-gray-50 max-w-75 mx-auto flex flex-col items-start md:flex-row md:items-center shadow-2xl rounded-md">
    <div className="md:w-2/5">
      <h1 className="font-mono text-3xl font-bold text-gray-900 sm:text-4xl pl-20 ">
        Best deals
        <span className="text-yellow-500 ml-2 ">Crispy Sandwiches</span>
      </h1>
      <p className="mt-4 text-gray-500 pl-20">
        Enjoy the large size of sandwiches. <br/> Complete perfect slice of
        sandwiches.
      </p>
      <div className="mt-8">
        <button
          className="inline-block bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-white font-bold py-2 px-4 rounded  ml-20"
        >
          <span className="mr-2 ">
            PROCEED TO ORDER{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
    <br/>
    <div className="md:w-3/5 md:ml-8">
      <img
        className="w-full h-auto rounded-md shadow-lg md:h-96" 
        src={Sandwichimg}
        alt="Crispy Sandwiches"
      />
    </div>
  </div>
</div>

{/* // --------------------------Second slide of adv -------------------------------------------- */}
<div className="py-12 px-4 sm:px-6 lg:px-8 flex items-center">
  <div className="bg-gray-50 max-w-75 mx-auto flex flex-col items-start md:flex-row md:items-center shadow-2xl rounded-md">
    <div className="md:w-3/5">
      <img
        className="w-full h-auto rounded-md shadow-lg md:h-96" 
        src={Pizza}
        alt="Crispy Sandwiches"
      />
    </div>
    <div className="md:w-2/5 md:ml-8">
      <h1 className="font-mono text-3xl font-bold text-gray-900 sm:text-4xl pl-20 ">
Wanna eat hot & Spicy        <span className="text-yellow-500 ml-2 ">Pizza</span>
      </h1>
      <p className="mt-4 text-gray-500 pl-20">
      Pair up with a friend and enjoy the hot and crispy pizza<br/> pops.  Try it with the best deals.
      </p>
      <div className="mt-8">
        <button
          className="inline-block bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-white font-bold py-2 px-4 rounded  ml-20"
        >
          <span className="mr-2 ">
            PROCEED TO ORDER{" "}
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</div>
  {/* ---------------------------------Slide thirdd--------------------------------- */}
  
  </div>

  </>
  );
}

export default App;