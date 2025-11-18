import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Monitor } from 'lucide-react';

// Pricing Logic for "Pro" Plan
const planData = {
  name: 'Pro',
  pricing: {
    monthly: {
      price: 799,
      totalPrice: 799,
      periodLabel: '1 Month',
      id: 'pro-monthly',
      save: 0,
    },
    annually: {
      price: 499,
      totalPrice: 499 * 12, // 5988
      periodLabel: '12 Months',
      id: 'pro-annually',
      save: (799 * 12) - (499 * 12),
    },
    triennially: {
      price: 295,
      totalPrice: 295 * 36, // 10620
      periodLabel: '36 Months',
      id: 'pro-triennially',
      save: (799 * 36) - (295 * 36),
    },
  },
};

// Helper Component for Dropdowns
const SelectGroup = ({ label, id, value, onChange, children, disabled = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 disabled:bg-gray-100 disabled:text-gray-500"
      >
        {children}
      </select>
    </div>
  </div>
);

const OrderPro = () => {
  const navigate = useNavigate();
  const { addItemToCart, formatCurrency } = useCart();

  // States
  const [domain, setDomain] = useState('');
  const [datacenter, setDatacenter] = useState('india');
  const [period, setPeriod] = useState('triennially');

  // Get details based on selected period
  const currentPlanDetails = planData.pricing[period];

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!domain) {
      alert('Please enter a domain name.');
      return;
    }

    const itemToAdd = {
      id: currentPlanDetails.id,
      name: `${planData.name} Plan (${currentPlanDetails.periodLabel})`,
      description: `Domain: ${domain} | Location: ${datacenter.toUpperCase()}`,
      price: currentPlanDetails.totalPrice,
    };

    addItemToCart(itemToAdd);
    navigate('/checkout');
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Order Configuration Card --- */}
        <form onSubmit={handleCheckout} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
            <div className="p-3 bg-sky-50 rounded-lg">
              <Monitor className="h-8 w-8 text-sky-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Web Hosting</h1>
              <p className="text-sm text-gray-600">Host your website with affordability and quality.</p>
            </div>
          </div>

          {/* Body: Inputs */}
          <div className="p-6 space-y-6">
            
            {/* Plan Selection (Locked) */}
            <SelectGroup label="Plan" id="plan" value="Pro" onChange={() => {}} disabled>
              <option value="Pro">Pro</option>
            </SelectGroup>

            {/* Domain Input */}
            <div>
              <label htmlFor="domain" className="block text-sm font-medium leading-6 text-gray-900">
                Primary Domain
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="domain"
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="example.com"
                  className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                  required
                />
              </div>
            </div>

            {/* Datacenter Selection */}
            <SelectGroup
              label="Datacenter Location"
              id="datacenter"
              value={datacenter}
              onChange={(e) => setDatacenter(e.target.value)}
            >
              <option value="india">India</option>
              <option value="usa">United States</option>
              <option value="germany">Germany</option>
            </SelectGroup>

            {/* Billing Period Selection */}
            <SelectGroup
              label="Period"
              id="period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="monthly">1 Month - ₹799/mo</option>
              <option value="annually">12 Months - ₹499/mo</option>
              <option value="triennially">36 Months - ₹295/mo</option>
            </SelectGroup>
          </div>

          {/* Footer: Price & Button */}
          <div className="p-6 bg-slate-50 border-t border-gray-200 text-center">
            <p className="text-4xl font-extrabold text-gray-900">
              {formatCurrency(currentPlanDetails.totalPrice)}
            </p>
            
            {currentPlanDetails.save > 0 && (
              <p className="mt-1 text-sm font-semibold text-green-600">
                You save {formatCurrency(currentPlanDetails.save)}
              </p>
            )}
            
            <p className="mt-1 text-xs text-gray-500 uppercase tracking-wide">
              (Exclusive of tax)
            </p>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default OrderPro;