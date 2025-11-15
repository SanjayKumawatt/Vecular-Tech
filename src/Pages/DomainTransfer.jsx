import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import TransferFeaturesFAQ from '../Components/TransferFeaturesFAQ';

const DomainTransfer = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- 1. Heading --- */}
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Domain Transfer
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Experience a better move at a lower price.
          </p>
        </div>

        {/* --- 2. Search Bar --- */}
        <div className="mt-12 max-w-4xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-4 p-2 border border-gray-200 rounded-lg shadow-sm bg-white focus-within:ring-2 focus-within:ring-sky-500">
            <div className="flex-grow flex items-center">
              <Search className="h-5 w-5 text-gray-400 mx-3 hidden sm:block" />
              <input
                type="text"
                placeholder="Enter the domain name you want to transfer"
                className="w-full p-3 sm:p-0 text-lg border-none focus:ring-0"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
            >
              Transfer Domain
            </button>
          </form>
        </div>

        {/* --- 3. How-to Section --- */}
        <div className="mt-16 sm:mt-24 max-w-5xl mx-auto bg-slate-50 rounded-lg p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left: Title */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                How to <span className="text-sky-600">Transfer</span> Your Domain Name?
              </h2>
            </div>

            {/* Right: Steps */}
            <div>
              <ol className="space-y-6">
                <li className="flex items-center text-base text-gray-700 border-b border-gray-200 pb-4">
                  <span className="text-lg font-bold text-sky-600 mr-4">1.</span>
                  Unlock the domain you want to transfer at your current registrar.
                </li>
                <li className="flex items-center text-base text-gray-700 border-b border-gray-200 pb-4">
                  <span className="text-lg font-bold text-sky-600 mr-4">2.</span>
                  Search for your domain using the <span className="font-bold text-gray-900 mx-1">VEHICULR</span> transfer tool.
                </li>
                <li className="flex items-center text-base text-gray-700 border-b border-gray-200 pb-4">
                  <span className="text-lg font-bold text-sky-600 mr-4">3.</span>
                  Enter your authorization code to confirm the transfer.
                </li>
                <li className="flex items-center text-base text-gray-700">
                  <span className="text-lg font-bold text-sky-600 mr-4">4.</span>
                  Most domain transfers complete in 5-7 days.
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* --- 4. Bulk Transfer CTA --- */}
        <div className="mt-16 sm:mt-24 max-w-5xl mx-auto bg-slate-50 rounded-lg p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Transferring multiple domains?
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Unlock extra savings! Bulk domain transfers at discounted rates!
              </p>
            </div>
            <div className="mt-6 sm:mt-0 sm:ml-6 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Get in touch with us
              </Link>
            </div>
          </div>
        </div>

        {/* --- 5. View All Pricing Link --- */}
        <div className="mt-16 text-center">
          <Link
            to="/domains/pricing"
            className="text-lg font-medium text-sky-600 hover:text-sky-700"
          >
            View all domain pricing
          </Link>
        </div>

      </div>
      <TransferFeaturesFAQ/>
    </div>
  );
};

export default DomainTransfer;