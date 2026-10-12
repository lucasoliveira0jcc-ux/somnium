/* =========================================================
   DADOS DO SALÃO — edite só este bloco para adaptar o modelo.
   Tudo o que aparece com data-site="..." nas páginas vem daqui.
   ========================================================= */
const SALAO = {
  nome: "Clara Vaz",
  estudio: "Estúdio Clara Vaz",
  descricao: "estúdio de beleza",
  bairro: "Vila Mariana",
  endereco: "Rua Exemplo, 123, sala 4",
  cidade: "Vila Mariana, São Paulo",
  whatsapp: "5511900000000",            // só números, com DDI e DDD
  whatsappTexto: "11 90000-0000",
  mensagemWhatsapp: "Olá, Clara! Gostaria de agendar um horário.",
  agendaOnline: "https://exemplo.com/agenda-clara-vaz", // link do Trinks, Booksy, Avec etc.
  instagram: "claravaz.beleza",
  mapa: "https://maps.google.com/?q=Rua+Exemplo+123+Vila+Mariana+Sao+Paulo",
  googleAvaliacoes: "https://g.page/exemplo/review",
  nota: "4,9",
  totalAvaliacoes: "128",
  // 0 = domingo ... 6 = sábado. null = fechado
  horarios: [null, null, ["9h", "19h"], ["9h", "19h"], ["9h", "19h"], ["9h", "20h"], ["8h", "16h"]]
};

/* ---------- Daqui para baixo não precisa mexer ---------- */
(function () {
  const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const wa = "https://wa.me/" + SALAO.whatsapp + "?text=" + encodeURIComponent(SALAO.mensagemWhatsapp);
  const links = { whatsapp: wa, agenda: SALAO.agendaOnline, mapa: SALAO.mapa,
    instagram: "https://instagram.com/" + SALAO.instagram, avaliacoes: SALAO.googleAvaliacoes };
  const textos = { ...SALAO, instagram: "@" + SALAO.instagram, ano: new Date().getFullYear() };

  document.querySelectorAll("[data-site]").forEach(el => {
    const v = textos[el.dataset.site];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll("[data-link]").forEach(el => {
    const v = links[el.dataset.link];
    if (v) { el.href = v; if (/^https?:/.test(v)) { el.target = "_blank"; el.rel = "noopener"; } }
  });

  // Tabela de horários, com o dia de hoje destacado
  const hoje = new Date().getDay();
  document.querySelectorAll("[data-horarios]").forEach(tb => {
    const ordem = [1, 2, 3, 4, 5, 6, 0];
    tb.innerHTML = ordem.map(d => {
      const h = SALAO.horarios[d];
      return `<tr${d === hoje ? ' class="hoje"' : ""}><th>${dias[d]}${d === hoje ? " <em>hoje</em>" : ""}</th><td>${h ? h[0] + " às " + h[1] : "Fechado"}</td></tr>`;
    }).join("");
  });
  document.querySelectorAll("[data-aberto-hoje]").forEach(el => {
    const h = SALAO.horarios[hoje];
    el.textContent = h ? "Hoje, das " + h[0] + " às " + h[1] : "Hoje o estúdio está fechado";
  });

  // Menu no celular
  const botao = document.querySelector(".abrir-menu"), menu = document.querySelector(".menu");
  if (botao && menu) botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto);
    botao.textContent = aberto ? "Fechar" : "Menu";
  });

  // Linha sob o cabeçalho depois de rolar
  const topo = document.querySelector(".topo");
  if (topo) { const f = () => topo.classList.toggle("rolou", scrollY > 8); f(); addEventListener("scroll", f, { passive: true }); }

  // Filtro da galeria
  document.querySelectorAll("[data-filtros]").forEach(grupo => {
    const alvo = document.querySelector(grupo.dataset.filtros);
    grupo.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      grupo.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
      const cat = b.dataset.cat;
      alvo.querySelectorAll("[data-cat]").forEach(it => { it.hidden = cat !== "todos" && it.dataset.cat !== cat; });
    });
  });
})();
