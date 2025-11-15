import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      {/* NOTE: Yahan bhi aap Hero Section jaisa hi background pattern 
        (ya to SVG ya animated blobs) add kar sakte hain. 
      */}
      <div className="relative overflow-hidden">
        {/* Background Wavy Lines (using simple CSS blobs as placeholder) */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            {/* Heading */}
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to get started?
            </h2>
            
            {/* Description */}
            <p className="mt-4 text-lg text-gray-600">
              Your website deserves hosting that's fast, reliable, and stress-free. 
              Hostomy's in-house experts are available around the clock, and our 
              high-performance servers keep your site running smoothly. Let's get 
              you online and performing at your best.
            </p>
            
            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/hosting/website" // Link to your pricing/signup page
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/contact" // Link to your contact page
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors duration-300"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;