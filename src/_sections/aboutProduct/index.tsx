"use client";

export default function AboutProductSection() {
  return (
    <section id="AboutProduct" className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-7xl font-bold text-white title-shadow mb-10">
          Você no Controle
        </h1>

        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <iframe
                className="mr-10 aspect-video rounded-lg ring-12 ring-teal-800/50"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cPdbef-JMws"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="font-bold flex-1 flex flex-col justify-center">
              <p className="text-2xl text-white leading-snug mb-4">
                Esqueça a sorte. Nosso cheat oferece uma camada extra de percepção que coloca você no topo de qualquer partida. 
                Visualize jogadores através de paredes, controle total da mira e elimine o fator surpresa do seu gameplay.
              </p>
              <p className="text-2xl text-white leading-snug">
                Desenvolvido com foco em segurança avançada e estabilidade, nosso sistema permite que você mantenha o controle 
                total do mapa sem comprometer a performance do seu PC. Seja o jogador que todos respeitam (e temem), mantendo 
                uma postura indetectável e um desempenho inalcançável.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-4xl mx-auto px-4">
          <dl className="rounded-lg bg-gray-800/50 shadow-lg grid grid-cols-3">
            <div className="flex flex-col border-r border-teal-400 p-6 text-center">
              <dt className="order-2 mt-2 text-lg font-bold text-white">
                Partidas Jogadas no Mês
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-teal-400">1500+</dd>
            </div>

            <div className="flex flex-col border-x border-teal-400 p-6 text-center">
              <dt className="order-2 mt-2 text-lg font-bold text-white">
                Taxa de Vitórias no Mês
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-teal-400">76%</dd>
            </div>

            <div className="flex flex-col border-l border-teal-400 p-6 text-center">
              <dt className="order-2 mt-2 text-lg font-bold text-white">
                Banimentos por detecção
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-teal-400">0</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}