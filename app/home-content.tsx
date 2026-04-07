"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Globe2, Wrench, Leaf,
  MapPin, Phone, Mail, Clock, Award, Building2, Users
} from "lucide-react";

// --- DATA CONSTANTS ---
const STATS = [
  { value: "21+", label: "Years of Excellence", icon: Award },
  { value: "200+", label: "Global Partners", icon: Globe2 },
  { value: "98%", label: "Satisfaction Rate", icon: Users },
  { value: "50+", label: "Cities Covered", icon: Building2 },
];

const SERVICES = [
  {
    title: "Quality Assurance",
    description: "Rigorous testing protocols and ISO-certified quality control processes ensure every batch meets international standards.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=2070",
    icon: ShieldCheck,
  },
  {
    title: "Global Logistics",
    description: "State-of-the-art supply chain management with real-time tracking and timely delivery worldwide.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    icon: Globe2,
  },
  {
    title: "Technical Support",
    description: "Expert consultation from our team of chemists and engineers for product selection and troubleshooting.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    icon: Wrench,
  },
  {
    title: "Sustainable Practices",
    description: "Environmentally responsible sourcing and distribution with eco-friendly packaging and shipping options.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80",
    icon: Leaf,
  },
];

const CITIES = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Multan", "Peshawar", "Quetta", "Rawalpindi"];
const COUNTRIES = ["China", "USA", "Germany", "UAE", "Belgium", "Turkey", "Kuwait", "Malaysia"];

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "al.ibrahim.group.of.companies@gmail.com" },
  { icon: Phone, label: "Phone", value: "+92 315 8966670" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
  { icon: Clock, label: "Hours", value: "Mon-Sat: 9AM - 6PM" }
];

export default function HomeContent() {
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

  return (
    <div className="min-h-screen bg-white selection:bg-brand-50 selection:text-brand-dark">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-brand-dark) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-brand-light rounded-full blur-[150px] mix-blend-multiply" />
          <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-brand-primary rounded-full blur-[120px] mix-blend-multiply opacity-40" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-3 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
                </span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                  Trusted Partner Since 2005
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-slate-900 tracking-tight">
                Global Excellence in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary">
                  LED & Chemicals
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Al-Ibrahim Group delivers world-class industrial chemical solutions and premium
                <span className="text-slate-900 font-bold"> Universe LED </span>
                lighting across Pakistan and global markets.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/ibrahim-chemical"
                  className="px-8 py-4 bg-brand-dark text-white rounded-xl font-bold hover:bg-opacity-90 shadow-lg shadow-brand-dark/20 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Request a Quote
                </Link>
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                  alt="Industrial Laboratory Excellence"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">ISO 9001:2015</div>
                    <div className="text-sm opacity-90">Certified Quality Control</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LEGACY SECTION --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="order-2 lg:order-1 relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100"
            >
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80"
                alt="Product Quality Control"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-[12px] border-white/20 rounded-[2.5rem] z-10 pointer-events-none" />
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 lg:order-2 space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 bg-brand-50 text-brand-dark rounded-lg text-sm font-bold tracking-widest uppercase">
                Our Legacy
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                Pioneering Innovation in <br /> Chemical & LED Industry
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2005, Al-Ibrahim Group has emerged as a premier leader in Pakistan’s industrial landscape. We serve as a reliable bridge between global innovation and the evolving needs of the domestic market.
                </p>
                <p>
                  In the Chemical sector, we leverage strategic global partnerships to supply premium-grade raw materials across Pakistan. We ensure every product meets international quality benchmarks, fueling the manufacturing core of the national economy.
                </p>
                <p>
                  Expanding into the LED Industry, we provide cutting-edge lighting solutions designed for high energy efficiency and durability, helping businesses reduce their carbon footprint.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-4">
                <Link href="/leadership" className="text-brand-primary font-bold hover:text-brand-dark flex items-center gap-2 group transition-all">
                  Read our full history
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SLEEK STATS METRICS BAR --- */}
      <section className="bg-brand-dark py-16">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-primary/30">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center px-4">
                  <div className="flex justify-center mb-4 text-brand-light">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-brand-50/80">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SERVICES (COMPREHENSIVE SOLUTIONS) --- */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-5 py-2 bg-brand-50 rounded-full mb-6 border border-brand-primary/20">
              <span className="text-sm font-bold text-brand-dark tracking-wide uppercase">
                Comprehensive Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6">End-to-End Excellence</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              From sourcing to delivery, we handle every aspect of your industrial and technology supply needs with precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  key={i}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-500 border border-slate-100 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm font-medium">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- GLOBAL FOOTPRINT --- */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-primary/20 rounded-full text-brand-dark text-sm font-bold tracking-widest uppercase">
              Global Presence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">Serving Industries Worldwide</h2>
            <div className="h-1.5 w-24 bg-brand-primary rounded-full mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Domestic */}
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] group hover:border-brand-primary/30 transition-all duration-500">
              <div className="flex items-center space-x-6 mb-10 gap-4 flex-wrap">
                <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-dark/20 mx-0 shrink-0">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Domestic Network</h3>
                  <p className="text-brand-primary font-bold uppercase text-xs tracking-widest mt-1">Major Cities Across Pakistan</p>
                </div>
              </div>

              {/* FIXED: Flex wrap layout for natural sizing */}
              <div className="flex flex-wrap gap-3">
                {CITIES.map((city) => (
                  <div key={city} className="flex items-center space-x-2.5 bg-white px-5 py-3 rounded-xl border border-slate-100 text-slate-700 font-bold shadow-sm hover:border-brand-primary/50 hover:shadow-md transition-all cursor-default">
                    <span className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                    <span className="text-sm md:text-base">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* International */}
            <div className="bg-slate-50 border border-slate-100 p-8 sm:p-10 rounded-[2.5rem] group hover:border-brand-primary/30 transition-all duration-500">
              <div className="flex items-center space-x-6 mb-10 gap-4 flex-wrap">
                <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand-primary/20 mx-0 shrink-0">
                  <Globe2 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Import Partners</h3>
                  <p className="text-brand-dark font-bold uppercase text-xs tracking-widest mt-1">Strategic Global Suppliers</p>
                </div>
              </div>

              {/* FIXED: Flex wrap layout for natural sizing */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
                {COUNTRIES.map((country) => (
                  <div key={country} className="flex items-center space-x-2.5 bg-white px-5 py-3 rounded-xl border border-slate-100 text-slate-700 font-bold shadow-sm hover:border-brand-primary/50 hover:shadow-md transition-all cursor-default">
                    <span className="w-2 h-2 bg-brand-primary rounded-full shrink-0" />
                    <span className="text-sm md:text-base">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CUSTOMER SATISFACTION --- */}
      <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/95 to-slate-900" />

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Client-Centric Excellence
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed font-medium">
              Every client relationship is built on trust, transparency, and exceptional service. We don&apos;t just deliver products—we deliver peace of mind and partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Tailored Solutions",
                desc: "Customized portfolios designed specifically for your industry requirements."
              },
              {
                icon: Clock,
                title: "Rapid Response",
                desc: "Dedicated support team ready to assist with technical queries and urgent needs."
              },
              {
                icon: Users,
                title: "Partnership Approach",
                desc: "Long-term collaboration focused on mutual growth and sustainable success."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-6 text-brand-light border border-brand-primary/30">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="bg-brand-50 rounded-[3rem] border border-brand-primary/10 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-12 items-center p-8 sm:p-12 lg:p-16">
              <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
                <div className="inline-block px-5 py-2 bg-white rounded-full border border-slate-200">
                  <span className="text-sm font-bold text-brand-dark tracking-wide uppercase">Get In Touch</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
                  Ready to Partner with Industry Leaders?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Join hundreds of satisfied clients who trust Al-Ibrahim Group for their chemical supply and lighting needs.
                </p>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group px-10 py-5 bg-brand-dark text-white rounded-2xl font-black text-lg shadow-xl shadow-brand-dark/20 hover:bg-opacity-90 transition-all transform hover:-translate-y-1 inline-flex items-center space-x-3"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {CONTACT_INFO.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-primary/30 transition-all flex items-center space-x-4">
                      <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-slate-900 font-bold truncate text-sm sm:text-base">{item.value}</div>
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