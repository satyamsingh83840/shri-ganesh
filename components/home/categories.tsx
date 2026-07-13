"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Exhaust Fan",
    image: "/images/categories/exhaust-fan.jpg",
    description: "High-suction performance for kitchen ventilation.",
  },
  {
    title: "Ventilation Fan",
    image: "/images/categories/ventilation-fan.jpg",
    description: "Keep fresh air flowing in heavy-use environments.",
  },
  {
    title: "Table Fan",
    image: "/images/categories/table-fan.jpg",
    description: "Powerful cooling on demand for desks and rooms.",
  },
];

export default function Categories() {
  return (
    <section
      id="categories"
      className="section-padding relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-16"
    >
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary">
            Shop by Category
          </span>

          <h2 className="section-title mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Find the Perfect Fan
          </h2>

          <p className="section-subtitle mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Explore our premium range of architectural fans designed to deliver
            tailored airflow and elevate the aesthetics of homes, offices,
            shops, and commercial spaces.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className="w-[280px] sm:w-[340px] shrink-0 snap-start"
            >
              {/* Dynamic routing parameter setup */}
              <Link
                href={`/products?category=${encodeURIComponent(category.title)}`}
              >
                <div className="group overflow-hidden rounded-[2rem] border border-border/80 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="p-6 relative">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                        {category.title}
                      </h3>

                      <ArrowRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>

                    <div className="mt-5 inline-flex items-center text-xs font-bold uppercase tracking-wider text-primary transition-opacity duration-300">
                      View Collection
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
