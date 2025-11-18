import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Monitor, Server, CalendarDays, Globe } from 'lucide-react';

// Poora pricing data "Basic" plan ke liye
const planData = {
  name: 'Basic Plan',
  features: [ /* Features ab yahan important nahi hain */ ],
  pricing: {
    monthly: {
      price: 249, suffix: '/month',
      billingNote: 'Billed monthly, renews at ₹249/mo.',
      totalPrice: 249,
      description: 'Web Hosting (1 Month)',
      id: 'basic-monthly',
      periodLabel: '1 Month',
      save: 0,
    },
    annually: {
      price: 149, suffix: '/month',
      billingNote: 'Billed annually, renews at same price.',
      totalPrice: 149 * 12,
      description: 'Web Hosting (12 Months)',
      id: 'basic-annually',
      periodLabel: '12 Months',
      save: (249 * 12) - (149 * 12),
    },
    triennially: {
      price: 95, suffix: '/month',
      billingNote: 'Billed triennially, renews at same price.',
      totalPrice: 95 * 36,
      description: 'Web Hosting (36 Months)',
      id: 'basic-triennially',
      periodLabel: '36 Months',
      save: (249 * 36) - (95 * 36),
    },
  },
};

// Helper component for Dropdowns
const SelectGroup = ({ label, id, value, onChange, children }) => (
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
        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600"
      >
        {children}
      </select>
    </div>
  </div>
);


const OrderBasic = () => {
  const navigate = useNavigate();
  const { addItemToCart, formatCurrency } = useCart();
  
  const [domain, setDomain] = useState('');
  const [datacenter, setDatacenter] = useState('india');
  const [period, setPeriod] = useState('triennially'); // Default

  const currentPlanDetails = planData.pricing[period];
  const { totalPrice, save } = currentPlanDetails;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!domain) {
      alert('Please enter a domain name.');
      return;
    }
    
    const itemToAdd = {
      id: currentPlanDetails.id,
      name: `${planData.name} (${currentPlanDetails.periodLabel})`,
      description: `Domain: ${domain} | Datacenter: ${datacenter}`,
      price: totalPrice,
    };
    
    addItemToCart(itemToAdd);
    navigate('/checkout');
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <form onSubmit={handleCheckout} className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-4 p-6 border-b border-gray-200">
            <Monitor className="h-10 w-10 text-sky-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Web Hosting</h1>
              <p className="text-sm text-gray-600">Host your website with affordability and quality.</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <SelectGroup
              label="Plan"
              id="plan"
              value={planData.name}
              onChange={() => {}}
            >
              <option value="Basic Plan">Basic Plan</option>
            </SelectGroup>

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

            <SelectGroup
              label="Period"
              id="period"
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
            >
              <option value="monthly">{planData.pricing.monthly.periodLabel}</option>
              <option value="annually">{planData.pricing.annually.periodLabel}</option>
              <option value="triennially">{planData.pricing.triennially.periodLabel}</option>
            </SelectGroup>
          </div>

          <div className="p-6 bg-slate-50 border-t border-gray-200 rounded-b-lg">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-gray-900">
                {formatCurrency(totalPrice)}
              </p>
              {save > 0 && (
                <p className="mt-1 text-base font-medium text-green-600">
                  You save {formatCurrency(save)}
                </p>
              )}
              <p className="mt-1 text-sm text-gray-500">
                (Exclusive of tax)
              </p>
            </div>
            
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

export default OrderBasic;