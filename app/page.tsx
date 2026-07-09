import Hero from "@/components/home/hero";
import Categories from "@/components/home/categories";
import FeaturedProducts from "@/components/home/featured-products";
import WhyUs from "@/components/home/why-us";
import About from "@/components/home/about";
// import CTA from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <WhyUs />

      <About />

      {/*  <CTA />   */}
    </>
  );
}
