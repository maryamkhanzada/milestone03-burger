import React from 'react'

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Our Company Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Our Company</h2>
          <p>Our Community</p>
          <p>Our Journey</p>
          <p>Our History</p>
        </div>

        {/* Careers Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Careers</h2>
          <p>Corporate</p>
          <p>Restaurant</p>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p>Suggestion</p>
          <p>Complaint</p>
        </div>

        {/* Newsroom Section */}
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Newsroom</h2>
          <p>Local</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-8">
        <FaFacebook size={24} className="hover:text-blue-500" />
        <FaInstagram size={24} className="hover:text-pink-500" />
        <FaTwitter size={24} className="hover:text-blue-400" />
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-center">
        <p className="text-sm">Maryam Khan @2024 BurgerWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}


