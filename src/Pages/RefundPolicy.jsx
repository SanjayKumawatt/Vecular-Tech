import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Refund Policy
        </h1>

        {/* --- Main Content --- */}
        {/* Tailwind 'prose' class text ko sundar format karti hai */}
        <div className="prose prose-lg prose-sky mt-12 max-w-none">
          
          <p>
            Thank you for choosing VEHICULR as your web hosting provider. We
            strive to deliver high-quality services to our customers. Please
            take a moment to review our refund policy for different
            services:
          </p>

          <h3>Domain Registrations / Transfers or Renewals:</h3>
          <p>
            No refund will be provided for domain registrations, transfers,
            or renewals. Once a domain registration or renewal is processed,
            it cannot be reversed.
          </p>

          <h3>Web Hosting:</h3>
          <p>
            We offer a 30-day refund policy for web hosting services if
            purchased for 1 year or more. If you are not satisfied with our
            web hosting services within the first 30 days of your purchase
            and your subscription is for a duration of one year or more, you
            may request a refund.
          </p>

          <h3>VPS Hosting:</h3>
          <p>
            No refund will be provided for cloud server services. Once a cloud
            server subscription is activated, it is non-refundable.
          </p>

          <p>
            For any questions or concerns regarding our refund policy, please{' '}
            <Link to="/contact">contact our customer support team</Link>. We
            appreciate your understanding and cooperation.
          </p>

          <p>
            <strong>Note:</strong> VEHICULR reserves the right to update or
            modify this refund policy at any time without prior notice.
            Please check our website or contact customer support for the most
            up-to-date information.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;