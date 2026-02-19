"use client";

import Link from "next/link";
import React from "react";

import Image from "next/image";
import companyLogo from "../public/images/companyLogo.png";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Leadership", path: "/leadership" },
    { name: "Ibrahim Chemicals", path: "/ibrahim-chemical" },
    { name: "Universe", path: "/universe-led" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-700">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info Section */}
          {/* <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src={companyLogo.src}
                alt="Al-Ibrahim Chemicals Logo"
                width={100}
                height={100}
                className="w-50 h-32 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading provider of premium chemical solutions and LED technology,
              committed to innovation and excellence.
            </p>
          </div> */}
          {/* Company Info Section - Logo Replacement */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h2 className="text-2xl font-black tracking-tighter text-white">
                AL-IBRAHIM
                <span className="block text-blue-500 text-lg font-bold tracking-normal -mt-1">
                  GROUP OF COMPANIES
                </span>
              </h2>

              <div className="h-1 w-12 bg-blue-500 rounded-full mt-2"></div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              Leading provider of premium chemical solutions and LED technology,
              committed to innovation and excellence in industrial
              manufacturing.
            </p>

            {/* <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.74h-2.94v-3.403h2.94v-2.511c0-2.91 1.777-4.495 4.375-4.495 1.244 0 2.315.093 2.627.135v3.045h-1.802c-1.412 0-1.686.671-1.686 1.657v2.17h3.37l-.439 3.403h-2.931v8.74h6.02c.731 0 1.325-.593 1.325-1.325v-21.351c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-blue-400 hover:border-blue-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-slate-300 hover:text-blue-400 font-medium text-sm transition-colors duration-300 hover:translate-x-1 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-5 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>al.ibrahim.group.of.companies@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 300 2142622</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AL-Ibrahim Group of Companies. All
              rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
