import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  User,
  Globe,       // Domain icons
  Server,      // Hosting/Server icons
  Database,    // WordPress icon (placeholder)
  ServerCog,   // Managed VPS icon
  ServerOff,   // Dedicated Server icon
} from 'lucide-react';

import logo from "../assets/logo.png";

// --- Naya Data Structure Dropdowns ke liye ---
const navLinks = [
  {
    name: 'Domains',
    href: '/domains',
    position: 'left-0', // Dropdown alignment
    dropdown: [
      {
        name: 'Register a domain',
        description: 'Register your domain today',
        href: '/domains/register',
        icon: Globe,
      },
      {
        name: 'Transfer a domain',
        description: 'Transfer a domain name to us',
        href: '/domains/transfer',
        icon: Globe, // Same icon as per image
      },
    ],
  },
  {
    name: 'Hosting',
    href: '/hosting',
    position: 'left-1/2 -translate-x-1/2', // Center aligned
    dropdown: [
      {
        name: 'Website Hosting',
        description: 'Host your website on our reliable servers',
        href: '/hosting/website',
        icon: Server,
      },
      {
        name: 'WordPress Hosting',
        description: 'Optimized hosting for WordPress',
        href: '/hosting/wordpress',
        icon: Database, // NOTE: 'lucide-react' mein WordPress ka logo nahi hai. Maine ye icon as a placeholder use kiya hai.
      },
    ],
  },
  {
    name: 'Servers',
    href: '/servers',
    position: 'right-0', // Right aligned
    dropdown: [
      {
        name: 'VPS Hosting',
        description: 'Unmanaged VPS hosting with root access',
        href: '/hosting/vps',
        icon: Server,
      },
      {
        name: 'Managed VPS Hosting',
        description: 'Fully managed VPS hosting with ioPanel',
        href: '/hosting/managed-vps',
        icon: ServerCog,
      },
      {
        name: 'Dedicated Servers',
        description: 'Enterprise-grade dedicated servers',
        href: '/hosting/dedicated',
        icon: ServerOff,
      },
    ],
  },
  {
    name: 'About',
    href: '/about',
    dropdown: null, // No dropdown
  },
];
// --- End Data Structure ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active link style
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? 'text-sky-600 font-semibold'
      : 'text-gray-700 hover:text-sky-600';
  };

  // Mobile active link style
  const getMobileNavLinkClass = ({ isActive }) => {
    return isActive
      ? 'block w-full py-2 px-3 rounded-md bg-sky-100 text-sky-700 font-medium'
      : 'block w-full py-2 px-3 rounded-md text-gray-700 hover:bg-gray-50 hover:text-sky-600';
  };

  // Mobile sub-link style
  const mobileSublinkClass =
    'block w-full py-2 pl-10 pr-3 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-sky-600';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
            <img src={logo} className='h-10' alt="" />
              <span className="text-3xl font-bold text-sky-500">Vehiculr Tech</span>
            </Link>
          </div>

          {/* 2. Desktop Navigation Links (Updated with Dropdowns) */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                // --- Link WITH Dropdown ---
                <div key={link.name} className="relative group">
                  <NavLink
                    // className={({ isActive }) =>
                    //   `${getNavLinkClass({ isActive })} py-5` // Added py-5 for larger hover area
                    // }
                  >
                    {link.name}
                  </NavLink>
                  {/* Dropdown Panel */}
                  <div
                    className={`absolute hidden group-hover:block top-full z-10 mt-0 pt-3 ${link.position}`}
                  >
                    <div className="w-screen max-w-sm overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-2 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center p-3 rounded-lg hover:bg-sky-50 transition-colors"
                          >
                            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 text-sky-600">
                              <item.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-semibold text-gray-900">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // --- Link WITHOUT Dropdown (About) ---
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={getNavLinkClass}
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* 3. Desktop Log in Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              to="/login"
              className="flex items-center space-x-2 text-gray-700 hover:text-sky-600"
            >
              <User size={18} />
              <span>Log in</span>
            </Link>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Menu (Dropdown - Updated) */}
      <div
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              {/* Main Link */}
              <NavLink
                to={link.href}
                className={getMobileNavLinkClass}
                onClick={() => setIsMenuOpen(false)}
                // Agar dropdown na ho to 'end' prop true rakhein
                end={!link.dropdown}
              >
                {link.name}
              </NavLink>
              
              {/* Sub Links (if dropdown exists) */}
              {link.dropdown && (
                <div className="mt-1 space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={mobileSublinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Log in Link */}
          <Link
            to="/login"
            className="flex items-center w-full py-2 px-3 rounded-md text-gray-700 hover:bg-gray-50 hover:text-sky-600 mt-2 border-t border-gray-100 pt-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <User size={18} className="mr-2" />
            <span>Log in</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;