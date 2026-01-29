// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import leaderImage from '@/public/images/leadershipImage.jpg'

// export default function LeadershipContent() {
//  const [scrolled, setScrolled] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//     const handleScroll = () => setScrolled(window.scrollY > 50)
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//     }
    
//     window.addEventListener('scroll', handleScroll)
//     window.addEventListener('mousemove', handleMouseMove)
    
//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//       window.removeEventListener('mousemove', handleMouseMove)
//     }
//   }, [])

//   const getParallaxStyle = (multiplier: number = 1) => {
//     if (!isMounted) return {}
//     return {
//       transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 50 * multiplier}px, ${(mousePosition.y - window.innerHeight / 2) / 50 * multiplier}px)`
//     }
//   }


//   const coreValues = [
//     {
//       icon: (
//         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       ),
//       title: 'Quality Excellence',
//       desc: 'Uncompromising commitment to delivering premium-grade chemicals that meet and exceed international quality standards',
//       color: 'from-blue-500 to-blue-600'
//     },
//     {
//       icon: (
//         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       ),
//       title: 'Customer First',
//       desc: 'Building lasting partnerships through exceptional service, transparency, and dedication to client success',
//       color: 'from-emerald-500 to-emerald-600'
//     },
//     {
//       icon: (
//         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: 'Innovation Drive',
//       desc: 'Continuously evolving with cutting-edge solutions, technology adoption, and industry best practices',
//       color: 'from-violet-500 to-violet-600'
//     },
//     {
//       icon: (
//         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: 'Sustainability',
//       desc: 'Environmental stewardship through responsible sourcing, eco-friendly practices, and green initiatives',
//       color: 'from-teal-500 to-teal-600'
//     },
//     {
//       icon: (
//         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//         </svg>
//       ),
//       title: 'Integrity & Ethics',
//       desc: 'Operating with honesty, accountability, and ethical business practices in all our dealings',
//       color: 'from-amber-500 to-amber-600'
//     },
//     {
//       icon: (
//         <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: 'Reliability',
//       desc: 'Consistent performance, timely delivery, and dependable supply chain management you can count on',
//       color: 'from-indigo-500 to-indigo-600'
//     }
//   ]

//   return (
//      <div className="min-h-screen bg-white">

//       {/* Hero Section - Updated to Match Other Pages */}
//       <section className="relative pt-40 pb-32 overflow-hidden">
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-6 lg:px-12 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             <div className="space-y-8">
//               <div 
//                 className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
//                 style={getParallaxStyle(0.5)}
//               >
//                 <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
//                 <span className="text-sm font-semibold text-blue-600">Visionary Leadership Since 2010</span>
//               </div>
              
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
//                 <span className="text-slate-900">Meet Our</span>
//                 <br />
//                 <span className="text-slate-900">Visionary</span>
//                 <br />
//                 <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Leader</span>
//               </h1>
              
//               <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
//         Muhammad Ibrahim Peerzada, born on 22 December 1972, is the founder and owner of the Al-Ibrahim Group of Companies. With a strong entrepreneurial vision and commitment to excellence, he laid the foundation of his business empire in 2010. Through determination, integrity, and strategic leadership, he has successfully built and expanded a diversified group of companies serving multiple industries. His leadership philosophy focuses on long-term growth, ethical business practices, and building strong, trusted relationships with partners and clients.
//               </p>
              
//               <div className="pt-6">
//                 <Link 
//                   href="/contact"
//                   className="inline-flex items-center space-x-2 px-6 py-3 md:px-10 md:py-4 bg-blue-600 text-white text-sm md:text-base rounded-xl font-semibold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <span>Connect With Us</span>
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </Link>
//               </div>

//               <div className="pt-8 grid grid-cols-2 gap-6">
//                 {[
//                   { value: '15+', label: 'Years Leading' },
//                   { value: '200+', label: 'Partnerships' }
//                 ].map((stat, i) => (
//                   <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
//                     <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</div>
//                     <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div 
//                 className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 border-8 border-white"
//                 style={getParallaxStyle(1)}
//               >
//                 <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-200 to-slate-100">
//                   <img 
//                     src={leaderImage.src}
//                     alt="Muhammad Ibrahim - CEO & Founder"
//                     className="w-full h-full object-cover border-2 border-amber-400"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
//                   <div className="absolute bottom-8 left-8 right-8">
//                     <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 mb-10">
//                       <h3 className="text-xl md:text-2xl font-black text-white mb-1">Muhammad Ibrahim</h3>
//                       <p className="text-base md:text-lg font-bold text-blue-200">Founder & CEO</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div 
//                 className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl shadow-slate-400/30 border border-slate-100 transform hover:scale-105 hover:rotate-2 transition-all duration-500 cursor-pointer"
//                 style={getParallaxStyle(-0.5)}
//               >
//                 <div className="flex items-center space-x-5">
//                   <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/30">
//                     <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div>
//                     <div className="text-base md:text-lg font-black text-slate-900">Award Winning</div>
//                     <div className="text-xs md:text-sm font-bold text-slate-500">Industry Leader</div>
//                   </div>
//                 </div>
//               </div>

//               <div 
//                 className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl p-6 shadow-2xl shadow-blue-500/40 transform hover:scale-105 hover:-rotate-2 transition-all duration-500"
//                 style={getParallaxStyle(0.3)}
//               >
//                 <div className="text-center">
//                   <div className="text-2xl md:text-4xl font-black text-white mb-1">14+</div>
//                   <div className="text-[10px] md:text-xs font-bold text-blue-100 uppercase tracking-wider">Industries Served</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CEO Profile Section */}
//       <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
//         </div>

//         <div className="container mx-auto px-8 lg:px-16 relative z-10">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
//                 <span className="text-sm font-bold text-blue-700 tracking-wide">LEADERSHIP PROFILE</span>
//               </div>
//               <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
//                 Transforming Industries Through Vision
//               </h2>
//             </div>

//             <div className="space-y-6 text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
//               <p className="font-medium">
//                 Muhammad Ibrahim, the visionary founder and CEO of Al-Ibrahim Group, has been at the forefront of Pakistan's chemical industry transformation since 2010.
//               </p>
//               <p>
//                 With over 15 years of extensive experience in chemical trading, import-export operations, and supply chain management, he has built Al-Ibrahim Group from the ground up into one of Pakistan's most trusted chemical distribution companies.
//               </p>
//               <p>
//                 His deep understanding of global chemical markets, combined with an unwavering commitment to quality and customer satisfaction, has enabled the company to establish strong partnerships with leading manufacturers across China, USA, Germany, UAE, and beyond.
//               </p>
//               <p>
//                 Under his leadership, Al-Ibrahim Group has expanded its portfolio to serve 14+ diverse industries, maintaining the highest standards of product quality, regulatory compliance, and environmental responsibility.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
//               {[
//                 { value: '15+', label: 'Years Experience' },
//                 { value: '14+', label: 'Industries Served' },
//                 { value: '200+', label: 'Global Partners' },
//                 { value: '98%', label: 'Client Satisfaction' }
//               ].map((stat, i) => (
//                 <div key={i} className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center">
//                   <div className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-xs md:text-sm font-bold text-slate-600">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-24 lg:py-32 bg-white">
//         <div className="container mx-auto px-8 lg:px-16">
//           <div className="text-center max-w-4xl mx-auto mb-20">
//             <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
//               <span className="text-sm font-bold text-blue-700 tracking-wide">OUR PRINCIPLES</span>
//             </div>
//             <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
//               Core Values That Drive Success
//             </h2>
//             <p className="text-base md:text-lg lg:text-xl text-slate-600 font-medium">
//               Core values and principles that guide every decision and action we take
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {coreValues.map((value, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
//               >
//                 <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
//                 <div className="relative z-10">
//                   <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-2xl text-white mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
//                     {value.icon}
//                   </div>
                  
//                   <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-white mb-4 transition-colors duration-500">
//                     {value.title}
//                   </h3>
//                   <p className="text-sm md:text-base text-slate-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
//                     {value.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Vision & Mission */}
//       <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
//           <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl opacity-10"></div>
//         </div>

//         <div className="container mx-auto px-8 lg:px-16 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Vision */}
//             <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 lg:p-12 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
//                   <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
//                     <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-black text-white mb-1">Our Vision</h3>
//                   <p className="text-sm md:text-base text-blue-300 font-semibold">Where We're Headed</p>
//                 </div>
//               </div>

//               <div className="space-y-6 text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
//                 <p className="font-medium text-slate-200">
//                   To become the leading chemical distribution company in South Asia, recognized globally for our commitment to quality, innovation, and sustainable business practices.
//                 </p>
//                 <p>
//                   We envision a future where Al-Ibrahim Group is the first choice for industries seeking reliable, high-quality chemical solutions that drive their success and contribute to economic development.
//                 </p>
//               </div>
//             </div>

//             {/* Mission */}
//             <div className="group relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 lg:p-12 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
//               <div className="flex items-center space-x-4 mb-8">
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
//                   <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
//                     <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-black text-white mb-1">Our Mission</h3>
//                   <p className="text-sm md:text-base text-blue-300 font-semibold">What Drives Us Daily</p>
//                 </div>
//               </div>

//               <div className="space-y-6 text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed">
//                 <p className="font-medium text-slate-200">
//                   To provide premium-quality chemical products and comprehensive solutions that empower industries, while maintaining the highest standards of safety, ethics, and environmental responsibility.
//                 </p>
//                 <p>
//                   We are committed to building long-term partnerships, fostering innovation, and contributing to the sustainable growth of Pakistan's industrial sector.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
//         <div className="container mx-auto px-8 lg:px-16">
//           <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-300/50 border-2 border-slate-100 overflow-hidden">
//             <div className="grid lg:grid-cols-2 gap-12 items-center p-12 lg:p-16">
//               <div className="space-y-8">
//                 <div className="inline-block px-5 py-2 bg-blue-100 rounded-full">
//                   <span className="text-sm font-bold text-blue-700 tracking-wide">WORK WITH US</span>
//                 </div>

//                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
//                   Partner With Industry Leaders
//                 </h2>

//                 <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed">
//                   Join forces with a team that understands your needs and delivers exceptional results. 
//                   Let's build success together.
//                 </p>

//                 <Link 
//                   href="/contact"
//                   className="inline-flex items-center space-x-3 px-6 py-3 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
//                 >
//                   <span>Get In Touch</span>
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </Link>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {[
//                   { icon: '🎯', label: 'Strategic Vision', desc: 'Clear direction for growth' },
//                   { icon: '🤝', label: 'Strong Partnerships', desc: 'Global relationships' },
//                   { icon: '📈', label: 'Proven Track Record', desc: '15+ years of success' },
//                   { icon: '🏆', label: 'Industry Leadership', desc: 'Market pioneer status' }
//                 ].map((item, i) => (
//                   <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
//                     <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                       {item.icon}
//                     </div>
//                     <div className="text-base md:text-lg font-black text-slate-900 mb-2">{item.label}</div>
//                     <div className="text-xs md:text-sm text-slate-600">{item.desc}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import leaderImage from '@/public/images/leadershipImage.jpg'

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

  const companies = [
    {
      name: 'Ibrahim Chemicals',
      description: 'A core company of the Al-Ibrahim Group, primarily engaged in the import of chemicals, offering a vast range of high-quality chemical products to meet diverse industrial needs.',
      details: 'The company emphasizes international sourcing standards, product reliability, and timely supply. With a strong focus on compliance, safety, and customer satisfaction, Ibrahim Chemicals serves multiple sectors while continuously expanding its product portfolio and strengthening its position in the chemical import market.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      name: 'Universe LED',
      description: 'Another key venture of the group, specializes in the import and supply of LED products, providing a wide range of modern and energy-efficient LED solutions.',
      details: 'The company is committed to delivering innovative lighting products that combine performance, durability, and sustainability. By keeping pace with evolving technology and market trends, Universe LED aims to support energy conservation while offering reliable lighting solutions for residential, commercial, and industrial applications.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-slate-50"></div>

        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51 65 85) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-block mb-6 transition-all duration-300"
              style={getParallaxStyle(0.5)}
            >
              <span className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-full text-sm font-medium shadow-sm">
                Leadership
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Meet Our Founder
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Visionary leadership driving excellence across diversified business ventures
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Founder Profile Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Image Column */}
              <div className="relative group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <Image
                    src={leaderImage}
                    alt="Muhammad Ibrahim Peerzada"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-100 rounded-2xl -z-10"></div>
              </div>

              {/* Content Column */}
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    Founder & CEO
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Muhammad Ibrahim Peerzada
                </h2>

                <div className="mb-6 pb-6 border-b border-slate-200">
                  <p className="text-slate-600 text-sm">Born: 22 December 1972</p>
                  <p className="text-slate-600 text-sm">Founded: 2010</p>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Muhammad Ibrahim Peerzada is the founder and owner of the Al-Ibrahim Group of Companies. 
                    With a strong entrepreneurial vision and commitment to excellence, he laid the foundation 
                    of his business empire in 2010.
                  </p>

                  <p>
                    Through determination, integrity, and strategic leadership, he has successfully built 
                    and expanded a diversified group of companies serving multiple industries.
                  </p>

                  <p>
                    His leadership philosophy focuses on long-term growth, ethical business practices, 
                    and building strong, trusted relationships with partners and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Companies
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Building excellence across diversified business sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl border border-slate-200 p-8 transition-all duration-300 hover:shadow-xl"
                  style={getParallaxStyle(0.2)}
                >
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 mb-6 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
                    {company.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {company.name}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {company.description}
                  </p>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {company.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Partner With Us
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join forces with a team that understands your needs and delivers exceptional results. 
              Let's build success together.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-4 bg-slate-900 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
