'use client'
import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

export default function ContactContent() {

  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    industry: ''
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const getParallaxStyle = (multiplier: number = 1) => {
    if (!isMounted) return {}
    return {
      transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 50 * multiplier}px, ${(mousePosition.y - window.innerHeight / 2) / 50 * multiplier}px)`
    }
  }
  // Input change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form submit handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Success!
      setStatus({
        type: 'success',
        message: '✅ Thank you! We will contact you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        industry: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      });
    }
  };
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      details: ['+92 300 1234567', '+92 321 7654321'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      details: ['info@al-ibrahim.com', 'sales@al-ibrahim.com'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      details: ['Karachi, Pakistan', 'Visit by appointment'],
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      details: ['Monday - Saturday: 9AM - 6PM', 'Sunday: Closed'],
      color: 'from-amber-500 to-amber-600'
    }
  ]

  const departments = [
    {
      name: 'Sales & Inquiries',
      email: 'sales@al-ibrahim.com',
      phone: '+92 300 1234567',
      icon: '💼'
    },
    {
      name: 'Technical Support',
      email: 'support@al-ibrahim.com',
      phone: '+92 321 7654321',
      icon: '🔧'
    },
    {
      name: 'Customer Service',
      email: 'service@al-ibrahim.com',
      phone: '+92 333 9876543',
      icon: '🤝'
    },
    {
      name: 'LED Products',
      email: 'led@al-ibrahim.com',
      phone: '+92 345 5555555',
      icon: '💡'
    }
  ]
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Updated to Match Other Pages */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6  lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
                style={getParallaxStyle(0.5)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-600">We're Here to Help You</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-slate-900">Let's Start</span>
                <br />
                <span className="text-slate-900">A</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Conversation</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                Have questions about our products or services? Our expert team is ready to provide you with the perfect chemical and LED solutions for your business needs.
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 lg:px-10 py-4  bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 lg:px-10 py-4 bg-slate-100 text-slate-900 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </a>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-6">
                {[
                  { icon: '⚡', label: '24h Response' },
                  { icon: '🌍', label: 'Global Reach' }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="text-lg font-bold text-slate-900">{item.label}</div>
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
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
                    alt="Contact Al-Ibrahim Group"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                </div>
              </div>

              <div
                className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl shadow-slate-400/30 border border-slate-100 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer"
                style={getParallaxStyle(-0.5)}
              >
                <div className="flex items-center space-x-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900">Email Us</div>
                    <div className="text-sm font-bold text-slate-500">info@al-ibrahim.com</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:scale-105 hover:-rotate-2 transition-all duration-500"
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

      {/* Contact Form & Info Section */}
      <section id="contact-form" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-autopx-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl sm:rounded-[3rem] shadow-2xl shadow-slate-300/50 border-2 border-slate-100 p-6 sm:p-8 lg:p-12">
                <div className="mb-10">
                  <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-bold text-blue-700 tracking-wide">SEND US A MESSAGE</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-3 sm:mb-4">
                    Share Your Requirements
                  </h2>
                  <p className="text-base sm:text-lg text-slate-600">
                    Fill out the form and our team will get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {status.type !== 'idle' && (
                    <div className={`p-4 rounded-xl font-semibold ${status.type === 'success'
                      ? 'bg-green-100 border-2 border-green-500 text-green-800'
                      : status.type === 'error'
                        ? 'bg-red-100 border-2 border-red-500 text-red-800'
                        : 'bg-blue-100 border-2 border-blue-500 text-blue-800'
                      }`}>
                      {status.message}
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-slate-900 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-slate-900 font-medium"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-slate-900 font-medium"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-slate-900 font-medium"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-bold text-slate-700 mb-2">
                      Industry / Sector *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-slate-900 font-medium"
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
                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-slate-900 font-medium resize-none"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {status.type === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                </form>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="flex items-start space-x-5">
                    <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 mb-3">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-slate-600 font-medium">
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

      {/* Departments */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">SPECIALIZED TEAMS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Contact Our Departments
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Reach out to our specialized teams for personalized assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500">
                    {dept.icon}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-4">
                    {dept.name}
                  </h3>

                  <div className="space-y-3">
                    <a
                      href={`mailto:${dept.email}`}
                      className="block text-sm text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {dept.email}
                    </a>
                    <a
                      href={`tel:${dept.phone}`}
                      className="block text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
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

      {/* Visit Us Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-5 py-2 bg-white/20 rounded-full mb-8 border border-white/30">
              <span className="text-sm font-bold text-white tracking-wide">VISIT US</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Experience Our Operations
            </h2>

            <p className="text-xl lg:text-2xl text-blue-50 mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
              Located in the heart of Karachi, Pakistan. Visit our state-of-the-art facility and meet our expert team in person.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                  title: 'Modern Facility',
                  desc: 'State-of-the-art warehousing and testing labs'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  title: 'Schedule Tour',
                  desc: 'Book your facility visit in advance'
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Meet the Team',
                  desc: 'Connect with our expert professionals'
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="text-xl font-black text-white mb-3">{item.title}</div>
                  <div className="text-blue-50 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-300/50 border-2 border-slate-100 overflow-hidden">
            <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-200 to-slate-100">
              {/* Placeholder for Google Maps integration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <svg className="w-20 h-20 text-slate-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-2xl font-black text-slate-700">Karachi, Pakistan</div>
                  <div className="text-slate-500 font-medium">Map integration available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
