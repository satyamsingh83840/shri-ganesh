"use client";

import { FileText } from "lucide-react";

type Product = {
  specifications: Record<string, string>;
};

interface Props {
  product: Product;
}

export default function Specifications({ product }: Props) {
  return (
    <section className="w-full py-12">
      {/* Elegant Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Specifications
          </h2>
          <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">
            Technical Blueprint
          </p>
        </div>
      </div>

      {/* Modern Card Grid (No messy borders/tables) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(product.specifications).map(([key, value]) => (
          <div
            key={key}
            className="group relative flex flex-col justify-between p-5 rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/40 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-md hover:shadow-neutral-200/30 dark:hover:shadow-none"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              {key}
            </span>
            <span className="mt-3 text-base font-semibold text-neutral-800 dark:text-neutral-200 tracking-tight">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
