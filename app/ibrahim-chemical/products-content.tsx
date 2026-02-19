"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import ChemicalCatalog from "@/components/ChemicalCatalog";
import Image from "next/image";
import {
  Droplets, // Lubricants / Oils ke liye
  PaintRoller, // Paints & Coatings ke liye
  Shirt, // Textiles ke liye
  Sprout, // Agriculture / Fertilizers ke liye
  HardHat, // Construction ke liye
  Pill, // Pharmaceuticals ke liye
  Sparkles, // Cosmetics / Personal Care ke liye
  Box, // Plastics / Packaging ke liye
  FlaskRound, // Resins (Chemical synthesis ke liye)  FlaskRound,
  Layers, // Acrylic (Coating aur layering ke liye)
  Printer, // Inks & Printing
  Wind,
  SquareStack, // Adhesives & Glue ke liye
} from "lucide-react";
import bgImage from "../../public/images/warehouse.png";
import chemicalImage from "../../public/images/chemicalImage.jpeg";
export default function ProductsContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const getParallaxStyle = (multiplier: number = 1) => {
    if (!isMounted) return {};
    return {
      transform: `translate(${((mousePosition.x - window.innerWidth / 2) / 50) * multiplier}px, ${((mousePosition.y - window.innerHeight / 2) / 50) * multiplier}px)`,
    };
  };

  const sectors = [
    {
      name: "Paints & Coatings",
      icon: PaintRoller,
      description:
        "Premium chemical solutions for paint manufacturing and industrial coatings",
      gradient: "from-red-500 to-pink-500",
    },
    {
      name: "Resins",
      icon: FlaskRound,
      description:
        "High-performance resins for diverse industrial applications",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Acrylic",
      icon: Layers,
      description: "Advanced acrylic compounds for specialty manufacturing",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Textile",
      icon: Shirt,
      description: "Textile chemicals and dyes for fabric industry excellence",
      gradient: "from-teal-500 to-green-500",
    },
    {
      name: "Inks & Printing",
      icon: Printer,
      description: "Professional grade inks and printing chemical solutions",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Adhesives & Glue",
      icon: SquareStack, // Link icon strength aur bonding ko perfectly represent karta hai
      description: "Industrial strength adhesives for manufacturing needs",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "Packaging",
      icon: Box,
      description: "Chemical solutions for packaging industry requirements",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Pharmaceutical",
      icon: Pill,
      description: "Pharmaceutical-grade chemicals meeting global standards",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Agriculture",
      icon: Sprout,
      description: "Agricultural chemicals supporting modern farming",
      gradient: "from-lime-500 to-green-500",
    },
    {
      name: "Cosmetics",
      icon: Sparkles,
      description: "Premium ingredients for cosmetic formulations",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Lubricants",
      icon: Droplets,
      description: "Industrial lubricants and specialty oils",
      gradient: "from-slate-500 to-zinc-500",
    },
    {
      name: "Perfumes & Fragrances",
      icon: Wind,
      description: "Fine fragrance chemicals and aroma compounds",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      name: "Construction",
      icon: HardHat,
      description: "Construction chemicals and building materials",
      gradient: "from-stone-500 to-slate-500",
    },
  ];

  const productTypes = [
    {
      title: "Liquid Chemicals",
      description:
        "Premium liquid chemicals including solvents, acids, bases, surfactants, and specialty formulations for diverse industrial processes.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      gradient: "from-blue-600 to-blue-500",
    },
    {
      title: "Powder Chemicals",
      description:
        "High-purity powder chemicals including polymers, additives, catalysts, and raw materials for manufacturing excellence.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      gradient: "from-violet-600 to-violet-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div
                className="inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-blue-50 rounded-full border border-blue-100"
                style={getParallaxStyle(0.5)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-blue-600">
                  Premium Chemical Distribution Since 2005
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900">Industrial</span>
                <br />
                <span className="text-slate-900">Chemical</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed"></p>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 text-sm sm:text-base bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Request Quote</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6">
                {[
                  { value: "14+", label: "Industries" },
                  { value: "500+", label: "Products" },
                  { value: "100%", label: "Quality" },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 ">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border-8 border-white"
                style={getParallaxStyle(1)}
              >
                <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-200 to-slate-100">
                  <img
                    src={chemicalImage.src}
                    alt="Industrial Chemical Solutions"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0"></div>
                </div>
              </div>

              <div
                className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl shadow-slate-400/30 border border-slate-100 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer"
                style={getParallaxStyle(-0.5)}
              >
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30">
                    <svg
                      className="w-9 h-9 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-slate-900">
                      ISO Certified
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-500">
                      Quality Assured
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:scale-105 hover:-rotate-2 transition-all duration-500"
                style={getParallaxStyle(0.3)}
              >
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1 ">
                    14+
                  </div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">
                    Industries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        style={{
          backgroundImage: `url(${bgImage.src})`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="py-24 lg:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
              <span className="text-sm font-bold text-blue-700 tracking-wide">
                ABOUT OUR PRODUCTS
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 text-center text-white">
              Pakistan's Premier Chemical Distributor
            </h2>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                Al-Ibrahim Group has established itself as Pakistan's premier
                chemical distribution company, serving diverse industries with
                premium-quality products and unmatched reliability.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                We specialize in supplying both liquid and powder chemicals
                sourced from leading global manufacturers. Our extensive product
                portfolio caters to manufacturing, processing, and industrial
                applications across 14+ specialized sectors.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
                With state-of-the-art storage facilities, rigorous quality
                control processes, and a commitment to timely delivery, we
                ensure that your production never stops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Types */}
      {/* <section className="py-12 lg:py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">PRODUCT RANGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
              Liquid & Powder Chemicals
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 text-center mb-6 sm:mb-8 md:mb-10">
              We supply both liquid and powder chemicals tailored to your industry specifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {productTypes.map((type, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border-2 border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${type.gradient} rounded-2xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {type.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-3 sm:mb-4 text-slate-900">{type.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <ChemicalCatalog />

      {/* Industries Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">
                INDUSTRIES WE SERVE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center text-slate-900">
              Powering 14+ Industries
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 text-center mb-6 sm:mb-8 md:mb-10">
              From pharmaceuticals to construction, we power the industries that
              drive economic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 text-center">
                  {/* <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-500">
                    {sector.icon}
                  </div> */}
                  <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 p-4 bg-slate-50 rounded-full group-hover:bg-white/20">
                    {/* Yahan Icon render ho raha hai */}
                    <sector.icon
                      className="w-12 h-12 sm:w-14 sm:h-14 text-slate-700 group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.5} // Icon ki line ki motai
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-5 py-2 bg-white/20 rounded-full mb-8 border border-white/30">
              <span className="text-sm font-bold text-white tracking-wide">
                QUALITY COMMITMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight">
              International Quality Standards
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 mb-8 sm:mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
              Every product in our portfolio undergoes rigorous quality control
              and testing to ensure compliance with international standards. Our
              partnerships with world-leading manufacturers guarantee
              authenticity and consistency.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Quality Tested",
                  desc: "Every batch meets international standards",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Global Partners",
                  desc: "Leading manufacturers worldwide",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  ),
                  title: "ISO Certified",
                  desc: "Compliance with global quality norms",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="text-lg sm:text-xl font-black text-white mb-2 sm:mb-3">
                    {item.title}
                  </div>
                  <div className="text-sm sm:text-base text-blue-50 leading-relaxed">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl sm:rounded-3xl lg:rounded-[3rem] shadow-2xl shadow-slate-300/50 border-2 border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-5gap-6 md:gap-8 lg:gap-12 items-center p-6 sm:p-8 md:p-12 lg:p-16">
              <div className="lg:col-span-3 space-y-8">
                <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-bold text-blue-700 tracking-wide">
                    GET IN TOUCH
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  Need Specific Chemicals?
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                  Get in touch with our team to discuss your specific
                  requirements and receive a customized quote. We're here to
                  support your manufacturing success.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 mb-4"
                >
                  <span>Request Custom Quote</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5">
                {[
                  { icon: "📦", label: "Bulk Orders" },
                  { icon: "🚚", label: "Fast Delivery" },
                  { icon: "💰", label: "Best Prices" },
                  { icon: "🔬", label: "Lab Tested" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl  p-4 sm:p-5 md:p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
