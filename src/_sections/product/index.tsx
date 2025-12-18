"use client";

import ProductCard from '@/src/_components/productCard';

export default function ProductSection() {
  const basicIcon = (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  const premiumIcon = (
    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );

  return (
    <section id="ProductSection">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-center text-7xl font-bold text-white title-shadow mb-10">
          Produtos
        </h1>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto relative z-10">
          <ProductCard
            title="Apenas ESP"
            price="R$ 19,90"
            features={['Cheat Externo', 'ESP Jogador', 'ESP Variados', 'Stream Proof', 'Bypass VAC']}
            icon={basicIcon}
          />

          <ProductCard
            title="ESP + Aimbot"
            price="R$ 44,90"
            features={['Cheat Externo','ESP Jogador', 'ESP Variados', 'Aimbot', 'Triggerbot', 'Bypass VAC']}
            icon={premiumIcon}
            isPremium
            badge="..................................................."
          />
        </div>

        {/* <!-- FAQ Section --> */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-primary text-center mb-10">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border border-card" style={{ backgroundColor: 'rgba(31, 41, 55, 0.3)' }}>
              <h4 className="text-accent font-medium mb-2">How long does it take to build my website?</h4>
              <p className="text-secondary">Most websites are delivered within 2-3 weeks. E-commerce solutions may take 4-6 weeks depending on complexity.</p>
            </div>
            <div className="p-6 rounded-lg border border-card" style={{ backgroundColor: 'rgba(31, 41, 55, 0.3)' }}>
              <h4 className="text-accent font-medium mb-2">Do you provide website hosting?</h4>
              <p className="text-secondary">Yes! Website hosting is available for ₹499/month with free SSL certificate and daily backups.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}