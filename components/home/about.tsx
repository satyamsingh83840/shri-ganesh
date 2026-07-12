"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Factory,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "500+", label: "Happy Customers" },
  { number: "50+", label: "Premium Models" },
  { number: "100%", label: "Quality Checked" },
  { number: "24×7", label: "Customer Support" },
];

const highlights = [
  {
    icon: Factory,
    title: "Premium Manufacturing",
    description:
      "Designed with precision using high-quality materials for durability and performance.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every product is inspected to ensure excellent finish and reliable operation.",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description:
      "Our goal is to provide products that customers can trust for years.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Background Glows */}
      <div className="absolute -right-32 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px] md:h-96 md:w-96 md:blur-[120px]" />
      <div className="absolute -left-32 bottom-20 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[100px] md:h-96 md:w-96" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT IMAGE CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
              <Image
                src="/images/hero-fan.jpeg"
                alt="Shri Ganesh Enterprises Workshop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Premium Badge */}
            <div className="glass absolute -bottom-6 left-6 hidden rounded-2xl p-4 shadow-xl sm:flex items-center gap-3 md:-bottom-8 md:left-8 md:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  Premium Collection
                </h3>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  Elegant Designs • Trusted Quality
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                About Shri Ganesh Enterprises
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight">
              Delivering Comfort with Quality & Trust
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Shri Ganesh Enterprises is dedicated to providing premium fans
              that combine elegant design, powerful performance, and
              long-lasting durability. We focus on quality craftsmanship and
              customer satisfaction, helping families and businesses choose
              reliable cooling solutions.
            </p>

            {/* Highlights List */}
            <div className="mt-10 space-y-6 text-left">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 items-start sm:gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="rounded-full px-8 shadow-lg shadow-primary/20 group"
                asChild
              >
                <Link href="#contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-20 rounded-3xl border border-border p-8 shadow-xl md:mt-28 md:p-12"
        >
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4 lg:gap-12">
            {stats.map((item) => (
              <div key={item.label} className="space-y-2">
                <h3 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
                  {item.number}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
