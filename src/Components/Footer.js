import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Our top cities</h2>
            <ul className="text-gray-400">
              <li className="mb-2">San Francisco</li>
              <li className="mb-2">Miami</li>
              <li className="mb-2">San Diego</li>
              <li className="mb-2">East Bay</li>
              <li>Long Beach</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Our top cities</h2>
            <ul className="text-gray-400">
              <li className="mb-2">Los Angeles</li>
              <li className="mb-2">Washington DC</li>
              <li className="mb-2">Seattle</li>
              <li className="mb-2">Portland</li>
              <li>Nashville</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Our top cities</h2>
            <ul className="text-gray-400">
              <li className="mb-2">New York City</li>
              <li className="mb-2">Orange County</li>
              <li className="mb-2">Atlanta</li>
              <li className="mb-2">Charlotte</li>
              <li>Denver</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Our top cities</h2>
            <ul className="text-gray-400">
              <li className="mb-2">Chicago</li>
              <li className="mb-2">Phoenix</li>
              <li className="mb-2">Las Vegas</li>
              <li className="mb-2">Sacramento</li>
              <li>Oklahoma City</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Our top cities</h2>
            <ul className="text-gray-400">
              <li className="mb-2">Columbus</li>
              <li className="mb-2">New Mexico</li>
              <li className="mb-2">Albuquerque</li>
              <li className="mb-2">Sacramento</li>
              <li>New Orleans</li>
            </ul>
          </div>
        </div>
        <br/>
        <hr className='text-white-200 '/>
                <div className="flex flex-col md:flex-row justify-between mt-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Company</h2>
            <ul className="text-gray-400">
              <li className="mb-2">About us</li>
              <li className="mb-2">Team</li>
              <li className="mb-2">Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <ul className="text-gray-400">
              <li className="mb-2">Help & Support</li>
              <li className="mb-2">Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Legal</h2>
            <ul className="text-gray-400">
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Refund & Cancellation</li>
              <li className="mb-2">Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">FOLLOW US</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h3 className="text-gray-400">Receive exclusive offers in your mailbox</h3>
              <div className="flex mt-2">
                <input
                  type="email"
                  className="px-4 py-2 rounded-l-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Your email"
                />
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-r-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <hr className='text-white-200 '/>
        <br/>
        <div class="flex justify-between">
            <p class="text-left">All rights Reserved , 2024</p>
            <p class="text-right">Made with by Arohi Software</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
