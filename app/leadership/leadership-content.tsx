
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
