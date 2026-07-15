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
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="grid gap-8 px-4 sm:px-6 md:gap-12 lg:grid-cols-12 lg:items-start lg:px-0">
      {/* Centered Gallery Layout for Mobile -> Spans 5 columns on desktop */}
      <div className="flex flex-col gap-4 lg:col-span-5 items-center w-full mx-auto max-w-sm sm:max-w-md lg:max-w-none">
        <div className="relative w-full aspect-square max-w-[290px] sm:max-w-[340px] lg:max-w-[380px]">
          {/* Subtle glow layer behind */}
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          {/* Core main preview container */}
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-muted/20 p-4 sm:p-6 shadow-2xs">
            <Image
              src={selectedImage}
              alt={product.name}
              width={380}
              height={380}
              priority
              className="h-full w-full max-h-[240px] sm:max-h-[290px] lg:max-h-[320px] object-contain transition duration-500 ease-out hover:scale-105"
            />
          </div>
        </div>

        {/* Dynamic Horizontal/Wrap Thumbnails optimized for small touch targets */}
        {imagesList.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center w-full mt-1">
            {imagesList.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(imgUrl)}
                className={cn(
                  "relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-xl border bg-card p-1 transition-all duration-200 shadow-3xs",
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

      {/* Product Content Column (Spans 7 columns on desktop) */}
      <div className="flex flex-col lg:col-span-7 text-left">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-primary">
            {product.category}
          </span>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-1 text-[11px] sm:text-xs font-medium text-muted-foreground">
              Premium
            </span>
          </div>
        </div>

        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {product.name}
        </h1>

        <div className="mt-4 flex items-baseline gap-2.5 sm:gap-4">
          <span className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-muted-foreground/80">
            Inc. of all taxes
          </span>
        </div>

        <p className="mt-4 text-xs sm:text-base leading-relaxed text-muted-foreground/90 max-w-xl">
          {product.description}
        </p>

        {/* Features Checklist - Single Column on phone, Split Grid on Tablet/Desktop */}
        <div className="mt-6 grid gap-2.5 grid-cols-1 sm:grid-cols-2 max-w-xl">
          {product.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-foreground/80"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <Check className="h-2.5 w-2.5 text-emerald-600" />
              </div>
              <span className="line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* Flexible Mobile Actions Stack: Stacked cleanly on phone, inline on desktop */}
        <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
          <Button
            size="lg"
            className="rounded-xl w-full sm:w-auto px-6 text-xs sm:text-sm font-bold h-11 bg-primary text-primary-foreground shadow-sm shadow-primary/10 active:scale-98"
            onClick={() =>
              buyOnWhatsApp({
                name: product.name,
                price: product.price,
                image: window.location.href,
              })
            }
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Buy on WhatsApp
          </Button>

          <div className="flex gap-2.5 w-full sm:w-auto">
            <a href="tel:+919560112230" className="flex-1 sm:flex-initial">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl w-full px-5 text-xs sm:text-sm font-semibold h-11 border-border/80 hover:bg-muted/50"
              >
                Call Now
              </Button>
            </a>

            <Button
              size="lg"
              variant="ghost"
              onClick={handleShare}
              className="rounded-xl flex-1 sm:flex-initial h-11 px-3 text-muted-foreground hover:text-primary border border-transparent hover:border-border/60"
              title="Share Product"
            >
              <Share2 className="h-4 w-4 mr-1.5" />
              <span className="text-[11px] font-bold uppercase tracking-wider">
                {copied ? "Copied!" : "Share"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
