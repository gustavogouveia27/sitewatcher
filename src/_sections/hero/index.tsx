"use client";

import Image from "next/image";
import Navbar from "../../_components/navbar";

export default function HeroSection() {
    return (
        <section id="Hero" className="relative min-h-screen">
            <Navbar />

            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-center gap-12 lg:gap-20">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                            O mais seguro e <span className="text-[#aa00ff]">MELHOR</span><br /> cheat de CS2 do mercado!
                        </h1>

                        <h2 className="mt-6 md:mt-8 text-base md:text-lg text-gray-300">
                            Cansado de ficar por último na tabela e depender do seu time?
                        </h2>

                        <button className="mt-6 md:mt-8 bg-[#83348b] hover:bg-[#9b4bd1] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg text-base md:text-lg transition-all duration-300 shadow-[0_0_20px_#83348b] hover:shadow-[0_0_30px_#9b4bd1] transform hover:scale-105">
                            COMPRE AGORA!
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center justify-center">
                        <Image
                            src="/unnmaed.png"
                            alt="agent"
                            width={700}
                            height={700}
                            priority
                            quality={100}
                            className="lg:h-[100vh] w-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}