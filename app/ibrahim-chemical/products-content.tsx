"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ChemicalCatalog from "@/components/ChemicalCatalog";
import {
  Droplets,
  PaintRoller,
  Shirt,
  Sprout,
  HardHat,
  Pill,
  Sparkles,
  Box,
  FlaskRound,
  Layers,
  Printer,
  Wind,
  SquareStack,
  PackageCheck,
  Truck,
  BadgeDollarSign,
  Microscope
} from "lucide-react";

import bgImage from "@/public/images/warehouse.png";
import chemicalImage from "@/public/images/chemicalImage.jpeg";

export default function ProductsContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getParallaxStyle = (multiplier: number = 1) => {
    if (!isMounted) return {};
    return {
      transform: `translate(${((mousePosition.x - window.innerWidth / 2) / 50) * multiplier}px, ${((mousePosition.y - window.innerHeight / 2) / 50) * multiplier}px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  const sectors = [
    { name: "Paints & Coatings", icon: PaintRoller, description: "Premium chemical solutions for paint manufacturing and industrial coatings", gradient: "from-red-500 to-pink-500" },
    { name: "Resins", icon: FlaskRound, description: "High-performance resins for diverse industrial applications", gradient: "from-purple-500 to-indigo-500" },
    { name: "Acrylic", icon: Layers, description: "Advanced acrylic compounds for specialty manufacturing", gradient: "from-blue-500 to-cyan-500" },
    { name: "Textile", icon: Shirt, description: "Textile chemicals and dyes for fabric industry excellence", gradient: "from-teal-500 to-green-500" },
    { name: "Inks & Printing", icon: Printer, description: "Professional grade inks and printing chemical solutions", gradient: "from-indigo-500 to-purple-500" },
    { name: "Adhesives & Glue", icon: SquareStack, description: "Industrial strength adhesives for manufacturing needs", gradient: "from-yellow-500 to-orange-500" },
    { name: "Packaging", icon: Box, description: "Chemical solutions for packaging industry requirements", gradient: "from-orange-500 to-red-500" },
    { name: "Pharmaceutical", icon: Pill, description: "Pharmaceutical-grade chemicals meeting global standards", gradient: "from-green-500 to-emerald-500" },
    { name: "Agriculture", icon: Sprout, description: "Agricultural chemicals supporting modern farming", gradient: "from-lime-500 to-green-500" },
    { name: "Cosmetics", icon: Sparkles, description: "Premium ingredients for cosmetic formulations", gradient: "from-pink-500 to-rose-500" },
    { name: "Lubricants", icon: Droplets, description: "Industrial lubricants and specialty oils", gradient: "from-slate-500 to-zinc-500" },
    { name: "Perfumes & Fragrances", icon: Wind, description: "Fine fragrance chemicals and aroma compounds", gradient: "from-violet-500 to-purple-500" },
    { name: "Construction", icon: HardHat, description: "Construction chemicals and building materials", gradient: "from-stone-500 to-slate-500" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm"
                style={getParallaxStyle(0.5)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-widest">
                  Premium Chemical Distribution Since 2005
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="text-slate-900">Industrial</span>
                <br />
                <span className="text-slate-900">Chemical</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1"
                >
                  <span>Request Quote</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6">
                {[
                  { value: "14+", label: "Industries" },
                  { value: "500+", label: "Products" },
                  { value: "100%", label: "Quality" },
                ].map((stat, i) => (
                  <div key={i} className="text-left border-l-2 border-slate-200 pl-4">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-tighter mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden sm:block">
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white h-[600px]"
                style={getParallaxStyle(1)}
              >
                <Image
                  src={chemicalImage}
                  alt="Industrial Chemical Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div
                className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl border border-slate-50 transform hover:-translate-y-2 transition-all duration-500"
                style={getParallaxStyle(-0.5)}
              >
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 leading-none mb-1">ISO Certified</div>
                    <div className="text-sm font-bold text-slate-500 uppercase">Quality Assured</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-blue-600 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:-translate-y-2 transition-all duration-500"
                style={getParallaxStyle(0.3)}
              >
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">14+</div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-900">
        <Image
          src={bgImage}
          alt="Warehouse Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-slate-900/60">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                About Our Products
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 text-white leading-tight">
              Pakistan&apos;s Premier Chemical Distributor
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-blue-50 leading-relaxed font-medium opacity-90">
              <p>
                Al-Ibrahim Group has established itself as Pakistan&apos;s premier chemical distribution company, serving diverse industries with premium-quality products and unmatched reliability.
              </p>
              <p>
                We specialize in supplying both liquid and powder chemicals sourced from leading global manufacturers. Our extensive product portfolio caters to manufacturing, processing, and industrial applications across 14+ specialized sectors.
              </p>
              <p>
                With state-of-the-art storage facilities, rigorous quality control processes, and a commitment to timely delivery, we ensure that your production never stops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ChemicalCatalog />

      {/* Industries Section */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-slate-900 leading-tight">
              Powering 14+ Industries
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              From pharmaceuticals to construction, we power the industries that drive economic growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 text-center">
                  <div className="mb-6 mx-auto w-fit p-4 bg-slate-50 rounded-2xl group-hover:bg-white/20 transition-all duration-500">
                    <sector.icon className="w-10 h-10 text-slate-700 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-3 transition-colors duration-500">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-slate-600 group-hover:text-white/90 leading-relaxed font-medium transition-colors duration-500">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px]" />
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Quality Commitment
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              International Quality Standards
            </h2>

            <p className="text-lg lg:text-2xl text-blue-50 mb-16 leading-relaxed max-w-4xl mx-auto font-medium opacity-90">
              Every product in our portfolio undergoes rigorous quality control and testing to ensure compliance with international standards. Our partnerships with world-leading manufacturers guarantee authenticity and consistency.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                  title: "Quality Tested",
                  desc: "Every batch meets international standards",
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: "Global Partners",
                  desc: "Leading manufacturers worldwide",
                },
                {
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                  title: "ISO Certified",
                  desc: "Compliance with global quality norms",
                },
              ].map((item, i) => (
                <div key={i} className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:bg-white/30 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-blue-50 text-sm leading-relaxed opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-12 items-center p-8 sm:p-12 lg:p-16">

              <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
                <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                    Get In Touch
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                  Need Specific Chemicals?
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Get in touch with our team to discuss your specific requirements and receive a customized quote. We&apos;re here to support your manufacturing success.
                </p>

                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 inline-flex items-center space-x-3"
                  >
                    <span>Request Custom Quote</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { icon: <PackageCheck className="w-8 h-8" />, label: "Bulk Orders" },
                  { icon: <Truck className="w-8 h-8" />, label: "Fast Delivery" },
                  { icon: <BadgeDollarSign className="w-8 h-8" />, label: "Best Prices" },
                  { icon: <Microscope className="w-8 h-8" />, label: "Lab Tested" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div className="text-lg font-bold text-slate-900">
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