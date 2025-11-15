import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import DomainFeaturesFAQ from '../components/DomainFeaturesFAQ'; // Import the FAQ component

const RegisterOrg = () => {
  // .org specific pricing data (based on your pricing page)
  const orgPricing = {
    register: '₹1,099',
    transfer: '₹1,199',
    renew: '₹1,199',
  };

  return (
    <>
      {/* --- Section 1: Hero & Search (White Background) --- */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- 1. Heading --- */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Register Your .org Domain
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              The domain of trust, ideal for non-profits and organizations.
            </p>
          </div>

          {/* --- 2. Search Bar --- */}
          <div className="mt-12 max-w-3xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4 p-2 border border-gray-200 rounded-lg shadow-sm bg-white focus-within:ring-2 focus-within:ring-sky-500">
              <div className="flex-grow flex items-center">
                <Search className="h-5 w-5 text-gray-400 mx-3 hidden sm:block" />
                <input
                  type="text"
                  placeholder="Find your perfect .org domain..."
                  className="w-full p-3 sm:p-0 text-lg border-none focus:ring-0"
                />
                <span className="text-xl font-bold text-gray-800 p-3 hidden sm:block">
                  .org
                </span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>

          {/* --- 3. Pricing Info Box --- */}
          <div className="mt-16 max-w-3xl mx-auto bg-slate-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900">
              .org Domain Pricing
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-500">Register</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orgPricing.register}
                  <span className="text-sm font-normal">/year</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Transfer</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orgPricing.transfer}
                  <span className="text-sm font-normal">/year</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Renew</p>
                <p className="text-2xl font-bold text-gray-900">
                  {orgPricing.renew}
                  <span className="text-sm font-normal">/year</span>
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-gray-500">
              Prices are exclusive of tax.
            </p>
          </div>

        </div>
      </div>

      {/* --- Section 2: Features & FAQ (Imported) --- */}
      <DomainFeaturesFAQ />
    </>
  );
};

export default RegisterOrg;