import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

// Hard-coded data for Managed VPS S
const plan = {
  name: 'Managed VPS S',
  price: '₹2,499',
  billingNote: 'Billed monthly, renews at same price.',
  features: [
    '2 Core CPU',
    '4 GB RAM',
    '50GB NVMe Disk',
    '2TB Bandwidth',
    'ioPanel Solo License',
  ],
};

const OrderManagedVpsS = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Your Order Summary
        </h1>
        
        <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-sky-600">{plan.name}</h2>
            <p className="mt-4 text-lg text-gray-600">
              You are about to order the <span className="font-bold">{plan.name}</span> plan.
            </p>
            
            {/* Specifications Section */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Plan Specifications</h3>
              <ul className="mt-6 space-y-3 text-base text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Total Price</h3>
              <p className="mt-2">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-xl font-medium text-gray-600">/month</span>
              </p>
              <p className="text-sm text-gray-500">{plan.billingNote}</p>
            </div>

            {/* Checkout Button */}
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

export default OrderManagedVpsS;