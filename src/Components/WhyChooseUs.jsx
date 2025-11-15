import React from 'react';
import { Gauge, Users, ArrowRightLeft, ShieldCheck } from 'lucide-react';

// Data for the light features section
const features = [
  {
    icon: Gauge,
    title: 'Upto 20X faster website speed',
    description: 'That means faster load times, stronger SEO, lower bounce rates, and more conversions.',
  },
  {
    icon: Users,
    title: 'Expert support, around the clock',
    description: 'We’re here around the clock – real people, ready to assist whenever you need us.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Free account migration included',
    description: 'Switching is easy! We’ll transfer your website for free – reach out to learn how.',
  },
  {
    icon: ShieldCheck,
    title: '99.9% uptime guarantee',
    description: 'Hostomy delivers hosting you can depend on, backed by high-performance servers.',
  },
];

// Data for the dark stats section
const stats = [
  {
    value: '4.9 / 5',
    label: 'Trustpilot Rating',
  },
  {
    value: '26 minutes',
    label: 'Average support response',
  },
  {
    value: '82%',
    label: 'Requests solved in first time',
  },
  {
    value: '97',
    label: 'Industry-leading NPS',
  },
];

const WhyChooseUs = () => {
  return (
    <>
      {/* --- Section 1: Light "Features" Section --- */}
      <section className="bg-gradient-to-b from-white to-sky-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Crafted by experts, perfected for performance.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Every line of code, every server configuration, every detail is fine-tuned 
              by professionals who live and breathe performance. We don't just host 
              websites – we engineer stability, speed, and reliability that power 
              businesses at scale.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="bg-sky-100/70 p-6 rounded-lg shadow-sm">
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

      {/* --- Section 2: Dark "Stats" Section --- */}
      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              After service? You can count on it.
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              We don't disappear after you buy – we stay with you. From setup to 
              scaling, our team keeps your website running smoothly, your data 
              secure, and your confidence high. That's Hostomy care – reliable, 
              human, and always on your side.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-800 p-6 rounded-lg">
                <p className="text-4xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-base font-medium text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;