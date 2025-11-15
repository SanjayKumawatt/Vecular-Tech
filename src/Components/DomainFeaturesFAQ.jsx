import React from 'react';
import { ShieldCheck, SlidersHorizontal, CalendarClock, ChevronDown } from 'lucide-react';

// Data for features
const domainFeatures = [
  {
    icon: ShieldCheck,
    title: 'Free Privacy Protection',
    description: 'While others charge to keep your information private, we provide free Domain Privacy Protection for all eligible domains to protect you from spam emails and phone calls.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Easy Domain Management',
    description: 'A single page in our panel makes it possible to manage domains, nameservers, edit DNS records, setup domain forwarding, and more. If you get stuck, our support is here 24/7 for you.',
  },
  {
    icon: CalendarClock,
    title: 'Auto Reminders',
    description: 'Our system will automatically send your reminders via E-mail and phone about everything, whether it\'s about domain renewal or anything else, you\'ll never miss a date with us with this.',
  },
];

// Data for FAQs (Updated Brand Name)
const faqs = [
  {
    question: 'What is a domain name?',
    answer: 'A domain name is your website\'s address on the internet, like "google.com" or "vehiculr.com". It\'s what users type into their browser to find your site.',
  },
  {
    question: 'How do I register a new domain with VEHICULR?', // <-- Updated Name
    answer: 'It\'s easy! Just use the search bar at the top of this page to find a domain you like. If it\'s available, add it to your cart and follow the checkout steps. We\'ll guide you through the rest.',
  },
  {
    question: 'What is WHOIS Domain Privacy and is it included?',
    answer: 'WHOIS Privacy (or Domain Privacy) hides your personal contact information (like your name, address, and phone number) from the public WHOIS database. Yes, we provide it for free with all eligible domains.',
  },
  {
    question: 'Can I transfer my existing domain to VEHICULR?', // <-- Updated Name
    answer: 'Absolutely. You can transfer your domain to us from another registrar. Just head over to our "Domain Transfer" page to get started. We also offer free migration for hosting.',
  },
  {
    question: 'What\'s included with my domain registration?',
    answer: 'With every domain registration, you get free WHOIS privacy, an easy-to-use domain management panel, DNS management, and 24/7 expert support.',
  },
];

const DomainFeaturesFAQ = () => {
  return (
    <>
      {/* --- Section 1: Features (Light Background) --- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Enhance your domain experience
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unlock the full potential of your domain with these essential features.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {domainFeatures.map((feature) => (
              <div key={feature.title} className="text-left">
                <div className="flex items-center justify-start gap-3">
                  <feature.icon className="h-7 w-7 text-sky-600" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="mt-4 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 2: FAQ (White Background) --- */}
      <section className="bg-white py-16 sm:py-24">
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

export default DomainFeaturesFAQ;