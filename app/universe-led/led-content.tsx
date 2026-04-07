"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import ProductCatalog from "./ProductCatalog";
import { Zap, BatteryCharging, Recycle, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import universeLogo from "@/public/images/universeLogo.png";

export default function UniverseLedContent() {
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
      transition: { staggerChildren: 0.15 }
    }
  };

  const features = [
    {
      title: "Energy Efficiency",
      description: "Up to 80% energy savings compared to traditional lighting solutions",
      icon: Zap,
    },
    {
      title: "Long Lifespan",
      description: "50,000+ hours operational life with minimal maintenance requirements",
      icon: BatteryCharging,
    },
    {
      title: "Eco-Friendly",
      description: "Mercury-free, low heat emission, and fully recyclable components",
      icon: Recycle,
    },
    {
      title: "Superior Quality",
      description: "Premium-grade LEDs with consistent color temperature and brightness",
      icon: Sparkles,
    },
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
                  Universe LED - Premium Solutions
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Illuminate <br />
                Your World <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary block mt-1">
                  With LED
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                Universe LED specializes in the import and supply of modern, energy-efficient lighting solutions. We are committed to delivering innovative products that combine high performance, durability, and sustainability for residential, commercial, and industrial applications.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-brand-dark text-white rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 shadow-lg shadow-brand-dark/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-6 grid sm:grid-cols-2 gap-4 sm:gap-6">
                {features.slice(0, 2).map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 group hover:border-brand-primary/30 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-sm sm:text-base font-black text-slate-900">
                        {feature.title}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] w-full max-w-lg ml-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 flex items-center justify-center p-8">
                {/* Fallback pattern if UniverseLogo is transparent/small */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-brand-dark) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="relative w-full h-full drop-shadow-2xl hover:scale-105 transition-transform duration-700">
                  <Image
                    src={universeLogo}
                    alt="Universe LED Modern Lighting Solutions"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-brand-dark rounded-3xl p-6 shadow-2xl shadow-brand-dark/20 transform hover:-translate-y-2 transition-all duration-500">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                    80%
                  </div>
                  <div className="text-[10px] font-bold text-brand-light uppercase tracking-widest">
                    Energy Saving
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md border border-slate-100 p-5 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-900 leading-tight">Premium Grade</div>
                  <div className="text-sm text-slate-600 font-medium">Verified Durability</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS GRID (Component) --- */}
      <ProductCatalog />

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full mb-4 sm:mb-6 border border-brand-primary/20">
              <span className="text-xs sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Superior LED Technology
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium px-4">
              All our LED products undergo rigorous quality control and testing procedures to ensure maximum efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className="group relative bg-slate-50 rounded-[2rem] p-6 sm:p-8 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />

                  <div className="relative z-10 text-center flex flex-col items-center">
                    <div className="mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 group-hover:border-brand-primary/30 group-hover:text-brand-primary transition-all duration-300 text-slate-700">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                      {feature.title}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- QUALITY ASSURANCE --- */}
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-950 relative overflow-hidden">
        {/* Subtle Brand Accents */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-dark rounded-full blur-[100px] sm:blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-primary rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full mb-6 sm:mb-8 border border-white/10">
              <span className="text-xs sm:text-sm font-bold text-brand-light tracking-widest uppercase">
                Quality Guarantee
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-tight">
              Certified Quality You Can Trust
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-12 sm:mb-16 leading-relaxed max-w-3xl mx-auto font-medium">
              We use the latest technology to guarantee superior performance, durability, and energy efficiency. All products come with extended warranties and have lifecycles measured in years, not months.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: "50,000+", label: "Hours Lifespan" },
                { value: "80%", label: "Energy Saving" },
                { value: "100%", label: "Quality Tested" },
              ].map((stat, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="bg-white/5 backdrop-blur-xl rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs lg:text-sm font-bold text-brand-light uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-12 lg:p-16">
              <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full border border-brand-primary/20">
                  <span className="text-xs sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
                    Get Started
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  Ready to Switch to LED?
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                  Contact us today for customized LED solutions and expert consultation. Our team is ready to help you find the perfect lighting solution for your needs.
                </p>

                <div className="pt-2 sm:pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-brand-dark text-white rounded-xl font-bold text-base sm:text-lg hover:bg-opacity-90 shadow-xl shadow-brand-dark/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                  >
                    <span>Contact Us Today</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-[8px] border-white h-[400px] xl:h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2069&auto=format&fit=crop"
                    alt="LED Lighting Installation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}