# Átris — Contexto do Projeto

## O que é

Clínica psiquiátrica fundada por dois médicos da FMRP-USP. Site institucional estático com arquitetura guarda-chuva: três sub-marcas (consultas, social, edu) + páginas de apoio.

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
| `/consultas` | `src/pages/consultas.astro` | Completo |
| `/medicos` | `src/pages/medicos.astro` | Completo |
| `/contato` | `src/pages/contato.astro` | Completo |
| `/social` | `src/pages/social.astro` | MVP (em breve) |
| `/edu` | `src/pages/edu.astro` | MVP (em breve) |

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

## Assets em `public/`

```
/logo.svg                    — logo principal (azul)
/logo-negativa.svg           — logo branca (usada no footer)
/bird-icon.png               — ícone do joão-de-barro (nav + favicon)
/assets/hero.jpg             — foto hero da home
/assets/founders.jpg         — foto dos dois fundadores juntos (manifesto)
/assets/founders-individual.jpg — foto individual dos médicos (medicos.astro)
/assets/bird-swirl.png       — ilustração do pássaro (assinatura do manifesto)
/fonts/PetalaPro-*.otf       — 14 arquivos de tipografia
```

## Médicos

**Dr. José Augusto Silva Reis**
- CRM/SP 199536 · RQE 128556
- WhatsApp: `https://wa.me/5516993732111`
- Especialidades: Esquizofrenia · Reabilitação Psicossocial · Psicodélicos em Psiquiatria
- Formação: FMRP-USP; doutorando em saúde mental; atua no HCRP-USP

**Dr. Lean Pampana Basoli**
- CRM/SP 199566 · RQE 127180
- WhatsApp: `https://wa.me/5516999930259`
- Especialidades: Sexualidade · Diversidade de Gênero · Saúde Mental LGBTQIA+
- Formação: FMRP-USP; atua no HCRP-USP, SEAVIDAS-USP e Hospital Estadual de Américo Brasiliense

**Endereço:** Av. Independência, 3115, sala 20 — Ribeirão Preto, SP

## Decisões de design importantes

- **Home hero:** sem botão de CTA — o copy respira sozinho
- **Manifesto:** coluna única, margens generosas, tipografia como protagonista
- **Átris.edu:** fundo azul `#173f73` em toda a página (bodyClass `page-edu` + `is:global`)
- **Cards:** sempre `border-radius: 48px 48px 6px 6px`
- **Fotos:** humanas, luz natural, tons quentes — PROIBIDO imagens de neuroimagem, IA, renders digitais
- **Contato:** só WhatsApp direto — sem formulário no MVP

## Bugs conhecidos e soluções

- **Astro CSS em `.map()`:** elementos dentro de `.map()` às vezes não recebem atributo de escopo → usar `!important` nas propriedades de cor/estilo afetadas
- **`bodyClass` em Layout:** para temas por página (ex: edu azul), passar `bodyClass="page-edu"` e usar `<style is:global>` na página
- **Nav bird:** `src="/bird-icon.png"` — arquivo está em `public/bird-icon.png` (raiz, não em assets/)

## Pendências

- Substituir `5516XXXXXXXXX` em `Nav.astro`, `social.astro` e `edu.astro` pelo número real de WhatsApp quando definido
- `founders-individual.jpg` ainda é a foto conjunta dos dois — substituir por foto individual quando disponível
