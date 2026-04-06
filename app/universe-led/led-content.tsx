"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProductCatalog from "./ProductCatalog";
import { Zap, BatteryCharging, Recycle, Sparkles, ArrowRight } from "lucide-react";
import universeLogo from "@/public/images/universeLogo.png";

export default function UniverseLedContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getParallaxStyle = (multiplier: number = 1) => {
    if (!isMounted) return {};
    return {
      transform: `translate(${((mousePosition.x - window.innerWidth / 2) / 60) * multiplier}px, ${((mousePosition.y - window.innerHeight / 2) / 60) * multiplier}px)`,
      transition: "transform 0.1s ease-out",
    };
  };

  const features = [
    {
      title: "Energy Efficiency",
      description: "Up to 80% energy savings compared to traditional lighting solutions",
      // icon: <Zap className="w-8 h-8" />,
      icon: "⚡",
    },
    {
      title: "Long Lifespan",
      description: "50,000+ hours operational life with minimal maintenance requirements",
      // icon: <BatteryCharging className="w-8 h-8" />,
      icon: "🔋",
    },
    {
      title: "Eco-Friendly",
      description: "Mercury-free, low heat emission, and fully recyclable components",
      // icon: <Recycle className="w-8 h-8" />,
      icon: "♻️",
    },
    {
      title: "Superior Quality",
      description: "Premium-grade LEDs with consistent color temperature and brightness",
      // icon: <Sparkles className="w-8 h-8" />,
      icon: "✨",
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-blue-200 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-widest">
                  Universe LED - Premium Solutions
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Illuminate <br />
                Your World <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  With LED
                </span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                Universe LED, another key venture of the group, specializes in the import and supply of LED products, providing a wide range of modern and energy-efficient LED solutions. The company is committed to delivering innovative lighting products that combine performance, durability, and sustainability. By keeping pace with evolving technology and market trends, Universe LED aims to support energy conservation while offering reliable lighting solutions for residential, commercial, and industrial applications.
              </p>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="pt-8 grid sm:grid-cols-2 gap-6">
                {features.slice(0, 2).map((feature, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-wrap gap-4 items-center">
                    <div className="text-2xl mb-3">{feature.icon}</div>
                    <div className="text-base sm:text-lg font-black text-slate-900">
                      {feature.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden sm:block">
              <div
                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-[12px] border-white h-[600px]"
                style={getParallaxStyle(0.8)}
              >
                <Image
                  src={universeLogo}
                  alt="Universe LED Modern Lighting Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div
                className="absolute -top-8 -right-8 bg-blue-600 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:-translate-y-2 transition-all duration-500"
                style={getParallaxStyle(0.3)}
              >
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-black text-white mb-1">
                    80%
                  </div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">
                    Energy Saving
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS GRID (Component) --- */}
      <ProductCatalog />

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Superior LED Technology
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              All our LED products undergo rigorous quality control and testing procedures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {feature.icon}
                  </div>
                  <div className="text-xl font-black text-slate-900 mb-4">
                    {feature.title}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUALITY ASSURANCE --- */}
      <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
              <span className="text-sm font-bold text-white tracking-widest uppercase">
                Quality Guarantee
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
              Certified Quality You Can Trust
            </h2>

            <p className="text-lg lg:text-2xl text-blue-50 mb-16 leading-relaxed max-w-4xl mx-auto font-medium opacity-90">
              We use the latest technology to guarantee superior performance, durability, and energy efficiency. All products come with extended warranties and have lifecycles measured in years, not months.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "50,000+", label: "Hours Lifespan" },
                { value: "80%", label: "Energy Saving" },
                { value: "100%", label: "Quality Tested" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="text-4xl lg:text-5xl font-black text-white mb-3 tracking-tighter">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base font-bold text-blue-100 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:p-16">
              <div className="space-y-8">
                <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
                    Get Started
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  Ready to Switch to LED?
                </h2>

                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  Contact us today for customized LED solutions and expert consultation. Our team is ready to help you find the perfect lighting solution for your needs.
                </p>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-3 px-2 sm:px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1"
                  >
                    <span>Contact Us Today</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative hidden sm:block">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white h-[500px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2069&auto=format&fit=crop"
                    alt="LED Lighting Installation"
                    fill
                    className="object-cover"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}