import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Heading --- */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help! Whether you have a question about our services,
            need support, or just want to say hello, we'd love to hear from you.
          </p>
        </div>

        {/* --- Main Content (Grid: Info + Form) --- */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* --- 1. Contact Information (Left) --- */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Contact Details</h2>
            
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Our Address</h3>
                <p className="mt-1 text-base text-gray-600">
                  VEHICULR TECHNOLOGIES PRIVATE LIMITED
                  <br />
                  No.3, 19/2, 4th Cross, Lakkasandra,
                  <br />
                  Adugodi, Bangalore, Bangalore South,
                  <br />
                  Karnataka, India, 560030.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-sky-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                <p className="mt-1 text-base text-gray-600">
                  For sales and support queries.
                </p>
                <a
                  href="mailto:support@vehiculr.com"
                  className="text-lg font-medium text-sky-600 hover:text-sky-500"
                >
                  support@vehiculr.in
                </a>
              </div>
            </div>

            
          </div>

          {/* --- 2. Contact Form (Right) --- */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Send us a message</h2>
            <form className="mt-8 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                    defaultValue={''}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-sky-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;