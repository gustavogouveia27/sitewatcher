"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/*<div className="text-center font-medium py-2 bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A]">*/}
      <div className="opacity-0">
        <p>Cupom de primeira <span className="underline underline-offset-2">compra!</span></p>
      </div>

      <nav className="navbar-glow opacity-90 relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-8 py-4 bg-white text-gray-900 transition-all shadow mt-6 mx-6 md:mx-16 lg:mx-24 xl:mx-32 rounded-full">
        <a href="#">
          <figure className="flex items-center">
            <Image
              src="/logocerto.png"
              alt="Logo"
              width={120}
              height={120}
              className="position absolute max-h-[40px] w-auto md:max-h-[70px]"
            />
            <figcaption className="ml-12 md:ml-20 font-bold text-3xl md:text-6xl font-mono bg-gradient-to-r from-teal-400 via-teal-700 to-gray-900 bg-clip-text text-transparent">
              Watcher
            </figcaption>
          </figure>
        </a>

        <ul className="hidden text-[#2dd4bf] font-bold text-2xl md:flex items-center space-x-8 md:pl-28">
          <li><a href="#Hero">Início</a></li>
          <li><a href="#AboutProduct">Sobre</a></li>
          <li><a href="#ProductSection">Produtos</a></li>
        </ul>


        <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
          </svg>
        </button>

        <div className={`mobile-menu absolute top-[70px] left-0 w-full bg-white shadow-sm p-6 md:hidden ${isMenuOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="#Hero" className="text-sm">Início</a></li>
            <li><a href="#AboutProduct" className="text-sm">Sobre</a></li>
            <li><a href="#ProductSection" className="text-sm">Produtos</a></li>
          </ul>
        </div>
      </nav>
    </div>

  );
}