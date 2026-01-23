'use client'
import Link from 'next/link'
import { useState,useEffect } from 'react'

export default function UniverseLedContent() {
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
  
  
    const products = [
      {
        name: 'LED Panel Lights',
        power: '6W - 48W',
        description: 'Ultra-slim LED panels for modern ceiling installations with uniform light distribution',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
          </svg>
        ),
        color: 'from-blue-500 to-blue-600'
      },
      {
        name: 'LED Bulbs',
        power: '3W - 20W',
        description: 'Energy-efficient LED bulbs in various shapes and sizes for residential and commercial use',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
        color: 'from-violet-500 to-violet-600'
      },
      {
        name: 'LED Tube Lights',
        power: '9W - 24W',
        description: 'High-efficiency LED tubes as perfect replacements for traditional fluorescent lighting',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
        color: 'from-emerald-500 to-emerald-600'
      },
      {
        name: 'LED Downlights',
        power: '5W - 30W',
        description: 'Recessed LED downlights providing focused illumination for ceilings and architectural spaces',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ),
        color: 'from-teal-500 to-teal-600'
      },
      {
        name: 'LED Strip Lights',
        power: '12V - 24V',
        description: 'Flexible LED strips for decorative lighting, accent lighting, and creative installations',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
        color: 'from-indigo-500 to-indigo-600'
      },
      {
        name: 'LED Floodlights',
        power: '20W - 200W',
        description: 'High-power LED floodlights for outdoor illumination, security, and stadium lighting',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        color: 'from-cyan-500 to-cyan-600'
      },
      {
        name: 'Smart LED Lights',
        power: '7W - 15W',
        description: 'WiFi-enabled smart LED lights with app control, dimming, and color-changing capabilities',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        color: 'from-purple-500 to-purple-600'
      },
      {
        name: 'Decorative LED Lights',
        power: '1W - 10W',
        description: 'Artistic and decorative LED fixtures for ambient lighting and interior design applications',
        icon: (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ),
        color: 'from-pink-500 to-pink-600'
      }
    ]
  
    const features = [
      {
        title: 'Energy Efficiency',
        description: 'Up to 80% energy savings compared to traditional lighting solutions',
        icon: '⚡'
      },
      {
        title: 'Long Lifespan',
        description: '50,000+ hours operational life with minimal maintenance requirements',
        icon: '🔋'
      },
      {
        title: 'Eco-Friendly',
        description: 'Mercury-free, low heat emission, and fully recyclable components',
        icon: '♻️'
      },
      {
        title: 'Superior Quality',
        description: 'Premium-grade LEDs with consistent color temperature and brightness',
        icon: '✨'
      }
    ]
  
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
                className="inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-blue-50 rounded-full border border-blue-100 text-xs sm:text-sm"
                style={getParallaxStyle(0.5)}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-blue-600">Universe LED - Premium Lighting Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900">Illuminate</span>
                <br />
                <span className="text-slate-900">Your World</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">With LED</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
             Universe LED, another key venture of the group, specializes in the import and supply of LED products, providing a wide range of modern and energy-efficient LED solutions. The company is committed to delivering innovative lighting products that combine performance, durability, and sustainability. By keeping pace with evolving technology and market trends, Universe LED aims to support energy conservation while offering reliable lighting solutions for residential, commercial, and industrial applications.
              </p>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Get Quote</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-6">
                {features.slice(0, 2).map((feature, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <div className="text-base sm:text-lg font-bold text-slate-900">{feature.title}</div>
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
                    src="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070&auto=format&fit=crop"
                    alt="Universe LED Modern Lighting Solutions"
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
                    <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-base sm:text-lg font-black text-slate-900">50,000+ Hours</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-500">Lifespan Guarantee</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:scale-105 hover:-rotate-2 transition-all duration-500"
                style={getParallaxStyle(0.3)}
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1">80%</div>
                  <div className="text-xs font-bold text-blue-100 uppercase tracking-wider">Energy Saving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">OUR PRODUCTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Premium LED Solutions
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              High-quality lighting solutions for every need, powered by cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {product.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-white mb-2 transition-colors duration-500">
                    {product.name}
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-blue-600 group-hover:text-white/90 mb-4 transition-colors duration-500">
                    {product.power}
                  </div>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-sm font-bold text-blue-700 tracking-wide">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Superior LED Technology
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium">
              All our LED products undergo rigorous quality control and testing procedures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <div className="text-6xl mb-6">{feature.icon}</div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 mb-4">{feature.title}</div>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl opacity-10"></div>
        </div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block px-5 py-2 bg-white/20 rounded-full mb-8 border border-white/30">
              <span className="text-sm font-bold text-white tracking-wide">QUALITY GUARANTEE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Certified Quality You Can Trust
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 mb-16 leading-relaxed max-w-4xl mx-auto font-medium">
              We use the latest technology to guarantee superior performance, durability, and energy efficiency.
              All products come with extended warranties and have lifecycles measured in years, not months.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: '50,000+', label: 'Hours Lifespan' },
                { value: '80%', label: 'Energy Saving' },
                { value: '100%', label: 'Quality Tested' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-3">{stat.value}</div>
                  <div className="text-base sm:text-lg md:text-xl font-bold text-blue-50">{stat.label}</div>
                </div>
              ))}
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
                  <span className="text-sm font-bold text-blue-700 tracking-wide">GET STARTED</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                  Ready to Switch to LED?
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
                  Contact us today for customized LED solutions and expert consultation.
                  Our team is ready to help you find the perfect lighting solution for your needs.
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-3 px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-base sm:text-lg  hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                >
                  <span>Contact Us Today</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border-4 border-white transform hover:scale-105 transition-all duration-700">
                  <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-200 to-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=2069&auto=format&fit=crop"
                      alt="LED Lighting Installation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
