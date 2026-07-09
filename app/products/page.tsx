"use client";

import { useMemo, useState } from "react";
import { Search, X, SlidersHorizontal, ShoppingBag } from "lucide-react";
import products from "@/data/products";
import ProductCard from "@/components/products/product-card";

const categories = [
  "All",
  "Ceiling Fan",
  "BLDC Fan",
  "Wall Fan",
  "Exhaust Fan",
  "Pedestal Fan",
  "Table Fan",
];

type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  specs: string[];
};

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return (products as Product[]).filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  return (
    <main className="min-h-screen bg-neutral-50/50 dark:bg-neutral-950 text-foreground selection:bg-primary/10">
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden border-b border-neutral-200/60 dark:border-neutral-800/60 bg-gradient-to-b from-neutral-100/40 via-neutral-50/20 to-transparent py-16 sm:py-24">
        {/* Subtle background graphic block */}
        <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 shadow-sm">
              Catalog 2026
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl text-neutral-900 dark:text-neutral-50">
              Air Engineering. <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Premium Fan Collection
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Discover beautifully crafted airflow solutions engineered for
              ultimate silent performance and modern architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Interactive Filter & Search Dock */}
      <section className="sticky top-0 z-40 border-b border-neutral-200/60 dark:border-neutral-800/40 bg-white/70 dark:bg-neutral-950/70 py-4 backdrop-blur-xl transition-all">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Ultra-Clean Input Box */}
            <div className="relative w-full md:max-w-sm group">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                placeholder="Search premium models..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-11 w-full rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 pl-10 pr-10 text-sm tracking-tight transition-all placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus:border-primary hover:bg-neutral-100/50 dark:hover:bg-neutral-900"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Premium Capsule Tags */}
            <div className="no-scrollbar -mx-4 flex overflow-x-auto px-4 pb-1 md:mx-0 md:px-0 md:pb-0 gap-2 items-center">
              <div className="hidden sm:flex items-center text-neutral-400 mr-1 text-xs font-bold uppercase tracking-wider gap-1.5">
                <SlidersHorizontal className="h-3 w-3" />
                <span>Filter:</span>
              </div>

              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ease-out active:scale-95 ${
                      isActive
                        ? "bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-950 shadow-md shadow-neutral-900/10 dark:shadow-none"
                        : "border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-300 dark:hover:border-neutral-700"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid & Results Status */}
      <section className="py-12 sm:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            /* Minimalist Empty State Box */
            <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-neutral-200 dark:border-neutral-800 p-16 text-center max-w-md mx-auto">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-400">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-bold text-neutral-900 dark:text-neutral-100">
                No units matched
              </h3>
              <p className="mt-1.5 text-sm text-neutral-400 dark:text-neutral-500">
                Try checking your spelling or selecting a different fan style
                category.
              </p>
            </div>
          ) : (
            <>
              {/* Count Banner */}
              <div className="mb-8 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  Showing{" "}
                  <span className="font-extrabold text-neutral-800 dark:text-neutral-200">
                    {filteredProducts.length}
                  </span>{" "}
                  {filteredProducts.length === 1
                    ? "Premium Item"
                    : "Premium Items"}
                </p>
              </div>

              {/* Grid System with subtle scale hover layout */}
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group/card transition-all duration-500 ease-out hover:-translate-y-1.5"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
