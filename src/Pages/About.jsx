import React from 'react';
import OurStory from '../Components/OurStory';
import OurMission from '../Components/OurMission';

const About = () => {
  return (
    <>
      {/* --- Hero Section --- */}
      <div className="bg-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              About VEHICULR
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Empowering people to move their dreams forward.
            </p>
          </div>
        </div>
      </div>

      
      <OurStory/>
      <OurMission/>
    </>
  );
};

export default About;