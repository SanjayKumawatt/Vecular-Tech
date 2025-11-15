import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import logo from "../assets/logo.png";


const SignUp = () => {
    return (
        // Isse poora page cover hoga aur content center mein aa jayega
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">

                {/* --- 1. Logo & Heading --- */}
                <div>
                    <Link to="/" className="text-3xl font-bold text-sky-500 flex  justify-center">
                        <img src={logo} className='h-10' alt="" />
                        <span>Vehiculr Tech</span>
                    </Link>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Create Your Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Get started with us today!
                    </p>
                </div>

                {/* --- 2. Social Logins --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Google Button */}
                    <button
                        type="button"
                        className="inline-flex w-full justify-center items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                    >
                        {/* Google 'G' icon placeholder */}
                        <span className="h-5 w-5 font-bold text-blue-600">G</span>
                        Sign up with Google
                    </button>

                    {/* Github Button */}
                    <button
                        type="button"
                        className="inline-flex w-full justify-center items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                    >
                        <Github className="h-5 w-5" />
                        Sign up with Github
                    </button>
                </div>

                {/* --- 3. "OR" Separator --- */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-gray-50 px-2 text-gray-500">OR</span>
                    </div>
                </div>

                {/* --- 4. Email/Password Form --- */}
                <form className="mt-8 space-y-6">
                    {/* Full Name (Extra field for sign up) */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="Enter your name"
                                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                            />
                        </div>
                    </div>

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

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                placeholder="Create a password"
                                className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600"
                            />
                        </div>
                    </div>

                    {/* Create Account Button */}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-sky-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-700 transition-colors"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                {/* --- 5. Log In Link --- */}
                <div className="text-sm text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link
                            to="/login" // Link back to login
                            className="font-medium text-sky-600 hover:text-sky-500"
                        >
                            Log In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;