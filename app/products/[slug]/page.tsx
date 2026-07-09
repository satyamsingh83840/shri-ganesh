import { notFound } from "next/navigation";
import products from "@/data/products";

import ProductInfo from "@/components/products/product-info";
import Specifications from "@/components/products/specifications";
import RelatedProducts from "@/components/products/related-products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="container-width">
          <ProductInfo product={product} />
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container-width">
          <Specifications product={product} />
        </div>
      </section>

      {/* Related Products */}
      <section className="pb-20">
        <div className="container-width">
          <RelatedProducts
            currentSlug={product.slug}
            category={product.category}
          />
        </div>
      </section>
    </main>
  );
}
