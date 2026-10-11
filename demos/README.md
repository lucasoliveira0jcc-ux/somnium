# demos/

Esta pasta guarda as demonstrações do portfólio da Somnium.

Cada demo fica numa subpasta própria, com um `index.html`:

```
demos/
  clinica/index.html
  salao/index.html
  imobiliaria/index.html
  loja/index.html
```

Todas as demos usam nomes e dados **fictícios** e precisam deixar claro, na
própria página, que são exemplos.

## Página modelo e faixa "voltar ao portfólio"

`demos/_modelo/index.html` é a base para começar cada demo. Ela já traz a
faixa preta fixa no topo ("Você está vendo um exemplo. Voltar ao portfólio"),
que volta para a página inicial com `../../`.

O `_modelo` não aparece no portfólio nem no menu. Para usar a faixa numa
demo, copie do modelo:

1. as duas linhas de `<link>` para `../../css/tokens.css` e
   `../../css/faixa-demo.css`, depois dos estilos da demo;
2. o trecho marcado com "copie daqui" / "até aqui", logo depois de `<body>`.

Se a demo tiver um cabeçalho fixo, use `top: var(--faixa-demo-altura)` nele.

O `_modelo` fica fora do site publicado: o GitHub Pages ignora pastas que
começam com `_`. Ele serve só como base local. Por isso, o nome da pasta de
cada demo real não pode começar com `_`, e o site não deve ter um arquivo
`.nojekyll`.

## Como publicar uma demo

1. Copie `demos/_modelo/` para a subpasta da demo (por exemplo,
   `demos/clinica/`), troque o conteúdo `[EXEMPLO]` e retire a linha
   `<meta name="robots" content="noindex">`.
2. Abra o arquivo `config.js`, na raiz do site.
3. No item correspondente da lista `portfolio`, troque `publicada: false` por
   `publicada: true`.

Enquanto `publicada` estiver como `false`, o cartão da página inicial mostra
"em breve" e não tem link, para não existir link quebrado.
