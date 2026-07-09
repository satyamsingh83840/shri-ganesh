"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Wind,
  ShieldCheck,
  BadgeCheck,
  Truck,
  Headset,
  Award,
  ArrowRight,
} from "lucide-react";

const featureGroups = [
  {
    category: "Performance",
    items: [
      {
        icon: Zap,
        title: "Energy Efficient",
        desc: "Powerful airflow with minimal electricity use.",
      },
      {
        icon: Wind,
        title: "High Air Delivery",
        desc: "Optimized blades for silent, maximum cooling.",
      },
    ],
  },
  {
    category: "Quality Assurance",
    items: [
      {
        icon: ShieldCheck,
        title: "Premium Build",
        desc: "Durable materials for long-lasting reliability.",
      },
      {
        icon: BadgeCheck,
        title: "100% Inspected",
        desc: "Every single fan is rigorously quality-checked.",
      },
    ],
  },
  {
    category: "Service",
    items: [
      {
        icon: Truck,
        title: "Fast Delivery",
        desc: "Quick, safe dispatch straight to your doorstep.",
      },
      {
        icon: Headset,
        title: "WhatsApp Support",
        desc: "Friendly, direct assistance before and after purchase.",
      },
    ],
  },
];

export default function WhyUs() {
  return (
    <section className="bg-background py-14 text-foreground selection:bg-primary/20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Side: Modern Feature Dashboard */}
          <div className="flex flex-col justify-between lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                <Award className="h-3 w-3" /> Why Shri Ganesh
              </span>
              <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
                Engineered for Comfort, Built for Trust.
              </h2>
            </div>

            {/* Clean Key-Value Feature Rows */}
            <div className="space-y-5">
              {featureGroups.map((group) => (
                <div
                  key={group.category}
                  className="border-l-2 border-muted pl-4 space-y-2.5"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                    {group.category}
                  </span>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="group flex items-start gap-3"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold tracking-tight">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-muted-foreground leading-normal mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: High-Contrast Stats Display Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-900 p-6 text-zinc-100 shadow-xl lg:col-span-5">
            {/* Soft geometric accent lines in background */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-xl" />

            <div className="relative z-10 space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Our Track Record
              </p>
              <h3 className="text-base font-bold tracking-tight">
                Reliable solutions for thousands of spaces.
              </h3>
            </div>

            {/* Compact Metric Layout */}
            <div className="relative z-10 my-6 grid grid-cols-2 gap-4 border-y border-zinc-800 py-5">
              <div>
                <span className="block text-2xl font-black tracking-tight text-primary">
                  500+
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Happy Customers
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tight text-primary">
                  50+
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Premium Models
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tight text-primary">
                  100%
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  Quality Checked
                </span>
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tight text-primary">
                  24×7
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  WhatsApp Support
                </span>
              </div>
            </div>

            <div className="relative z-10 flex items-center justify-between text-[11px] font-medium text-zinc-400">
              <span>Shri Ganesh Enterprises</span>
              <span className="flex items-center gap-1 text-primary">
                {" "}
                Est. 2026 <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
