"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Award, Building2, Quote, Calendar } from "lucide-react";

import leaderImage from "@/public/images/leadershipImage.jpeg";
import universeledlogo from "@/public/images/universeLogo.png";
import chemicalImage from "@/public/images/chemicalImage.jpeg";

export default function LeadershipContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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

  const companies = [
    {
      name: "IBRAHIM CHEMICALS",
      description:
        "A core company of the Al-Ibrahim Group, primarily engaged in the import of chemicals, offering a vast range of high-quality chemical products to meet diverse industrial needs.",
      details:
        "The company emphasizes international sourcing standards, product reliability, and timely supply. With a strong focus on compliance, safety, and customer satisfaction, Ibrahim Chemicals serves multiple sectors while continuously expanding its product portfolio and strengthening its position in the chemical import market.",
      image: chemicalImage,
      icon: Building2,
    },
    {
      name: "UNIVERSE LED",
      description:
        "Another key venture of the group, specializes in the import and supply of LED products, providing a wide range of modern and energy-efficient LED solutions.",
      details:
        "The company is committed to delivering innovative lighting products that combine performance, durability, and sustainability. By keeping pace with evolving technology and market trends, Universe LED aims to support energy conservation while offering reliable lighting solutions for residential, commercial, and industrial applications.",
      image: universeledlogo,
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-50 selection:text-brand-dark overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200/60">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-light rounded-full blur-[100px] sm:blur-[150px] mix-blend-multiply" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-dark) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer} 
            className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="px-4 py-1.5 sm:px-5 sm:py-2 bg-white border border-slate-200 text-brand-dark rounded-full text-xs sm:text-sm font-bold shadow-sm uppercase tracking-widest">
                Executive Leadership
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Meet Our <br className="sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary">
                Founder
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
              Visionary leadership driving excellence, innovation, and sustainable growth across diversified business ventures.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- FOUNDER PROFILE SECTION --- */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative order-2 lg:order-1 max-w-md mx-auto lg:max-w-none w-full"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-10 bg-slate-100">
                <Image
                  src={leaderImage}
                  alt="Muhammad Ibrahim Peerzada"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Background Element */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-2/3 h-2/3 bg-brand-50 rounded-3xl -z-10 border border-brand-primary/10" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 -right-4 sm:-right-8 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center text-brand-light shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900">2005</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">Year Founded</div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="order-1 lg:order-2 space-y-8"
            >
              <div>
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-50 text-brand-dark rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-brand-primary/20">
                  Founder & CEO
                </motion.div>

                <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Muhammad Ibrahim Peerzada
                </motion.h2>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                    <Calendar className="w-4 h-4 text-brand-primary" />
                    <span className="text-sm font-bold text-slate-700">Born: 22 December 1972</span>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-brand-50 -z-10 rotate-180" />
                <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    Muhammad Ibrahim Peerzada is the founder and owner of the Al-Ibrahim Group of Companies. With a strong entrepreneurial vision and commitment to excellence, he laid the foundation of his business empire in 2005.
                  </p>
                  <p>
                    Through determination, integrity, and strategic leadership, he has successfully built and expanded a diversified group of companies serving multiple industries across the nation.
                  </p>
                  <p>
                    His leadership philosophy focuses on long-term growth, ethical business practices, and building strong, trusted relationships with partners and clients worldwide.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMPANIES SECTION --- */}
      <section className="py-20 sm:py-24 lg:py-32 bg-slate-50 border-t border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full mb-4 sm:mb-6 border border-brand-primary/20">
              <span className="text-xs sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
              Our Companies
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium px-4">
              Building excellence across diversified business sectors.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {companies.map((company, index) => {
              const Icon = company.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  key={index}
                  className="group bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 transition-all duration-500 hover:shadow-2xl hover:border-brand-primary/30 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 rounded-2xl flex items-center justify-center p-3 border border-slate-100 group-hover:border-brand-primary/30 transition-colors">
                      <Image
                        src={company.image}
                        alt={company.name}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">
                    {company.name}
                  </h3>

                  <div className="space-y-4 text-slate-600 font-medium flex-grow">
                    <p className="text-base sm:text-lg leading-relaxed text-slate-700">
                      {company.description}
                    </p>
                    <div className="h-px w-full bg-slate-100 my-6" />
                    <p className="text-sm leading-relaxed">
                      {company.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16">
          <div className="max-w-5xl mx-auto bg-brand-dark rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative shadow-2xl">
            {/* Background Accents */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-light rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="relative z-10 px-6 py-16 sm:p-20 text-center flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Partner With Us
              </h2>
              <p className="text-base sm:text-lg text-brand-50/90 mb-10 max-w-2xl font-medium leading-relaxed">
                Join forces with a team that understands your needs and delivers exceptional results. Let's build sustainable success together.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-brand-dark rounded-xl font-black text-base sm:text-lg hover:bg-slate-50 transition-all transform hover:-translate-y-1 shadow-xl w-full sm:w-auto"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}