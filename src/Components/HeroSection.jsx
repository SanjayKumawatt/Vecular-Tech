import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 z-0">
        {/* Background Wavy Lines (using simple CSS blobs as placeholder) */}
        {/* For exact wavy lines, use an SVG background image */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="block">Blazing fast, reliable, secure</span>
            <span className="block text-sky-600">web hosting solutions.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            Experience lightning-fast, secure, and fully scalable web hosting 
            with cutting-edge performance. Enjoy automated backups, hassle-free 
            migrations, and an intuitive control panel built for your growth.
          </p>
          <p className="mt-4 text-base font-semibold text-gray-800">
            Trusted by 50,000+ happy website owners worldwide!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/hosting/website"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors duration-300"
            >
              See Plans & Pricing
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;