"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import ChemicalCatalog from "@/components/ChemicalCatalog";
import {
  Droplets, PaintRoller, Shirt, Sprout, HardHat, Pill, Sparkles, Box,
  FlaskRound, Layers, Printer, Wind, SquareStack, PackageCheck, Truck,
  BadgeDollarSign, Microscope, CheckCircle2
} from "lucide-react";

export default function ProductsContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const sectors = [
    { name: "Paints & Coatings", icon: PaintRoller, description: "Premium chemical solutions for paint manufacturing and industrial coatings." },
    { name: "Resins", icon: FlaskRound, description: "High-performance resins for diverse industrial applications." },
    { name: "Acrylic", icon: Layers, description: "Advanced acrylic compounds for specialty manufacturing." },
    { name: "Textile", icon: Shirt, description: "Textile chemicals and dyes for fabric industry excellence." },
    { name: "Inks & Printing", icon: Printer, description: "Professional grade inks and printing chemical solutions." },
    { name: "Adhesives & Glue", icon: SquareStack, description: "Industrial strength adhesives for manufacturing needs." },
    { name: "Packaging", icon: Box, description: "Chemical solutions for packaging industry requirements." },
    { name: "Pharmaceutical", icon: Pill, description: "Pharmaceutical-grade chemicals meeting global standards." },
    { name: "Agriculture", icon: Sprout, description: "Agricultural chemicals supporting modern farming." },
    { name: "Cosmetics", icon: Sparkles, description: "Premium ingredients for cosmetic formulations." },
    { name: "Lubricants", icon: Droplets, description: "Industrial lubricants and specialty oils." },
    { name: "Perfumes", icon: Wind, description: "Fine fragrance chemicals and aroma compounds." },
    { name: "Construction", icon: HardHat, description: "Construction chemicals and building materials." },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-50 selection:text-brand-dark overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-light rounded-full blur-[100px] sm:blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-20 right-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-primary rounded-full blur-[80px] sm:blur-[100px] mix-blend-multiply opacity-40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 md:space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 sm:space-x-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-brand-primary"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-widest">
                  Premium Distribution Since 2005
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Industrial <br />
                Chemical <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary block mt-1">
                  Solutions
                </span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-brand-dark text-white rounded-xl font-bold hover:bg-opacity-90 shadow-lg shadow-brand-dark/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span>Request Quote</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-6 sm:pt-8 grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { value: "14+", label: "Industries" },
                  { value: "500+", label: "Products" },
                  { value: "100%", label: "Quality" },
                ].map((stat, i) => (
                  <div key={i} className="text-left border-l-2 border-brand-primary/30 pl-3 sm:pl-4">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] w-full max-w-lg ml-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
                  alt="Industrial Chemical Solutions"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg leading-tight">ISO Certified</div>
                    <div className="text-sm opacity-90">Quality Assured</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-slate-900">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
          alt="Warehouse Background"
          fill
          className="object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-900/90" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <span className="text-xs sm:text-sm font-bold text-brand-light tracking-widest uppercase">
                About Our Products
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Pakistan's Premier Chemical Distributor
            </h2>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-medium">
              <p>
                Al-Ibrahim Group has established itself as Pakistan's premier chemical distribution company, serving diverse industries with premium-quality products and unmatched reliability.
              </p>
              <p>
                We specialize in supplying both liquid and powder chemicals sourced from leading global manufacturers. Our extensive product portfolio caters to manufacturing, processing, and industrial applications across 14+ specialized sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CATALOG COMPONENT --- */}
      <ChemicalCatalog />

      {/* --- INDUSTRIES SECTION --- */}
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full mb-4 sm:mb-6 border border-brand-primary/20">
              <span className="text-xs sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Powering 14+ Industries
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium px-4">
              From pharmaceuticals to construction, we power the industries that drive economic growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05 }}
                key={index}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-brand-primary/50 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 sm:mb-6 p-4 bg-slate-50 rounded-2xl group-hover:bg-white/20 transition-all duration-500 text-brand-dark group-hover:text-white">
                    <sector.icon className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-white mb-2 sm:mb-3 transition-colors duration-500">
                    {sector.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 group-hover:text-white/90 leading-relaxed font-medium transition-colors duration-500">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-6xl mx-auto bg-brand-50 rounded-[2rem] sm:rounded-[3rem] border border-brand-primary/20 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center p-6 sm:p-12 lg:p-16">

              <div className="lg:col-span-3 space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-white rounded-full border border-slate-200">
                  <span className="text-xs sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
                    Get In Touch
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  Need Specific Chemicals?
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Contact our team to discuss your specific requirements and receive a customized quote. We're here to support your manufacturing success.
                </p>
                <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 bg-brand-dark text-white rounded-xl font-bold text-base sm:text-lg shadow-xl shadow-brand-dark/20 hover:bg-opacity-90 transition-all transform hover:-translate-y-1 inline-flex items-center space-x-3 w-full sm:w-auto justify-center"
                  >
                    <span>Request Custom Quote</span>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {[
                  { icon: PackageCheck, label: "Bulk Orders" },
                  { icon: Truck, label: "Fast Delivery" },
                  { icon: BadgeDollarSign, label: "Best Prices" },
                  { icon: Microscope, label: "Lab Tested" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-slate-100 hover:border-brand-primary/30 hover:shadow-lg transition-all group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 sm:gap-4">
                      <div className="text-brand-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 sm:mt-1">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}