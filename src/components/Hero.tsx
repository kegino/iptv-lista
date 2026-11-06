import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Zap, ListOrdered, ShieldCheck, Film } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-bg.webp"
          alt="IPTV Lista Background"
          className="h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-[#080812]/85 to-[#080812]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080812] via-transparent to-[#080812]/90" />
      </div>

      <div className="container-page py-20 text-center relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md">
          <ListOrdered className="size-3.5 text-amber-400" />
          <span>Listas M3U e Xtream Codes Atualizadas Diariamente</span>
        </div>

        <h1 className="mt-6 font-display text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
          A Melhor <span className="gradient-text">IPTV Lista</span> em 4K e Full HD
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Receba sua lista de canais organizada por categorias: futebol sem delay, filmes recém-saídos do cinema, séries completas e EPG sincronizado para qualquer aplicativo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            keyword="Teste Rápido IPTV Lista"
            label="Solicitar Teste Grátis da Lista"
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto"
          />
          <WhatsAppButton
            keyword="Planos IPTV Lista"
            label="Conhecer Planos de Lista"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-blue-400">M3U & Xtream</span>
            <p className="text-xs text-slate-400 mt-0.5">Compatibilidade total</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-amber-400">+35.000 Canais</span>
            <p className="text-xs text-slate-400 mt-0.5">Grade 100% organizada</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-blue-400">EPG Automático</span>
            <p className="text-xs text-slate-400 mt-0.5">Guia de programação</p>
          </div>
          <div className="glass-card rounded-xl p-3.5">
            <span className="text-xl font-black text-emerald-400">Sem Travamento</span>
            <p className="text-xs text-slate-400 mt-0.5">Servidores balanceados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
