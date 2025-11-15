import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react';
import logo from "../assets/logo.png";


// Data for Links
const linkSections = [
    {
        title: 'Domains',
        links: [
            { name: 'Domain Registration', href: '/domains/register' },
            { name: 'Domain Transfer', href: '/domains/transfer' },
            { name: 'Domain Pricing', href: '/domains/pricing' },
        ],
    },
    {
        title: 'Hosting',
        links: [
            { name: 'Website Hosting', href: '/hosting/website' },
            { name: 'WordPress Hosting', href: '/hosting/wordpress' },
        ],
    },
    {
        title: 'Servers',
        links: [
            { name: 'VPS Hosting', href: '/hosting/vps' },
            { name: 'Managed VPS Hosting', href: '/hosting/managed-vps' },
            { name: 'Dedicated Servers', href: '/hosting/dedicated' },
        ],
    },
    {
        title: 'Company',
        links: [
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
            
        ],
    },
    {
        title: 'Legal',
        links: [
            { name: 'Terms of Service', href: '/legal/terms' },
            { name: 'Privacy Policy', href: '/legal/privacy' },
            { name: 'Refund Policy', href: '/legal/refund' },
        ],
    },
];

// Data for Social Icons
const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: X, href: '#', name: 'X' },
    { icon: Youtube, href: '#', name: 'YouTube' },
];

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Grid Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                    {linkSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-white tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-sm hover:text-sky-400 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 mt-12 pt-8">

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">

                        {/* Left Section */}
                        <div className="space-y-4">
                            <Link to="/" className="text-3xl flex font-bold text-sky-500">
                                <img src={logo} alt="" className='h-10' />
                                Vehiculr Tech
                            </Link>

                            <p className="text-sm">
                                {new Date().getFullYear()}. All rights reserved by{' '}
                                <span className="font-medium text-white">
                                    VEHICULR TECHNOLOGIES PRIVATE LIMITED
                                </span>
                            </p>

                            {/* Company Address */}
                            <p className="text-sm text-slate-400 leading-relaxed">
                                No.3, 19/2, 4th Cross, Lakkasandra, Adugodi, <br />
                                Bangalore, Bangalore South, Karnataka, India, 560030
                            </p>

                            <p className="text-xs text-slate-500">
                                {/* CIN: Add here | GSTIN: Add here */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
