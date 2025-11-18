import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

// --- Pricing Data ---
const pricingData = [
  {
    name: 'Basic',
    description: 'Simple and affordable, perfect for small websites or blogs.',
    isPopular: false,
    features: [
      '1 Website',
      '15 GB NVMe Disk Space',
      '1 vCPU and 2GB RAM',
      '10 Email Accounts',
      'Unlimited Subdomains',
      'Unlimited MySQL Databases',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Daily Backups',
      'LiteSpeed Webserver',
    ],
    pricing: {
      monthly: { price: '₹249', suffix: '/month', oldPrice: null, offer: null },
      annually: { price: '₹149', suffix: '/month', oldPrice: '₹249', offer: 'Save 40%' },
      triennially: { price: '₹95', suffix: '/month', oldPrice: '₹195', offer: 'Now 50% OFF' },
    },
    orderLink: '/order/basic', // Base link (NO ?cycle=)
  },
  {
    name: 'Plus',
    description: 'Grow your websites with more domains, storage, and features.',
    isPopular: true,
    features: [
      '10 Websites',
      '25 GB NVMe Disk Space',
      '2 vCPU and 4GB RAM',
      '50 Email Accounts',
      'Unlimited Subdomains',
      'Unlimited MySQL Databases',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Daily Backups',
      'LiteSpeed Webserver',
    ],
    pricing: {
      monthly: { price: '₹499', suffix: '/month', oldPrice: null, offer: null },
      annually: { price: '₹299', suffix: '/month', oldPrice: '₹499', offer: 'Save 40%' },
      triennially: { price: '₹195', suffix: '/month', oldPrice: '₹395', offer: 'Now 50% OFF' },
    },
    orderLink: '/order/plus', // Base link (NO ?cycle=)
  },
  {
    name: 'Pro',
    description: 'The best of the best, for mission-critical websites or large businesses.',
    isPopular: false,
    features: [
      'Unlimited Websites',
      '75 GB NVMe Disk Space',
      '4 vCPU and 8GB RAM',
      'Unlimited Email Accounts',
      'Unlimited Subdomains',
      'Unlimited MySQL Databases',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Daily Backups',
      'LiteSpeed Webserver',
    ],
    pricing: {
      monthly: { price: '₹799', suffix: '/month', oldPrice: null, offer: null },
      annually: { price: '₹499', suffix: '/month', oldPrice: '₹799', offer: 'Save 37%' },
      triennially: { price: '₹295', suffix: '/month', oldPrice: '₹595', offer: 'Now 50% OFF' },
    },
    orderLink: '/order/pro', // Base link (NO ?cycle=)
  },
];

// Helper component for the toggle buttons
const ToggleButton = ({ label, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
      ${
        isActive
          ? 'bg-sky-600 text-white shadow-md'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }
    `}
  >
    {label}
  </button>
);

const WebsitePricing = () => {
  const [billingCycle, setBillingCycle] = useState('triennially');

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Heading --- */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No matter where you start, every plan delivers: NVMe storage, LiteSpeed
            caching, unlimited MySQL databases, advanced malware protection, and
            free SSL.
          </p>
        </div>

        {/* --- 2. Billing Cycle Toggle --- */}
        <div className="mt-12 flex justify-center">
          <div className="flex p-1 bg-gray-100 rounded-full shadow-inner">
            <ToggleButton
              label="Monthly"
              isActive={billingCycle === 'monthly'}
              onClick={() => setBillingCycle('monthly')}
            />
            <ToggleButton
              label="Annually"
              isActive={billingCycle === 'annually'}
              onClick={() => setBillingCycle('annually')}
            />
            <ToggleButton
              label="Triennially"
              isActive={billingCycle === 'triennially'}
              onClick={() => setBillingCycle('triennially')}
            />
          </div>
        </div>

        {/* --- 3. Pricing Cards Grid --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingData.map((plan) => {
            const currentPrice = plan.pricing[billingCycle];

            return (
              <div
                key={plan.name}
                className={`border rounded-xl shadow-lg p-8 flex flex-col relative
                  ${plan.isPopular ? 'border-sky-500 border-2' : 'border-gray-200'}
                `}
              >
                {/* ... (Popular Badge, Plan Name, Price, etc. same) ... */}
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-base text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  {currentPrice.offer && (
                    <div className="flex items-center gap-2">
                      {currentPrice.oldPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {currentPrice.oldPrice}
                        </span>
                      )}
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-700">
                        {currentPrice.offer}
                      </span>
                    </div>
                  )}
                  <p className="mt-2">
                    <span className="text-5xl font-extrabold text-gray-900">
                      {currentPrice.price}
                    </span>
                    <span className="text-xl font-medium text-gray-600">
                      {currentPrice.suffix}
                    </span>
                  </p>
                </div>

                {/* --- Button Link Updated --- */}
                <Link
                  to={plan.orderLink} // <-- Ab yahan query parameter nahi hai
                  className="mt-8 w-full inline-flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
                >
                  Order Now
                </Link>

                {/* ... (Features list same) ... */}
                <ul className="mt-8 space-y-3 text-base text-gray-700 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WebsitePricing;