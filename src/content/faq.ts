export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é uma lista IPTV e quais formatos vocês fornecem?",
    a: "Uma lista IPTV é um arquivo ou link que reúne todos os canais de televisão ao vivo, filmes e séries para reprodução via internet. Nós fornecemos tanto o formato de URL M3U tradicional quanto os dados de conexão via API Xtream Codes (usuário, senha e servidor), compatíveis com qualquer reprodutor do mercado.",
  },
  {
    q: "A lista de canais é atualizada constantemente?",
    a: "Sim! Nossa equipe atualiza a lista semanalmente, adicionando novas estreias do cinema, novas temporadas de séries e mantendo os links de transmissão esportiva sempre funcionais e com guia EPG atualizado diariamente.",
  },
  {
    q: "Como faço para carregar a lista no meu aplicativo?",
    a: "É muito simples: basta copiar o link M3U ou preencher os dados de usuário, senha e URL enviados por nossa equipe no aplicativo instalado no seu aparelho (Smart TV, TV Box, celular ou PC). Todos os canais e filmes são importados automaticamente.",
  },
  {
    q: "A lista IPTV trava nos dias de futebol e grandes clássicos?",
    a: "Não. Nossas listas são roteadas por servidores balanceados com redes CDN de alta velocidade no Brasil, prevenindo sobrecargas e congelamentos mesmo nos momentos de pico de audiência.",
  },
  {
    q: "Posso solicitar um teste grátis da lista antes de assinar?",
    a: "Com certeza! Oferecemos um teste cortesia com liberação imediata no WhatsApp para você carregar no seu reprodutor e conferir a organização e a qualidade 4K dos canais sem nenhum compromisso.",
  },
  {
    q: "A lista funciona em Smart TVs Samsung, LG e Android?",
    a: "Sim, é 100% compatível com qualquer modelo de TV através de aplicativos como IPTV Smarters Pro, Smart One IPTV, IBO Player, XCIPTV, SS IPTV, TiviMate e navegadores web.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Qual a diferença técnica entre URL M3U e conexão Xtream Codes?",
    a: "A URL M3U é um link único que baixa toda a playlist de uma vez. Já o método Xtream Codes conecta diretamente à nossa API, permitindo que o aplicativo carregue apenas a categoria selecionada, o que deixa o aplicativo muito mais rápido em TVs com pouca memória.",
  },
  {
    q: "Os canais da lista estão organizados por categorias?",
    a: "Sim, a lista é totalmente categorizada: Canais Abertos, Esportes 4K/FHD, Filmes & Séries, Desenhos Infantis, Notícias, Documentários, Pay-Per-View (Futebol, Combate, BBB) e canais internacionais.",
  },
  {
    q: "Existe fidelidade ou renovação automática obrigatória?",
    a: "Nenhum plano possui fidelidade ou multas de cancelamento. Você escolhe o plano (mensal, trimestral, semestral ou anual) e só renova sua lista se estiver plenamente satisfeito com a entrega do sinal.",
  },
  {
    q: "Posso utilizar a lista em mais de um aparelho ao mesmo tempo?",
    a: "Cada acesso padrão atende a 1 tela simultânea. Você pode cadastrar a lista em vários dispositivos da casa e assistir alternadamente, ou contratar telas adicionais com desconto exclusivo.",
  },
];
