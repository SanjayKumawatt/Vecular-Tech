import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import DomainFeaturesFAQ from '../Components/DomainFeaturesFAQ'; // Path check kar lena

// --- 1. Data mein 'href' link add kiya ---
const tldCards = [
  {
    tld: '.com',
    title: 'The King of domains',
    price: '₹1199',
    oldPrice: '₹1399',
    styles: 'text-blue-600 font-bold',
    href: '/domains/register/com', // Example link
  },
  {
    tld: '.net',
    title: 'A true Internet original',
    price: '₹1299',
    oldPrice: '₹1499',
    styles: 'text-gray-800 font-bold',
    href: '/domains/register/net', // Example link
  },
  {
    tld: '.org',
    title: 'The domain of trust',
    price: '₹1099',
    oldPrice: '₹1299',
    styles: 'text-sky-700 font-bold',
    href: '/domains/register/org', // Example link
  },
  {
    tld: '.in',
    title: 'The domain of India',
    price: '₹899',
    oldPrice: '₹1099',
    styles: 'text-orange-500 font-bold',
    href: '/domains/register/in', // Example link
  },
];

const DomainRegister = () => {
  return (
    // NOTE: Maine DomainFeaturesFAQ ke component path ko '../components/DomainFeaturesFAQ' kar diya hai,
    // kyunki ye page 'src/pages' mein hoga. Aap apne structure ke hisab se change kar lena.
    
    // Main div se 'bg-white' hata diya taaki child sections apne colors dikha sakein
    <div className="pt-16 sm:pt-24">
      {/* --- Upar wala section (bg-white) --- */}
      <div className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* --- 1. Heading --- */}
          <div className="text-left max-w-3xl">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Domain Name Registration
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Start your great idea on the right note with the perfect domain
              name. Register it at the best price available!
            </p>
          </div>

          {/* --- 2. Search Bar --- */}
          <div className="mt-12 max-w-4xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4 p-2 border border-gray-200 rounded-lg shadow-sm bg-white focus-within:ring-2 focus-within:ring-sky-500">
              <div className="flex-grow flex items-center">
                <Search className="h-5 w-5 text-gray-400 mx-3 hidden sm:block" />
                <input
                  type="text"
                  placeholder="Find your perfect domain name..."
                  className="w-full p-3 sm:p-0 text-lg border-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
              >
                Search Domains
              </button>
            </form>
          </div>

          {/* --- 3. Transfer Link --- */}
          <div className="mt-6 text-center">
            <p className="text-base text-gray-600">
              Is your domain name with a different registrar?{' '}
              <Link to="/domains/transfer" className="font-medium text-sky-600 hover:text-sky-700">
                Transfer it today
              </Link>
            </p>
          </div>

          {/* --- 4. TLD Cards Grid --- */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tldCards.map((card) => (
              <div
                key={card.tld}
                className="border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-lg transition-shadow flex flex-col" // <-- Added flex flex-col
              >
                {/* TLD Name (Styled text as placeholder for logo) */}
                <h3 className={`text-3xl ${card.styles}`}>{card.tld}</h3>
                
                <p className="mt-3 text-base font-medium text-gray-700">
                  {card.title}
                </p>
                
                {/* Pricing */}
                <div className="mt-6">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {card.price}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /year
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Instead of{' '}
                  <span className="line-through">{card.oldPrice}/year</span>
                </p>
                
                {/* --- 2. Button ko Link se replace kiya --- */}
                <Link
                  to={card.href} // <-- Naya link yahan use kiya
                  className="mt-8 w-full inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors"
                >
                  Check Availability
                </Link>
              </div>
            ))}
          </div>

          {/* --- 5. View All Pricing Link --- */}
          <div className="mt-16 text-center">
            <Link
              to="/domains/pricing"
              className="text-lg font-medium text-sky-600 hover:text-sky-700"
            >
              View all domain pricing
            </Link>
          </div>
        </div>
      </div>
      
      {/* --- Niche wala section --- */}
      <DomainFeaturesFAQ />
    </div>
  );
};

export default DomainRegister;