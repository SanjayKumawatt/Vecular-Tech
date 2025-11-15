import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

// Poora pricing data "Plus" plan ke liye
const planData = {
  name: 'Plus Plan',
  features: [
    '10 Websites', '25 GB NVMe Disk Space', '2 vCPU and 4GB RAM',
    '50 Email Accounts', 'Unlimited Subdomains', 'Unlimited MySQL Databases',
    'Unlimited Bandwidth', 'Free SSL Certificate', 'Daily Backups', 'LiteSpeed Webserver',
  ],
  pricing: {
    monthly: {
      price: '₹499', suffix: '/month',
      billingNote: 'Billed monthly, renews at ₹499/mo.',
    },
    annually: {
      price: '₹299', suffix: '/month',
      billingNote: 'Billed annually, renews at same price.',
    },
    triennially: {
      price: '₹195', suffix: '/month',
      billingNote: 'Billed triennially, renews at same price.',
    },
  },
};

// Helper function
const getPlanDetails = (cycleParam) => {
  if (cycleParam === 'monthly') return planData.pricing.monthly;
  if (cycleParam === 'annually') return planData.pricing.annually;
  return planData.pricing.triennially; // Default
};

const OrderPlus = () => {
  const [searchParams] = useSearchParams();
  const cycle = searchParams.get('cycle');
  const plan = getPlanDetails(cycle);

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Your Order Summary
        </h1>
        
        <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-sky-600">{planData.name}</h2>
            
            {/* Specifications Section */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Plan Specifications</h3>
              <ul className="mt-6 space-y-3 text-base text-gray-700">
                {planData.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Price (Dynamic) --- */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Total Price</h3>
              <p className="mt-2">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-xl font-medium text-gray-600">{plan.suffix}</span>
              </p>
              <p className="text-sm text-gray-500">{plan.billingNote}</p>
            </div>

            {/* --- Checkout Button --- */}
            <div className="mt-10">
              <button
                type="button"
                className="w-full inline-flex items-center justify-center rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlus;