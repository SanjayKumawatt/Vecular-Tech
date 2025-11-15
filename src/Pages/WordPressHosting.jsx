import React from 'react';
import { Link } from 'react-router-dom';
import WebsitePricing from '../Components/WebsitePricing';
import WebsiteFeatures from '../Components/WebsiteFeatures';

const WordPressHosting = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        {/* Background Blobs (dark version) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-slate-800 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Fast, reliable, secure WordPress hosting in India
            </h1>

            {/* Paragraph */}
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Enjoy fast, secure, and scalable WordPress hosting with LiteSpeed performance,
              built-in automated backups, free migration, and a unified control panel designed
              for flexibility and growth.
            </p>

            {/* Price */}
            <p className="mt-8 text-2xl font-bold text-white">
              Starts at ₹95/month
            </p>

            {/* Button & Guarantee */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <Link
                onClick={() =>
                  document.getElementById("website").scrollIntoView({ behavior: "smooth" })
                }
                // Aap ise WordPress-specific plans page par link kar sakte hain
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Choose Your Plan
              </Link>
              <p className="text-sm text-slate-400">
                Worry-free - 30 Days Money Back
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* --- Baaki page ke sections yahan add kar sakte hain --- */}
      {/* <WordPressPricingTable /> */}
      {/* <WordPressFeatures /> */}
      <WebsitePricing />
      <WebsiteFeatures />

    </>
  );
};

export default WordPressHosting;