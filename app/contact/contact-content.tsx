"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import {
  Building2,
  Beaker,
  Lightbulb,
  Users,
  MapPin,
  Phone,
  Navigation,
  Mail,
  Clock,
  Zap,
  Globe
} from "lucide-react";
import EmailCopy from "../../components/emailCopy";

export default function ContactContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    industry: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus({
        type: "success",
        message: "✅ Thank you! We will contact you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        industry: "",
      });

      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Phone",
      details: ["+92 300 1234567", "+92 321 7654321"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Email",
      details: ["al.ibrahim.group.of.companies@gmail.com", ""],
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Location",
      details: ["Karachi, Pakistan", "Visit by appointment"],
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9AM - 6PM", "Sunday: Closed"],
      color: "from-amber-500 to-amber-600",
    },
  ];

  const departments = [
    {
      name: "Director",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 315 8966670",
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
    },
    {
      name: "Chemical Section",
      role: "Marketing Manager",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 315 8966670",
      icon: <Beaker className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
    },
    {
      name: "Chemical Section",
      role: "Purchase Manager",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 332 0274973",
      icon: <Beaker className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
    },
    {
      name: "LED Section",
      role: "CEO",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 331 0384436",
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
    },
    {
      name: "LED Section",
      role: "Sales Manager",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 336 0322055",
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-slate-700" strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f7f7f7]">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-10 md:left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-200 rounded-full blur-[80px] md:blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 md:right-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-indigo-100 rounded-full blur-[80px] md:blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div className="space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-widest">
                  We're Here to Help You
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="text-slate-900">Let's Start</span>
                <br />
                <span className="text-slate-900">A</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Conversation
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                Have questions about our products or services? Our expert team
                is ready to provide you with the perfect chemical and LED
                solutions for your business needs.
              </p>

              <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="px-6 md:px-8 py-3.5 md:py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Navigation className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a
                  href="tel:+923158966670"
                  className="px-6 md:px-8 py-3.5 md:py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Call Now</span>
                </a>
              </div>

              <div className="pt-6 md:pt-8 grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: "⚡", label: "24h Response" },
                  { icon: "🌍", label: "Global Reach" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 md:gap-4">
                    <div className="text-xl flex items-center justify-center rounded-lg md:rounded-xl shrink-0">
                      {item.icon}
                    </div>
                    <div className="text-sm md:text-lg font-black text-slate-900 sm:mt-1.5 md:mt-2">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile simplified image, Desktop full parallax experience */}
            <div className="relative mt-8 lg:mt-0">
              <div
                className="relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl lg:border-[12px] border-4 border-white h-[350px] sm:h-[450px] lg:h-[600px]"
                style={getParallaxStyle(0.8)}
              >
                <Image
                  src="https://martech.org/wp-content/uploads/2026/02/customer-service-CX-businessman-customers-600x335.png"
                  alt="Contact Al-Ibrahim Group"
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Badges only show on Large screens to prevent mobile clutter */}
              <div
                className="hidden lg:flex absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl border border-slate-50 z-20 items-center space-x-5"
                style={getParallaxStyle(-0.5)}
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <EmailCopy />
              </div>

              <div
                className="hidden lg:block absolute -top-8 -right-8 bg-blue-600 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 z-20"
                style={getParallaxStyle(0.3)}
              >
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">24/7</div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <section id="contact-form" className="py-20 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Form Container (7 Columns on Desktop) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl lg:rounded-[2rem] shadow-xl border border-slate-100 p-6 sm:p-8 md:p-10 lg:p-12">
                <div className="mb-8 md:mb-10">
                  <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
                    <span className="text-xs md:text-sm font-bold text-blue-700 tracking-wide uppercase">
                      Send Us A Message
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 md:mb-4">
                    Share Your Requirements
                  </h2>
                  <p className="text-sm md:text-lg text-slate-600">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  {status.type !== "idle" && (
                    <div
                      className={`p-4 rounded-xl font-bold text-sm ${status.type === "success"
                          ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                          : status.type === "error"
                            ? "bg-red-50 border border-red-200 text-red-700"
                            : "bg-blue-50 border border-blue-200 text-blue-700"
                        }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm md:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm md:text-base"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm md:text-base"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm md:text-base"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Industry / Sector *</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm md:text-base"
                    >
                      <option value="">Select your industry</option>
                      <option value="paints">Paints & Coatings</option>
                      <option value="pharmaceutical">Pharmaceutical</option>
                      <option value="textile">Textile</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="construction">Construction</option>
                      <option value="cosmetics">Cosmetics</option>
                      <option value="food">Food Processing</option>
                      <option value="led">LED Products</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-bold text-slate-700 mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 md:px-5 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all font-medium resize-none text-slate-900 text-sm md:text-base"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="w-full px-6 py-4 md:px-8 md:py-4 bg-blue-600 text-white font-bold text-base md:text-lg rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status.type === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Cards (5 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 md:gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${info.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1.5 md:mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-sm md:text-base text-slate-600 font-medium break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- DEPARTMENTS SECTION --- */}
      <section className="py-20 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-blue-100 rounded-full mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-bold text-blue-700 tracking-wide uppercase">
                Specialized Teams
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">
              Contact Our Departments
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 font-medium">
              Reach out to our specialized teams for personalized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group relative bg-slate-50 rounded-2xl md:rounded-[2rem] p-6 md:p-8 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="mb-4 md:mb-6 mx-auto w-fit p-3 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-sm group-hover:bg-blue-50 transition-colors">
                    {dept.icon}
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1 md:mb-2">
                    {dept.name}
                  </h3>

                  {dept.role && (
                    <p className="text-xs md:text-sm font-bold text-blue-600 mb-3 md:mb-4 uppercase tracking-wide">
                      {dept.role}
                    </p>
                  )}

                  <div className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-slate-200/60">
                    <a
                      href={`mailto:${dept.email}`}
                      className="block text-xs md:text-sm text-slate-600 hover:text-blue-600 font-medium transition-colors break-words"
                    >
                      {dept.email}
                    </a>
                    <a
                      href={`tel:${dept.phone}`}
                      className="block text-sm md:text-base text-slate-900 font-bold hover:text-blue-600 transition-colors"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISIT US SECTION --- */}
      <section className="py-20 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-white rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white rounded-full blur-[80px] md:blur-[120px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 md:mb-8 border border-white/20">
              <span className="text-xs md:text-sm font-bold text-white tracking-widest uppercase">
                Visit Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Experience Our Operations
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-blue-50 mb-10 md:mb-16 leading-relaxed max-w-3xl mx-auto font-medium opacity-90">
              Located in the heart of Karachi, Pakistan. Visit our state-of-the-art facility and meet our expert team in person.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
              {[
                {
                  icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Modern Facility",
                  desc: "State-of-the-art warehousing and testing labs",
                },
                {
                  icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Schedule Tour",
                  desc: "Book your facility visit in advance",
                },
                {
                  icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Meet the Team",
                  desc: "Connect with our expert professionals",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 text-white group-hover:scale-110 group-hover:bg-white/30 transition-all">
                    {item.icon}
                  </div>
                  <div className="text-lg md:text-xl font-black text-white mb-2 md:mb-3">
                    {item.title}
                  </div>
                  <div className="text-blue-50 text-sm md:text-base leading-relaxed opacity-90">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- RESPONSIVE MAP SECTION --- */}
      <section className="py-20 md:py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Flex-to-Absolute Container Strategy */}
          <div className="flex flex-col lg:block relative w-full bg-slate-50 lg:bg-transparent rounded-3xl lg:rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden">

            {/* Map Area */}
            <div className="h-[300px] sm:h-[400px] lg:h-[600px] w-full relative shrink-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14472.639455320703!2d67.06734199999999!3d24.9266395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f44e83f06b3%3A0xcda8d071b76df47c!2sFederal%20B%20Area%20Block%2022%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90"
              />
            </div>

            {/* Contact Card Overlay: 
              - On mobile/tablet: It renders below the map inside the flex container.
              - On Desktop (lg): It snaps into an absolute position over the map.
            */}
            <div className="bg-white p-6 sm:p-8 lg:absolute lg:bottom-10 lg:left-10 lg:w-[450px] lg:rounded-3xl lg:shadow-2xl lg:border lg:border-slate-100 z-10">
              <div className="flex flex-col sm:flex-row lg:flex-row items-center sm:items-start lg:items-start text-center sm:text-left lg:text-left gap-4 sm:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 mb-1.5 md:mb-2">
                    Our Headquarters
                  </h3>
                  <p className="text-slate-600 font-bold text-xs md:text-sm mb-1">
                    L-3, Block-22, F.B Industrial Area
                  </p>
                  <p className="text-slate-500 font-medium text-xs md:text-sm mb-3 md:mb-4">
                    Karachi, Pakistan
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs md:text-sm text-blue-600 font-bold bg-blue-50 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl">
                    <Phone className="w-3 h-3 md:w-4 md:h-4" />
                    +92 315 8966670
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}