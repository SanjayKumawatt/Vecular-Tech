import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare, // For 'Let's Talk'
  Tag,           // For 'Pricing is in INR'
  Server,        // For 'Servers located in...'
  Globe,         // For 'Domain registration...'
  ShieldCheck,   // For '30-days money back...'
  Lock,          // For 'SSL certificates'
  Archive,       // For 'Daily backups'
  Headset,       // For '24/7 Support'
  BarChart,      // For '99.9% Uptime'
} from 'lucide-react';

// Data for "Included with every plan"
const includedFeatures = [
  {
    icon: Lock,
    title: 'SSL certificates',
    description: 'Each website gets free SSL certificates, ensuring encrypted connections for your visitors.',
  },
  {
    icon: Archive,
    title: 'Daily backups',
    description: 'We take data seriously and keep daily backups to remote servers to ensure your hardwork is always safe.',
  },
  {
    icon: Headset,
    title: '24/7 Support',
    description: 'Our in-house control panel is designed to be user-friendly, allowing you to manage your hosting with ease.',
  },
  {
    icon: BarChart,
    title: '99.9% Uptime',
    description: 'Our in-house control panel is designed to be user-friendly, allowing you to manage your hosting with ease.', // Note: Image had same text twice
  },
];

const WebsiteFeatures = () => {
  return (
    <>
      {/* --- Section 1: Dark "Need to migrate" CTA --- */}
      <section className="bg-slate-900 relative overflow-hidden">
        {/* Background Blobs (optional, for wavy effect) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-slate-800 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Need to migrate? It's Free! Let us help you.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Migrating your website can be overwhelming, but with VEHICULR,
              it doesn't have to be! Our expert team is here to make the process
              smooth, fast, and worry-free. Whether you're moving from another
              hosting provider or upgrading your current setup, we'll handle
              every detail so that you can focus on what matters—growing your
              business.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-transparent bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-gray-100 transition-colors"
              >
                <MessageSquare size={18} />
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Info Lines --- */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-3 text-base text-gray-600">
            <li className="flex items-center gap-3">
              <Tag className="h-5 w-5 text-sky-600 flex-shrink-0" />
              <span>Pricing is in <span className="font-bold">INR</span>.</span>
            </li>
            <li className="flex items-center gap-3">
              <Server className="h-5 w-5 text-sky-600 flex-shrink-0" />
              <span>Servers located in <span className="font-bold">India, USA</span> and <span className="font-bold">Germany</span>.</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-sky-600 flex-shrink-0" />
              <span>Domain registration is <span className="font-bold">not a part</span> of any plan.</span>
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-sky-600 flex-shrink-0" />
              <span>
                All plans are backed by our{' '}
                <a href="/legal/refund" className="text-sky-600 hover:underline font-medium">
                  30-days money back guarantee*
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* --- Section 3: "Included with every plan" Features --- */}
      <section className="bg-white pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Included with every plan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore range of features included with every web hosting plan.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {includedFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-sky-50/70 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-sky-600 shadow">
                  <feature.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteFeatures;