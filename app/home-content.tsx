"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Asset Imports
import homePageImage from "@/public/images/homepageimage.png";
import chemicalImage from "@/public/images/companyLogo.png";

// --- DATA CONSTANTS ---
const STATS = [
  {
    value: "21+",
    label: "Years of Excellence",
    desc: "Industry-leading experience in chemical distribution and supply chain management.",
    color: "from-blue-600 to-blue-500",
    icon: "🏆",
  },
  {
    value: "200+",
    label: "Global Partners",
    desc: "Trusted relationships with manufacturers and industrial clients worldwide.",
    color: "from-blue-700 to-indigo-600",
    icon: "🤝",
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    desc: "Exceptional service quality with industry-leading client retention and feedback.",
    color: "from-indigo-600 to-blue-500",
    icon: "⭐",
  },
];

const SERVICES = [
  {
    title: "Quality Assurance",
    description: "Rigorous testing protocols and ISO-certified quality control processes ensure every batch meets international standards.",
    color: "from-blue-500 to-blue-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Global Logistics",
    description: "State-of-the-art supply chain management with real-time tracking and timely delivery worldwide.",
    color: "from-blue-600 to-blue-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Technical Support",
    description: "Expert consultation from our team of chemists and engineers for product selection and troubleshooting.",
    color: "from-blue-700 to-blue-800",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Sustainable Practices",
    description: "Environmentally responsible sourcing and distribution with eco-friendly packaging and shipping options.",
    color: "from-blue-500 to-indigo-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const CITIES = ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Multan", "Peshawar", "Quetta", "Rawalpindi"];
const COUNTRIES = ["China", "USA", "Germany", "UAE", "Belgium", "Turkey", "Kuwait", "Malaysia"];

const CONTACT_INFO = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    label: "Email",
    value: "al.ibrahim.group.of.companies@gmail.com"
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    label: "Phone",
    value: "+92 315 8966670"
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    label: "Location",
    value: "Karachi, Pakistan"
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    label: "Hours",
    value: "Mon-Sat: 9AM - 6PM"
  }
];

export default function HomeContent() {
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
    const x = (mousePosition.x - window.innerWidth / 2) / 60;
    const y = (mousePosition.y - window.innerHeight / 2) / 60;
    return {
      transform: `translate(${x * multiplier}px, ${y * multiplier}px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-100 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center space-x-3 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                  Trusted Partner Since 2005
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] text-slate-900 tracking-tight">
                Global Excellence in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                  LED & Chemicals
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Al-Ibrahim Group delivers world-class industrial chemical solutions and premium
                <span className="text-slate-900 font-semibold"> Universe LED </span>
                lighting across Pakistan and global markets.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/ibrahim-chemical"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  Explore Solutions
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
                >
                  Request a Quote
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-8">
                {STATS.map((stat, i) => (
                  <div key={i} className="space-y-1 border-l-2 border-slate-200 pl-4">
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter leading-none">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group lg:block hidden">
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white"
                style={getParallaxStyle(0.5)}
              >
                <Image
                  src={homePageImage}
                  alt="Industrial Facility"
                  className="w-full h-[600px] object-cover"
                  priority
                />
              </div>
              <div
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 z-20"
                style={getParallaxStyle(-0.3)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900 leading-none mb-1">ISO 9001:2015</div>
                    <div className="text-sm font-bold text-slate-500 uppercase">Quality Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEGACY SECTION --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src={chemicalImage}
                  alt="Product Quality Control"
                  className="w-full h-auto bg-slate-50 object-contain p-12"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold tracking-widest uppercase">
                Our Legacy
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
                Pioneering Innovation in <br /> Chemical & LED Industry
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Founded in 2005, Al-Ibrahim Group has emerged as a premier
                  leader in Pakistan’s industrial landscape. Under the visionary
                  leadership of our founder, the group has spent nearly two
                  decades building a reputation for excellence, acting as a
                  reliable bridge between global innovation and the evolving
                  needs of the domestic market.
                </p>
                <p>
                  In the Chemical sector, we leverage strategic global
                  partnerships to supply premium-grade raw materials across
                  Pakistan. Our specialized distribution network serves critical
                  industries including pharmaceuticals, textiles, and
                  agriculture. We ensure every product meets international
                  quality benchmarks, fueling the manufacturing core of the
                  national economy.
                </p>
                <p>
                  Expanding our horizon into the LED Industry, we provide
                  cutting-edge lighting solutions designed for high energy
                  efficiency and durability. By integrating advanced technology
                  with sustainable practices, we offer comprehensive LED
                  components and systems that help businesses reduce their
                  carbon footprint while optimizing their operational lighting
                  costs.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                {["🔬 Lab-Tested", "🏆 Certified", "🌍 Global Network"].map((item) => (
                  <span key={item} className="px-5 py-2.5 bg-slate-50 rounded-xl text-slate-700 font-bold border border-slate-200 text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <Link href="/leadership" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 group transition-all">
                  Read our full history
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 lg:py-32 bg-slate-50/50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                Proven Track Record
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Numbers That Speak Excellence
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium">
              Over two decades of consistent growth, unwavering quality, and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-[2rem] p-10 border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-5xl lg:text-6xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4 tracking-tighter`}>
                    {stat.value}
                  </div>
                  <div className="text-xl font-bold text-slate-900 mb-3">
                    {stat.label}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {stat.desc}
                  </p>
                  <div className="mt-8 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                COMPREHENSIVE SOLUTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-6">Comprehensive Solutions</h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              From sourcing to delivery, we handle every aspect of your industrial and technology supply needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="group bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:border-blue-500 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GLOBAL FOOTPRINT --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold tracking-widest uppercase">
              Global Presence
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">Serving Industries Worldwide</h2>
            <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/30">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Domestic Network</h3>
                  <p className="text-blue-400 font-bold uppercase text-xs tracking-widest mt-1">Major Cities Across Pakistan</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CITIES.map((city) => (
                  <div key={city} className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/5 text-slate-300 font-bold hover:bg-blue-600 hover:text-white transition-all cursor-default group/item">
                    <span className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 sm:p-10 rounded-[2.5rem] group hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-500/30">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Import Partners</h3>
                  <p className="text-blue-400 font-bold uppercase text-xs tracking-widest mt-1">Strategic Global Suppliers</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COUNTRIES.map((country) => (
                  <div key={country} className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/5 text-slate-300 font-bold hover:bg-blue-600 hover:text-white transition-all cursor-default group/item">
                    <span className="w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-125 transition-transform" />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CUSTOMER SATISFACTION --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-[100px]" />
              </div>
            </div>

            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
                  <span className="text-sm font-bold text-white tracking-widest uppercase">Client Excellence</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                  How We Take Care of Our <br className="hidden lg:block" /> Valuable Clients
                </h2>

                <p className="text-lg lg:text-2xl text-blue-50 mb-16 leading-relaxed max-w-4xl mx-auto font-medium opacity-90">
                  At Al-Ibrahim Group, every client relationship is built on trust, transparency, and exceptional service. We don&apos;t just deliver products—we deliver peace of mind and partnership that drives your success.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {[
                    {
                      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                      title: "Tailored Solutions",
                      desc: "Customized portfolios designed specifically for your industry requirements and operational needs."
                    },
                    {
                      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                      title: "Rapid Response",
                      desc: "24/7 dedicated support team ready to assist with technical queries and urgent industrial emergencies."
                    },
                    {
                      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
                      title: "Partnership Approach",
                      desc: "Long-term collaboration focused on mutual growth, innovation, and sustainable business success."
                    }
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

                <div className="inline-block bg-white rounded-[2.5rem] px-8 sm:px-16 py-10 lg:py-14 shadow-2xl shadow-blue-900/40 transform hover:scale-[1.02] transition-all">
                  <div className="text-7xl lg:text-9xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 tracking-tighter">
                    98%
                  </div>
                  <div className="text-2xl lg:text-3xl font-black text-slate-900 mb-2">Customer Satisfaction</div>
                  <p className="text-slate-500 font-bold text-sm sm:text-base">Based on 500+ client feedback surveys and retention metrics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-12 items-center p-8 sm:p-12 lg:p-16">
              <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
                <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">Get In Touch</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                  Ready to Partner with Industry Leaders?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Join hundreds of satisfied clients who trust Al-Ibrahim Group for their chemical supply and lighting needs. Let&apos;s discuss how our solutions can drive your success.
                </p>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 inline-flex items-center space-x-3"
                  >
                    <span>Request Consultation</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {CONTACT_INFO.map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg shadow-blue-500/20">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                        <div className="text-slate-900 font-bold truncate text-sm sm:text-base">{item.value}</div>
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