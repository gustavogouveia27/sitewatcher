import Image from 'next/image';

export default function ShowSection() {
  return (
    <div className="mt-100 bg-gradient-to-r from-black via-neutral-900 to-neutral-800 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className=" text-center text-7xl font-bold text-white mb-10">
          VALVE ANTI-CHEAT
          <Image className="position absolute translate-x-200 -translate-y-22" src="/removido.png" alt="Imagem" width={100} height={100} />
        </h1>
        
        <p className="translate-x-100 mt-50 max-w-2xl mx-auto text-left text-2xl text-white leading-relaxed">
         Temos orgulho em afirmar que nosso cheat conta com o melhor bypass do mercado, desenvolvido com foco máximo em segurança, estabilidade e discrição. Utilizamos tecnologias avançadas e constantes atualizações para garantir que o sistema opere de forma eficiente, reduzindo riscos e mantendo um alto nível de proteção contra detecções.
        </p>
    
        <h2 className="mt-10 text-sm translate-x-124 text-white">Se você procura segurança real, desempenho consistente e um bypass de alto nível, está no lugar certo. <br/>Aqui, a prioridade é oferecer o melhor.</h2>
      </div>
      
    </div>
  );
}
