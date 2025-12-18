import Image from "next/image";
import Navbar from "./navbar";
import Show from "./show";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* BACKGROUND IMAGE */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="object-cover absolute inset-0 -z-10 opacity-90"
      />

      <Image
        src="/unnmaed.png"
        alt="unnmaed"
        width={1100}
        height={500}
        priority
        className="position absolute ml-170"
      />

      {/* Overlay escuro (opcional, mas recomendado) */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* CONTEÚDO */}
      <div className="relative z-10 mt-40 ml-40 max-w-xl">
        <h1 className="text-7xl font-extrabold text-white leading-tight">
          O mais seguro e <span className="text-[#aa00ff]">MELHOR</span><br/> cheat de CS2
          do mercado!
        </h1>

        <h2 className="mt-8 text-[#858585]">
          Cansado de ficar por último na tabela e depender do seu time?
        </h2>

        <button className="mt-8 bg-[#83348b] hover:bg-[#9b4bd1] text-white font-bold py-3 px-8 rounded-lg text-lg transition shadow-[0_0_20px_#83348b]">
          COMPRE AGORA!
        </button>
      </div>
    </main>
  );
}
        

    
    
    