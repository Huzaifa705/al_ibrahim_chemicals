// 'use client'

// import { useState } from 'react'

// interface Chemical {
//   id: number
//   name: string
//   formula: string
//   packing: string
//   type: 'liquid' | 'powder'
//   category: string
// }

// const chemicals: Chemical[] = [
//   // Liquid Chemicals (Drums)
//   { id: 1, name: 'Styrene Monomer', formula: 'S.M', packing: '190 KGs', type: 'liquid', category: 'Monomers' },
//   { id: 2, name: 'Vinyl Acetate Monomer', formula: 'VAM', packing: '190 KGs', type: 'liquid', category: 'Monomers' },
//   { id: 3, name: 'Butyl Acrylate', formula: 'B.A', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
//   { id: 4, name: 'Mono Ethylene Glycol', formula: 'MEG', packing: '230 KGs', type: 'liquid', category: 'Glycols' },
//   { id: 5, name: 'Diethylene Glycol', formula: 'DEG', packing: '230 KGs', type: 'liquid', category: 'Glycols' },
//   { id: 6, name: '2-Ethylhexanol', formula: '2-EH', packing: '180 KGs', type: 'liquid', category: 'Alcohols' },
//   { id: 7, name: '2-Ethylhexyl Acrylate', formula: '2-EHA', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
//   { id: 8, name: 'Acrylic Acid', formula: 'A.A', packing: '200 KGs', type: 'liquid', category: 'Acids' },
//   { id: 9, name: 'S-104', formula: 'S-104', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
//   { id: 10, name: 'Propylene Glycol', formula: 'P.G', packing: '215 KGs', type: 'liquid', category: 'Glycols' },
//   { id: 11, name: 'Dibutyl Phthalate', formula: 'DBP', packing: '210 KGs', type: 'liquid', category: 'Plasticizers' },
//   { id: 12, name: 'Ethyl Acrylate', formula: 'E.A', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
//   { id: 13, name: 'Methyl Methacrylate', formula: 'MMA', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
//   { id: 14, name: 'Xylene', formula: 'C₈H₁₀', packing: '180 KGs', type: 'liquid', category: 'Solvents' },
//   { id: 15, name: 'Dico Thinner', formula: 'Thinner', packing: '160 KGs', type: 'liquid', category: 'Solvents' },
//   { id: 16, name: 'Acetic Acid', formula: 'AA', packing: '210 KGs', type: 'liquid', category: 'Acids' },
//   { id: 17, name: 'Ethyl Acetate', formula: 'EA', packing: '180 KGs', type: 'liquid', category: 'Esters' },
//   { id: 18, name: 'TO-20', formula: '13/200', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
//   { id: 19, name: 'N-Hexane', formula: 'C₆H₁₄', packing: '160 KGs', type: 'liquid', category: 'Solvents' },
//   { id: 20, name: 'NP-09', formula: 'NP-09', packing: '215 KGs', type: 'liquid', category: 'Surfactants' },
//   { id: 21, name: 'IPA 96%', formula: 'C₃H₈O', packing: '160 KGs', type: 'liquid', category: 'Alcohols' },
//   { id: 22, name: 'IPA 98.5%', formula: 'C₃H₈O', packing: '160 KGs', type: 'liquid', category: 'Alcohols' },
//   { id: 23, name: 'IPA 99%', formula: 'C₃H₈O', packing: '160 KGs', type: 'liquid', category: 'Alcohols' },
//   { id: 24, name: 'Methylene Chloride', formula: 'M.C', packing: '270 KGs', type: 'liquid', category: 'Solvents' },
//   { id: 25, name: 'OP-25', formula: 'OP-25', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
//   { id: 26, name: 'Glycerin', formula: 'C₃H₈O₃', packing: '250 KGs', type: 'liquid', category: 'Glycols' },
//   { id: 27, name: 'FES-77', formula: 'FES-77', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
//   { id: 28, name: 'FES-993', formula: 'FES-993', packing: '200 KGs', type: 'liquid', category: 'Surfactants' },
//   { id: 29, name: 'NP-20', formula: 'NP-20', packing: '215 KGs', type: 'liquid', category: 'Surfactants' },
  
//   // Powder Chemicals (Bags)
//   { id: 30, name: 'Acrylamide', formula: 'C₃H₅NO', packing: '25 KGs', type: 'powder', category: 'Polymers' },
//   { id: 31, name: 'Phthalic Anhydride', formula: 'P.A', packing: '25 KGs', type: 'powder', category: 'Anhydrides' },
//   { id: 32, name: 'BP-26', formula: 'BP-26', packing: '20 KGs', type: 'powder', category: 'Additives' },
//   { id: 33, name: 'Ammonium Persulfate', formula: 'APS', packing: '25 KGs', type: 'powder', category: 'Catalysts' },
//   { id: 34, name: 'Maleic Anhydride', formula: 'M.A', packing: '25 KGs', type: 'powder', category: 'Anhydrides' },
//   { id: 35, name: 'AT-25', formula: 'AT-25', packing: '25 KGs', type: 'powder', category: 'Additives' },
//   { id: 36, name: 'Formic Acid', formula: 'CH₂O₂', packing: '35 KGs', type: 'powder', category: 'Acids' },
//   { id: 37, name: 'Potassium Persulfate', formula: 'KPS', packing: '25 KGs', type: 'powder', category: 'Catalysts' },
//   { id: 38, name: 'NP-30', formula: 'NP-30', packing: '25 KGs', type: 'powder', category: 'Surfactants' },
//   { id: 39, name: 'Oxalic Acid', formula: 'C₂H₂O₄', packing: '25 KGs', type: 'powder', category: 'Acids' },
//   { id: 40, name: 'Titanium Dioxide', formula: 'TiO₂', packing: '20 KGs', type: 'powder', category: 'Pigments' },
//   { id: 41, name: 'Sodium Sulphate Anhydrous', formula: 'Glauber Salt', packing: '50 KGs', type: 'powder', category: 'Salts' },
//   { id: 42, name: 'Tert-Butyl Hydroperoxide', formula: 'TBHP', packing: '25 KGs', type: 'powder', category: 'Catalysts' },
//   { id: 43, name: 'Sodium Lauryl Sulfate', formula: 'SLS', packing: '20 KGs', type: 'powder', category: 'Surfactants' },
// ]

// export default function ChemicalCatalog() {
//   const [filter, setFilter] = useState<'all' | 'liquid' | 'powder'>('all')

//   const filteredChemicals = filter === 'all' 
//     ? chemicals 
//     : chemicals.filter(chem => chem.type === filter)

//   const liquidCount = chemicals.filter(c => c.type === 'liquid').length
//   const powderCount = chemicals.filter(c => c.type === 'powder').length

//   return (
//     <section className="py-24 lg:py-32 bg-slate-50">
//       <div className="container mx-auto px-8 lg:px-16">
//         {/* Section Header */}
//         <div className="text-center max-w-4xl mx-auto mb-16">
//           <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6">
//             <span className="text-sm font-bold text-blue-700 tracking-wide">
//               COMPREHENSIVE PRODUCT RANGE
//             </span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
//             Liquid & Powder Chemicals
//           </h2>
//           <p className="text-xl text-slate-600 font-medium">
//             Premium industrial chemicals sourced from leading global manufacturers
//           </p>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           <button
//             onClick={() => setFilter('all')}
//             className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
//               filter === 'all'
//                 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
//                 : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
//             }`}
//           >
//             All Products ({chemicals.length})
//           </button>
//           <button
//             onClick={() => setFilter('liquid')}
//             className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
//               filter === 'liquid'
//                 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
//                 : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
//             }`}
//           >
//             Liquid Chemicals ({liquidCount})
//           </button>
//           <button
//             onClick={() => setFilter('powder')}
//             className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
//               filter === 'powder'
//                 ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
//                 : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
//             }`}
//           >
//             Powder Chemicals ({powderCount})
//           </button>
//         </div>

//         {/* Chemical Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredChemicals.map((chemical) => (
//             <ChemicalCard key={chemical.id} chemical={chemical} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function ChemicalCard({ chemical }: { chemical: Chemical }) {
//   // Only the type badge changes color - everything else stays the same
//   const badgeClass = chemical.type === 'powder'
//     ? 'bg-violet-100 text-violet-700'
//     : 'bg-blue-100 text-blue-700'

//   return (
//     <article className="group relative bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//       {/* Content */}
//       <div className="relative z-10">
//         {/* Type Badge & Icon - ONLY THIS CHANGES COLOR */}
//         <div className="flex items-center justify-between mb-4">
//           <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeClass} uppercase tracking-wide`}>
//             {chemical.type}
//           </span>
//           <span className="text-2xl">{chemical.type === 'liquid' ? '🧪' : '⚗️'}</span>
//         </div>

//         {/* Chemical Name & Formula - ALWAYS BLUE */}
//         <div className="mb-4">
//           <h3 className="text-lg font-black text-slate-900 mb-1">
//             {chemical.name}
//           </h3>
//           <p className="text-sm font-mono font-bold text-blue-600">
//             {chemical.formula}
//           </p>
//         </div>

//         {/* Details - ALWAYS SAME */}
//         <div className="space-y-2 mb-4">
//           <div className="flex items-center justify-between text-sm">
//             <span className="text-slate-600 font-semibold">Packing:</span>
//             <span className="text-slate-900 font-bold">{chemical.packing}</span>
//           </div>
//           <div className="flex items-center justify-between text-sm">
//             <span className="text-slate-600 font-semibold">Category:</span>
//             <span className="text-slate-900 font-bold">{chemical.category}</span>
//           </div>
//         </div>

//         {/* CTA Button - ALWAYS BLUE */}
//         <button className="w-full py-2 rounded-lg font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transition-all duration-300 cursor-pointer">
//           Request Quote
//         </button>
//       </div>
//     </article>
//   )
// }
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Beaker, FlaskConical, Package, Tag, MessageSquare } from 'lucide-react'

interface Chemical {
  id: number
  name: string
  formula: string
  packing: string
  type: 'liquid' | 'powder'
  category: string
}

const chemicals: Chemical[] = [
  // Liquid Chemicals (Drums)
  { id: 1, name: 'Styrene Monomer', formula: 'S.M', packing: '190 KGs', type: 'liquid', category: 'Monomers' },
  { id: 2, name: 'Vinyl Acetate Monomer', formula: 'VAM', packing: '190 KGs', type: 'liquid', category: 'Monomers' },
  { id: 3, name: 'Butyl Acrylate', formula: 'B.A', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
  { id: 4, name: 'Mono Ethylene Glycol', formula: 'MEG', packing: '230 KGs', type: 'liquid', category: 'Glycols' },
  { id: 5, name: 'Diethylene Glycol', formula: 'DEG', packing: '230 KGs', type: 'liquid', category: 'Glycols' },
  { id: 6, name: '2-Ethylhexanol', formula: '2-EH', packing: '180 KGs', type: 'liquid', category: 'Alcohols' },
  { id: 7, name: '2-Ethylhexyl Acrylate', formula: '2-EHA', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
  { id: 8, name: 'Acrylic Acid', formula: 'A.A', packing: '200 KGs', type: 'liquid', category: 'Acids' },
  { id: 9, name: 'S-104', formula: 'S-104', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
  { id: 10, name: 'Propylene Glycol', formula: 'P.G', packing: '215 KGs', type: 'liquid', category: 'Glycols' },
  { id: 11, name: 'Dibutyl Phthalate', formula: 'DBP', packing: '210 KGs', type: 'liquid', category: 'Plasticizers' },
  { id: 12, name: 'Ethyl Acrylate', formula: 'E.A', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
  { id: 13, name: 'Methyl Methacrylate', formula: 'MMA', packing: '180 KGs', type: 'liquid', category: 'Acrylates' },
  { id: 14, name: 'Xylene', formula: 'C₈H₁₀', packing: '180 KGs', type: 'liquid', category: 'Solvents' },
  { id: 15, name: 'Dico Thinner', formula: 'Thinner', packing: '160 KGs', type: 'liquid', category: 'Solvents' },
  { id: 16, name: 'Acetic Acid', formula: 'AA', packing: '210 KGs', type: 'liquid', category: 'Acids' },
  { id: 17, name: 'Ethyl Acetate', formula: 'EA', packing: '180 KGs', type: 'liquid', category: 'Esters' },
  { id: 18, name: 'TO-20', formula: '13/200', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
  { id: 19, name: 'N-Hexane', formula: 'C₆H₁₄', packing: '160 KGs', type: 'liquid', category: 'Solvents' },
  { id: 20, name: 'NP-09', formula: 'NP-09', packing: '215 KGs', type: 'liquid', category: 'Surfactants' },
  { id: 21, name: 'IPA 96%', formula: 'C₃H₈O', packing: '160 KGs', type: 'liquid', category: 'Alcohols' },
  { id: 22, name: 'IPA 98.5%', formula: 'C₃H₈O', packing: '160 KGs', type: 'liquid', category: 'Alcohols' },
  { id: 23, name: 'IPA 99%', formula: 'C₃H₈O', packing: '160 KGs', type: 'liquid', category: 'Alcohols' },
  { id: 24, name: 'Methylene Chloride', formula: 'M.C', packing: '270 KGs', type: 'liquid', category: 'Solvents' },
  { id: 25, name: 'OP-25', formula: 'OP-25', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
  { id: 26, name: 'Glycerin', formula: 'C₃H₈O₃', packing: '250 KGs', type: 'liquid', category: 'Glycols' },
  { id: 27, name: 'FES-77', formula: 'FES-77', packing: '210 KGs', type: 'liquid', category: 'Surfactants' },
  { id: 28, name: 'FES-993', formula: 'FES-993', packing: '200 KGs', type: 'liquid', category: 'Surfactants' },
  { id: 29, name: 'NP-20', formula: 'NP-20', packing: '215 KGs', type: 'liquid', category: 'Surfactants' },
  
  // Powder Chemicals (Bags)
  { id: 30, name: 'Acrylamide', formula: 'C₃H₅NO', packing: '25 KGs', type: 'powder', category: 'Polymers' },
  { id: 31, name: 'Phthalic Anhydride', formula: 'P.A', packing: '25 KGs', type: 'powder', category: 'Anhydrides' },
  { id: 32, name: 'BP-26', formula: 'BP-26', packing: '20 KGs', type: 'powder', category: 'Additives' },
  { id: 33, name: 'Ammonium Persulfate', formula: 'APS', packing: '25 KGs', type: 'powder', category: 'Catalysts' },
  { id: 34, name: 'Maleic Anhydride', formula: 'M.A', packing: '25 KGs', type: 'powder', category: 'Anhydrides' },
  { id: 35, name: 'AT-25', formula: 'AT-25', packing: '25 KGs', type: 'powder', category: 'Additives' },
  { id: 36, name: 'Formic Acid', formula: 'CH₂O₂', packing: '35 KGs', type: 'powder', category: 'Acids' },
  { id: 37, name: 'Potassium Persulfate', formula: 'KPS', packing: '25 KGs', type: 'powder', category: 'Catalysts' },
  { id: 38, name: 'NP-30', formula: 'NP-30', packing: '25 KGs', type: 'powder', category: 'Surfactants' },
  { id: 39, name: 'Oxalic Acid', formula: 'C₂H₂O₄', packing: '25 KGs', type: 'powder', category: 'Acids' },
  { id: 40, name: 'Titanium Dioxide', formula: 'TiO₂', packing: '20 KGs', type: 'powder', category: 'Pigments' },
  { id: 41, name: 'Sodium Sulphate Anhydrous', formula: 'Glauber Salt', packing: '50 KGs', type: 'powder', category: 'Salts' },
  { id: 42, name: 'Tert-Butyl Hydroperoxide', formula: 'TBHP', packing: '25 KGs', type: 'powder', category: 'Catalysts' },
  { id: 43, name: 'Sodium Lauryl Sulfate', formula: 'SLS', packing: '20 KGs', type: 'powder', category: 'Surfactants' },
]

export default function ChemicalCatalog() {
  const [filter, setFilter] = useState<'all' | 'liquid' | 'powder'>('all')

  const filteredChemicals = filter === 'all' 
    ? chemicals 
    : chemicals.filter(chem => chem.type === filter)

  const liquidCount = chemicals.filter(c => c.type === 'liquid').length
  const powderCount = chemicals.filter(c => c.type === 'powder').length

  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-bold text-blue-700 tracking-wide">
              COMPREHENSIVE PRODUCT RANGE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Liquid & Powder Chemicals
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Premium industrial chemicals sourced from leading global manufacturers
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
              filter === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
            }`}
          >
            All Products ({chemicals.length})
          </button>
          <button
            onClick={() => setFilter('liquid')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
              filter === 'liquid'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
            }`}
          >
            <Beaker className="inline-block w-4 h-4 mr-2" />
            Liquid Chemicals ({liquidCount})
          </button>
          <button
            onClick={() => setFilter('powder')}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
              filter === 'powder'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-300'
            }`}
          >
            <FlaskConical className="inline-block w-4 h-4 mr-2" />
            Powder Chemicals ({powderCount})
          </button>
        </div>

        {/* Chemical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredChemicals.map((chemical) => (
            <ChemicalCard key={chemical.id} chemical={chemical} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ChemicalCard({ chemical }: { chemical: Chemical }) {
  const badgeClass = chemical.type === 'powder'
    ? 'bg-violet-100 text-violet-700'
    : 'bg-blue-100 text-blue-700'

  return (
    <article className="group relative bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Content */}
      <div className="relative z-10">
        {/* Type Badge & Icon */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeClass} uppercase tracking-wide`}>
            {chemical.type}
          </span>
          {chemical.type === 'liquid' ? (
            <Beaker className="w-6 h-6 text-blue-600" />
          ) : (
            <FlaskConical className="w-6 h-6 text-violet-600" />
          )}
        </div>

        {/* Chemical Name & Formula */}
        <div className="mb-4">
          <h3 className="text-lg font-black text-slate-900 mb-1">
            {chemical.name}
          </h3>
          <p className="text-sm font-mono font-bold text-blue-600">
            {chemical.formula}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-slate-600 font-semibold">
              <Package className="w-4 h-4" />
              Packing:
            </span>
            <span className="text-slate-900 font-bold">{chemical.packing}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-slate-600 font-semibold">
              <Tag className="w-4 h-4" />
              Category:
            </span>
            <span className="text-slate-900 font-bold">{chemical.category}</span>
          </div>
        </div>

        {/* CTA Button - Links to contact page form */}
        <Link 
          href="/contact#contact-form"
          className="flex items-center justify-center gap-2 w-full py-2 rounded-lg font-bold text-sm bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg transition-all duration-300"
        >
          <MessageSquare className="w-4 h-4" />
          Request Quote
        </Link>
      </div>
    </article>
  )
}
