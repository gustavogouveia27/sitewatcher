"use client";
import Image from 'next/image';

export default function AboutProductSection() {
  return (
    <section id="AboutProduct" className="bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] py-20">
      <h1 className=" text-center text-7xl font-bold text-white mb-10">
        <strong>Legit</strong> Hacking
      </h1>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <iframe
              className="aspect-video rounded-lg shadow-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cPdbef-JMws"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-2xl text-white leading-snug mb-4">
              Nosso cheat foi desenvolvido com foco total em segurança e experiência natural de jogo,
              sendo ideal para jogadores que desejam subir de nível de forma progressiva e consistente.
            </p>
            <p className="text-2xl text-white leading-snug mb-4">
              A proposta é auxiliar na evolução dentro do jogo sem comprometer a fluidez, mantendo
              movimentos, decisões e visualização alinhados com um comportamento legítimo. Tudo é
              pensado para quem quer melhorar o desempenho, aprender mais rápido e evoluir com confiança,
              sem chamar atenção ou quebrar a imersão do gameplay.
            </p>
            <p className="text-2xl text-white leading-snug">
              Segurança, estabilidade e evolução caminham juntas para entregar uma experiência equilibrada,
              voltada a jogadores que buscam crescer no jogo de forma inteligente.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto px-4">
        <dl className="rounded-lg bg-white shadow-lg grid grid-cols-3">
          <div className="flex flex-col border-r border-gray-100 p-6 text-center">
            <dt className="order-2 mt-2 text-lg font-medium text-gray-500">
              Partidas Jogadas no Mês
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">1500+</dd>
          </div>
          <div className="flex flex-col border-x border-gray-100 p-6 text-center">
            <dt className="order-2 mt-2 text-lg font-medium text-gray-500">
              Taxa de Vitórias no Mês
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">76%</dd>
          </div>
          <div className="flex flex-col border-l border-gray-100 p-6 text-center">
            <dt className="order-2 mt-2 text-lg font-medium text-gray-500">
              Banimentos por detecção
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-gray-700">0</dd>
          </div>

        </dl>
      </div>

    </section>
  );
}
