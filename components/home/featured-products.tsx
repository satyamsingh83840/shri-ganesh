"use client";

import { useMemo, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

import products from "@/data/products";
import ProductCard from "@/components/products/product-card";
import { Button } from "@/components/ui/button";

// 1. Updated Type mapping precisely to match the global product layout
type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  featured?: boolean;
  bestseller?: boolean;
  description: string;
  features: string[];
  specifications: {
    Sweep?: string;
    Motor?: string;
    Blades?: string;
    Warranty?: string;
    Voltage?: string;
    Finish?: string;
    Speed?: string;
    [key: string]: string | undefined;
  } & Record<string, string>;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export default function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featuredProducts = useMemo(() => {
    return (products as unknown as Product[]).filter(
      (product) => product.featured,
    );
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;

      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="products"
      className="section-padding relative overflow-hidden bg-background py-16 md:py-24"
      aria-labelledby="featured-products-heading"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-width px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl space-y-3">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-sm px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-xs transition-colors duration-300 hover:bg-primary/15">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                Featured Collection
              </span>
            </div>

            <h2
              id="featured-products-heading"
              className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              Best Selling{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/90 to-primary/60">
                Fans
              </span>
            </h2>

            <p className="text-sm text-muted-foreground sm:text-base max-w-md leading-relaxed">
              Explore our premium collection of energy-efficient and stylish
              fans designed for modern living.
            </p>
          </div>

          {/* Action Buttons: Slider Navigation + View All */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9 border-border/60 bg-background/50 backdrop-blur-xs text-foreground/80 shadow-2xs transition-all duration-200 hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9 border-border/60 bg-background/50 backdrop-blur-xs text-foreground/80 shadow-2xs transition-all duration-200 hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="outline"
              className="group relative overflow-hidden rounded-full border-border/60 bg-background/50 backdrop-blur-xs h-9 px-4.5 transition-all duration-300 hover:border-primary hover:shadow-sm active:scale-95"
              asChild
            >
              <Link href="/products">
                <span className="relative z-10 flex items-center text-xs font-semibold tracking-wide text-foreground group-hover:text-primary transition-colors duration-200">
                  View All
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-linear-to-r from-primary/10 to-primary/0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Horizontally Scrollable Container */}
        <motion.div
          ref={scrollContainerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style
            dangerouslySetInnerHTML={{
              __html: `
            div::-webkit-scrollbar { display: none; }
          `,
            }}
          />

          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              /* 
                 Reduced width from 320px to w-[250px] sm:w-[270px] lg:w-[285px].
                 This naturally shrinks the vertical height of the child ProductCard.
              */
              className="w-[250px] sm:w-[270px] lg:w-[285px] shrink-0 snap-start snap-always group/card relative rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 focus-within:ring-2 focus-within:ring-primary/50"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
