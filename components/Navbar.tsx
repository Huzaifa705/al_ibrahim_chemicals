"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import companyLogo from "../public/images/companyLogo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Leadership", path: "/leadership" },
  { name: "Ibrahim Chemicals", path: "/ibrahim-chemical" },
  { name: "Universe", path: "/universe-led" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle outside clicks & escape key
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (!mobileMenuOpen) return;
      if (
        mobileMenuRef.current?.contains(e.target as Node) ||
        buttonRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscKey);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  if (!isMounted) return null;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
            : "bg-slate-50/50 backdrop-blur-sm py-4 border-none"
          }`}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group z-50 relative">
              <div className="absolute inset-0 bg-brand-light rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
              <Image
                src={companyLogo}
                alt="Al-Ibrahim Group Logo"
                width={160}
                height={60}
                className="w-auto h-12 lg:h-14 object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-10">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`relative font-semibold text-[15px] transition-colors duration-300 py-2 ${isActive ? "text-brand-primary" : "text-slate-600 hover:text-brand-dark"
                      }`}
                  >
                    {item.name}
                    {/* Active/Hover Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-brand-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}

              {/* Desktop CTA */}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-brand-dark text-white text-sm font-bold rounded-xl hover:bg-brand-primary transition-colors shadow-md shadow-brand-dark/10"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              ref={buttonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden relative z-50 w-12 h-12 flex flex-col items-center justify-center space-y-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay & Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 top-20 bg-slate-900/10 h-screen backdrop-blur-sm z-40 xl:hidden"
              />

              {/* Menu Drawer */}
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl z-40 xl:hidden"
              >
                <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                  {NAV_LINKS.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-semibold text-lg py-3 border-b border-slate-50 transition-colors ${isActive ? "text-brand-primary" : "text-slate-700 hover:text-brand-primary"
                          }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;