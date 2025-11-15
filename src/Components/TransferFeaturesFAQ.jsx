import React from 'react';
import { ShieldCheck, SlidersHorizontal, CalendarClock, ChevronDown } from 'lucide-react';

// Data for features
const transferFeatures = [
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

// Data for FAQs (Updated Brand Name & Questions)
const faqs = [
  {
    question: 'What is a domain transfer?',
    answer: 'A domain transfer is the process of moving your domain name from one registrar (where you currently manage it) to another, like VEHICULR. This consolidates your services and often saves you money.',
  },
  {
    question: 'Why should I consider transferring my domain to VEHICULR?',
    answer: 'Transferring to VEHICULR allows you to manage all your services—hosting, domains, and email—in one simple, secure panel. Plus, you get our 24/7 expert support and free WHOIS Privacy.',
  },
  {
    question: 'What do I need to initiate a domain transfer?',
    answer: 'You will need three things: 1. Your domain must be unlocked at your current registrar. 2. You must have the domain\'s Authorization Code (also called EPP code). 3. You must have access to the admin email address listed on the domain.',
  },
  {
    question: 'How long does the domain transfer process take?',
    answer: 'Most domain transfers are automatic and complete within 5 to 7 days. This can vary slightly depending on the domain extension (.com, .in, etc.) and your current registrar.',
  },
  {
    question: 'What is a domain authorization code (EPP code), and why do I need it?',
    answer: 'The Authorization (or EPP) code is a secret password for your domain. It acts as a security measure to ensure that only you, the rightful owner, can authorize a transfer.',
  },
  {
    question: 'Can I transfer any domain to VEHICULR?',
    answer: 'You can transfer most common domain extensions (TLDs) like .com, .net, .org, .in, and many more. The domain must be at least 60 days old and not in a "locked" or "pending" status.',
  },
  {
    question: 'Do I risk losing my domain during the transfer process?',
    answer: 'No, the transfer process is safe. Your domain remains active and your website stays online throughout the entire process. There is no downtime.',
  },
];

const TransferFeaturesFAQ = () => {
  return (
    <>
      {/* --- Section 1: Features (Light Background) --- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why transfer domains to VEHICULR?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unlock the full potential of your domain with these essential features.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {transferFeatures.map((feature) => (
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

export default TransferFeaturesFAQ;