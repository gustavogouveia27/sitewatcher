"use client";

import HeroSection from "../_sections/hero";
import AboutProductSection from "../_sections/aboutProduct";
import ProductSection from "../_sections/product";
import SectionDivider from "../_components/SectionDivider";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-teal-900 to-gray-900">
      <HeroSection />
      <SectionDivider />
      <AboutProductSection />
      <SectionDivider />
      <ProductSection />
    </main>
  );
}
        

    
    
    