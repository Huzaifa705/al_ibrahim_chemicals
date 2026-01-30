'use client'

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Ibrahim Chemicals', path: '/ibrahim-chemical' },
    { name: 'Universe', path: '/universe-led' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <footer className="relative bg-slate-900 border-t border-slate-700">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AL-Ibrahim Group Of Companies</h3>
                <p className="text-xs text-slate-400 uppercase tracking-wider">Chemical Excellence Since 2010</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Leading provider of premium chemical solutions and LED technology, committed to innovation and excellence.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-slate-300 hover:text-blue-400 font-medium text-sm transition-colors duration-300 hover:translate-x-1 inline-flex items-center group"
                >
                  <span className="w-0 group-hover:w-5 h-0.5 bg-blue-400 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>al.ibrahim.group.of.companies@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+92 300 2142622</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AL-Ibrahim Group of Companies. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
