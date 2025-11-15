import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Tag, MapPin } from 'lucide-react';
import { managedVpsPlansData } from '../data/managedVpsData'; // <-- 1. Yahan se data import karo

const ManagedVpsPricing = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- 1. Heading --- */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find the perfect fit for your project, budget, and performance needs.
          </p>
        </div>

        {/* --- 2. Pricing Cards Grid --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {managedVpsPlansData.map((plan) => ( // <-- 2. Imported data use karo
            <div
              key={plan.name}
              className={`border rounded-xl shadow-lg p-8 flex flex-col relative
                ${plan.isPopular ? 'border-sky-500 border-2' : 'border-gray-200'}
              `}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-slate-900 text-white">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>

              {/* Price */}
              <div className="mt-6">
                <p>
                  <span className="text-5xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-xl font-medium text-gray-600">
                    /month
                  </span>
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {plan.billingNote}
                </p>
              </div>

              {/* Order Button */}
              <Link
                to={plan.orderLink} // Ye /order/managed-vps-s link use karega
                className="mt-8 w-full inline-flex items-center justify-center rounded-md bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
              >
                Order Now
              </Link>

              {/* Features List */}
              <ul className="mt-8 space-y-3 text-base text-gray-700 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-sky-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- 3. Info Lines --- */}
        <div className="mt-12 max-w-2xl mx-auto">
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <Tag className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span>Pricing is exclusive of tax.</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
              <span>Available in United States, Germany and Singapore.</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ManagedVpsPricing;