
import React, { useState, useEffect } from 'react';
import { 
  UserPlus, 
  Swords, 
  MoreHorizontal, 
  Trophy, 
  Users, 
  Shield, 
  ChevronRight,
  TrendingUp,
  Award,
  PartyPopper,
  X
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import RatingCard from './components/RatingCard';
import { MOCK_STATS, COLORS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Visão Geral');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tabs = ['Visão Geral', 'Partidas', 'Estatísticas', 'Amigos', 'Prêmios', 'Clubes'];

  // Array de imagens com as URLs atualizadas
  const achievementImages = [
    "https://i.ibb.co/Q7FqFkx2/image.png", // 1
    "https://i.ibb.co/7x7y35hb/image.png", // 2
    "https://i.ibb.co/q38Zt96n/image-8.png", // 3
    "https://i.ibb.co/DDyYzrR8/image-7.png", // 4
    "https://i.ibb.co/3ymWRVNz/image-6.png", // 5
    "https://i.ibb.co/q36xRZXr/image-5.png", // 6
    "https://i.ibb.co/MDZwpwwG/image-4.png", // 7
    "https://i.ibb.co/5gfJ01MC/image-3.png", // 8
    "https://i.ibb.co/ksx9YYRs/image-2.png", // 9
    "https://i.ibb.co/cS9yJpmp/image-1.png", // 10
    "https://i.ibb.co/fGdwtw9K/image.png",   // 11
    "https://i.ibb.co/nsdYSrXW/2.png",
    "https://i.ibb.co/PvVkTtMT/1.png",
    "https://i.ibb.co/jk0MnSxt/Whats-App-Image-2026-02-17-at-11-00-19-1.jpg",
    "https://i.ibb.co/Txr6YGzH/Whats-App-Image-2026-02-17-at-11-00-19.jpg",
    "https://i.ibb.co/n8kJsQLN/Whats-App-Image-2026-02-17-at-11-00-18-1.jpg",
    "https://i.ibb.co/39Q4wgfD/Whats-App-Image-2026-02-17-at-11-00-18.jpg",
    "https://i.ibb.co/wnGxzd6/Whats-App-Image-2026-02-17-at-10-59-23.jpg",
    "https://i.ibb.co/Ng3SzGPt/Whats-App-Image-2026-02-17-at-10-58-56.jpg",
    "https://i.ibb.co/ZpX9X9HB/Whats-App-Image-2026-02-17-at-10-50-10-1.jpg",
    "https://i.ibb.co/W4TQwpsq/Whats-App-Image-2026-02-17-at-10-50-10.jpg"
  ];

  const totalGridSlots = Math.ceil(achievementImages.length / 6) * 6;
  const emptySlotsCount = Math.max(0, (totalGridSlots > 12 ? totalGridSlots : 12) - achievementImages.length);

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Previne scroll do body quando o modal está aberto
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  return (
    <div className="flex min-h-screen bg-[#262421] text-white overflow-x-hidden">
      <Sidebar />

      {/* Container Principal */}
      <main className="flex-1 md:ml-16 lg:ml-44 pb-20 md:pb-0 flex flex-col w-full min-w-0">
        
        {/* Banner de Aniversário */}
        <div className="bg-gradient-to-r from-[#81b64c]/20 via-[#81b64c]/40 to-[#81b64c]/20 border-b border-[#81b64c]/30 py-4 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none hidden sm:block">
            <div className="flex justify-around items-center h-full">
              {[...Array(6)].map((_, i) => (
                <PartyPopper key={i} size={48} className={`transform rotate-${i % 2 === 0 ? '12' : '-12'}`} />
              ))}
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
            <PartyPopper className="text-[#81b64c] animate-bounce shrink-0" size={18} />
            <h2 className="text-sm sm:text-lg md:text-2xl font-black font-chess uppercase tracking-tight sm:tracking-[0.2em] text-white shadow-sm whitespace-nowrap">
              Feliz Aniversário, Pai! 🎂
            </h2>
            <PartyPopper className="text-[#81b64c] animate-bounce shrink-0" size={18} style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        {/* Cabeçalho do Perfil */}
        <div className="bg-[#21201d]/30 border-b border-[#312e2b]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 md:py-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
              <div className="relative group shrink-0">
                <img
                  src="https://i.ibb.co/HT7nbPfw/image.png"
                  alt="Profile"
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44 rounded-md border-4 border-[#312e2b] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#81b64c] w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-[#262421] flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex-1 w-full min-w-0">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="min-w-0">
                    <div className="flex items-center justify-center md:justify-start flex-wrap gap-2 sm:gap-3 mb-2">
                      <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold font-chess tracking-tight truncate">Wagner-Godoi</h1>
                      <img src="https://flagcdn.com/w40/br.png" alt="Brazil" className="w-5 h-3.5 sm:w-6 sm:h-4 object-cover rounded shadow-sm shrink-0" title="Brasil" />
                      <div className="bg-[#312e2b] p-1 rounded-md text-[#bababa] hover:text-white cursor-pointer transition-colors shrink-0">
                         <TrendingUp size={14} className="sm:size-4" />
                      </div>
                      <div className="bg-[#3d85c6]/20 text-[#3d85c6] px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-bold uppercase tracking-wider border border-[#3d85c6]/30 shrink-0">
                        Premium
                      </div>
                    </div>
                    <p className="text-[#bababa] text-sm sm:text-base md:text-lg font-medium mb-4 md:mb-5">Wagner da Costa Godoi</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-8 gap-y-2 text-[9px] sm:text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <span className="text-gray-600">Entrou</span>
                        <span className="text-gray-200">Dez/2023</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-gray-600">Status</span>
                        <span className="text-[#81b64c]">Online</span>
                      </div>
                      <div className="flex items-center gap-1.5 group cursor-pointer">
                        <span className="text-gray-200 group-hover:text-[#3d85c6]">141</span> Amigos
                      </div>
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none bg-[#81b64c] hover:bg-[#a3d160] text-white font-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-md flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-[0_4px_0_0_#5b8236]">
                      <UserPlus size={16} fill="white" />
                      <span className="uppercase text-[10px] sm:text-xs md:text-sm">Adicionar</span>
                    </button>
                    <button className="flex-1 sm:flex-none bg-[#312e2b] hover:bg-[#363330] text-white font-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-md flex items-center justify-center gap-2 transition-all border border-[#45433f] shadow-[0_4px_0_0_#1a1917]">
                      <Swords size={16} />
                      <span className="uppercase text-[10px] sm:text-xs md:text-sm">Desafio</span>
                    </button>
                    <button className="bg-[#312e2b] hover:bg-[#363330] p-2.5 sm:p-3 rounded-md transition-all border border-[#45433f] shadow-[0_4px_0_0_#1a1917]">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navegação por Abas (Sticky) */}
        <div className="sticky top-0 z-40 bg-[#262421]/95 backdrop-blur-sm border-b border-[#312e2b]">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center px-4 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-6 py-3.5 sm:py-5 text-[10px] sm:text-sm font-black whitespace-nowrap transition-all border-b-[3px] uppercase tracking-wide ${
                    activeTab === tab 
                    ? 'border-[#81b64c] text-white' 
                    : 'border-transparent text-gray-500 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Área de Conteúdo Esquerda */}
            <div className="lg:col-span-8 space-y-8 md:space-y-10">
              
              {/* Grade de Estatísticas */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base sm:text-lg md:text-xl font-black font-chess uppercase flex items-center gap-2">
                    <TrendingUp className="text-[#81b64c]" size={18} />
                    Ratings
                  </h2>
                  <a href="#" className="text-[9px] font-bold text-[#81b64c] hover:underline uppercase tracking-wider">Detalhes</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {MOCK_STATS.map((stat) => (
                    <RatingCard key={stat.id} stat={stat} />
                  ))}
                </div>
              </section>

              {/* Prêmios */}
              <section className="bg-[#21201d] rounded-lg border border-[#312e2b] p-4 sm:p-5 md:p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#81b64c]/5 rounded-full -mr-12 -mt-12 blur-2xl" />
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500/10 p-2 rounded-lg border border-yellow-500/20">
                      <Award size={20} className="text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-2xl font-black uppercase tracking-tight text-white font-chess">Prêmios</h3>
                      <p className="text-[8px] font-bold text-gray-600 uppercase tracking-widest hidden sm:block">Clique para ampliar</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg sm:text-xl md:text-3xl font-black text-[#81b64c]">{achievementImages.length}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 relative z-10">
                  {achievementImages.map((imgUrl, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImage(imgUrl)}
                      className="aspect-square bg-[#312e2b] rounded-lg overflow-hidden hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-transparent hover:border-[#81b64c] group shadow-lg cursor-zoom-in"
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Prêmio ${i + 1}`} 
                        className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110" 
                      />
                    </div>
                  ))}
                  {[...Array(emptySlotsCount)].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square bg-[#312e2b]/30 rounded-lg flex items-center justify-center border border-[#312e2b]/50">
                      <Trophy size={14} className="text-gray-800/40" />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button className="w-full sm:w-auto px-6 py-3 bg-[#312e2b] text-[9px] font-black uppercase tracking-widest rounded-full text-gray-400 hover:text-white transition-all border border-[#45433f] flex items-center justify-center gap-2 group">
                    <span>Ver Galeria Completa</span>
                    <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform text-[#81b64c]" />
                  </button>
                </div>
              </section>
            </div>

            {/* Barra Lateral Direita */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8">
              {/* Clubes */}
              <section className="bg-[#21201d] rounded-lg border border-[#312e2b] p-4 sm:p-5">
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                    <Shield size={14} className="text-[#3d85c6]" />
                    Clubes
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Brasil Chess Alliance', members: '15.4k', logo: 'BR' },
                      { name: 'Team Wagner Fans', members: '124', logo: 'WF' }
                    ].map((club, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-md hover:bg-[#312e2b] cursor-pointer transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#312e2b] rounded flex items-center justify-center font-bold text-[#81b64c] text-[10px] sm:text-xs">
                            {club.logo}
                          </div>
                          <div className="min-w-0">
                            <div className="text-[10px] sm:text-[11px] font-bold text-gray-200 truncate">{club.name}</div>
                            <div className="text-[8px] sm:text-[9px] text-gray-500 font-bold uppercase">{club.members}</div>
                          </div>
                        </div>
                        <ChevronRight size={12} className="text-gray-600 shrink-0" />
                      </div>
                    ))}
                  </div>
              </section>

              {/* Atividade de Amigos */}
              <section className="bg-[#21201d] rounded-lg border border-[#312e2b] p-4 sm:p-5">
                 <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                    <Users size={14} className="text-[#81b64c]" />
                    Online
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {[1, 2, 3, 4, 5, 6, 7].map(i => (
                      <img 
                        key={i} 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 22}`} 
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#21201d] hover:scale-110 transition-transform cursor-pointer shadow-md" 
                        alt="Friend" 
                      />
                    ))}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-[#21201d] bg-[#312e2b] flex items-center justify-center text-[8px] sm:text-[9px] font-bold text-gray-400 cursor-pointer">
                      +130
                    </div>
                  </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* LIGHTBOX MODAL - TOTALMENTE RESPONSIVO E GRANDE */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 bg-black/98 backdrop-blur-md animate-in fade-in duration-300 touch-none"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botão de Fechar Superior (Mobile e Desktop) */}
          <button 
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors bg-white/5 rounded-full z-[120]"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            {/* Fix: Lucide icons do not support custom 'sm:size' props; using Tailwind classes for responsive sizing instead */}
            <X size={28} className="sm:w-9 sm:h-9" strokeWidth={1.5} />
          </button>

          <div className="relative w-full h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
            {/* Container da Imagem Maximizada */}
            <div 
              className="relative w-full max-w-[95vw] h-full max-h-[90vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Prêmio em destaque" 
                className="max-w-full max-h-full w-auto h-auto object-contain block select-none rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.9)] border border-white/5"
              />
            </div>
            
            {/* Rodapé do Modal */}
            <div className="mt-4 sm:mt-8 text-center bg-black/40 px-6 py-2 rounded-full backdrop-blur-sm border border-white/5">
              <p className="text-[#81b64c] font-black uppercase tracking-[0.5em] text-[9px] sm:text-xs">
                Conquista Wagner-Godoi
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
