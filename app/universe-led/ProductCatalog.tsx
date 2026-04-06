"use client";

import Image from "next/image";
import { useState } from "react";
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
    ], // Empty rows are safely handled in the render logic below
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
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-16">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-bold text-blue-700 tracking-wide uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Premium LED Solutions
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            High-quality lighting solutions for every need, powered by cutting-edge technology.
          </p>
        </div>

        {/* Dynamic Product Grid */}
        <div className="space-y-20">
          {productRows.map((row, idx) => {
            // Prevent rendering empty sections
            if (row.products.length === 0) return null;

            return (
              <div key={`${row.rowTitle}-${idx}`}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-widest text-white shadow-md">
                    {row.rowTitle}
                  </span>
                  <div className="h-px flex-1 bg-slate-200" />
                  <span className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-widest">
                    {row.categoryTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {row.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
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
    <article className="group bg-white rounded-[2rem] p-6 border border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">

      {/* Image Container */}
      <div className="relative h-64 bg-slate-50 rounded-2xl overflow-hidden mb-6 border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl text-slate-300">
            <Zap className="w-12 h-12 text-slate-300" />
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-black text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <div className="space-y-3 mt-auto pt-4 border-t border-slate-100">
          {product.colorTemp && (
            <div className="flex items-center justify-between text-sm gap-1 flex-wrap">
              <span className="flex items-center text-slate-500 font-bold uppercase tracking-tighter">
                <Thermometer className="w-4 h-4 text-slate-400" /> Range :
              </span>
              <span className="text-slate-900 font-black text-xs sm:text-sm">{product.colorTemp}</span>
            </div>
          )}

          {product.carton && (
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 text-slate-500 font-bold uppercase tracking-tighter">
                <Box className="w-4 h-4 text-slate-400" /> Carton
              </span>
              <span className="text-slate-900 font-black">{product.carton}</span>
            </div>
          )}

          {product.base && (
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-tighter">
                <Zap className="w-4 h-4 text-slate-400" /> Base
              </span>
              <span className="text-slate-900 font-black">{product.base}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}