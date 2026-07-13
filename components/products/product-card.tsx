"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buyOnWhatsApp } from "@/lib/whatsapp";

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
  specifications: Record<string, string>;
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const displayImage =
    product.images?.[0] || "/images/products/placeholder.webp";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-2xs transition-shadow duration-300 hover:shadow-md"
    >
      {/* Compact Image Container */}
      <div className="relative overflow-hidden aspect-square w-full bg-muted/20">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Small Badges */}
        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1">
          {product.featured && (
            <span className="rounded-md bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-xs">
              Featured
            </span>
          )}

          {product.bestseller && (
            <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
              Best Seller
            </span>
          )}
        </div>
      </div>

      {/* Condensed Content Area */}
      <div className="p-4 space-y-2">
        <div className="space-y-0.5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-primary/80">
            {product.category}
          </p>
          <h3 className="text-base font-bold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
        </div>

        {/* Price */}
        <h4 className="text-xl font-extrabold text-foreground">
          ₹{product.price.toLocaleString("en-IN")}
        </h4>

        {/* Tighter Action Buttons */}
        <div className="pt-1 flex gap-2">
          <Button
            size="sm"
            className="flex-1 rounded-xl text-xs font-semibold h-9 shadow-2xs"
            onClick={() =>
              buyOnWhatsApp({
                name: product.name,
                price: product.price,
                image: displayImage,
              })
            }
          >
            <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
            Buy Now
          </Button>

          <Link href={`/products/${product.slug}`} passHref>
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl h-9 w-9 p-0 border-border/70 text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
