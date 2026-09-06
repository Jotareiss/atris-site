# Átris — Contexto do Projeto

## O que é

Clínica psiquiátrica fundada por médicos da FMRP-USP. Site institucional estático com arquitetura guarda-chuva: o núcleo de consultas (home, médicos, contato) + duas sub-marcas em fase de waitlist (Átris Terra, Átris Forma) + páginas de apoio.

## Voz da marca

`Atris_Voz.md` é o guia de voz canônico. **Sempre consultar antes de gerar ou revisar qualquer texto da Átris** (legendas, microtextos, respostas, descrições, e-mails, copy de site). Ele traz a tábua de princípios, os três modos de dizer, o mapa de registro, o limite clínico inegociável e instruções diretas de uso para o Claude.

## Stack

- **Framework:** Astro (geração estática)
- **Hospedagem:** Cloudflare Pages
- **Repositório:** https://github.com/Jotareiss/atris-site
- **Custo:** R$0/mês — não sugerir soluções com custo recorrente

## Páginas existentes

| Rota | Arquivo | Status |
|---|---|---|
| `/` | `src/pages/index.astro` | Completo |
| `/manifesto` | `src/pages/manifesto.astro` | Completo |
| `/medicos` | `src/pages/medicos.astro` | Completo |
| `/contato` | `src/pages/contato.astro` | Completo |
| `/privacidade` | `src/pages/privacidade.astro` | Completo |
| `/social` (Átris Terra) | `src/pages/social.astro` | MVP — waitlist ("Quero ser avisado") |
| `/edu` (Átris Forma) | `src/pages/edu.astro` | MVP — waitlist ("Quero ser avisado") |

Não existe rota `/consultas` — a oferta de consultas vive na home, em `/medicos` e em `/contato`.

## Componentes e layout

- `src/layouts/Layout.astro` — layout base com Nav + Footer; aceita props `title`, `description`, `bodyClass`
- `src/components/Nav.astro` — bloco de logo grande + barra sticky com IntersectionObserver; bird-icon aparece quando logo sai da tela; overlay mobile
- `src/components/Footer.astro` — grid 4 colunas: marca | nav | médicos | endereço; fundo `#173f73`
- `src/styles/global.css` — CSS custom properties, @font-face para Pétala Pro (14 variações)

## Tipografia

Typeface: **Pétala Pro** (arquivos em `public/fonts/`).
Declarada como `"Petala Pro"` **sem acento** no @font-face — não alterar.
Fallback: Georgia, serif.
Variável CSS: `--font-body: "Petala Pro", Georgia, serif`

## Paleta de cores (CSS custom properties)

```css
--color-primary:   #173f73   /* azul — títulos, nav, botões primários */
--color-orange:    #f28f38   /* laranja — CTAs, divisores, destaque */
--color-salmon:    #eda27f   /* salmão — bordas sutis, hover, tags */
--color-bg:        #F4EDE3   /* linho — fundo padrão de todas as páginas */
--color-card:      #FAF6F1   /* off-white — cards, seções destacadas */
--color-text:      #1a1a1a
--color-text-secondary: #666666
```

## Sub-marcas (Terra / Forma)

- **Átris Terra** (`/social`) — acesso e cuidado em saúde mental (consultas a valor acessível, projetos de território). `bodyClass="page-terra"`, cor oliva `#344023`. Recolore Nav/Footer via `<style is:global>` local (`body.page-terra footer`, etc.). CSS da página em `<style>` escopado, prefixo `.terra-*`.
- **Átris Forma** (`/edu`) — formação continuada em saúde mental. `bodyClass="page-forma"`, cor teal `#153c40`. Mesmo padrão de recoloração de Nav/Footer. CSS da página em `<style>` escopado, prefixo `.forma-*`.
- Ambas as páginas ainda estão em modo waitlist (CTA "Quero ser avisado" via WhatsApp), sem conteúdo/matrícula ao vivo.

## Assets em `public/`

```
/logo-negativa.svg           — logo branca (usada no footer)
/bird-icon.png               — ícone do joão-de-barro (nav + favicon)
/favicon.ico                 — favicon
/og-image.jpg                — imagem de preview para redes sociais (og:image/twitter:image); definitiva, 1200×630
/assets/hero.jpg             — foto hero da home
/assets/Founders.jpg         — foto dos fundadores juntos (manifesto)
/assets/founder_jose.jpg     — foto individual do Dr. José (medicos.astro)
/assets/founder_lara.jpg     — foto individual da Dra. Lara (medicos.astro)
/assets/founder_lean.jpg     — foto individual do Dr. Lean (medicos.astro)
/assets/ambient_1.jpg a ambient_6.JPG — fotos ambiente usadas em heros (médicos, manifesto, contato, cta)
/images/brand/*.svg          — variações do logo/pássaro (completo, limpo, claro, colorido, TERRA/FORMA)
/fonts/PetalaPro-*.otf       — 14 arquivos de tipografia
```

Removidos por serem órfãos (sem referência em `src`): `logo.svg`, `logo-favicon.svg`, `favicon.svg` (raiz), `images/brand/bird_swirl.svg`, `images/brand/bird_swirl_médio.svg`.

## Médicos

**Dr. José Augusto Silva Reis**
- CRM/SP 199536 · RQE 128556
- WhatsApp: `https://wa.me/5516993732111` (também usado como contato institucional geral do site: home, contato, Terra, Forma)
- Especialidades: Esquizofrenia · Reabilitação Psicossocial · Psicodélicos em Psiquiatria
- Formação: FMRP-USP; doutorando em saúde mental; atua no HCRP-USP

**Dra. Lara Zancaner Ueta**
- CRM/SP 164028 · RQE 65684
- WhatsApp: `https://wa.me/5516997081319`
- Especialidades: Interconsulta psiquiátrica · Esquizofrenia · Reabilitação Psicossocial
- Formação: PUC-Campinas; psiquiatra pelo HCRP-USP; mestre em saúde mental pela FMRP-USP (neuroimagem na esquizofrenia)

**Dr. Lean Pampana Basoli**
- CRM/SP 199566 · RQE 127180
- WhatsApp: `https://wa.me/5516999930259`
- Especialidades: Sexualidade · Diversidade de Gênero · Saúde Mental LGBTQIA+
- Formação: FMRP-USP; atua no HCRP-USP, SEAVIDAS-USP e Hospital Estadual de Américo Brasiliense

**Endereço:** Cavalheiro Torquato Rizzi, 1805, sala 24 — Ribeirão Preto, SP *(novo; substituiu Av. Independência, 3115, sala 20 — confirmar logradouro/bairro/CEP)*

## Decisões de design importantes

- **Manifesto:** coluna única, margens generosas, tipografia como protagonista
- **Átris Terra / Forma:** tema por sub-marca via `bodyClass` (`page-terra` oliva `#344023`, `page-forma` teal `#153c40`) que recolore Nav/Footer com `<style is:global>` local
- **Cards de médicos:** figura com `border-radius: 48px 48px 6px 6px`
- **Fotos:** humanas, luz natural, tons quentes — PROIBIDO imagens de neuroimagem, IA, renders digitais
- **Contato:** só WhatsApp direto — sem formulário no MVP
- **Tipografia responsiva:** cada página define seus próprios breakpoints; valores de desktop (`@media (min-width: 769px)`) ficam no `<style>` local da própria página — evitar overrides globais com `!important` em `global.css` (fonte de bugs difíceis de rastrear; já removido um bloco assim em jul/2026)

## Bugs conhecidos e soluções

- **Astro CSS em `.map()`:** elementos dentro de `.map()` às vezes não recebem atributo de escopo → usar `!important` nas propriedades de cor/estilo afetadas
- **`bodyClass` em Layout:** para temas por página (ex: Terra oliva, Forma teal), passar `bodyClass="page-terra"`/`"page-forma"` e usar `<style is:global>` na própria página para recolorir Nav/Footer
- **Nav bird:** `src="/bird-icon.png"` — arquivo está em `public/bird-icon.png` (raiz, não em assets/)

## Pendências

- **Jul/2026:** feita uma limpeza de código morto e consolidação de CSS (auditoria manual) — WhatsApp da home corrigido para o número do Dr. José, seção "Produtos" e sistema `.pratica` (nunca usados) removidos, `Welcome.astro`/assets de exemplo do template Astro removidos, assets órfãos em `public/` removidos, e o bloco `!important` de `global.css` foi relocado para o `<style>` local de cada página. `/og-image.jpg` criado como placeholder (cópia de `/assets/hero.jpg`) e depois substituído pela imagem definitiva (1200×630). CLAUDE.md e este arquivo de pendências foram atualizados na mesma leva.
