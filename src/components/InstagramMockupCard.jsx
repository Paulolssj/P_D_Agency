import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Link2, MoreHorizontal, Grid, Film, User, X, ExternalLink } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    image: '/assets/post-multilanguage.png',
    title: 'Traduzimos para idiomas que vão potencializar o seu negócio',
    subtitle: 'Fale com novos mercados e gere mais resultados.',
    category: 'Multi-idioma & Global',
    likes: 142,
    comments: 18,
    date: '14 de Agosto',
    caption: '🌍 Sabia que websites em múltiplos idiomas aumentam a taxa de conversão em mais de 70% para clientes internacionais? Na P&D Agency desenvolvemos arquiteturas web multilingues (PT, EN, ES, FR, DE) com deteção automática e SEO localizado.'
  },
  {
    id: 2,
    image: '/assets/post-seo-ads.png',
    title: 'VISIBILIDADE NÃO ACONTECE POR ACASO',
    subtitle: 'SEO + GOOGLE ADS',
    category: 'Performance & Tráfego',
    likes: 215,
    comments: 29,
    date: '10 de Agosto',
    caption: '📈 Ter um website incrível sem tráfego é como abrir uma loja de luxo no meio do deserto. Combinamos engenharia SEO técnica (Core Web Vitals 100/100) com campanhas de Google Ads de alta conversão para colocar a sua marca no topo das pesquisas.'
  },
  {
    id: 3,
    image: '/assets/post-redesign-skate.png',
    title: 'MESMO OS WEBSITES MAIS ANTIGOS GANHAM UMA NOVA VIDA CONNOSCO',
    subtitle: 'Modernização & Redesign 360º',
    category: 'Redesign & Tecnologia',
    likes: 189,
    comments: 24,
    date: '6 de Agosto',
    caption: '🚀 Modernizamos a presença digital da sua empresa com tecnologia de topo: carregamento ultrarrápido, design responsivo, mobile-first e integração com WhatsApp e catálogos interativos.'
  }
];

export default function InstagramMockupCard({ darkMode = true, lang = 'pt' }) {
  const [activeTab, setActiveTab] = useState('posts');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <>
      {/* Decorative Outer Glow */}
      <div className="relative group max-w-[430px] mx-auto w-full">
        <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-indigo-600/30 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Card Container */}
        <div className={`relative rounded-[28px] border shadow-2xl overflow-hidden transition-colors duration-500 ${
          darkMode 
            ? 'bg-[#0B111E]/95 border-neutral-800 text-white backdrop-blur-2xl' 
            : 'bg-white/95 border-neutral-200 text-neutral-900 backdrop-blur-2xl'
        }`}>
          
          {/* Mockup Top Status Bar (Subtle IG Aesthetic) */}
          <div className={`px-5 pt-4 pb-2 flex items-center justify-between border-b ${
            darkMode ? 'border-neutral-800/80 text-neutral-400' : 'border-neutral-100 text-neutral-500'
          }`}>
            <div className="flex items-center gap-1.5 font-headline font-bold text-xs">
              <span className={`w-2 h-2 rounded-full ${isFollowing ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-500'}`} />
              <span className={darkMode ? 'text-white' : 'text-neutral-900'}>pdagency.pt</span>
            </div>
            <a 
              href="https://www.instagram.com/pdagency.pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-1 hover:text-primary transition-colors"
              title="Abrir no Instagram"
            >
              <MoreHorizontal className="w-4 h-4" />
            </a>
          </div>

          <div className="p-5">
            {/* Header: Avatar + Profile Stats */}
            <div className="flex items-center gap-5 mb-4">
              {/* Profile Avatar with Instagram Story Ring */}
              <div className="relative shrink-0">
                <div className="w-18 h-18 rounded-full p-[2.5px] bg-gradient-to-tr from-[#f9ce0f] via-[#e1306c] to-[#833ab4]">
                  <div className={`w-full h-full rounded-full p-[2px] overflow-hidden ${darkMode ? 'bg-[#0B111E]' : 'bg-white'}`}>
                    <img
                      src="/assets/pd-agency-logo.png"
                      alt="P&D Agency"
                      className="w-full h-full rounded-full object-cover bg-black"
                    />
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex-1 flex justify-around text-center">
                <div>
                  <span className={`block text-base font-black font-headline ${darkMode ? 'text-white' : 'text-neutral-900'}`}>36</span>
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>posts</span>
                </div>
                <div>
                  <span className={`block text-base font-black font-headline ${darkMode ? 'text-white' : 'text-neutral-900'}`}>280</span>
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>seguidores</span>
                </div>
                <div>
                  <span className={`block text-base font-black font-headline ${darkMode ? 'text-white' : 'text-neutral-900'}`}>44</span>
                  <span className={`text-[10px] uppercase font-bold tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>seguindo</span>
                </div>
              </div>
            </div>

            {/* Profile Bio Details */}
            <div className="space-y-1 text-left mb-4">
              <div className="flex items-center gap-1.5">
                <span className={`font-headline font-black text-sm ${darkMode ? 'text-white' : 'text-neutral-900'}`}>P&D Agency</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20">Agência Digital</span>
              </div>
              <p className={`text-[11px] font-medium ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Empreendedor(a)</p>
              <div className={`text-xs space-y-0.5 pt-1 leading-snug font-normal ${darkMode ? 'text-neutral-200' : 'text-neutral-700'}`}>
                <p>💎 Design de Excelência & Soluções Digitais</p>
                <p>🏢 Desenvolvemos Websites de Alta Performance</p>
                <p>🚀 Impulsionamos o seu negócio</p>
              </div>
              <div className="pt-1.5">
                <a
                  href="https://p-d-agency-six.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  <Link2 className="w-3.5 h-3.5" />
                  <span>p-d-agency.vercel.app</span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mb-4">
              <button
                type="button"
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold font-headline transition-all text-center cursor-pointer flex items-center justify-center gap-1.5 ${
                  isFollowing
                    ? darkMode ? 'bg-neutral-800 hover:bg-neutral-700 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                    : 'bg-primary hover:bg-blue-600 text-white shadow-md'
                }`}
              >
                <span>{isFollowing ? (lang === 'pt' ? 'A Seguir ∨' : 'Following ∨') : (lang === 'pt' ? 'Seguir' : 'Follow')}</span>
              </button>

              <a
                href="#contacto"
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold font-headline transition-all text-center cursor-pointer ${
                  darkMode ? 'bg-neutral-800 hover:bg-neutral-700 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                }`}
              >
                {lang === 'pt' ? 'Enviar mensagem' : 'Message'}
              </a>

              <a
                href="https://www.instagram.com/pdagency.pt/"
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir perfil oficial"
                className={`p-2 rounded-xl text-xs transition-colors ${
                  darkMode ? 'bg-neutral-800 hover:bg-neutral-700 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-900'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Story Highlights (Destaques) */}
            <div className={`py-3 flex items-center gap-4 border-t border-b overflow-x-auto ${
              darkMode ? 'border-neutral-800/80' : 'border-neutral-100'
            }`}>
              {/* Highlight 1: Clientes */}
              <div className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group">
                <div className="w-13 h-13 rounded-full p-[2px] bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${darkMode ? 'bg-[#0B111E]' : 'bg-white'}`}>
                    <User className="w-5 h-5 text-sky-400" />
                  </div>
                </div>
                <span className={`text-[10px] font-bold ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>Clientes</span>
              </div>

              {/* Highlight 2: Serviços */}
              <div className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group">
                <div className="w-13 h-13 rounded-full p-[2px] bg-gradient-to-tr from-sky-400 to-blue-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${darkMode ? 'bg-[#0B111E]' : 'bg-white'}`}>
                    <span className="text-sm">⚙️</span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>serviços ⚙️</span>
              </div>
            </div>

            {/* Grid Tabs */}
            <div className={`flex text-center text-xs font-bold uppercase tracking-wider border-b ${
              darkMode ? 'border-neutral-800/80 text-neutral-400' : 'border-neutral-100 text-neutral-500'
            }`}>
              <button
                type="button"
                onClick={() => setActiveTab('posts')}
                className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'posts'
                    ? darkMode ? 'border-b-2 border-primary text-primary font-black' : 'border-b-2 border-primary text-primary font-black'
                    : 'hover:text-primary'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="text-[10px]">Posts</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('reels')}
                className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'reels'
                    ? darkMode ? 'border-b-2 border-primary text-primary font-black' : 'border-b-2 border-primary text-primary font-black'
                    : 'hover:text-primary'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span className="text-[10px]">Reels</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('tagged')}
                className={`flex-1 py-2.5 flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                  activeTab === 'tagged'
                    ? darkMode ? 'border-b-2 border-primary text-primary font-black' : 'border-b-2 border-primary text-primary font-black'
                    : 'hover:text-primary'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span className="text-[10px]">Marcadas</span>
              </button>
            </div>

            {/* 3 Real Posts Grid */}
            <div className="grid grid-cols-3 gap-1.5 pt-2">
              {POSTS.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="relative group aspect-square rounded-lg overflow-hidden bg-neutral-900 cursor-pointer shadow-xs border border-neutral-800/40"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay with Likes/Comments */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 text-white text-[11px] font-bold z-10">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-white" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-white" /> {post.comments}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Footer Hint */}
            <p className={`text-[10px] text-center mt-3 font-medium italic ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {lang === 'pt' ? 'Clique em qualquer post para ver detalhes' : 'Click on any post to preview'}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox / Post Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className={`relative max-w-2xl w-full rounded-3xl border overflow-hidden shadow-2xl ${
                darkMode ? 'bg-[#0B111E] border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image side */}
                <div className="bg-neutral-950 flex items-center justify-center p-2 min-h-[300px]">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full max-h-[460px] object-contain rounded-xl"
                  />
                </div>

                {/* Content Side */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-neutral-500/20 mb-4">
                      <img
                        src="/assets/pd-agency-logo.png"
                        alt="P&D Agency"
                        className="w-9 h-9 rounded-full bg-black border border-neutral-800 p-0.5 object-cover"
                      />
                      <div>
                        <h4 className="font-headline font-black text-xs uppercase tracking-wider">pdagency.pt</h4>
                        <p className="text-[10px] text-primary font-semibold">{selectedPost.category}</p>
                      </div>
                    </div>

                    {/* Post Caption */}
                    <h3 className="font-headline font-bold text-sm mb-2">{selectedPost.title}</h3>
                    <p className={`text-xs leading-relaxed font-normal mb-4 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {selectedPost.caption}
                    </p>
                  </div>

                  {/* Actions & CTA */}
                  <div className="pt-4 border-t border-neutral-500/20 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-bold text-red-400">
                          <Heart className="w-4 h-4 fill-red-400" /> {selectedPost.likes}
                        </span>
                        <span className="flex items-center gap-1 font-bold">
                          <MessageCircle className="w-4 h-4" /> {selectedPost.comments}
                        </span>
                      </div>
                      <span className="text-[10px] text-neutral-400">{selectedPost.date}</span>
                    </div>

                    <a
                      href="#contacto"
                      onClick={() => setSelectedPost(null)}
                      className="w-full py-3 bg-primary hover:bg-blue-600 text-white rounded-xl font-headline font-bold text-xs uppercase tracking-wider transition-all text-center block shadow-md"
                    >
                      {lang === 'pt' ? 'Falar Sobre Este Serviço' : 'Inquire About This Service'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
