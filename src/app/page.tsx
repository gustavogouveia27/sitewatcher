"use client";

import HeroSection from "../_sections/hero";
import AboutProductSection from "../_sections/aboutProduct";
import ProductSection from "../_sections/product";
import SectionDivider from "../_components/SectionDivider";
import Discord from "../_components/discord";
import Navbar from "../_components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-900 to-gray-900">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutProductSection />
      <SectionDivider />
      <ProductSection />
      <Discord />
    </main>
  );
}
        

    
    
    