"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Fan,
  Zap,
  Leaf,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full bg-zinc-50 dark:bg-zinc-950 min-h-screen flex flex-col justify-between antialiased">
      {/* Structural Subtle Accents */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-zinc-100 dark:bg-zinc-900/40 pointer-events-none hidden lg:block" />
      <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-amber-500/[0.03] blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-auto max-w-7xl relative z-10">
        <div className="grid min-h-[calc(100vh-180px)] items-center gap-12 lg:gap-16 py-12 lg:grid-cols-12">
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 dark:bg-amber-500/20 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-amber-800 dark:text-amber-400 border border-amber-500/20">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              Next-Gen Indian Homes
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.1]">
              Smart BLDC Fans.
              <span className="block mt-1 font-serif font-normal italic text-amber-600 dark:text-amber-500">
                Crafted for Summer Luxury.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              Experience industry-leading high-speed breeze combined with
              ultra-low electricity consumption. Engineered to last, styled to
              elevate.
            </p>

            {/* QUICK FEATURES */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md w-full">
              {[
                { label: "BEE 5-Star Energy Saved", value: "Up to 65%" },
                { label: "High Air Delivery", value: "220+ CMM" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800/80 shadow-sm text-left"
                >
                  <span className="text-[11px] block uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500">
                    {stat.label}
                  </span>
                  <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-0.5 block">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CALL TO ACTIONS */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-amber-600 dark:text-white dark:hover:bg-amber-700 px-8 font-semibold shadow-md"
                asChild
              >
                <Link href="#products">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm font-semibold px-8"
                asChild
              >
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4 text-emerald-600 fill-emerald-600/10" />
                  WhatsApp Inquiry
                </a>
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: EDITORIAL ARCHITECTURAL MATRIX (INSTEAD OF IMAGE) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 relative grid grid-cols-12 gap-4 w-full max-w-xl mx-auto"
          >
            {/* Box 1: Large Tech Concept Showcase */}
            <div className="col-span-12 sm:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 shadow-xl relative overflow-hidden group min-h-[220px] flex flex-col justify-between">
              <div className="absolute top-[-20%] right-[-10%] opacity-5 dark:opacity-[0.03] pointer-events-none group-hover:rotate-45 transition-transform duration-[4s]">
                <Fan className="h-64 w-64 text-zinc-900 dark:text-white" />
              </div>
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 flex items-center justify-center text-amber-700 dark:text-amber-400">
                <Fan className="h-5 w-5 animate-spin-slow" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-amber-700 dark:text-amber-400 uppercase">
                  Motor Core
                </span>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                  100% Pure Copper
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 leading-relaxed">
                  Dual ball-bearing construction delivering exceptionally silent
                  operation and an extended lifespan.
                </p>
              </div>
            </div>

            {/* Box 2: Savings Metric */}
            <div className="col-span-6 sm:col-span-5 bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-900 dark:to-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-xl text-white flex flex-col justify-between min-h-[220px]">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
                <Zap className="h-5 w-5 fill-amber-400/20" />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tight text-amber-400">
                  28 Watt
                </span>
                <h4 className="text-sm font-semibold mt-1">
                  Inverter Friendly
                </h4>
                <p className="text-[11px] text-zinc-400 mt-1">
                  Runs up to 3x longer on home backup generators.
                </p>
              </div>
            </div>

            {/* Box 3: Assurance Mini-Card */}
            <div className="col-span-6 sm:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-5 shadow-lg flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <Leaf className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                  Eco Design
                </h4>
                <p className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">
                  BEE 5-Star
                </p>
              </div>
            </div>

            {/* Box 4: Protection Full-Card */}
            <div className="col-span-12 sm:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-5 shadow-lg flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  2-Year Doorstep Warranty
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Prompt pan-India technician support right at your house.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM INFO BAR */}
      <div className="border-t border-zinc-200/50 dark:border-zinc-900 py-5 bg-white/40 dark:bg-zinc-950/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-wrap justify-between items-center gap-4 text-xs font-semibold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">
          <div className="flex items-center gap-1.5">
            ✓ ISI Certified Quality Standards
          </div>
          <div className="flex items-center gap-1.5">
            ✓ Zero Shipping Costs Across India
          </div>
          <div className="flex items-center gap-1.5">
            ✓ Cash On Delivery Options Available
          </div>
        </div>
      </div>
    </section>
  );
}
