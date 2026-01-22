import React from 'react'

function Footer() {
  return (
<>

 <footer className="bg-slate-900 py-20">
        <div className="container mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <span className="text-white font-black text-xl">AI</span>
                </div>
                <div>
                  <span className="text-white font-black text-xl sm:text-2xl block">AL-IBRAHIM GROUP</span>
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
              <h4 className="text-white font-black mb-4 sm:mb-6 text-base sm:text-lg">Company</h4>
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
</>
  )
}

export default Footer
