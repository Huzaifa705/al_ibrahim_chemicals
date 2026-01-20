'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)




  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  const getParallaxStyle = (multiplier: number = 1) => {
    if (!isMounted) return {}
    return {
      transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 50 * multiplier}px, ${(mousePosition.y - window.innerHeight / 2) / 50 * multiplier}px)`
    }
  }

  const stats = [
    { value: '15+', label: 'Years of Excellence', desc: 'Industry Leadership' },
    { value: '500+', label: 'Global Partners', desc: 'Worldwide Trust' },
    { value: '98%', label: 'Satisfaction Rate', desc: 'Client Retention' },
    { value: '50+', label: 'Countries Served', desc: 'International Reach' }
  ]

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Assurance',
      description: 'Rigorous testing protocols and ISO-certified quality control processes ensure every batch meets international standards.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'Global Logistics',
      description: 'State-of-the-art supply chain management with real-time tracking, temperature-controlled transport, and timely delivery.',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Technical Support',
      description: 'Expert consultation from our team of chemists and engineers for product selection, application, and troubleshooting.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainable Practices',
      description: 'Environmentally responsible sourcing and distribution with carbon-neutral shipping options and eco-friendly packaging.',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  const cities = ['Karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Multan', 'Peshawar', 'Quetta', 'Rawalpindi']
  const countries = ['China', 'USA', 'Germany', 'UAE', 'Saudi Arabia', 'Turkey', 'India', 'South Korea']

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
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
                style={getParallaxStyle(0.5)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-600">Trusted Chemical Partner Since 2010</span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900">Global</span>
                <br />
                <span className="text-slate-900">Chemical</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Excellence</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Al-Ibrahim Group delivers world-class chemical products with uncompromising quality standards.
                Your trusted partner for industrial excellence across Pakistan and beyond.
              </p>

              <div className="pt-6">
                <Link
                  href="/products"
                  className="inline-flex items-center space-x-2 px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Explore Solutions</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-3 gap-6">
                {stats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
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
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070&auto=format&fit=crop"
                    alt="Al-Ibrahim Chemical Manufacturing Facility"
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
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30">
                    <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900">ISO 9001:2015</div>
                    <div className="text-sm font-bold text-slate-500">Quality Certified</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:scale-105 hover:-rotate-2 transition-all duration-500"
                style={getParallaxStyle(0.3)}
              >
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">98%</div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pioneering Innovation Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
                <span className="text-sm font-bold text-blue-700 tracking-wide">OUR LEGACY</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Pioneering Innovation in Chemical Industry
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p className="font-medium">
                  Since 2010, Al-Ibrahim Group has established itself as a cornerstone of Pakistan's chemical distribution network, serving as the trusted bridge between global manufacturers and local industries.
                </p>
                <p>
                  Our state-of-the-art facilities and strategic partnerships with leading international suppliers enable us to deliver premium-grade chemicals that meet the most stringent quality standards. From pharmaceuticals to textiles, construction to agriculture, we power the industries that drive economic growth.
                </p>
                <p>
                  With a commitment to sustainable practices and environmental responsibility, we don't just supply chemicals—we provide comprehensive solutions that enhance operational efficiency and support your business objectives.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                {[
                  { icon: '🏆', label: 'Award-Winning Service' },
                  { icon: '🔬', label: 'Lab-Tested Quality' },
                  { icon: '♻️', label: 'Eco-Friendly' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/leadership"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:-translate-y-1"
              >
                <span>Learn Our Story</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border-4 border-white transform hover:scale-105 transition-all duration-700">
                <div className="relative w-full h-[650px] bg-gradient-to-br from-slate-200 to-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop"
                    alt="Chemical Laboratory Testing Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-3xl opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background Stats */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">PROVEN TRACK RECORD</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Numbers That Speak Our Excellence
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Over a decade of consistent growth, unwavering quality, and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: '15+',
                label: 'Years of Excellence',
                desc: 'Industry-leading experience in chemical distribution and supply chain management',
                color: 'from-blue-600 to-blue-500'
              },
              {
                value: '500+',
                label: 'Global Partners',
                desc: 'Trusted relationships with manufacturers, suppliers, and industrial clients worldwide',
                color: 'from-violet-600 to-violet-500'
              },
              {
                value: '98%',
                label: 'Satisfaction Rate',
                desc: 'Exceptional service quality with industry-leading client retention and satisfaction',
                color: 'from-emerald-600 to-emerald-500'
              },
              {
                value: '50+',
                label: 'Countries Served',
                desc: 'International reach spanning Asia, Middle East, Europe, and emerging markets',
                color: 'from-amber-600 to-amber-500'
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`text-6xl lg:text-7xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.value}
                  </div>
                  <div className="text-xl font-black text-slate-900 mb-3">{stat.label}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{stat.desc}</p>

                  <div className="mt-6 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Excellence */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">COMPREHENSIVE SOLUTIONS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              End-to-End Chemical Services
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              From sourcing to delivery, we handle every aspect of your chemical supply needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-white mb-4 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-600/20 rounded-full mb-6 border border-blue-500/30">
              <span className="text-sm font-bold text-blue-300 tracking-wide">GLOBAL FOOTPRINT</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Serving Industries Worldwide
            </h2>
            <p className="text-xl text-slate-300 font-medium">
              Our extensive distribution network ensures reliable chemical supply across continents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1">Domestic Network</h3>
                  <p className="text-blue-300 font-semibold">Major Cities Across Pakistan</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group/item cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-500/0 group-hover/item:from-blue-600/20 group-hover/item:to-blue-500/20 transition-all duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full group-hover/item:scale-150 group-hover/item:bg-blue-300 transition-all duration-300 shadow-lg shadow-blue-500/50"></div>
                      <span className="text-slate-200 font-bold text-lg group-hover/item:text-white transition-colors">{city}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1">Import Partners</h3>
                  <p className="text-blue-300 font-semibold">Strategic Global Suppliers</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <div
                    key={index}
                    className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group/item cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-500/0 group-hover/item:from-blue-600/20 group-hover/item:to-blue-500/20 transition-all duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full group-hover/item:scale-150 group-hover/item:bg-blue-300 transition-all duration-300 shadow-lg shadow-blue-500/50"></div>
                      <span className="text-slate-200 font-bold text-lg group-hover/item:text-white transition-colors">{country}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="relative rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl"></div>
              </div>
            </div>

            <div className="relative z-10 px-8 lg:px-16 py-20 lg:py-24">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-block px-5 py-2 bg-white/20 rounded-full mb-8 border border-white/30">
                  <span className="text-sm font-bold text-white tracking-wide">CLIENT EXCELLENCE</span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
                  How We Take Care of Our Valuable Clients
                </h2>

                <p className="text-xl lg:text-2xl text-blue-50 mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
                  At Al-Ibrahim Group, every client relationship is built on trust, transparency, and exceptional service.
                  We don't just deliver chemicals—we deliver peace of mind, reliability, and partnership that drives your success forward.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {[
                    {
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      ),
                      title: 'Tailored Solutions',
                      desc: 'Customized chemical portfolios designed specifically for your industry requirements and operational needs'
                    },
                    {
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                      title: 'Rapid Response',
                      desc: '24/7 dedicated support team with industry experts ready to assist with technical queries and emergencies'
                    },
                    {
                      icon: (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      ),
                      title: 'Partnership Approach',
                      desc: 'Long-term collaboration focused on mutual growth, innovation, and sustainable business success'
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

                <div className="inline-block bg-white rounded-[2.5rem] px-16 py-12 shadow-2xl shadow-blue-900/30 transform hover:scale-105 transition-all duration-500">
                  <div className="text-8xl lg:text-9xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-4">
                    98%
                  </div>
                  <div className="text-2xl lg:text-3xl font-black text-slate-900 mb-2">Customer Satisfaction</div>
                  <div className="text-slate-600 font-semibold">Based on 500+ client feedback surveys and retention metrics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-300/50 border-2 border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-12 items-center p-12 lg:p-16">
              <div className="lg:col-span-3 space-y-8">
                <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-bold text-blue-700 tracking-wide">GET IN TOUCH</span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                  Ready to Partner with Industry Leaders?
                </h2>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Join hundreds of satisfied clients who trust Al-Ibrahim Group for their chemical supply needs.
                  Let's discuss how our comprehensive solutions can drive your business forward.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                >
                  <span>Request Consultation</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 gap-5">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'info@al-ibrahim.com'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Phone',
                    value: '+92 300 1234567'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Location',
                    value: 'Karachi, Pakistan'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: 'Hours',
                    value: 'Mon-Sat: 9AM-6PM'
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="text-slate-900 font-bold">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <span className="text-white font-black text-xl">AI</span>
                </div>
                <div>
                  <span className="text-white font-black text-2xl block">AL-IBRAHIM GROUP</span>
                  <span className="text-blue-400 text-xs font-bold tracking-wider">CHEMICAL SOLUTIONS</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                Leading the chemical industry with premium quality products, exceptional service, and unwavering commitment to client success since 2010.
              </p>
              <div className="flex space-x-4">
                {['in', 'f', 't'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="font-bold">{social}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-black mb-6 text-lg">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Our Team', 'Careers', 'News', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-6 text-lg">Products</h4>
              <ul className="space-y-4">
                {['Industrial', 'Pharmaceutical', 'Agricultural', 'Textile', 'Construction'].map((product) => (
                  <li key={product}>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">{product}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-6 text-lg">Resources</h4>
              <ul className="space-y-4">
                {['Documentation', 'Safety Guides', 'Case Studies', 'Blog', 'Support'].map((resource) => (
                  <li key={resource}>
                    <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors font-medium">{resource}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <p className="text-slate-500 text-sm font-medium">
                © 2026 Al-Ibrahim Group. All rights reserved.
              </p>
              <div className="flex space-x-8 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <a key={item} href="#" className="text-slate-500 hover:text-blue-400 transition-colors font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
