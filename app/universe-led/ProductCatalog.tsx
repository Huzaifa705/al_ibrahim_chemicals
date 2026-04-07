"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Thermometer, Box, Zap } from "lucide-react";

interface Product {
  id: string;
  name: string;
  colorTemp?: string;
  carton?: string;
  base?: string;
  rate?: string;
  image: string;
}

type RowType = "SUPREME" | "NIN BULBS" | "ARSCON / COB";

interface ProductRow {
  rowTitle: RowType;
  categoryTitle: string;
  products: Product[];
}

const productRows: ProductRow[] = [
  {
    rowTitle: "SUPREME",
    categoryTitle: "SUPREME SERIES",
    products: [
      {
        id: "bulb-13w",
        name: "Tube Light",
        colorTemp: "3000K - 6500K",
        carton: "Carton 100 Pcs",
        base: "B-22 / E-27",
        rate: "120",
        image: "/images/tubelight2.png",
      },
      {
        id: "bulb-20w",
        name: "Tube Light",
        colorTemp: "3000K - 6500K",
        carton: "Carton 60 Pcs",
        base: "B-22 / E-27",
        rate: "260",
        image: "/images/tubelight.png",
      },
    ],
  },
  {
    rowTitle: "SUPREME",
    categoryTitle: "SUPREME SERIES",
    products: [
      // {
      //   id: "bulb-18w",
      //   name: "BULB (18 Watts)",
      //   colorTemp: "3000K - 6500K",
      //   carton: "Carton 100 Pcs",
      //   base: "B-22 / E-27",
      //   rate: "115",
      //   image: "/images/ninpushswitch.png",
      // },
      // {
      //   id: "bulb-13w",
      //   name: "BULB (13 Watts)",
      //   colorTemp: "3000K - 6500K",
      //   carton: "Carton 100 Pcs",
      //   base: "B-22 / E-27",
      //   rate: "120",
      //   image: "/images/ninpushbutton.png",
      // },
      // {
      //   id: "bulb-20w",
      //   name: "BULB (20 Watts)",
      //   colorTemp: "3000K - 6500K",
      //   carton: "Carton 60 Pcs",
      //   base: "B-22 / E-27",
      //   rate: "260",
      //   image: "/images/ninchanger.png",
      // },
    ],
  },
  {
    rowTitle: "SUPREME",
    categoryTitle: "SUPREME SERIES",
    products: [
      // {
      //   id: "bulb-18w",
      //   name: "BULB (18 Watts)",
      //   colorTemp: "3000K - 6500K",
      //   carton: "Carton 100 Pcs",
      //   base: "B-22 / E-27",
      //   rate: "115",
      //   image: "/images/ninchangeover.png",
      // },
      // {
      //   id: "bulb-13w",
      //   name: "BULB (13 Watts)",
      //   colorTemp: "3000K - 6500K",
      //   carton: "Carton 100 Pcs",
      //   base: "B-22 / E-27",
      //   rate: "120",
      //   image: "/images/breakerwpack.png",
      // },
      {
        id: "bulb-20w",
        name: "Circuit Breaker",
        colorTemp: "3000K - 6500K",
        carton: "Carton 60 Pcs",
        base: "B-22 / E-27",
        rate: "260",
        image: "/images/breaker3.png",
      },
    ],
  },
  {
    rowTitle: "SUPREME",
    categoryTitle: "SUPREME SERIES",
    products: [
      {
        id: "bulb-18w",
        name: "BULB (18 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 60 Pcs",
        base: "B-22 / E-27",
        rate: "280",
        image: "/images/breaker2.png",
      },
      {
        id: "bulb-30w",
        name: "Circuit Breaker",
        colorTemp: "3000K - 6500K",
        carton: "Carton 32 Pcs",
        base: "E-27",
        rate: "525",
        image: "/images/breaker.png",
      },
      {
        id: "bulb-40w",
        name: "Circuit Breaker",
        colorTemp: "3000K - 6500K",
        carton: "Carton 18 Pcs",
        base: "E-27",
        rate: "750",
        image: "/images/brakerpack.png",
      },
    ],
  },
  {
    rowTitle: "SUPREME",
    categoryTitle: "SUPREME SERIES",
    products: [
      // {
      //   id: "bulb-50w",
      //   name: "BULB (50 Watts)",
      //   colorTemp: "3000K - 6500K",
      //   carton: "Carton 16 Pcs",
      //   base: "E-27",
      //   rate: "875",
      //   image: "/images/bixtonbreaker.png",
      // },
      // {
      //   id: "nin-12w",
      //   name: "NIN BULB (12 W)",
      //   colorTemp: "3000K - 4000K - 6500K",
      //   base: "B-22 / E-27",
      //   rate: "140",
      //   image: "/images/24watt.png",
      // },
      // {
      //   id: "nin-18w",
      //   name: "NIN BULB (18 W)",
      //   colorTemp: "3000K - 4000K - 6500K",
      //   base: "B-22 / E-27",
      //   rate: "265",
      //   image: "/images/18wattlight.png",
      // },
    ],
  },
  {
    rowTitle: "ARSCON / COB",
    categoryTitle: "SUPREME SERIES",
    products: [
      {
        id: "ice-panel-12w",
        name: "BULB (18 W)",
        colorTemp: "3000K - 4000K - 6500K",
        carton: "Carton 60 Pcs",
        rate: "295",
        image: "/images/18waat.png",
      },
      {
        id: "ice-panel-18w",
        name: "Down Light (7 W)",
        colorTemp: "3000K - 4000K - 6500K",
        carton: "Carton 50 Pcs",
        rate: "395",
        image: "/images/7watt.png",
      },
      {
        id: "cob-5w",
        name: "COB (12 W)",
        colorTemp: "3000K - 4000K - 6500K",
        carton: "Carton 100 Pcs",
        rate: "185",
        image: "/images/12watt.png",
      },
    ],
  },
];

export default function ProductCatalog() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block px-4 py-1.5 bg-brand-50 rounded-full mb-4 sm:mb-6 border border-brand-primary/20">
            <span className="text-xs sm:text-sm font-bold text-brand-dark tracking-wide uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            Premium LED Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium px-4">
            High-quality lighting solutions for every need, powered by cutting-edge technology.
          </p>
        </div>

        {/* Dynamic Product Grid */}
        <div className="space-y-16 sm:space-y-20">
          {productRows.map((row, idx) => {
            // Skips rendering rows where all products are commented out
            if (row.products.length === 0) return null;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                key={`${row.rowTitle}-${idx}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <span className="inline-flex items-center rounded-lg bg-brand-dark px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-white shadow-md whitespace-nowrap">
                    {row.rowTitle}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-[10px] sm:text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                    {row.categoryTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {row.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-slate-50 rounded-2xl sm:rounded-[2rem] p-5 sm:p-6 border border-slate-100 hover:border-brand-primary/40 hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden relative">

      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container */}
      <div className="relative h-48 sm:h-56 lg:h-64 bg-white rounded-xl sm:rounded-2xl overflow-hidden mb-5 sm:mb-6 border border-slate-100 group-hover:border-brand-primary/20 transition-colors z-10 flex items-center justify-center">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 sm:p-6 transform group-hover:scale-110 transition-transform duration-700"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-50 text-slate-300">
            <Zap className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col z-10">
        <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-4 sm:mb-6 group-hover:text-brand-primary transition-colors">
          {product.name}
        </h3>

        <div className="space-y-2.5 sm:space-y-3 mt-auto pt-4 border-t border-slate-200/60">
          {product.colorTemp && (
            <div className="flex items-center justify-between text-xs sm:text-sm gap-1">
              <span className="flex items-center text-slate-500 font-bold uppercase tracking-tighter">
                <Thermometer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 mr-1" /> Temp
              </span>
              <span className="text-slate-900 font-black truncate max-w-[120px] sm:max-w-none" title={product.colorTemp}>
                {product.colorTemp}
              </span>
            </div>
          )}

          {product.carton && (
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="flex items-center text-slate-500 font-bold uppercase tracking-tighter">
                <Box className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 mr-1" /> Carton
              </span>
              <span className="text-slate-900 font-black">{product.carton}</span>
            </div>
          )}

          {product.base && (
            <div className="flex items-center justify-between text-xs sm:text-sm">
              <span className="flex items-center text-slate-500 font-bold uppercase tracking-tighter">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400 mr-1" /> Base
              </span>
              <span className="text-slate-900 font-black truncate max-w-[100px] sm:max-w-none" title={product.base}>
                {product.base}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}