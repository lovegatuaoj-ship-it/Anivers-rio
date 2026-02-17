
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Settings, HelpCircle, ChevronRight, Menu } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-16 lg:w-44 bg-[#21201d] flex-col h-screen fixed left-0 top-0 border-r border-[#312e2b] z-50">
        <div className="p-4 flex justify-center lg:justify-start mb-2">
          <div className="text-xl font-bold flex items-center gap-1 cursor-pointer">
            <img src="https://www.chess.com/bundles/web/images/offline-play/standard-board.16223a41.png" alt="Logo" className="w-8 h-8" />
            <span className="text-white hidden lg:inline ml-1 font-chess tracking-tight">chess.com</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto no-scrollbar">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href="#"
              className="flex flex-col lg:flex-row items-center gap-3 px-4 py-3 text-[#bababa] hover:bg-[#2b2926] hover:text-white transition-all group relative"
            >
              <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="text-xs lg:text-[15px] font-bold hidden lg:block">{item.label}</span>
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#81b64c] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        <div className="p-2 space-y-1 border-t border-[#312e2b] bg-[#1a1917]">
          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#bababa] hover:text-white transition-colors">
            <Settings size={20} />
            <span className="text-xs font-bold hidden lg:block">Configurações</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-[#bababa] hover:text-white transition-colors">
            <HelpCircle size={20} />
            <span className="text-xs font-bold hidden lg:block">Ajuda</span>
          </button>
          
          <div className="mt-2 px-2 pb-2 hidden lg:block">
            <a href="#" className="flex items-center justify-between p-2 rounded bg-[#3d85c6]/10 text-[#3d85c6] hover:bg-[#3d85c6]/20 transition-all border border-[#3d85c6]/20">
              <span className="text-[10px] font-bold uppercase">Teste Grátis</span>
              <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#21201d] border-t border-[#312e2b] z-50 flex items-center justify-around h-16 px-2 shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
        {NAV_ITEMS.slice(0, 4).map((item) => (
          <a
            key={item.id}
            href="#"
            className="flex flex-col items-center justify-center flex-1 text-[#bababa] active:text-[#81b64c] transition-colors"
          >
            <div className="mb-1">{item.icon}</div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>
          </a>
        ))}
        <button className="flex flex-col items-center justify-center flex-1 text-[#bababa]">
          <div className="mb-1"><Menu size={20} /></div>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Mais</span>
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
