import React, { useState } from 'react'; // <-- 1. useState import karo
import { ChevronDown } from 'lucide-react';

// Data for FAQs
const faqs = [
  {
    question: 'What is a dedicated server and who is it for?',
    answer: 'A dedicated server is a physical server that is exclusively leased to one client. It\'s for high-traffic websites, large businesses, and complex applications that require maximum performance, security, and control.',
  },
  {
    question: 'How is this different from your Managed VPS hosting?',
    answer: 'A Managed VPS shares hardware resources with other VPS users (in isolation). A Dedicated Server is an entire physical machine just for you. It offers 100% of the hardware resources (CPU, RAM) with no sharing, providing the absolute best performance.',
  },
  {
    question: 'I don\'t see any plans or pricing. How do I get a server?',
    answer: 'Dedicated servers are highly customizable. Please use the "Get in touch" form above to tell us your requirements (CPU, RAM, storage, etc.), and our team will build a custom quote just for you.',
  },
  {
    question: 'How long does it take to get my server online?',
    answer: 'Once your configuration is finalized and payment is complete, most dedicated servers are provisioned and online within 24 to 48 hours. Custom configurations may take longer.',
  },
];

const DedicatedServerFormFAQ = () => {
  // --- 2. Form ka data store karne ke liye state ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Thank you message ke liye state

  // --- 3. Input change ko handle karne ke liye function ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- 4. Form submit ko handle karne ke liye function ---
  const handleSubmit = (e) => {
    e.preventDefault(); // <-- YAHI HAI MAIN FIX! Page ko reload hone se rokta hai.
    
    // Abhi ke liye, hum data ko console par log karenge (backend nahi hai)
    console.log("Dedicated Server Enquiry:", formData);
    
    // "Thank you" message dikhao
    setIsSubmitted(true);
    
    // Form ko reset kar do (optional)
    setFormData({ name: '', email: '', phone: '', requirements: '' });
  };

  return (
    <>
      {/* --- Section 1: Get in touch Form (White Background) --- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Share us your requirments and our team will get in touch with you!
            </p>
          </div>

          {/* --- 5. Thank you message --- */}
          {isSubmitted ? (
            <div className="mt-12 p-6 bg-emerald-50 border border-emerald-300 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-emerald-800">Enquiry Sent!</h3>
              <p className="mt-2 text-lg text-emerald-700">
                Thank you! Our team will get in touch with you soon.
              </p>
            </div>
          ) : (
            /* --- 6. Form ko 'onSubmit' event do --- */
            <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={formData.name} // <-- 7. Value add karo
                    onChange={handleInputChange} // <-- 7. onChange add karo
                    required // <-- 7. Required add karo
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* E-mail */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    value={formData.email} // <-- 7. Value add karo
                    onChange={handleInputChange} // <-- 7. onChange add karo
                    required // <-- 7. Required add karo
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                  />
                </div>
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone} // <-- 7. Value add karo
                    onChange={handleInputChange} // <-- 7. onChange add karo
                    required // <-- 7. Required add karo
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* Requirements */}
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium leading-6 text-gray-900">
                  Explain your requirements
                </label>
                <div className="mt-2">
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows={4}
                    placeholder="Hey! I am looking for a Dedicated Server with..."
                    value={formData.requirements} // <-- 7. Value add karo
                    onChange={handleInputChange} // <-- 7. onChange add karo
                    required // <-- 7. Required add karo
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* --- Section 2: FAQ (Light Background) --- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Looking for more info? Here are some things we're commonly asked.
            </p>
          </div>

          {/* FAQ List (Accordion using <details>) */}
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border rounded-lg shadow-sm bg-white"
              >
                {/* Clickable Question */}
                <summary
                  className="flex items-center justify-between p-5 cursor-pointer list-none"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                
                {/* Answer (Hidden by default) */}
                <div className="p-5 pt-0 border-t border-gray-100">
                  <p className="text-base text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DedicatedServerFormFAQ;