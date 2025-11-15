import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    // Isse poora page cover hoga aur content center mein aa jayega
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        
        {/* --- 1. Heading --- */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset Your Password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Regain access to your VEHICULR account!
          </p>
        </div>

        {/* --- 2. Email Form --- */}
        <form className="mt-8 space-y-6">
          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
              />
            </div>
          </div>

          {/* Send Code Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-sky-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
            >
              Send Security Code
            </button>
          </div>
        </form>

        {/* --- 3. Log In Link --- */}
        <div className="text-sm text-center">
          <p className="text-gray-600">
            Already have password?{' '}
            <Link
              to="/login" // Link back to login
              className="font-medium text-sky-600 hover:text-sky-500"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;