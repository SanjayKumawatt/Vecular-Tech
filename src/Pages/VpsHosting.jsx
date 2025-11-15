import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react'; // Icon for bullet points
import VpsPricing from '../Components/VpsPricing';
import VpsFeaturesFAQ from '../Components/VpsFeaturesFAQ';

const VpsHosting = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <div className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        {/* Background Blobs (dark version) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-slate-800 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-slate-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Self-Managed Linux VPS Hosting
            </h1>

            {/* Paragraph */}
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Your Stack, Your Rules. Our Linux VPS Hosting offers total developer
              freedom and elite performance. Choose your OS, configure your
              stack, and scale on demand. Powered by AMD EPYC CPUs and NVMe
              storage, all backed by NVMe Drives and 99.9% uptime SLA.
            </p>

            {/* Bullet Points */}
            <ul className="mt-8 space-y-3 text-base text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span>Built for speed with NVMe storage and AMD EPYC processors</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span>Full root access and Linux OS choices</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span>Scale up anytime with guaranteed resources</span>
              </li>
            </ul>

            {/* Price */}
            <p className="mt-8 text-2xl font-bold text-white">
              Starts at ₹749/month
            </p>

            {/* Button */}
            <div className="mt-10">
              <Link

                onClick={() =>
                  document.getElementById("vps").scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Choose Your Plan
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* --- Baaki page ke sections yahan add kar sakte hain --- */}
      {/* <VpsPricingTable /> */}

      <VpsPricing />
      <VpsFeaturesFAQ />
    </>
  );
};

export default VpsHosting;