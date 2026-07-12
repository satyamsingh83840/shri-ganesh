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
      className="section-padding relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="featured-products-heading"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-100 h-100 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-width px-4 mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl space-y-3">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-sm">
                <Sparkles className="h-3 w-3" />
                Featured Collection
              </span>
            </div>

            <h2
              id="featured-products-heading"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl"
            >
              Best Selling{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/70">
                Fans
              </span>
            </h2>

            <p className="text-sm text-muted-foreground sm:text-base max-w-md leading-relaxed">
              Explore our premium collection of energy-efficient and stylish
              fans.
            </p>
          </div>

          {/* Action Buttons: Slider Navigation + View All */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-muted-foreground/20 hover:border-primary hover:bg-transparent"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-muted-foreground/20 hover:border-primary hover:bg-transparent"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <Button
              variant="outline"
              className="group relative overflow-hidden rounded-full border-muted-foreground/20 h-10 px-5 transition-all duration-300 hover:border-primary hover:bg-transparent"
              asChild
            >
              <Link href="/products">
                <span className="relative z-10 flex items-center text-xs font-medium tracking-wide">
                  View All
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-linear-to-r from-primary/5 to-primary/0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
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
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
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
              className="w-70 sm:w-[320px] shrink-0 snap-start snap-always group/card relative rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
