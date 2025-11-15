import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const ErrorPage = () => {
  return (
    // Isse hum screen ki bachi hui height le lenge (navbar ki height 'h-16' (4rem) ko minus karke)
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        
        {/* Icon */}
        <AlertTriangle
          className="mx-auto h-16 w-16 text-sky-500" // Brand color icon
          aria-hidden="true"
        />

        {/* 404 Heading */}
        <h1 className="mt-4 text-7xl font-bold tracking-tight text-sky-600">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="mt-4 text-lg text-gray-600">
          Oops! Aisa lagta hai aap galat raaste par aa gaye hain. 
          Hum ye page nahi dhoond paa rahe.
        </p>

        {/* Home Button */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors"
          >
            <Home size={18} />
            <span>Go back home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;