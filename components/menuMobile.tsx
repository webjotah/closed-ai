'use client';

import { Menu } from 'lucide-react';
import React, { useState } from 'react';

const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Botão Hamburger - Aumentei o z-index para garantir o clique */}
      <button
        onClick={() => setIsOpen(true)}
        className="z-[100] p-2 bg-gray-700/40 text-white rounded-md cursor-pointer"
      >
        <Menu size={40} />
      </button>

      {/* Overlay - Garante que cobre tudo */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Forçando visibilidade com cores fortes para teste */}
      <div
        className={`
        fixed top-0 left-0 z-[120] h-full w-[280px] bg-white border-r border-gray-200
        transform transition-transform duration-300 ease-in-out shadow-xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <span className="font-bold text-xl text-black">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 font-bold p-2 text-2xl"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-4 text-black">
          <a href="#" className="p-3 bg-gray-50 rounded hover:bg-gray-100">
            Home
          </a>
          <a href="#" className="p-3 bg-gray-50 rounded hover:bg-gray-100">
            Sobre
          </a>
          <a href="#" className="p-3 bg-gray-50 rounded hover:bg-gray-100">
            Serviços
          </a>
          <a href="#" className="p-3 bg-gray-50 rounded hover:bg-gray-100">
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SidebarMobile;
