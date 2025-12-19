import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Container fixo no mobile, relativo no desktop */}
      <div className="fixed md:relative top-6 left-0 right-0 md:mt-6 mx-6 md:mx-16 lg:mx-24 xl:mx-32 z-50">
        <nav className="navbar-glow opacity-90 relative h-[70px] flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-8 py-4 bg-white text-gray-900 transition-all shadow rounded-full">
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
            <li><a href="#main">Início</a></li>
            <li><a href="#AboutProduct">Sobre</a></li>
            <li><a href="#ProductSection">Produtos</a></li>
          </ul>
          
          <button 
            aria-label="menu-btn" 
            type="button" 
            className="menu-btn inline-block md:hidden active:scale-90 transition z-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
              <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
            </svg>
          </button>
        </nav>
        
        {/* Menu mobile */}
        <div 
          className={`md:hidden bg-white shadow-lg rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col p-4">
            <li>
              <button
                className="text-[#2dd4bf] font-bold text-lg cursor-pointer w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
                onClick={() => handleScroll('Hero')}
                type="button"
              >
                Início
              </button>
            </li>
            <li>
              <button
                className="text-[#2dd4bf] font-bold text-lg cursor-pointer w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
                onClick={() => handleScroll('AboutProduct')}
                type="button"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                className="text-[#2dd4bf] font-bold text-lg cursor-pointer w-full text-left py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors active:bg-gray-100"
                onClick={() => handleScroll('ProductSection')}
                type="button"
              >
                Produtos
              </button>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}