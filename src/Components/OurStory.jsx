import React from 'react';
import { Users } from 'lucide-react'; // Example icon

import img1 from "../assets/about/img1.svg";

const OurStory = () => {
    return (
        <section className="bg-slate-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* --- 1. Text Content --- */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Our story
                        </h2>
                        <p className="text-lg text-gray-600">
                            VEHICULR was founded with a single goal in mind: to provide our
                            customers with the fastest and most reliable web hosting
                            possible. We are committed to ensuring that your website loads
                            quickly and performs seamlessly, so you can focus on what you do
                            best: running your business.
                        </p>
                        <p className="text-lg text-gray-600">
                            We proudly host thousands of domains, and our customer base is
                            growing every day. We power a wide range of websites, from
                            personal blogs to enterprise websites for some of the biggest
                            companies in the world.
                        </p>
                        <p className="text-lg text-gray-600">
                            We have built a better hosting platform for everyone, regardless
                            of size or budget. Our hosting solutions are designed to meet
                            the needs of all businesses, from small startups to large
                            enterprises.
                        </p>
                        <p className="text-lg text-gray-600">
                            At VEHICULR, we believe that everyone deserves access to
                            high-quality web hosting at an affordable price. That's why we
                            offer a variety of hosting plans to choose from, so you can find
                            the perfect solution for your needs.
                        </p>
                    </div>

                    {/* --- 2. Image / Illustration --- */}
                    <div className="flex items-center justify-center">
                        <img src={img1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;