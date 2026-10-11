/* ==========================================================================
   SOMNIUM | scripts da página
   Os dados vêm de config.js. Não é preciso editar este arquivo para trocar
   contato, cidade ou portfólio.
   ========================================================================== */

(function () {
  "use strict";

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

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") fecharMenu();
  });
})();
