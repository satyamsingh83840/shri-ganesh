import About from "@/components/home/about";
import Categories from "@/components/home/categories";
import FeaturedProducts from "@/components/home/featured-products";
import Hero from "@/components/home/hero";
import WhyUs from "@/components/home/why-us";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <WhyUs />

      <About />
    </>
  );
}
