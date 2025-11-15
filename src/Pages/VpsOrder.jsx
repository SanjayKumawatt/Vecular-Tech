import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { vpsPlansData } from '../data/vpsData'; // Common data import karo
import { Cpu, MemoryStick, Database, Waves } from 'lucide-react';

const VpsOrder = () => {
  // 1. URL se 'planId' ko extract karo
  const { planId } = useParams();

  // 2. Data file mein us ID wala plan dhoondo
  const plan = vpsPlansData.find(p => p.id === planId);

  // 3. Agar galat URL daala hai to error dikhao
  if (!plan) {
    return (
      <div className="bg-white py-16 sm:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Plan Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">
            The VPS plan you're looking for doesn't exist.
          </p>
          <Link
            to="/hosting/vps"
            className="mt-6 inline-block text-sky-600 hover:text-sky-500 font-medium"
          >
            &larr; Back to VPS Plans
          </Link>
        </div>
      </div>
    );
  }

  // 4. Agar plan mil gaya, to Order Summary dikhao
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Your Order Summary
        </h1>
        
        <div className="mt-12 bg-white border border-gray-200 rounded-lg shadow-sm">
          {/* Order Details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-sky-600">{plan.name}</h2>
            <p className="mt-4 text-lg text-gray-600">
              You are about to order the <span className="font-bold">{plan.name}</span> plan.
              Please review the details and proceed to checkout.
            </p>
            
            {/* Specs Review */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Plan Specifications</h3>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3 text-base text-gray-700">
                  <Cpu className="h-6 w-6 text-sky-600" />
                  <span>{plan.cpu} vCPU</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-700">
                  <MemoryStick className="h-6 w-6 text-sky-600" />
                  <span>{plan.memory} Memory</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-700">
                  <Database className="h-6 w-6 text-sky-600" />
                  <span>{plan.storage} NVMe</span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-700">
                  <Waves className="h-6 w-6 text-sky-600" />
                  <span>{plan.bandwidth} Bandwidth</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Total Price</h3>
              <p className="mt-2">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-xl font-medium text-gray-600">/month</span>
              </p>
              <p className="text-sm text-gray-500">Pricing is exclusive of tax.</p>
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

export default VpsOrder;