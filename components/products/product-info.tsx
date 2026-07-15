"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, MessageCircle, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buyOnWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

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
  const imagesList = product.images?.length ? product.images : [placeholder];
  const [selectedImage, setSelectedImage] = useState<string>(imagesList[0]);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} at Shri Ganesh Enterprises!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing", err);
      }
    } else {
      // Fallback to copy link
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
      {/* Sleeker & Smaller Image Gallery Column (Spans 5 of 12) */}
      <div className="flex flex-col gap-5 lg:col-span-5 items-center w-full">
        <div className="relative w-full max-w-sm">
          {/* Subtle glow layer behind */}
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          {/* Scaled down, hyper-clean main view */}
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-muted/20 p-6 shadow-xs">
            <Image
              src={selectedImage}
              alt={product.name}
              width={400}
              height={400}
              priority
              className="mx-auto aspect-square w-full max-w-[320px] object-contain transition duration-500 ease-out hover:scale-105"
            />
          </div>
        </div>

        {/* Scaled down Thumbnails */}
        {imagesList.length > 1 && (
          <div className="flex flex-wrap gap-2.5 justify-center w-full max-w-sm">
            {imagesList.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(imgUrl)}
                className={cn(
                  "relative h-14 w-14 overflow-hidden rounded-xl border bg-card p-1.5 transition-all duration-200 shadow-2xs",
                  selectedImage === imgUrl
                    ? "border-primary ring-2 ring-primary/15 scale-95"
                    : "border-border hover:border-muted-foreground/50",
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

      {/* Product Info Column (Spans 7 of 12) */}
      <div className="flex flex-col lg:col-span-7">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-primary">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-1.5 text-xs font-medium text-muted-foreground">
              Premium
            </span>
          </div>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {product.name}
        </h1>

        <div className="mt-5 flex items-baseline gap-4">
          <span className="text-4xl font-black tracking-tight text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs font-medium text-muted-foreground/80">
            Inc. of all taxes
          </span>
        </div>

        <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground/90 max-w-xl">
          {product.description}
        </p>

        {/* Features Checklist */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 max-w-xl">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 text-sm font-medium text-foreground/80"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Check className="h-3 w-3 text-emerald-600" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Premium CTA Setup with integrated Share Module */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            className="rounded-xl px-7 text-sm font-bold h-11 bg-primary text-primary-foreground shadow-sm shadow-primary/10 transition-transform active:scale-98"
            onClick={() =>
              buyOnWhatsApp({
                name: product.name,
                price: product.price,
                image: selectedImage,
              })
            }
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Buy on WhatsApp
          </Button>

          <a href="tel:+919560112230" className="inline-flex">
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-6 text-sm font-semibold h-11 border-border/80 hover:bg-muted/50"
            >
              Call Now
            </Button>
          </a>

          <Button
            size="lg"
            variant="ghost"
            onClick={handleShare}
            className="rounded-xl h-11 px-4 text-muted-foreground hover:text-primary transition-colors border border-transparent hover:border-border/60"
            title="Share Product"
          >
            <Share2 className="h-4 w-4 mr-2" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {copied ? "Link Copied!" : "Share"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
