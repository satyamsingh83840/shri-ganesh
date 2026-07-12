"use client";

import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Zap,
  Percent,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-white dark:bg-zinc-950 min-h-screen flex flex-col justify-between antialiased">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-auto max-w-7xl pt-12 pb-6">
        <div className="grid min-h-[70vh] items-center gap-12 lg:grid-cols-12">
          {/* LEFT: SIMPLE & DIRECT TEXT */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-amber-100 dark:bg-amber-900/50 px-3 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300">
              ⚡ BEE 5-Star Certified Savings
            </span>

            <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl leading-tight">
              Save Up To 65% On Your{" "}
              <span className="text-amber-600">Electricity Bill</span>
            </h1>

            <p className="mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
              Upgrade to India&apos;s smartest BLDC Ceiling Fans. High speed,
              completely silent, and runs perfectly on your home inverter.
            </p>

            {/* MAIN CALL TO ACTIONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-600 dark:hover:bg-amber-700 px-8 font-bold text-base h-12"
                asChild
              >
                <Link href="#products">
                  Buy Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 font-bold px-8 h-12"
                asChild
              >
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-emerald-600 fill-emerald-600/10" />
                  Order on WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT: CLEAN IMAGE SHOWCASE (SMALL SIZE) & TOP BENEFITS */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center w-full max-w-sm mx-auto lg:max-w-none">
            {/* Fan Showcase Box */}
            <div className="w-full aspect-square bg-gradient-to-b from-zinc-50 to-zinc-100/50 dark:from-zinc-900 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col items-center justify-center p-6 relative shadow-sm overflow-hidden">
              {/* NEXT.JS OPTIMIZED IMAGE (COMPACT SIZE) */}
              <div className="relative w-full h-[420px] max-w-[420px] flex items-center justify-center mb-8">
                <Image
                  src="/images/hero-fan.jpeg"
                  alt="Premium BLDC Ceiling Fan"
                  width={420}
                  height={420}
                  className="object-cover rounded-2xl w-full h-full drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Benefit Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-zinc-950/90 backdrop-blur-sm p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-md flex items-center gap-3 z-10">
                <div className="p-2 bg-amber-500/10 text-amber-600 rounded-lg shrink-0">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    Runs 3x Longer on Inverter
                  </p>
                  <p className="text-xs text-zinc-500">
                    No more sweating during power cuts
                  </p>
                </div>
              </div>
            </div>

            {/* Key Trust Highlights Right Under The Product */}
            <div className="grid grid-cols-2 gap-3 w-full mt-4">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  2 Year Warranty
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-900">
                <Percent className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  Save ₹1,500 Yearly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRUST BAR */}
      <div className="border-t border-zinc-100 dark:border-zinc-900 py-4 bg-zinc-50/50 dark:bg-zinc-950">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
          <div>🇮🇳 Made In India</div>
          <div className="hidden sm:block text-zinc-300">•</div>
          <div>🚚 Free Delivery Across India</div>
          <div className="hidden sm:block text-zinc-300">•</div>
          <div>💵 Cash on Delivery (COD) Available</div>
        </div>
      </div>
    </section>
  );
}
