'use client'
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 bg-blue-500 text-white bottom-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Left Column */}
        <div>
           <div className="flex items-center space-x-2">
          <img
            src="/image/logo.png"
            alt="PN INFOSYS Logo"
            className="h-16"
          />
        </div>
          <p className="mt-4 leading-relaxed text-gray-100 text-[16px] ">
            PN INFOSYS is a leading global business consulting and IT service company.
            We provide a full range of maintenance and compliance services for
            Government and Commercial facilities both large and small. Whether you need
            to run your business more efficiently or accelerate revenue growth, PN
            INFOSYS can get you there.
          </p>

          <div className="flex space-x-4 mt-4">
            {/* Replace # with actual social media links */}
            <a href="#" className="bg-white text-blue-600 p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="bg-white text-blue-600 p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="bg-white text-blue-600 p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="bg-white text-blue-600 p-2 rounded-full h-10 w-10 flex items-center justify-center">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Center Column */}
        <div className='text-center'>
          <h3 className="font-semibold mb-3 text-2xl">Get In Touch!</h3>
          <p>www.pninfosys.com</p>
          <p>support@pninfosys.com</p>
          <p className="mt-2">+91 7000846823</p>
          <p>+91 7415289378</p>
          <p className="mt-2">MIG-332</p>
          <p>Darpan Colony, Thatipur,</p>
          <p>Gwalior, Madhya Pradesh</p>
        </div>

        {/* Right Column */}
        <div className='text-center'>
          <h3 className="text-2xl font-semibold mb-3">COMPANIES WORKSHOP</h3>
          <p>Xiaomi MI Company</p>
          <p className="text-sm text-gray-100 mb-2">August 20 / Mr. Vaibhav Shrivastava</p>

          <p>Bentchair Company</p>
          <p className="text-sm text-gray-100 mb-2">October 06 / Mr. Nicket Bansal</p>

          <p>MPCT College Gwalior</p>
          <p className="text-sm text-gray-100 mb-2">November 02 / PN Infosys Team</p>

          <p>RJIT College Tekanpur</p>
          <p className="text-sm text-gray-100">February 24 / PN Infosys Team</p>
        </div>
      </div>

      <div className="border-t border-blue-400 mt-10 pt-4 text-center text-sm text-white">
        Copyright © 2024-2025 | PN INFOSYS IT COMPANY IN GWALIOR ! All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
