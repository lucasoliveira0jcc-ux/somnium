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

## Como publicar uma demo

1. Crie a subpasta (por exemplo, `demos/clinica/`) com o `index.html` da demo.
2. Abra o arquivo `config.js`, na raiz do site.
3. No item correspondente da lista `portfolio`, troque `publicada: false` por
   `publicada: true`.

Enquanto `publicada` estiver como `false`, o cartão da página inicial mostra
"em breve" e não tem link, para não existir link quebrado.
