/* ==========================================================================
   SOMNIUM | scripts da página
   Os dados vêm de config.js. Não é preciso editar este arquivo para trocar
   contato, cidade ou portfólio.
   ========================================================================== */

(function () {
  "use strict";

  var config = window.SOMNIUM_CONFIG || {};

  /* Cria um elemento com classe e texto opcionais */
  function el(tag, classe, texto) {
    var no = document.createElement(tag);
    if (classe) no.className = classe;
    if (texto) no.textContent = texto;
    return no;
  }

  /* Portfólio ------------------------------------------------------------
     Só cria link quando a demo está marcada como publicada em config.js.
     Caso contrário, o cartão mostra "em breve" e fica sem link. */
  var lista = document.getElementById("lista-portfolio");

  (config.portfolio || []).forEach(function (item) {
    var publicada = item.publicada === true && !!item.caminho;
    var cartao = el("li", "projeto" + (publicada ? " projeto--publicada" : ""));
    var conteudo = publicada ? el("a", "projeto__link") : cartao;

    if (publicada) {
      conteudo.href = item.caminho;
      cartao.appendChild(conteudo);
    }

    var imagem = el("img", "projeto__imagem");
    imagem.src = item.imagem;
    imagem.alt = "Imagem provisória, sem conteúdo real, no lugar da captura de tela da demonstração de " +
      item.segmento.toLowerCase() + " (negócio fictício)";
    imagem.loading = "lazy";
    imagem.width = 800;
    imagem.height = 500;
    conteudo.appendChild(imagem);

    var corpo = el("div", "projeto__corpo");
    corpo.appendChild(el("h3", "projeto__titulo", item.segmento));
    corpo.appendChild(el("p", "projeto__descricao", item.descricao));
    corpo.appendChild(el("p", "projeto__legenda",
      "Exemplo com negócio e nome fictícios. Não é um cliente real."));

    var rodape = el("div", "projeto__rodape");
    if (publicada) {
      rodape.appendChild(el("span", "projeto__acao", "Ver demonstração →"));
    } else {
      rodape.appendChild(el("span", "projeto__estado", "em breve"));
    }
    corpo.appendChild(rodape);
    conteudo.appendChild(corpo);

    lista.appendChild(cartao);
  });

  /* Contato e cidade -----------------------------------------------------
     Um valor ainda não preenchido (com [SUBSTITUIR] ou [CIDADE]) aparece
     como texto, sem link. */
  function pendente(valor) {
    return !valor || /\[(SUBSTITUIR|CIDADE)\]/.test(valor);
  }

  var contato = config.contato || {};

  document.querySelectorAll('[data-config="cidade"]').forEach(function (no) {
    no.textContent = config.cidade || "[CIDADE]";
  });

  var whatsapp = document.getElementById("contato-whatsapp");
  var numero = String(contato.whatsapp || "").replace(/\D/g, "");
  if (!pendente(contato.whatsapp) && numero) {
    whatsapp.href = "https://wa.me/" + numero +
      (contato.mensagemWhatsapp ? "?text=" + encodeURIComponent(contato.mensagemWhatsapp) : "");
    whatsapp.target = "_blank";
    whatsapp.rel = "noopener";
  } else {
    whatsapp.classList.add("botao--pendente");
    whatsapp.textContent = "Chamar no WhatsApp [SUBSTITUIR]";
  }

  var email = document.getElementById("contato-email");
  email.textContent = contato.email || "[SUBSTITUIR]";
  if (pendente(contato.email)) email.removeAttribute("href");
  else email.href = "mailto:" + contato.email;

  /* Ano atual no rodapé */
  document.getElementById("ano").textContent = new Date().getFullYear();

  /* Menu do celular ------------------------------------------------------ */
  var botao = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu");

  function fecharMenu() {
    botao.setAttribute("aria-expanded", "false");
    menu.classList.remove("aberto");
  }

  botao.addEventListener("click", function () {
    var aberto = botao.getAttribute("aria-expanded") === "true";
    botao.setAttribute("aria-expanded", String(!aberto));
    menu.classList.toggle("aberto", !aberto);
  });

  menu.addEventListener("click", function (evento) {
    if (evento.target.closest("a")) fecharMenu();
  });

  var cabecalho = document.querySelector(".cabecalho");

  function menuAberto() {
    return botao.getAttribute("aria-expanded") === "true";
  }

  /* Esc fecha o menu e devolve o foco ao botão */
  document.addEventListener("keydown", function (evento) {
    if (evento.key !== "Escape" || !menuAberto()) return;
    var focoNoMenu = menu.contains(document.activeElement);
    fecharMenu();
    if (focoNoMenu) botao.focus();
  });

  /* Toque ou clique fora do cabeçalho fecha o menu */
  document.addEventListener("click", function (evento) {
    if (menuAberto() && !cabecalho.contains(evento.target)) fecharMenu();
  });

  /* Foco do teclado saindo do cabeçalho fecha o menu */
  cabecalho.addEventListener("focusout", function (evento) {
    if (menuAberto() && evento.relatedTarget && !cabecalho.contains(evento.relatedTarget)) {
      fecharMenu();
    }
  });
})();
