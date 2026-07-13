"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buyOnWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils"; // Assumes you use shadcn's standard cn helper

type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  features: string[];
  specifications: Record<string, string>;
};

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const placeholder = "/images/products/placeholder.webp";
  // Safe fallback if images array is empty or undefined
  const imagesList = product.images?.length ? product.images : [placeholder];

  // State to manage the currently displayed image
  const [selectedImage, setSelectedImage] = useState<string>(imagesList[0]);

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Image Gallery Column */}
      <div className="flex flex-col gap-4">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
            <Image
              src={selectedImage}
              alt={product.name}
              width={700}
              height={700}
              priority
              className="mx-auto aspect-square w-full max-w-lg object-contain transition duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Thumbnails (Only shows if there's more than 1 image) */}
        {imagesList.length > 1 && (
          <div className="flex flex-wrap gap-3 justify-center">
            {imagesList.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(imgUrl)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-xl border-2 bg-card p-2 transition",
                  selectedImage === imgUrl
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border hover:border-muted-foreground",
                )}
              >
                <Image
                  src={imgUrl}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info Column */}
      <div className="flex flex-col justify-center">
        <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          {product.category}
        </span>

        <h1 className="mt-5 text-4xl font-bold md:text-5xl">{product.name}</h1>

        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-3 text-muted-foreground">Premium Quality</span>
        </div>

        <h2 className="mt-6 text-5xl font-bold text-primary">
          ₹{product.price.toLocaleString("en-IN")}
        </h2>

        <p className="mt-8 leading-8 text-muted-foreground">
          {product.description}
        </p>

        {/* Features */}
        <div className="mt-8 grid gap-4">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() =>
              buyOnWhatsApp({
                name: product.name,
                price: product.price,
                image: selectedImage, // Sends the active image user is looking at
              })
            }
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Buy on WhatsApp
          </Button>

          <Button size="lg" variant="outline" className="rounded-full">
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
}
