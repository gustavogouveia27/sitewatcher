"use client";

export default function ProductSection() {
  return (
    <section id="ProductSection">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-center text-7xl font-bold text-white title-shadow mb-10">
          Produtos
        </h1>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto relative z-10">
          {/* <!-- Basic Package Card --> */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden group hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
            <div className="p-8">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Apenas ESP</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl text-teal-400 font-bold">R$ 19,90</span>
                <span className="text-gray-400 ml-2">/mês</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-300">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>ESP Jogador</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>ESP Variados</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Stream Proof</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bypass VAC</span>
                </li>
              </ul>
              <button className="group relative w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg overflow-hidden transition-all duration-300">
                <span className="relative z-10 flex items-center">
                  Comprar Agora
                </span>
              </button>
            </div>
          </div>

          {/* <!-- Premium Package Card --> */}
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-teal-400 rounded-xl overflow-hidden relative group hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              ...................................................
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-teal-500/5"></div>
            <div className="p-8 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">ESP + Aimbot</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl text-teal-400 font-bold">R$ 44,90</span>
                <span className="text-gray-400 ml-2">/mês</span>
              </div>
              <ul className="mb-8 space-y-4 text-gray-300">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>ESP Jogador</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>ESP Variados</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Aimbot</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Triggerbot</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bypass VAC</span>
                </li>
              </ul>
              <button className="group relative w-full inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg overflow-hidden shadow-lg shadow-teal-500/20 transition-all duration-300">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center">
                  Comprar Agora
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- FAQ Section --> */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <h4 className="text-teal-400 font-medium mb-2">How long does it take to build my website?</h4>
              <p className="text-gray-300">Most websites are delivered within 2-3 weeks. E-commerce solutions may take 4-6 weeks depending on complexity.</p>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
              <h4 className="text-teal-400 font-medium mb-2">Do you provide website hosting?</h4>
              <p className="text-gray-300">Yes! Website hosting is available for ₹499/month with free SSL certificate and daily backups.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}