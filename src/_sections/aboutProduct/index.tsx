"use client";
import Image from 'next/image';

export default function AboutProductSection() {
  return (
    <section className="bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] py-20">
      <h1 className=" text-center text-7xl font-bold text-white mb-10">
        <strong>Legit</strong> Hacking

      </h1>
      <div className="flex flex-row px-4">
        <div className="flex content-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ID_DO_VIDEO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <p className="translate-x-100 mt-10 max-w-2xl mx-auto text-left text-2xl text-white leading-relaxed">
            Nosso cheat foi desenvolvido com foco total em segurança e experiência natural de jogo,
            sendo ideal para jogadores que desejam subir de nível de forma progressiva e consistente.
          </p>
          <p className="translate-x-100 mt-2 max-w-2xl mx-auto text-left text-2xl text-white leading-relaxed">
            A proposta é auxiliar na evolução dentro do jogo sem comprometer a fluidez, mantendo
            movimentos, decisões e visualização alinhados com um comportamento legítimo. Tudo é
            pensado para quem quer melhorar o desempenho, aprender mais rápido e evoluir com confiança,
            sem chamar atenção ou quebrar a imersão do gameplay.
          </p>
          <p className="translate-x-100 mt-2 max-w-2xl mx-auto text-left text-2xl text-white leading-relaxed">
            Segurança, estabilidade e evolução caminham juntas para entregar uma experiência equilibrada,
            voltada a jogadores que buscam crescer no jogo de forma inteligente.
          </p>
        </div>
        
      </div>

    </section>
  );
}
