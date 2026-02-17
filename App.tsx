
import React, { useState } from 'react';
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
  PartyPopper
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import RatingCard from './components/RatingCard';
import { MOCK_STATS, COLORS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Visão Geral');

  const tabs = ['Visão Geral', 'Partidas', 'Estatísticas', 'Amigos', 'Prêmios', 'Clubes'];

  // URLs das imagens dos prêmios (Originais + Novas)
  const achievementImages = [
    "https://i.ibb.co/Q7FqFkx2/image.png",
    "https://i.ibb.co/7x7y35hb/image.png",
    "https://i.ibb.co/q38Zt96n/image-8.png",
    "https://i.ibb.co/DDyYzrR8/image-7.png",
    "https://i.ibb.co/3ymWRVNz/image-6.png",
    "https://i.ibb.co/q36xRZXr/image-5.png",
    "https://i.ibb.co/MDZwpwwG/image-4.png",
    "https://i.ibb.co/5gfJ01MC/image-3.png",
    "https://i.ibb.co/Q3fCss23/image-2.png",
    "https://i.ibb.co/JwTcnbhb/image-1.png",
    "https://i.ibb.co/rf2rMr3L/image.png",
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

  // Calculamos o número de espaços vazios para manter o grid preenchido (múltiplo de 4)
  const totalGridSlots = Math.ceil(achievementImages.length / 4) * 4;
  const emptySlotsCount = Math.max(0, (totalGridSlots > 16 ? totalGridSlots : 16) - achievementImages.length);

  return (
    <div className="flex min-h-screen bg-[#262421] text-white">
      <Sidebar />

      {/* Main Container */}
      <main className="flex-1 lg:ml-44 ml-16 flex flex-col">
        
        {/* Birthday Message Banner */}
        <div className="bg-gradient-to-r from-[#81b64c]/20 via-[#81b64c]/40 to-[#81b64c]/20 border-b border-[#81b64c]/30 py-4 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="flex justify-around items-center h-full">
              {[...Array(6)].map((_, i) => (
                <PartyPopper key={i} size={48} className={`transform rotate-${i % 2 === 0 ? '12' : '-12'}`} />
              ))}
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-center gap-3">
            <PartyPopper className="text-[#81b64c] animate-bounce" size={24} />
            <h2 className="text-xl md:text-2xl font-black font-chess uppercase tracking-[0.2em] text-white shadow-sm">
              Feliz Aniversário, Pai! 🎂
            </h2>
            <PartyPopper className="text-[#81b64c] animate-bounce" size={24} style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        {/* Profile Header Area */}
        <div className="bg-[#21201d]/30 border-b border-[#312e2b]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative group shrink-0">
                <img
                  src="https://i.ibb.co/HT7nbPfw/image.png"
                  alt="Profile"
                  className="w-32 h-32 md:w-44 md:h-44 rounded-md border-4 border-[#312e2b] object-cover shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#81b64c] w-8 h-8 rounded-full border-4 border-[#262421] flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center flex-wrap gap-3 mb-2">
                      <h1 className="text-3xl md:text-4xl font-extrabold font-chess tracking-tight">Wagner-Godoi</h1>
                      <img src="https://flagcdn.com/w40/br.png" alt="Brazil" className="w-7 h-5 object-cover rounded shadow-sm" title="Brasil" />
                      <div className="bg-[#312e2b] p-1.5 rounded-md text-[#bababa] hover:text-white cursor-pointer transition-colors" title="Rankings">
                         <TrendingUp size={18} />
                      </div>
                      <div className="bg-[#3d85c6]/20 text-[#3d85c6] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-[#3d85c6]/30">
                        Premium
                      </div>
                    </div>
                    <p className="text-[#bababa] text-lg font-medium mb-5">Wagner da Costa Godoi</p>
                    
                    <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Entrou</span>
                        <span className="text-gray-200">17 de dez. de 2023</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Status</span>
                        <span className="text-[#81b64c]">Online Agora</span>
                      </div>
                      <div className="flex items-center gap-2 group cursor-pointer">
                        <span className="text-gray-200 group-hover:text-[#3d85c6]">141</span> Amigos
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-200">394</span> Views
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button className="flex-1 md:flex-none bg-[#81b64c] hover:bg-[#a3d160] text-white font-black px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_4px_0_0_#5b8236]">
                      <UserPlus size={20} fill="white" />
                      <span className="uppercase text-sm">Adicionar</span>
                    </button>
                    <button className="flex-1 md:flex-none bg-[#312e2b] hover:bg-[#363330] text-white font-black px-6 py-3 rounded-md flex items-center justify-center gap-2 transition-all border border-[#45433f] shadow-[0_4px_0_0_#1a1917]">
                      <Swords size={20} />
                      <span className="uppercase text-sm">Desafio</span>
                    </button>
                    <button className="bg-[#312e2b] hover:bg-[#363330] p-3 rounded-md transition-all border border-[#45433f] shadow-[0_4px_0_0_#1a1917]">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Sticky */}
        <div className="sticky top-0 z-40 bg-[#262421]/95 backdrop-blur-sm border-b border-[#312e2b]">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center px-4 lg:px-8 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-5 text-sm font-black whitespace-nowrap transition-all border-b-[3px] uppercase tracking-wide ${
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

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Content Area (8 columns) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Stats Grid */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-black font-chess uppercase flex items-center gap-2">
                    <TrendingUp className="text-[#81b64c]" size={22} />
                    Ratings Atuais
                  </h2>
                  <a href="#" className="text-xs font-bold text-[#81b64c] hover:underline uppercase tracking-wider">Ver detalhes</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {MOCK_STATS.map((stat) => (
                    <RatingCard key={stat.id} stat={stat} />
                  ))}
                </div>
              </section>
              
              {/* Atividade Recente Removida Conforme Pedido */}
            </div>

            {/* Right Side Rail (4 columns) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Achievements / Awards - COM AS FOTOS ATUALIZADAS */}
              <section className="bg-[#21201d] rounded-lg border border-[#312e2b] p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 flex items-center gap-2">
                    <Award size={18} className="text-yellow-500" />
                    Prêmios
                  </h3>
                  <span className="text-xs font-bold text-[#81b64c] bg-[#81b64c]/10 px-2 py-0.5 rounded">{achievementImages.length}</span>
                </div>
                
                <div className="grid grid-cols-4 gap-2.5">
                  {achievementImages.map((imgUrl, i) => (
                    <div 
                      key={i} 
                      className="aspect-square bg-[#312e2b] rounded-md overflow-hidden hover:scale-110 cursor-pointer transition-all border-2 border-transparent hover:border-[#81b64c] group shadow-md"
                      title={`Conquista Wagner #${i + 1}`}
                    >
                      <img 
                        src={imgUrl} 
                        alt={`Prêmio ${i}`} 
                        className="w-full h-full object-cover filter brightness-90 group-hover:brightness-110 transition-all duration-300" 
                      />
                    </div>
                  ))}
                  {/* Espaços vazios para completar a grade de 4 colunas */}
                  {[...Array(emptySlotsCount)].map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square bg-[#312e2b]/30 rounded-md flex items-center justify-center border border-[#312e2b]/50">
                      <Trophy size={14} className="text-gray-800" />
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 py-2.5 bg-[#312e2b] text-[10px] font-black uppercase tracking-widest rounded-md text-gray-400 hover:text-white transition-all border border-[#312e2b] hover:border-[#45433f] flex items-center justify-center gap-2 group">
                  <span>Ver todos os Prêmios</span>
                  <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </section>

              {/* Clubs */}
              <section className="bg-[#21201d] rounded-lg border border-[#312e2b] p-6">
                 <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Shield size={18} className="text-[#3d85c6]" />
                    Clubes
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Brasil Chess Alliance', members: '15.4k', logo: 'BR' },
                      { name: 'Team Wagner Fans', members: '124', logo: 'WF' }
                    ].map((club, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-md hover:bg-[#312e2b] cursor-pointer transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#312e2b] rounded flex items-center justify-center font-bold text-[#81b64c] group-hover:bg-[#81b64c] group-hover:text-white transition-all">
                            {club.logo}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-200 group-hover:text-white">{club.name}</div>
                            <div className="text-[10px] text-gray-500 font-bold uppercase">{club.members} membros</div>
                          </div>
                        </div>
                        <ChevronRight size={14} className="text-gray-600 group-hover:text-white" />
                      </div>
                    ))}
                  </div>
              </section>

              {/* Friends Activity */}
              <section className="bg-[#21201d] rounded-lg border border-[#312e2b] p-6">
                 <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                    <Users size={18} className="text-[#81b64c]" />
                    Amigos Online
                  </h3>
                  <div className="flex -space-x-3 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <img 
                        key={i} 
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} 
                        className="w-10 h-10 rounded-full border-2 border-[#21201d] hover:translate-y-[-4px] transition-transform cursor-pointer shadow-lg" 
                        alt="Friend" 
                      />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#21201d] bg-[#312e2b] flex items-center justify-center text-[10px] font-bold text-gray-400 cursor-pointer hover:bg-[#363330] transition-colors shadow-lg">
                      +136
                    </div>
                  </div>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
