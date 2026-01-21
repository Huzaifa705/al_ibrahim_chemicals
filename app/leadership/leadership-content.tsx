'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LeadershipContent() {
 const [scrolled, setScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

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


  const coreValues = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Quality Excellence',
      desc: 'Uncompromising commitment to delivering premium-grade chemicals that meet and exceed international quality standards',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Customer First',
      desc: 'Building lasting partnerships through exceptional service, transparency, and dedication to client success',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovation Drive',
      desc: 'Continuously evolving with cutting-edge solutions, technology adoption, and industry best practices',
      color: 'from-violet-500 to-violet-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainability',
      desc: 'Environmental stewardship through responsible sourcing, eco-friendly practices, and green initiatives',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Integrity & Ethics',
      desc: 'Operating with honesty, accountability, and ethical business practices in all our dealings',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Reliability',
      desc: 'Consistent performance, timely delivery, and dependable supply chain management you can count on',
      color: 'from-indigo-500 to-indigo-600'
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
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
                style={getParallaxStyle(0.5)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-600">Visionary Leadership Since 2010</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900">Meet Our</span>
                <br />
                <span className="text-slate-900">Visionary</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Leader</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                Guided by expertise, driven by excellence, committed to innovation. 
                Muhammad Ibrahim has transformed Pakistan's chemical industry through visionary leadership and unwavering dedication.
              </p>
              
              <div className="pt-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Connect With Us</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-6">
                {[
                  { value: '15+', label: 'Years Leading' },
                  { value: '500+', label: 'Partnerships' }
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
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
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop"
                    alt="Muhammad Ibrahim - CEO & Founder"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                      <h3 className="text-2xl font-black text-white mb-1">Muhammad Ibrahim</h3>
                      <p className="text-lg font-bold text-blue-200">Founder & CEO</p>
                    </div>
                  </div>
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
                    <div className="text-lg font-black text-slate-900">Award Winning</div>
                    <div className="text-sm font-bold text-slate-500">Industry Leader</div>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:scale-105 hover:-rotate-2 transition-all duration-500"
                style={getParallaxStyle(0.3)}
              >
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">14+</div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">Industries Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
                <span className="text-sm font-bold text-blue-700 tracking-wide">LEADERSHIP PROFILE</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                Transforming Industries Through Vision
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p className="font-medium">
                Muhammad Ibrahim, the visionary founder and CEO of Al-Ibrahim Group, has been at the forefront of Pakistan's chemical industry transformation since 2010.
              </p>
              <p>
                With over 15 years of extensive experience in chemical trading, import-export operations, and supply chain management, he has built Al-Ibrahim Group from the ground up into one of Pakistan's most trusted chemical distribution companies.
              </p>
              <p>
                His deep understanding of global chemical markets, combined with an unwavering commitment to quality and customer satisfaction, has enabled the company to establish strong partnerships with leading manufacturers across China, USA, Germany, UAE, and beyond.
              </p>
              <p>
                Under his leadership, Al-Ibrahim Group has expanded its portfolio to serve 14+ diverse industries, maintaining the highest standards of product quality, regulatory compliance, and environmental responsibility.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '14+', label: 'Industries Served' },
                { value: '500+', label: 'Global Partners' },
                { value: '98%', label: 'Client Satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">OUR PRINCIPLES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Core Values That Drive Success
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Core values and principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-white mb-4 transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 lg:p-12 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1">Our Vision</h3>
                  <p className="text-blue-300 font-semibold">Where We're Headed</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p className="font-medium text-slate-200">
                  To become the leading chemical distribution company in South Asia, recognized globally for our commitment to quality, innovation, and sustainable business practices.
                </p>
                <p>
                  We envision a future where Al-Ibrahim Group is the first choice for industries seeking reliable, high-quality chemical solutions that drive their success and contribute to economic development.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 lg:p-12 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white mb-1">Our Mission</h3>
                  <p className="text-blue-300 font-semibold">What Drives Us Daily</p>
                </div>
              </div>

              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p className="font-medium text-slate-200">
                  To provide premium-quality chemical products and comprehensive solutions that empower industries, while maintaining the highest standards of safety, ethics, and environmental responsibility.
                </p>
                <p>
                  We are committed to building long-term partnerships, fostering innovation, and contributing to the sustainable growth of Pakistan's industrial sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-300/50 border-2 border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">
              <div className="space-y-8">
                <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
                  <span className="text-sm font-bold text-blue-700 tracking-wide">WORK WITH US</span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                  Partner With Industry Leaders
                </h2>

                <p className="text-xl text-slate-600 leading-relaxed">
                  Join forces with a team that understands your needs and delivers exceptional results. 
                  Let's build success together.
                </p>

                <Link 
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                >
                  <span>Get In Touch</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: '🎯', label: 'Strategic Vision', desc: 'Clear direction for growth' },
                  { icon: '🤝', label: 'Strong Partnerships', desc: 'Global relationships' },
                  { icon: '📈', label: 'Proven Track Record', desc: '15+ years of success' },
                  { icon: '🏆', label: 'Industry Leadership', desc: 'Market pioneer status' }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="text-lg font-black text-slate-900 mb-2">{item.label}</div>
                    <div className="text-sm text-slate-600">{item.desc}</div>
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
