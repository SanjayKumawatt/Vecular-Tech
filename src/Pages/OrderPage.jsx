import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allPlansData } from '../data/allPlansData'; // 1. Merged data import karo
import { Cpu, MemoryStick, Database, Waves, CheckCircle2 } from 'lucide-react';

// Helper component jo alag-alag specs dikhayega
const PlanSpecifications = ({ plan }) => {
  // Case 1: Agar Unmanaged VPS hai
  if (plan.type === 'unmanaged-vps') {
    return (
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3 text-base text-gray-700">
          <Cpu className="h-6 w-6 text-sky-600" />
          <span>{plan.details.cpu} vCPU</span>
        </div>
        <div className="flex items-center gap-3 text-base text-gray-700">
          <MemoryStick className="h-6 w-6 text-sky-600" />
          <span>{plan.details.memory} Memory</span>
        </div>
        <div className="flex items-center gap-3 text-base text-gray-700">
          <Database className="h-6 w-6 text-sky-600" />
          <span>{plan.details.storage} NVMe</span>
        </div>
        <div className="flex items-center gap-3 text-base text-gray-700">
          <Waves className="h-6 w-6 text-sky-600" />
          <span>{plan.details.bandwidth} Bandwidth</span>
        </div>
      </div>
    );
  }

  // Case 2: Agar Managed VPS hai
  if (plan.type === 'managed-vps') {
    return (
      <ul className="mt-6 space-y-3 text-base text-gray-700">
        {plan.details.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    );
  }

  return null;
};

const OrderPage = () => {
  const { planId } = useParams(); // URL se 'managed-vps-s' ya 'vps-1' nikalo
  const plan = allPlansData.find(p => p.id === planId); // Merged data mein dhoondo

  // Agar plan nahi mila (galat URL)
  if (!plan) {
    return (
      <div className="bg-white py-16 sm:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Plan Not Found</h1>
          <Link to="/" className="mt-6 inline-block text-sky-600 hover:text-sky-500 font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Agar plan mil gaya
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
            
            {/* Dynamic Specs Section */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Plan Specifications</h3>
              <PlanSpecifications plan={plan} />
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

export default OrderPage;