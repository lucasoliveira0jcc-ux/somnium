/* ==========================================================================
   CONFIGURAÇÃO DO SITE DA SOMNIUM
   --------------------------------------------------------------------------
   Este é o único arquivo que você precisa editar para trocar os dados de
   contato, a cidade e o estado das demos do portfólio.

   Enquanto um valor tiver o marcador [SUBSTITUIR] ou [CIDADE], a página
   mostra o texto como está e NÃO cria link, para não existir link quebrado.
   Quando você colocar o valor real (sem o marcador), o link aparece sozinho.
   ========================================================================== */

window.SOMNIUM_CONFIG = {

  /* Cidade que aparece no rodapé e na seção de contato.
     Exemplo: "Campinas, SP" */
  cidade: "Fortaleza",

  contato: {

    /* WhatsApp: só números, com código do país (55) e DDD.
       Exemplo: "5519999999999" */
    whatsapp: "5585921847089",

    /* Mensagem que já vem escrita quando a pessoa abre o WhatsApp. */
    mensagemWhatsapp: "Oi, Lucas! Vi o site da Somnium e queria conversar sobre um projeto.",

    /* E-mail de contato. Exemplo: "contato@somnium.com.br" */
    email: "lucasoliveira0jcc@gmail.com"
  },

  /* PORTFÓLIO
     Cada item vira um cartão na seção Portfólio.
     - caminho:   pasta da demo dentro de demos/ (precisa ter um index.html).
     - publicada: deixe false enquanto a demo não existir. O cartão mostra
                  "em breve" e fica sem link. Troque para true quando a pasta
                  da demo estiver publicada.
     - imagem:    imagem do cartão. As atuais são placeholders neutros e
                  devem ser substituídas por capturas de tela das demos.
     Os nomes são fictícios: as demos são exemplos, não clientes reais. */
  portfolio: [
    {
      segmento: "Clínica",
      descricao: "Site com especialidades, equipe e agendamento pelo WhatsApp.",
      caminho: "demos/clinica/",
      publicada: false,
      imagem: "img/placeholder-demo.svg"
    },
    {
      segmento: "Salão de beleza",
      descricao: "Página com serviços, galeria e horários de atendimento.",
      caminho: "demos/salao/",
      publicada: false,
      imagem: "img/placeholder-demo.svg"
    },
    {
      segmento: "Imobiliária",
      descricao: "Vitrine de imóveis com filtros e contato direto com o corretor.",
      caminho: "demos/imobiliaria/",
      publicada: false,
      imagem: "img/placeholder-demo.svg"
    },
    {
      segmento: "Loja",
      descricao: "Loja virtual com catálogo, carrinho e pedido.",
      caminho: "demos/loja/",
      publicada: false,
      imagem: "img/placeholder-demo.svg"
    }
  ]
};
