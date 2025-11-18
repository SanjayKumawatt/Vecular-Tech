import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, CreditCard, Wallet, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Helper component for Payment Method selection
const PaymentOption = ({ method, currentMethod, setMethod, icon: Icon, label }) => (
  <div
    onClick={() => setMethod(method)}
    className={`w-1/3 text-center p-3 border-b-2 cursor-pointer ${
      currentMethod === method
        ? 'border-sky-600 text-sky-600'
        : 'border-transparent text-gray-500 hover:border-gray-300'
    }`}
  >
    <Icon className="h-6 w-6 mx-auto" />
    <span className="text-xs font-medium">{label}</span>
  </div>
);

// Helper for Input Fields
const FormInput = ({ id, label, type = 'text', autoComplete, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
        type={type}
        name={id}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
      />
    </div>
  </div>
);

const Checkout = () => {
  const { cartItems, subtotal, tax, total, formatCurrency } = useCart();
  const navigate = useNavigate();

  // State for Billing Form
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  
  // State for Payment
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'upi', 'bank'

  // Handle Billing form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({ ...prev, [name]: value }));
  };

  // Handle final form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap saara data (billingDetails, cartItems, total) 
    // apne backend ya payment gateway ko bhej sakte hain.
    
    console.log("Order Details:", {
      billing: billingDetails,
      items: cartItems,
      payment: paymentMethod,
      totalAmount: total,
    });
    
    alert('Order Placed (Dev)! Check console for details.');
    // navigate('/thank-you'); // User ko thank you page par bhej do
  };

  // Agar cart khaali hai
  if (cartItems.length === 0) {
    return (
      <div className="bg-white py-16 sm:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Cart is Empty</h1>
          <p className="mt-4 text-lg text-gray-600">
            Please add a plan to your cart before checking out.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-md bg-sky-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Agar cart mein items hain
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Heading --- */}
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Checkout
          </h1>
        </div>

        {/* --- Main 2-Column Layout (Wrapped in Form) --- */}
        <form onSubmit={handleSubmit} className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* --- 1. Billing Form (Left) --- */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Billing Details
            </h2>
            <div className="space-y-6 p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput id="name" label="Full Name" autoComplete="name" placeholder="Enter your full name"
                  value={billingDetails.name} onChange={handleInputChange} />
                <FormInput id="email" label="Email Address" type="email" autoComplete="email" placeholder="Enter your email"
                  value={billingDetails.email} onChange={handleInputChange} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput id="phone" label="Phone Number" type="tel" autoComplete="tel" placeholder="Enter your phone"
                  value={billingDetails.phone} onChange={handleInputChange} />
                <FormInput id="address" label="Street Address" autoComplete="street-address" placeholder="1234 Main St"
                  value={billingDetails.address} onChange={handleInputChange} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <FormInput id="city" label="City" autoComplete="address-level2" placeholder="Bangalore"
                  value={billingDetails.city} onChange={handleInputChange} />
                <FormInput id="state" label="State" autoComplete="address-level1" placeholder="Karnataka"
                  value={billingDetails.state} onChange={handleInputChange} />
                <FormInput id="zip" label="ZIP / Postal Code" autoComplete="postal-code" placeholder="560030"
                  value={billingDetails.zip} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* --- 2. Order Summary (Right) --- */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <p className="font-semibold text-gray-900">
                      {formatCurrency(item.price)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex justify-between text-base text-gray-600">
                  <p>Subtotal</p>
                  <p className="font-medium">{formatCurrency(subtotal)}</p>
                </div>
                <div className="flex justify-between text-base text-gray-600">
                  <p>Tax (18% GST)</p>
                  <p className="font-medium">{formatCurrency(tax)}</p>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <p>Total</p>
                  <p>{formatCurrency(total)}</p>
                </div>
              </div>

              {/* --- Payment Details Section --- */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Payment Details
                </h3>
                {/* Payment Method Tabs */}
                <div className="flex mt-4 border-b border-gray-200">
                  <PaymentOption method="card" currentMethod={paymentMethod} setMethod={setPaymentMethod} icon={CreditCard} label="Card" />
                  <PaymentOption method="upi" currentMethod={paymentMethod} setMethod={setPaymentMethod} icon={Wallet} label="UPI" />
                  <PaymentOption method="bank" currentMethod={paymentMethod} setMethod={setPaymentMethod} icon={Banknote} label="Net Banking" />
                </div>
                
                {/* Conditional Inputs */}
                <div className="mt-4 space-y-4">
                  {paymentMethod === 'card' && (
                    <div className="space-y-4">
                      <FormInput id="cardNumber" label="Card Number" placeholder="0000 0000 0000 0000" />
                      <div className="grid grid-cols-2 gap-4">
                        <FormInput id="expiry" label="Expiry (MM/YY)" placeholder="MM / YY" />
                        <FormInput id="cvc" label="CVC" placeholder="123" />
                      </div>
                    </div>
                  )}
                  {paymentMethod === 'upi' && (
                    <FormInput id="upiId" label="UPI ID" placeholder="yourname@okbank" />
                  )}
                  {paymentMethod === 'bank' && (
                    <div>
                      <label htmlFor="bank" className="block text-sm font-medium leading-6 text-gray-900">Select Bank</label>
                      <select id="bank" name="bank" className="mt-2 block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600">
                        <option>Select your bank...</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>State Bank of India (SBI)</option>
                        <option>Axis Bank</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Place Order Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
                >
                  <Lock size={18} />
                  Place Order Securely
                </button>
              </div>
            </div>
          </div>
          
        </form> {/* --- End of Form --- */}
      </div>
    </div>
  );
};

export default Checkout;