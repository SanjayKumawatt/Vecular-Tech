import React from 'react';
import { HardDrive, Zap, Gauge, CalendarClock, Shield, Box, ChevronDown } from 'lucide-react';

// Data for features
const vpsFeatures = [
  {
    icon: HardDrive,
    title: 'NVMe Storage',
    description: 'Enterprise-grade disk drives that ensure up to 300% faster access to your files and databases compared to other hosting providers using non-SSD drives.',
  },
  {
    icon: Zap,
    title: '1 Gbps Network',
    description: 'Experience blazing-fast connectivity and seamless data transfer with our 1 Gbps network port, designed to deliver top-notch performance for all your hosting and networking needs!',
  },
  {
    icon: Gauge,
    title: 'Extreme Performance',
    description: 'Intel® Xeon® Gold or AMD Epyc processors with speedy NVMe SSDs mean you\'ll profit from high performance hardware. And you\'ll benefit from our redundant 10 Gbit network connection.',
  },
  {
    icon: CalendarClock,
    title: '24/7 Monitoring',
    description: 'Real-time 24/7 server monitoring to pro-actively prevent issues. Sleep well at night, knowing that your cloud server stays safe and online, backed by VEHICULR team.',
  },
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: 'We safeguard your cloud servers using the latest hardware appliances and sophisticated perimeter security technologies, providing you with first-rate protection against large-scale DDoS attacks.',
  },
  {
    icon: Box,
    title: 'Full Root Access',
    description: 'Take full control of your server environment with complete root access, empowering you to customize, configure, and manage your server just the way you need!',
  },
];

// Data for FAQs
const faqs = [
  {
    question: 'What is Virtual Private Server (VPS) Hosting?',
    answer: 'VPS hosting is a type of hosting that uses virtualization to provide you with dedicated (private) resources on a server with multiple users. It\'s a more secure and stable solution than shared hosting, offering the performance of a dedicated server but at a lower cost.',
  },
  {
    question: 'When should I choose VPS over dedicated servers or shared hosting?',
    answer: 'Choose VPS if: 1. You\'ve outgrown shared hosting and need more resources. 2. You need full root access to customize your server environment. 3. You want the power of a dedicated server but don\'t have the budget for it.',
  },
  {
    question: 'Do I have root access to VPS server?',
    answer: 'Yes! All our Self-Managed VPS plans come with full root access, giving you complete control over your server, including custom installations and configurations.',
  },
  {
    question: 'How many IP addresses do I get per VPS?',
    answer: 'Each VPS plan comes with one dedicated IPv4 address. You can purchase additional IP addresses as add-ons if needed.',
  },
  {
    question: 'How do you bill your VPS Hosting?',
    answer: 'We offer flexible billing cycles, including monthly, annually, and triennially. You can choose the plan that best fits your budget. All plans are billed in advance for the selected term.',
  },
];

const VpsFeaturesFAQ = () => {
  return (
    <>
      {/* --- Section 1: Features (Light Background) --- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your all-in-one VPS Hosting solution
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unlock the power of VPS Hosting. Elevate you performance with features!
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {vpsFeatures.map((feature) => (
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

export default VpsFeaturesFAQ;