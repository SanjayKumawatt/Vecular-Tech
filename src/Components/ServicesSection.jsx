import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, Globe, Server, ArrowRight } from 'lucide-react';

// Card data yahan manage karein
const serviceOptions = [
  {
    icon: LayoutTemplate, // WordPress/CMS icon
    title: 'WordPress Hosting',
    description: 'Begin your online journey with a domain name - register with us and enjoy a host of advantages.',
    price: '₹95/mo',
    linkTo: '/hosting/wordpress', // Link for WordPress page
    bgColor: 'bg-emerald-50', // Light green bg
  },
  {
    icon: Globe, // Website icon
    title: 'Website Hosting',
    description: 'Speedy and secure hosting, ideal for small and medium-sized websites and businesses, ensuring peace of mind.',
    price: '₹95/mo',
    linkTo: '/hosting/website', // Link for Website page
    bgColor: 'bg-sky-50', // Light blue bg
  },
  {
    icon: Server, // VPS icon
    title: 'VPS Hosting',
    description: 'Maximize potential with a reasonably-priced, high-performance virtual private server solution.',
    price: '₹749/mo',
    linkTo: '/hosting/vps', // Link for VPS page
    bgColor: 'bg-orange-50', // Light orange/peach bg
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hosting services built for success
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The premium hosting services you need to build a fast and
            successful website. Get started with web hosting in just minutes.
          </p>
        </div>

        {/* --- Hosting Cards Grid --- */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceOptions.map((service) => (
            <div
              key={service.title}
              className={`rounded-xl border border-gray-200 shadow-sm p-6 ${service.bgColor} flex flex-col`}
            >
              {/* Icon */}
              <div>
                <service.icon className="w-10 h-10 text-gray-900" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-base text-gray-700">
                {service.description}
              </p>

              {/* Price (Pushed to bottom) */}
              <div className="mt-auto pt-8">
                <span className="block text-sm font-medium text-gray-600">
                  Starting at
                </span>
                <span className="block text-4xl font-extrabold text-gray-900">
                  {service.price}
                </span>
              </div>

              {/* View Plans Link */}
              <Link
                to={service.linkTo}
                className="mt-6 inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-700 group"
              >
                View Plans & Pricing
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* --- CTA Banner --- */}
        <div className="mt-24 bg-slate-900 rounded-lg p-8 md:p-12 relative overflow-hidden">
          {/* Aap yahan hero section jaisa abstract wavy background image daal sakte hain */}
          {/* <img src="/wavy-dark-pattern.png" className="absolute inset-0 w-full h-full object-cover opacity-10" /> */}
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Text */}
            <div className="md:w-3/5">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Not sure which service is right for you?
              </h2>
              <p className="mt-3 text-lg text-slate-300">
                Let us guide you! Our experts will help you find the perfect
                hosting solution.
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 md:mt-0 md:w-auto">
              <Link
                to="/contact"
                className="inline-block whitespace-nowrap rounded-md bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-gray-100"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;