"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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
} from "lucide-react";
import EmailCopy from "../../components/emailCopy";

export default function ContactContent() {
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

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Phone",
      details: ["+92 300 1234567", "+92 321 7654321"],
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Email",
      details: ["al.ibrahim.group.of.companies@gmail.com"],
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Location",
      details: ["Karachi, Pakistan", "Visit by appointment"],
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9AM - 6PM", "Sunday: Closed"],
    },
  ];

  const departments = [
    {
      name: "Director",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 315 8966670",
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" strokeWidth={1.5} />,
    },
    {
      name: "Chemical Section",
      role: "Marketing Manager",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 315 8966670",
      icon: <Beaker className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" strokeWidth={1.5} />,
    },
    {
      name: "Chemical Section",
      role: "Purchase Manager",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 332 0274973",
      icon: <Beaker className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" strokeWidth={1.5} />,
    },
    {
      name: "LED Section",
      role: "CEO",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 331 0384436",
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" strokeWidth={1.5} />,
    },
    {
      name: "LED Section",
      role: "Sales Manager",
      email: "al.ibrahim.group.of.companies@gmail.com",
      phone: "+92 336 0322055",
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-brand-primary" strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-50 selection:text-brand-dark overflow-x-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-[20%] -left-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-light rounded-full blur-[100px] sm:blur-[150px] mix-blend-multiply" />
          <div className="absolute top-[40%] -right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-primary rounded-full blur-[80px] sm:blur-[120px] mix-blend-multiply opacity-40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6 md:space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 sm:space-x-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-brand-primary"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase tracking-widest">
                  We're Here to Help You
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                Let's Start <br />
                A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary block mt-1">
                  Conversation
                </span>
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
                Have questions about our products or services? Our expert team
                is ready to provide you with the perfect chemical and LED
                solutions for your business needs.
              </motion.p>

              <motion.div variants={fadeInUp} className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="#contact-form"
                  className="px-6 py-3.5 sm:px-8 sm:py-4 bg-brand-dark text-white rounded-xl font-bold shadow-lg shadow-brand-dark/20 hover:bg-opacity-90 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 text-sm sm:text-base w-full sm:w-auto"
                >
                  <span>Send Message</span>
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="tel:+923158966670"
                  className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3 text-sm sm:text-base w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Now</span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative mt-8 lg:mt-0 hidden lg:block"
            >
              <div className="relative aspect-[4/5] w-full max-w-lg ml-auto rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                  alt="Al-Ibrahim Corporate Office"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-5 xl:p-6 rounded-2xl flex items-center gap-4 text-white">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 xl:w-6 xl:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-base xl:text-lg">24/7 Support</div>
                    <div className="text-xs xl:text-sm opacity-90">Global Client Assistance</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex absolute -bottom-4 -left-6 xl:-left-12 bg-white rounded-2xl p-4 xl:p-6 shadow-2xl border border-slate-100 z-20 items-center space-x-3 xl:space-x-4">
                <div className="w-10 h-10 xl:w-12 xl:h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                  <Mail className="w-5 h-5 xl:w-6 xl:h-6" />
                </div>
                <EmailCopy />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <section id="contact-form" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

            {/* Form Container */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
              className="lg:col-span-7"
            >
              <div className="bg-slate-50 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 p-6 sm:p-8 lg:p-12 shadow-sm">
                <div className="mb-8 sm:mb-10">
                  <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 bg-brand-50 rounded-full mb-3 sm:mb-4 border border-brand-primary/20">
                    <span className="text-[10px] sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
                      Send Us A Message
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-3 sm:mb-4">
                    Share Your Requirements
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {status.type !== "idle" && (
                    <div
                      className={`p-4 rounded-xl font-bold text-xs sm:text-sm ${status.type === "success"
                        ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                        : status.type === "error"
                          ? "bg-red-50 border border-red-200 text-red-700"
                          : "bg-brand-50 border border-brand-primary/30 text-brand-dark"
                        }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm sm:text-base"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm sm:text-base"
                        placeholder="+92 315 8966670"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm sm:text-base"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Industry / Sector *</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium text-slate-900 text-sm sm:text-base"
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
                    <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5 sm:mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-medium resize-none text-slate-900 text-sm sm:text-base"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="w-full px-6 py-3.5 sm:px-8 sm:py-4 bg-brand-dark text-white font-bold text-base sm:text-lg rounded-xl hover:bg-opacity-90 shadow-lg shadow-brand-dark/20 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6 align-start content-start mt-6 lg:mt-0"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  variants={fadeInUp}
                  key={index}
                  className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-center"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm border border-slate-100 shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1.5 sm:mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-xs sm:text-sm md:text-base text-slate-600 font-medium break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- DEPARTMENTS SECTION --- */}
      <section className="py-16 sm:py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 bg-brand-50 rounded-full mb-4 sm:mb-6 border border-brand-primary/20">
              <span className="text-[10px] sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
                Specialized Teams
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6">
              Contact Our Departments
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium px-4">
              Reach out directly to our specialized teams for personalized assistance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-brand-50 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  {dept.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1">
                  {dept.name}
                </h3>
                {dept.role && (
                  <p className="text-xs sm:text-sm font-bold text-brand-primary mb-3 sm:mb-4 uppercase tracking-wide">
                    {dept.role}
                  </p>
                )}
                <div className="space-y-2 pt-4 border-t border-slate-100 w-full mt-auto">
                  {/* Applied break-all to prevent long emails from breaking mobile containers */}
                  <a href={`mailto:${dept.email}`} className="block text-xs sm:text-sm text-slate-500 hover:text-brand-dark font-medium transition-colors break-all px-2">
                    {dept.email}
                  </a>
                  <a href={`tel:${dept.phone}`} className="block text-sm sm:text-base text-slate-900 font-bold hover:text-brand-primary transition-colors">
                    {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISIT US & MAP SECTION --- */}
      <section className="bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-dark rounded-full blur-[100px] sm:blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-brand-primary rounded-full blur-[80px] sm:blur-[120px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Text Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
                <span className="text-[10px] sm:text-sm font-bold text-brand-light tracking-widest uppercase">
                  Visit Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Experience Our <br className="hidden lg:block" /> Operations
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 font-medium max-w-xl mx-auto lg:mx-0">
                Located in the heart of Karachi's industrial hub. Visit our facility and meet our expert team in person to discuss your exact manufacturing requirements.
              </p>

              <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4 inline-block text-left">
                {[
                  { icon: Building2, text: "State-of-the-art warehousing" },
                  { icon: Clock, text: "Operating Mon-Sat, 9AM to 6PM" },
                  { icon: Users, text: "Expert consultation on-site" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-light shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base text-slate-300 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Area */}
            <div className="relative rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 h-[350px] sm:h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14472.639455320703!2d67.06734199999999!3d24.9266395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f44e83f06b3%3A0xcda8d071b76df47c!2sFederal%20B%20Area%20Block%2022%20Gulberg%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 max-w-[calc(100%-32px)] sm:max-w-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-50 rounded-lg sm:rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-0.5 sm:mb-1">Our Headquarters</h3>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm">L-3, Block-22, F.B Industrial Area, Karachi</p>
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