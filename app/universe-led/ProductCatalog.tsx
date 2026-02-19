"use client";

import Image from "next/image";
import { useState } from "react";

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
  // Row 1 – Supreme (5W, 13W, 20W)
  {
    rowTitle: "SUPREME",
    categoryTitle: "SUPREME SERIES",
    products: [
      {
        id: "bulb-18w",
        name: "BULB (18 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 100 Pcs",
        base: "B-22 / E-27",
        rate: "115",
        image: "/images/zawata.png",
      },
      {
        id: "bulb-13w",
        name: "BULB (13 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 100 Pcs",
        base: "B-22 / E-27",
        rate: "120",
        image: "/images/tubelight2.png",
      },
      {
        id: "bulb-20w",
        name: "BULB (20 Watts)",
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
      {
        id: "bulb-18w",
        name: "BULB (18 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 100 Pcs",
        base: "B-22 / E-27",
        rate: "115",
        image: "/images/ninpushswitch.png",
      },
      {
        id: "bulb-13w",
        name: "BULB (13 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 100 Pcs",
        base: "B-22 / E-27",
        rate: "120",
        image: "/images/ninpushbutton.png",
      },
      {
        id: "bulb-20w",
        name: "BULB (20 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 60 Pcs",
        base: "B-22 / E-27",
        rate: "260",
        image: "/images/ninchanger.png",
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
        carton: "Carton 100 Pcs",
        base: "B-22 / E-27",
        rate: "115",
        image: "/images/ninchangeover.png",
      },
      {
        id: "bulb-13w",
        name: "BULB (13 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 100 Pcs",
        base: "B-22 / E-27",
        rate: "120",
        image: "/images/breakerwpack.png",
      },
      {
        id: "bulb-20w",
        name: "BULB (20 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 60 Pcs",
        base: "B-22 / E-27",
        rate: "260",
        image: "/images/breaker3.png",
      },
    ],
  },

  // Row 2 – Supreme (18W, 30W, 40W)
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
        name: "BULB (30 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 32 Pcs",
        base: "E-27",
        rate: "525",
        image: "/images/breaker.png",
      },
      {
        id: "bulb-40w",
        name: "BULB (40 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 18 Pcs",
        base: "E-27",
        rate: "750",
        image: "/images/brakerpack.png",
      },
    ],
  },

  // Row 3 – Supreme (50W) + NIN BULBS (12W, 18W)
  {
    rowTitle: "NIN BULBS",
    categoryTitle: "SUPREME SERIES",
    products: [
      {
        id: "bulb-50w",
        name: "BULB (50 Watts)",
        colorTemp: "3000K - 6500K",
        carton: "Carton 16 Pcs",
        base: "E-27",
        rate: "875",
        image: "/images/bixtonbreaker.png",
      },
      {
        id: "nin-12w",
        name: "NIN BULB (12 W)",
        colorTemp: "3000K - 4000K - 6500K",
        base: "B-22 / E-27",
        rate: "140",
        image: "/images/24watt.png",
      },
      {
        id: "nin-18w",
        name: "NIN BULB (18 W)",
        colorTemp: "3000K - 4000K - 6500K",
        base: "B-22 / E-27",
        rate: "265",
        image: "/images/18wattlight.png",
      },
    ],
  },

  // Row 4 – ARSCON (12W, 18W) + COB
  {
    rowTitle: "ARSCON / COB",
    categoryTitle: "SUPREME SERIES",
    products: [
      {
        id: "ice-panel-12w",
        name: "ICE PANEL (12 W)",
        colorTemp: "3000K - 4000K - 6500K",
        carton: "Carton 60 Pcs",
        rate: "295",
        image: "/images/18waat.png",
      },
      {
        id: "ice-panel-18w",
        name: "ICE PANEL (18 W)",
        colorTemp: "3000K - 4000K - 6500K",
        carton: "Carton 50 Pcs",
        rate: "395",
        image: "/images/7watt.png",
      },
      {
        id: "cob-5w",
        name: "COB (5 W)",
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
    <section className="py-12 lg:py-12 bg-slate-50">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Section heading - matching your page style */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block px-5 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-sm font-bold text-blue-700 tracking-wide">
              OUR PRODUCTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Premium LED Solutions
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            High-quality lighting solutions for every need, powered by
            cutting-edge technology
          </p>
        </div>

        {/* Rows exactly like screenshot */}
        <div className="space-y-16">
          {productRows.map((row, idx) => (
            <div key={`${row.rowTitle}-${idx}`}>
              {/* Row header: SUPREME + category on same line */}
              <div className="flex items-center gap-4 mb-8">
                <span className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-wider text-white">
                  SUPREME
                </span>
                <div className="h-px flex-1 bg-blue-200" />
                <span className="text-sm md:text-base font-bold text-blue-600 uppercase tracking-wide">
                  {row.categoryTitle}
                </span>
              </div>

              {/* Always 3 cards per row (like screenshot) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {row.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
      {/* Image Section */}
      <div className="relative h-56 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden mb-6">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl text-slate-400">
            💡
          </div>
        )}
        {/* {product.rate && (
          <div className="absolute top-3 right-3 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
            RATE {product.rate}
          </div>
        )} */}
      </div>

      {/* Content Section - matching your page theme */}
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
          {product.name}
        </h3>

        {product.colorTemp && (
          <p className="text-slate-600 leading-relaxed">
            <span className="font-bold text-blue-600">Range:</span>{" "}
            {product.colorTemp}
          </p>
        )}

        {product.carton && (
          <p className="text-slate-600 leading-relaxed">
            <span className="font-bold text-blue-600">Carton:</span>{" "}
            {product.carton}
          </p>
        )}

        {product.base && (
          <p className="text-slate-600 leading-relaxed">
            <span className="font-bold text-blue-600">Base:</span>{" "}
            {product.base}
          </p>
        )}
      </div>
    </article>
  );
}
