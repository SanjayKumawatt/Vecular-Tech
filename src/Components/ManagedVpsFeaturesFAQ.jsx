import React from 'react';
import { HardDrive, Zap, Gauge, CalendarClock, Shield, Headset, ChevronDown } from 'lucide-react';

// Data for features
const managedVpsFeatures = [
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
    description: 'Real-time 24/7 server monitoring to pro-actively prevent issues. Sleep well at night, knowing that your cloud server stays safe and online, backed by VEHICULR team.', // <-- Updated Brand Name
  },
  {
    icon: Shield,
    title: 'DDoS Protection',
    description: 'We safeguard your cloud servers using the latest hardware appliances and sophisticated perimeter security technologies, providing you with first-rate protection against large-scale DDoS attacks.',
  },
  {
    icon: Headset,
    title: 'Expert 24/7 Support',
    description: 'We watch your servers around the clock. If an issue arises, our team fixes it before you even notice. This proactive approach lets you focus on your business, not on technical emergencies.',
  },
];

// Data for FAQs
const faqs = [
  {
    question: 'What does "Managed VPS" actually mean?',
    answer: 'It means we handle all the technical server administration for you. This includes setup, security, updates, monitoring, and backups. You get all the power of a VPS without any of the complexity.',
  },
  {
    question: 'I have a website on shared hosting, Can you help me move it?',
    answer: 'Yes! We offer free, white-glove migration. Our expert team will move your website files, databases, and emails from your old provider to your new Managed VPS with us, ensuring zero downtime.',
  },
  {
    question: 'What is the difference between this and "unmanaged" VPS?',
    answer: 'With Unmanaged VPS, you get the server resources and root access, but you are responsible for all software installation, security, and maintenance. With Managed VPS, we handle all of that for you.',
  },
  {
    question: 'Do I get root access with my Managed VPS?',
    answer: 'No. On our Managed VPS plans, we handle server administration to ensure optimal performance and security. You get a user-friendly control panel (like ioPanel) to manage your websites, but not full root access.',
  },
  {
    question: 'What control panel do you provide?',
    answer: 'Our Managed VPS plans come with the industry-leading ioPanel Pro License, making it incredibly simple to manage your websites, domains, email accounts, and more.',
  },
  {
    question: 'How easy is it to scale my resources?',
    answer: 'It\'s very easy. You can upgrade your plan (CPU, RAM, Storage) at any time directly from your client area with just a few clicks and minimal downtime.',
  },
  {
    question: 'What if I outgrow my VPS plan?',
    answer: 'If you outgrow even our largest Managed VPS plan, our team can help you migrate to a powerful Dedicated Server or a custom cloud solution, ensuring a smooth transition.',
  },
];

const ManagedVpsFeaturesFAQ = () => {
  return (
    <>
      {/* --- Section 1: Features (Light Background) --- */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Included with every plan
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Unlock the power of Managed VPS Hosting. Elevate you performance hassle-free!
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {managedVpsFeatures.map((feature) => (
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

export default ManagedVpsFeaturesFAQ;