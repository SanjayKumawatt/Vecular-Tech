import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, MemoryStick, Database, Waves, Tag, MapPin } from 'lucide-react';

// Data for VPS plans (manage karna easy hai)
const vpsPlans = [
  {
    name: 'vServer 1',
    cpu: '1 Core',
    memory: '2 GB',
    storage: '25 GB',
    bandwidth: '1 TB',
    price: '₹749',
    orderLink: '/order/vps-1',
  },
  {
    name: 'vServer 2',
    cpu: '2 Core',
    memory: '4 GB',
    storage: '50 GB',
    bandwidth: '2 TB',
    price: '₹1,499',
    orderLink: '/order/vps-2',
  },
  {
    name: 'vServer 3',
    cpu: '4 Core',
    memory: '8 GB',
    storage: '100 GB',
    bandwidth: '4 TB',
    price: '₹2,999',
    orderLink: '/order/vps-3',
  },
  {
    name: 'vServer 4',
    cpu: '8 Core',
    memory: '16 GB',
    storage: '200 GB',
    bandwidth: '8 TB',
    price: '₹5,999',
    orderLink: '/order/vps-4',
  },
  {
    name: 'vServer 5',
    cpu: '16 Core',
    memory: '32 GB',
    storage: '400 GB',
    bandwidth: '16 TB',
    price: '₹11,999',
    orderLink: '/order/vps-5',
  },
];

// Helper component for each spec item
const SpecItem = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-sky-600" />
    </div>
    <div>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);

const VpsPricing = () => {
  return (
    <section id='vps' className="bg-white py-16 sm:py-24">
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

        {/* --- 2. Pricing List --- */}
        <div className="mt-16 space-y-8">
          {vpsPlans.map((plan) => (
            <div
              key={plan.name}
              className="border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              </div>
              
              {/* This div holds all items: specs, price, button */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-6 border-t border-gray-100">
                
                {/* Specs Grid */}
                <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-6">
                  <SpecItem icon={Cpu} value={plan.cpu} label="vCPU" />
                  <SpecItem icon={MemoryStick} value={plan.memory} label="Memory" />
                  <SpecItem icon={Database} value={plan.storage} label="NVMe Storage" />
                  <SpecItem icon={Waves} value={plan.bandwidth} label="Bandwidth" />
                </div>

                {/* Price (aligns right on desktop) */}
                <div className="flex-shrink-0 lg:text-right lg:pl-6">
                  <p className="text-3xl font-extrabold text-gray-900">{plan.price}</p>
                  <p className="text-sm text-gray-500">Price per month</p>
                </div>

                {/* Button (aligns right on desktop) */}
                <div className="flex-shrink-0 lg:pl-6">
                  <Link
                    to={plan.orderLink}
                    className="w-full lg:w-auto inline-flex items-center justify-center rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
                  >
                    Order Now
                  </Link>
                </div>

              </div>
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

export default VpsPricing;