"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import companyLogo from "../public/images/companyLogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [mobileMenuOpen]);

  // // Outside click listener
  // useEffect(() => {
  //     const handleClickOutside = (e: MouseEvent) => {
  //         if (
  //             mobileMenuOpen &&
  //             mobileMenuRef.current &&
  //             !mobileMenuRef.current.contains(e.target as Node) && !buttonRef.current.contains(e.target as Node)
  //         ) {
  //             setMobileMenuOpen(false)
  //         }
  //     }

  //     document.addEventListener('mousedown', handleClickOutside)
  //     return () => document.removeEventListener('mousedown', handleClickOutside)
  // }, [mobileMenuOpen])
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Check agar menu open hai
      if (!mobileMenuOpen) return;

      // Agar click MENU ke andar hua to kuch mat kro
      if (
        mobileMenuRef.current &&
        mobileMenuRef.current.contains(e.target as Node)
      ) {
        return;
      }

      // Agar click BUTTON ke andar hua to kuch mat kro (Button ka apna onClick handle karega)
      if (buttonRef.current && buttonRef.current.contains(e.target as Node)) {
        return;
      }

      // Agar upar wali dono conditions false hain, iska matlab bahar click hua hai
      setMobileMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Leadership", path: "/leadership" },
    { name: "Ibrahim Chemicals", path: "/ibrahim-chemical" },
    { name: "Universe", path: "/universe-led" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Premium Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#f7f7f7] backdrop-blur-xl shadow-2xl shadow-slate-200/20 py-4"
            : "bg-[#f7f7f7] py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </div>
              <div>
                <Image
                  src={companyLogo.src}
                  alt="Al-Ibrahim Chemicals Logo"
                  width={100}
                  height={100}
                  className="w-50 h-32"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-16">
              {navLinks.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative text-slate-700 hover:text-blue-600 font-semibold text-base xl:text-lg transition-all duration-300 group py-2"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-500"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all duration-300"
            >
              <span
                className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="xl:hidden bg-white border-t border-slate-200 shadow-xl"
          >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6">
              <div className="flex flex-col space-y-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-700 hover:text-blue-600 font-semibold text-base sm:text-lg py-2 sm:py-3 border-b border-slate-100 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
