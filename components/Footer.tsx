"use client";

import Link from "next/link";
import React from "react";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Leadership", path: "/leadership" },
  { name: "Ibrahim Chemicals", path: "/ibrahim-chemical" },
  { name: "Universe LED", path: "/universe-led" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">

      {/* Subtle Brand Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-dark rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-primary rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">

          {/* Company Info Section */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <div className="flex flex-col">
              <h2 className="text-3xl font-black tracking-tight text-white">
                AL-IBRAHIM
                <span className="block text-brand-primary text-xl font-bold tracking-normal mt-1">
                  GROUP OF COMPANIES
                </span>
              </h2>
              <div className="h-1 w-16 bg-brand-primary rounded-full mt-4" />
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              A trusted leader bridging global innovation with domestic markets. Delivering premium chemical solutions and high-efficiency Universe LED technology since 2005.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7 space-y-6">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-slate-400 hover:text-brand-light font-medium text-sm transition-all duration-300 flex items-center group w-fit"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-brand-primary" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="md:col-span-6 lg:col-span-3 space-y-6">
            <h4 className="text-lg font-bold text-white">Get in Touch</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start space-x-3 group cursor-default">
                <MapPin className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">Karachi, Pakistan</span>
              </div>
              <a href="mailto:al.ibrahim.group.of.companies@gmail.com" className="flex items-start space-x-3 group hover:text-brand-light transition-colors">
                <Mail className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed break-all">al.ibrahim.group.of.companies@gmail.com</span>
              </a>
              <a href="tel:+923158966670" className="flex items-start space-x-3 group hover:text-brand-light transition-colors">
                <Phone className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">+92 315 8966670</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left font-medium">
            © {new Date().getFullYear()} Al-Ibrahim Group of Companies. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="#" className="text-slate-500 hover:text-brand-light text-sm font-medium transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-500 hover:text-brand-light text-sm font-medium transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;