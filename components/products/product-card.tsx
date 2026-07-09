"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buyOnWhatsApp } from "@/lib/whatsapp";

type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  image: string;
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
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-3xl border border-border bg-card"
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Badges */}

        <div className="absolute left-4 top-4 flex gap-2">
          {product.featured && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Featured
            </span>
          )}

          {product.bestseller && (
            <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
              Best Seller
            </span>
          )}
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        <p className="text-sm text-primary">{product.category}</p>

        <h3 className="mt-2 text-2xl font-bold">{product.name}</h3>

        {/* Rating */}

        <div className="mt-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}

          <span className="ml-2 text-sm text-muted-foreground">
            Premium Quality
          </span>
        </div>

        {/* Price */}

        <h4 className="mt-5 text-3xl font-bold text-primary">
          ₹{product.price.toLocaleString("en-IN")}
        </h4>

        {/* Specs */}

        <div className="mt-5 space-y-2">
          {product.features.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <Zap className="h-4 w-4 text-primary" />

              {item}
            </div>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-3">
          <Button
            className="flex-1 rounded-full"
            onClick={() =>
              buyOnWhatsApp({
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Buy Now
          </Button>

          <Link href={`/products/${product.slug}`}>
            <Button variant="outline" className="rounded-full" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
