import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

// Data for domain pricing (manage karna easy hai)
const domainPricingList = [
  { tld: '.com', register: '₹1,199', transfer: '₹999', renew: '₹1,199' },
  { tld: '.in', register: '₹899', transfer: '₹899', renew: '₹899' },
  { tld: '.net', register: '₹1,299', transfer: '₹1,199', renew: '₹1,299' },
  { tld: '.org', register: '₹1,099', transfer: '₹1,199', renew: '₹1,199' },
  { tld: '.io', register: '₹3,299', transfer: '₹4,399', renew: '₹4,499' },
  { tld: '.online', register: '₹499', transfer: '₹2,499', renew: '₹2,599' },
  { tld: '.xyz', register: '₹399', transfer: '₹1,499', renew: '₹1,599' },
  { tld: '.host', register: '₹599', transfer: '₹8,199', renew: '₹8,299' },
  { tld: '.info', register: '₹499', transfer: '₹2,299', renew: '₹2,299' },
  { tld: '.site', register: '₹499', transfer: '₹2,099', renew: '₹2,399' },
  { tld: '.top', register: '₹399', transfer: '₹999', renew: '₹999' },
  { tld: '.store', register: '₹529', transfer: '₹3,999', renew: '₹4,099' },
  { tld: '.co', register: '₹2,199', transfer: '₹2,299', renew: '₹2,199' },
  { tld: '.shop', register: '₹499', transfer: '₹3,299', renew: '₹3,699' },
  { tld: '.ai', register: '₹7,450', transfer: '₹14,999', renew: '₹7,499' },
];

const DomainPricing = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- 1. Heading --- */}
        <div className="text-left max-w-3xl mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Domain Name Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Register domains at great prices!
          </p>
        </div>

        {/* --- 2. Search Bar --- */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for TLD's"
              className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-lg focus:ring-sky-500 focus:border-sky-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* --- 3. Pricing List --- */}
        <div className="flow-root">
          <div className="border border-gray-200 rounded-lg">
            <div className="divide-y divide-gray-200">
              {domainPricingList.map((domain) => (
                <div
                  key={domain.tld}
                  className="grid grid-cols-2 sm:grid-cols-4 items-center gap-6 p-4"
                >
                  {/* TLD Name (Col 1) */}
                  <div className="sm:col-span-1">
                    <p className="text-xl font-bold text-gray-900">{domain.tld}</p>
                    <p className="text-sm text-gray-500">TLD</p>
                  </div>

                  {/* Register Price (Col 2) */}
                  <div className="sm:col-span-1 text-left sm:text-center">
                    <p className="text-lg font-semibold text-gray-800">{domain.register}</p>
                    <p className="text-sm text-gray-500">Register</p>
                  </div>

                  {/* Transfer Price (Col 3) */}
                  <div className="sm:col-span-1 text-left sm:text-center">
                    <p className="text-lg font-semibold text-gray-800">{domain.transfer}</p>
                    <p className="text-sm text-gray-500">Transfer</p>
                  </div>

                  {/* Renew Price (Col 4) */}
                  <div className="sm:col-span-1 text-left sm:text-center">
                    <p className="text-lg font-semibold text-gray-800">{domain.renew}</p>
                    <p className="text-sm text-gray-500">Renew</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- 4. Button --- */}
        <div className="mt-12 text-center">
          <Link
            to="/domains/register"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
          >
            Register Domain Name
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DomainPricing;