"use client";

import Image from "next/image";
import Navbar from "../../_components/navbar";
import Button from "@/src/_components/button";

export default function HeroSection() {
    return (
        <section id="Hero" className="relative min-h-screen">
            <Navbar />

            <div className="relative z-10 flex items-center justify-center">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-center gap-12 lg:gap-20">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                            O mais seguro e <span className="text-[#aa00ff]">MELHOR</span><br /> cheat de CS2 do mercado!
                        </h1>

                        <h2 className="mt-6 md:mt-8 text-base md:text-lg text-secondary">
                            Cansado de ficar por último na tabela e depender do seu time?
                        </h2>

                        <Button>
                            COMPRE AGORA!
                        </Button>
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