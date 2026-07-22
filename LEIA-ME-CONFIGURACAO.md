# Website GEPGEO Consultoria — Guia de Configuração

Site estático (HTML/CSS/JS puro, sem dependências de build) — 11 páginas,
bilingue PT/EN, pronto a publicar em qualquer alojamento.

## 1. Estrutura de pastas

```
site/
├── index.html, servicos.html, portfolio.html, produtos.html,
│   sobre-nos.html, galeria.html, blog.html, noticias.html,
│   faq.html, contactos.html, 404.html
├── robots.txt          → indexação no Google
├── sitemap.xml          → mapa do site para o Google Search Console
├── manifest.json         → ícone "adicionar ao ecrã inicial" (mobile)
└── assets/
    ├── css/style.css     → todo o design (cores, tipografia, layout)
    ├── js/main.js       → navegação, formulários, pesquisa, galeria, WhatsApp
    ├── js/cart.js       → carrinho de cursos/serviços
    ├── js/i18n.js       → traduções PT/EN
    ├── img/            → fotografias da empresa
    └── icons/           → favicons e logótipo

```

## 2. ANTES DE PUBLICAR — 3 configurações obrigatórias

### A. Formulários (Contacto, Solicitar Serviço, Cursos, Agendamento) — EmailJS gratuito

Os 4 formulários em `contactos.html` já estão ligados ao EmailJS, só falta ativar a conta:

1. Crie uma conta gratuita em **https://www.emailjs.com** (plano grátis: 200 emails/mês).
2. Em **Email Services**, adicione o Gmail `gpgeoconsultoria@gmail.com` → copie o **Service ID**.
3. Em **Email Templates**, crie 4 templates (um para cada formulário: Contacto, Solicitar Serviço, Cursos, Agendamento) → copie os 4 **Template ID**. Os campos do formulário (nome, email, telefone, mensagem, etc.) já chegam automaticamente ao template — use `{{nome}}`, `{{email}}`, `{{mensagem}}`, etc. dentro do template do EmailJS. Os formulários "Solicitar Serviço" e "Cursos" enviam também um campo `{{itens_carrinho}}` com a lista dos serviços/cursos que o cliente adicionou ao carrinho — inclua esse campo no corpo do template para que a equipa veja exactamente o que foi selecionado.
4. Em **Account → General**, copie a **Public Key**.
5. Abra `assets/js/main.js` e edite o topo do ficheiro (linhas ~14-25):

```js
emailjs: {
  publicKey: "SUBSTITUIR_PUBLIC_KEY",
  serviceId: "SUBSTITUIR_SERVICE_ID",
  templates: {
    contacto: "SUBSTITUIR_TEMPLATE_CONTACTO",
    servico: "SUBSTITUIR_TEMPLATE_SERVICO",
    curso: "SUBSTITUIR_TEMPLATE_CURSO",
    agendamento: "SUBSTITUIR_TEMPLATE_AGENDAMENTO"
  }
}
```

Substitua pelos valores reais. Sem isto, os formulários mostram uma mensagem de erro amigável ao tentar enviar.

### B. WhatsApp e mapa — localização exacta

No mesmo bloco de `assets/js/main.js`, ajuste:

```js
whatsappNumber: "244928305960",   // número actual, sem espaços nem "+"
lat: -8.8964,                      // substituir pela latitude exacta do escritório
lng: 13.2302,                      // substituir pela longitude exacta
```

Para obter as coordenadas exactas: abra o Google Maps, clique com o botão direito
no local exacto do escritório em Benfica → clique nas coordenadas para copiar.
Depois de actualizar `lat`/`lng`, o mapa em `contactos.html` (secção `.map-frame`)
usa automaticamente essas coordenadas — não precisa de chave de API do Google.

### C. Redes sociais

Ainda no topo de `main.js`, actualize os links reais:

```js
social: {
  facebook: "https://facebook.com/...",
  instagram: "https://instagram.com/...",
  linkedin: "https://linkedin.com/company/...",
  youtube: "https://youtube.com/@..."
}
```

Estes links também aparecem no rodapé e na página de Contactos — estão
todos ligados às mesmas 4 variáveis, por isso só precisa de editar aqui.

## 3. Como publicar (hosting)

Qualquer alojamento de ficheiros estáticos funciona (não precisa de servidor
com PHP/Node/base de dados). Opções gratuitas ou de baixo custo populares em
Angola/internacionalmente:

- **Hostinger / cPanel** — carregar a pasta `site/` inteira para `public_html/`
- **Netlify / Vercel / Cloudflare Pages** — arrastar a pasta `site/` (grátis, com HTTPS automático)
- **GitHub Pages** — colocar o conteúdo de `site/` num repositório e activar Pages

Depois de publicar, edite:
- `robots.txt` e `sitemap.xml` → substituir `https://www.gepgeoconsultoria.co.ao`
  pelo domínio real escolhido.
- As tags `<link rel="canonical">` e `og:image` em cada página (geradas
  automaticamente a partir do domínio no ficheiro `build.py`, caso queira
  voltar a gerar as páginas).

## 4. SEO / Google Search Console (segurança e indexação)

- O site já inclui: `robots.txt`, `sitemap.xml`, dados estruturados
  (Schema.org `ProfessionalService` com morada, telefone e área de
  atuação) em cada página, meta tags Open Graph para partilha em redes sociais,
  e cabeçalhos `X-Content-Type-Options` / CSP básicos.
- Depois de publicar: registe o domínio no
  **Google Search Console** (search.google.com/search-console), submeta o
  `sitemap.xml` e peça a indexação da página inicial.
- Para reforçar a segurança em produção, configure no seu servidor/hosting
  (painel de hosting, Netlify `_headers`, ou Cloudflare):
  - Certificado **HTTPS/SSL** (obrigatório — a maioria dos hostings activa automaticamente)
  - Cabeçalho `Strict-Transport-Security`
  - Cabeçalho `X-Frame-Options: SAMEORIGIN`
  Estes não podem ser definidos apenas por HTML/meta tags — dependem do servidor.

## 5. Idiomas (PT/EN)

Não há pastas separadas por idioma — cada página troca o texto em tempo real
com o botão **PT / EN** no cabeçalho (a preferência fica guardada no
browser do visitante). Todo o texto novo que adicionar deve usar o atributo
`data-i18n="chave"` e ser acrescentado ao dicionário no topo de
`assets/js/i18n.js` (objecto `TRANSLATIONS.pt` e `TRANSLATIONS.en`).

## 6. Carrinho de Cursos e Serviços

Nas páginas **Produtos** e **Serviços**, cada curso/pacote/categoria tem um botão
**"Adicionar ao carrinho"**. O cliente pode adicionar cursos e serviços ao mesmo
tempo — não há bloqueio entre os dois tipos. O ícone do carrinho no cabeçalho
mostra o total de itens e um pequeno painel com a lista.

Quando o cliente chega a **Contactos**, os itens aparecem automaticamente na
aba correspondente: cursos na aba **"Cursos"**, serviços na aba
**"Solicitar Serviço"** — cada aba só mostra os itens do seu próprio tipo. O
carrinho fica guardado no browser do cliente (localStorage), por isso
mantém-se mesmo que ele navegue entre páginas ou feche e volte a abrir o site.

**Preços dos cursos**: os 10 cursos em `produtos.html` (Cursos Técnicos
Avançados + Cursos de Operador de Equipamentos) usam os preços e durações
reais do calendário de formação GEPGEO (INEFOP Licença Nº 1332.01/LDA).
Propositadamente **não mostramos datas de início/fim** no site, para não
obrigar a atualizar o site sempre que o calendário mudar — as datas
continuam a ser geridas à parte (ex: panfleto, WhatsApp, redes sociais) e
combinadas directamente com o cliente após o pedido de inscrição. Quando o
calendário de cursos mudar (novos cursos, preços ou durações), edite
directamente em `produtos.html`: procure por `data-cart-price`, pelo texto
dentro de `<span class="price">` e por `<p class="coord">` (duração).

**Preços dos pacotes de serviço** (Levantamento Residencial, Georreferenciamento
Empresarial, Mapeamento com Drone) continuam a ser **valores de referência**
estimados para o mercado — ajuste-os da mesma forma se necessário.

## 7. Pré-visualização de email

Todos os 4 formulários de Contactos (Contacto Geral, Solicitar Serviço,
Cursos, Agendamento) mostram, em tempo real, uma pré-visualização de como o
email ficará — assunto, remetente e corpo — incluindo automaticamente a lista
de itens do carrinho quando aplicável. Isto ajuda o cliente a confirmar que a
informação está correcta antes de enviar.

## 8. O que fazer para adicionar mais fotos ao site

1. Coloque as novas imagens em `assets/img/`.
2. Para a Galeria: edite a lista `IMAGES` no início do ficheiro
   (caso queira regenerar via `build.py`) ou adicione directamente um bloco
   `<div class="gallery-item"><img src="assets/img/NOME.jpeg" alt="..."></div>`
   dentro de `galeria.html`.

---

Qualquer dúvida técnica sobre a estrutura do código, é só perguntar.
