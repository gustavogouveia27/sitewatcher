"use client";

import Image from "next/image";
import Navbar from "../../_components/navbar";
import Button from "@/src/_components/button";

export default function HeroSection() {
    return (
        <section id="Hero" className="relative min-h-screen">


            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="container mx-auto px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* TEXTO - 60% */}
                    <div className="lg:basis-[54%] text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                            O melhor e mais <span className="text-[#2dd4bf] title-shadow-secondary">SEGURO</span><br />
                            cheat <span className="title-shadow-secondary text-[#2dd4bf]">EXTERNAL</span> de CS2 do mercado!
                        </h1>

                        <h2 className="mt-6 md:mt-8 text-base md:text-lg text-secondary">
                            Cansado de ficar por último na tabela e depender do seu time?
                        </h2>

                        <Button>
                            COMPRE AGORA!
                        </Button>
                    </div>

                    {/* IMAGEM - 40% */}
                    <div className="hidden lg:flex lg:basis-[46%] items-center justify-center">
                        <Image
                            src="/unnmaed.png"
                            alt="agent"
                            width={700}
                            height={700}
                            priority
                            quality={75}
                            className="max-h-[90vh] w-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}