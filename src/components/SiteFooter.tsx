import { Link } from "@tanstack/react-router";
import { ListOrdered } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-blue-500/20 bg-slate-950 text-slate-400">
      <div className="container-page py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-amber-400 text-slate-950 font-black">
                <ListOrdered className="size-4" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                IPTV <span className="text-amber-400">Lista</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
              Fornecedora líder de listas M3U e conexões Xtream Codes de alta fidelidade para Smart TVs, celulares e TV Box. Servidores estáveis com guia de programação atualizado.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Listas & Planos</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/planos" className="hover:text-blue-400 transition-colors">Planos de Lista</Link></li>
              <li><Link to="/beneficios" className="hover:text-blue-400 transition-colors">Vantagens das Listas</Link></li>
              <li><Link to="/como-funciona" className="hover:text-blue-400 transition-colors">Como Carregar Lista</Link></li>
              <li><Link to="/teste" className="hover:text-blue-400 transition-colors">Teste de Lista</Link></li>
              <li><Link to="/faq" className="hover:text-blue-400 transition-colors">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">Suporte & Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/contato" className="hover:text-blue-400 transition-colors">Atendimento WhatsApp</Link></li>
              <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog & Guias M3U</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-blue-400 transition-colors">Privacidade</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-blue-400 transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IPTV Lista. Todos os direitos reservados. Listas completas com tecnologia anti-travamento.</p>
        </div>
      </div>
    </footer>
  );
}
