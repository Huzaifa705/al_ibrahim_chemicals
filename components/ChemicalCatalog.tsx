"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  FlaskConical,
  Package,
  Tag,
  MessageSquare,
} from "lucide-react";

interface Chemical {
  id: number;
  name: string;
  formula: string;
  packing: string;
  type: "liquid" | "powder";
  category: string;
}

const chemicals: Chemical[] = [
  // Liquid Chemicals
  { id: 1, name: "Styrene Monomer", formula: "S.M", packing: "190 KGs", type: "liquid", category: "Monomers" },
  { id: 2, name: "Vinyl Acetate Monomer", formula: "VAM", packing: "190 KGs", type: "liquid", category: "Monomers" },
  { id: 3, name: "Butyl Acrylate", formula: "B.A", packing: "180 KGs", type: "liquid", category: "Acrylates" },
  { id: 4, name: "Mono Ethylene Glycol", formula: "MEG", packing: "230 KGs", type: "liquid", category: "Glycols" },
  { id: 5, name: "Diethylene Glycol", formula: "DEG", packing: "230 KGs", type: "liquid", category: "Glycols" },
  { id: 6, name: "2-Ethylhexanol", formula: "2-EH", packing: "180 KGs", type: "liquid", category: "Alcohols" },
  { id: 7, name: "2-Ethylhexyl Acrylate", formula: "2-EHA", packing: "180 KGs", type: "liquid", category: "Acrylates" },
  { id: 8, name: "Acrylic Acid", formula: "A.A", packing: "200 KGs", type: "liquid", category: "Acids" },
  { id: 9, name: "S-104", formula: "S-104", packing: "210 KGs", type: "liquid", category: "Surfactants" },
  { id: 10, name: "Propylene Glycol", formula: "P.G", packing: "215 KGs", type: "liquid", category: "Glycols" },
  { id: 11, name: "Dibutyl Phthalate", formula: "DBP", packing: "210 KGs", type: "liquid", category: "Plasticizers" },
  { id: 12, name: "Ethyl Acrylate", formula: "E.A", packing: "180 KGs", type: "liquid", category: "Acrylates" },
  { id: 13, name: "Methyl Methacrylate", formula: "MMA", packing: "180 KGs", type: "liquid", category: "Acrylates" },
  { id: 14, name: "Xylene", formula: "C₈H₁₀", packing: "180 KGs", type: "liquid", category: "Solvents" },
  { id: 15, name: "Dico Thinner", formula: "Thinner", packing: "160 KGs", type: "liquid", category: "Solvents" },
  { id: 16, name: "Acetic Acid", formula: "AA", packing: "210 KGs", type: "liquid", category: "Acids" },
  { id: 17, name: "Ethyl Acetate", formula: "EA", packing: "180 KGs", type: "liquid", category: "Esters" },
  { id: 18, name: "TO-20", formula: "13/200", packing: "210 KGs", type: "liquid", category: "Surfactants" },
  { id: 19, name: "N-Hexane", formula: "C₆H₁₄", packing: "160 KGs", type: "liquid", category: "Solvents" },
  { id: 20, name: "NP-09", formula: "NP-09", packing: "215 KGs", type: "liquid", category: "Surfactants" },
  { id: 21, name: "IPA 96%", formula: "C₃H₈O", packing: "160 KGs", type: "liquid", category: "Alcohols" },
  { id: 22, name: "IPA 98.5%", formula: "C₃H₈O", packing: "160 KGs", type: "liquid", category: "Alcohols" },
  { id: 23, name: "IPA 99%", formula: "C₃H₈O", packing: "160 KGs", type: "liquid", category: "Alcohols" },
  { id: 24, name: "Methylene Chloride", formula: "M.C", packing: "270 KGs", type: "liquid", category: "Solvents" },
  { id: 25, name: "OP-25", formula: "OP-25", packing: "210 KGs", type: "liquid", category: "Surfactants" },
  { id: 26, name: "Glycerin", formula: "C₃H₈O₃", packing: "250 KGs", type: "liquid", category: "Glycols" },
  { id: 27, name: "FES-77", formula: "FES-77", packing: "210 KGs", type: "liquid", category: "Surfactants" },
  { id: 28, name: "FES-993", formula: "FES-993", packing: "200 KGs", type: "liquid", category: "Surfactants" },
  { id: 29, name: "NP-20", formula: "NP-20", packing: "215 KGs", type: "liquid", category: "Surfactants" },

  // Powder Chemicals
  { id: 30, name: "Acrylamide", formula: "C₃H₅NO", packing: "25 KGs", type: "powder", category: "Polymers" },
  { id: 31, name: "Phthalic Anhydride", formula: "P.A", packing: "25 KGs", type: "powder", category: "Anhydrides" },
  { id: 32, name: "BP-26", formula: "BP-26", packing: "20 KGs", type: "powder", category: "Additives" },
  { id: 33, name: "Ammonium Persulfate", formula: "APS", packing: "25 KGs", type: "powder", category: "Catalysts" },
  { id: 34, name: "Maleic Anhydride", formula: "M.A", packing: "25 KGs", type: "powder", category: "Anhydrides" },
  { id: 35, name: "AT-25", formula: "AT-25", packing: "25 KGs", type: "powder", category: "Additives" },
  { id: 36, name: "Formic Acid", formula: "CH₂O₂", packing: "35 KGs", type: "powder", category: "Acids" },
  { id: 37, name: "Potassium Persulfate", formula: "KPS", packing: "25 KGs", type: "powder", category: "Catalysts" },
  { id: 38, name: "NP-30", formula: "NP-30", packing: "25 KGs", type: "powder", category: "Surfactants" },
  { id: 39, name: "Oxalic Acid", formula: "C₂H₂O₄", packing: "25 KGs", type: "powder", category: "Acids" },
  { id: 40, name: "Titanium Dioxide", formula: "TiO₂", packing: "20 KGs", type: "powder", category: "Pigments" },
  { id: 41, name: "Sodium Sulphate Anhydrous", formula: "Glauber Salt", packing: "50 KGs", type: "powder", category: "Salts" },
  { id: 42, name: "Tert-Butyl Hydroperoxide", formula: "TBHP", packing: "25 KGs", type: "powder", category: "Catalysts" },
  { id: 43, name: "Sodium Lauryl Sulfate", formula: "SLS", packing: "20 KGs", type: "powder", category: "Surfactants" },
];

export default function ChemicalCatalog() {
  const [filter, setFilter] = useState<"all" | "liquid" | "powder">("all");

  const displayLiquids = chemicals.filter(
    (c) => c.type === "liquid" && (filter === "all" || filter === "liquid"),
  );

  const displayPowders = chemicals.filter(
    (c) => c.type === "powder" && (filter === "all" || filter === "powder"),
  );

  const liquidCount = chemicals.filter((c) => c.type === "liquid").length;
  const powderCount = chemicals.filter((c) => c.type === "powder").length;

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full mb-4 sm:mb-6 border border-brand-primary/20">
            <span className="text-xs sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
              Comprehensive Range
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight">
            Product Catalog
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium px-4">
            Premium industrial chemicals sourced from leading global manufacturers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${filter === "all"
              ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/20"
              : "bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-dark"
              }`}
          >
            All Products ({chemicals.length})
          </button>
          <button
            onClick={() => setFilter("liquid")}
            className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center ${filter === "liquid"
              ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/20"
              : "bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-dark"
              }`}
          >
            <FlaskConical className="w-4 h-4 mr-2" />
            Liquid Chemicals ({liquidCount})
          </button>
          <button
            onClick={() => setFilter("powder")}
            className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center ${filter === "powder"
              ? "bg-brand-dark text-white shadow-lg shadow-brand-dark/20"
              : "bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-dark"
              }`}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Powder Chemicals ({powderCount})
          </button>
        </div>

        {/* Chemical Grid with Framer Motion Layout animations */}
        <motion.div layout className="space-y-12">
          <AnimatePresence mode="popLayout">
            {/* Liquid Grid */}
            {displayLiquids.length > 0 && (
              <motion.div key="liquid-grid" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {filter === "all" && <h3 className="text-xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">Liquid Portfolio</h3>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {displayLiquids.map((chemical) => (
                    <ChemicalCard key={chemical.id} chemical={chemical} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Powder Grid */}
            {displayPowders.length > 0 && (
              <motion.div key="powder-grid" layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={filter === "all" ? "pt-8" : ""}>
                {filter === "all" && <h3 className="text-xl font-black text-slate-900 mb-6 border-b border-slate-100 pb-4">Powder Portfolio</h3>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {displayPowders.map((chemical) => (
                    <ChemicalCard key={chemical.id} chemical={chemical} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

function ChemicalCard({ chemical }: { chemical: Chemical }) {
  // Brand aligned badges
  const badgeClass = chemical.type === "powder"
    ? "bg-slate-100 text-slate-700 border-slate-200"
    : "bg-brand-50 text-brand-dark border-brand-primary/20";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-brand-primary/40 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-widest border ${badgeClass}`}>
          {chemical.type}
        </span>
        {chemical.type === "liquid" ? (
          <FlaskConical className="w-5 h-5 text-brand-primary" />
        ) : (
          <ShoppingBag className="w-5 h-5 text-slate-400" />
        )}
      </div>

      <div className="mb-5">
        <h3 className="text-lg font-black text-slate-900 mb-1 leading-tight group-hover:text-brand-primary transition-colors">
          {chemical.name}
        </h3>
        <p className="text-sm font-mono font-bold text-brand-light">
          {chemical.formula}
        </p>
      </div>

      <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-50">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
            <Package className="w-4 h-4" /> Packing
          </span>
          <span className="text-slate-900 font-bold bg-slate-50 px-2 py-0.5 rounded">{chemical.packing}</span>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
            <Tag className="w-4 h-4" /> Category
          </span>
          <span className="text-slate-900 font-bold">{chemical.category}</span>
        </div>
      </div>

      <Link
        href="/contact#contact-form"
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm bg-slate-50 text-slate-700 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300"
      >
        <MessageSquare className="w-4 h-4" />
        Request Quote
      </Link>
    </motion.article>
  );
}