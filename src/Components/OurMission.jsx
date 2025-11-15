import React from 'react';
import { Rocket } from 'lucide-react'; // Example icon
import img2 from "../assets/about/img2.svg";

const OurMission = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* --- 1. Image / Illustration (Left) --- */}
          <div className="flex items-center justify-center">
            <img src={img2} alt="" />
          </div>

          {/* --- 2. Text Content (Right) --- */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our mission
            </h2>
            <p className="text-lg text-gray-600">
              What makes us unique is the quality of our service and the way
              we treat our customers. Our main goal is the satisfaction of
              our clients. Our aim is to deliver perfect security and
              performance for every website hosted on our servers.
            </p>
            <p className="text-lg text-gray-600">
              We pledge to always take your business seriously. We are always
              looking for ways to diversify our offerings, improve
              reliability, and improve our overall quality of service. After
              all, your ideas put you online, but we're the ones that help
              keep you there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;