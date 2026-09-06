# 04 - Pendencias Tecnicas

## Paginas

Rotas atuais:

```text
/
/manifesto
/medicos
/contato
/privacidade
/social   (sub-marca Atris Terra)
/edu      (sub-marca Atris Forma)
```

Nao existe rota /consultas — a oferta de consultas vive na home, em /medicos e em /contato.

Paginas completas:
- Home
- Manifesto
- Medicos
- Contato
- Privacidade

Paginas MVP (waitlist via WhatsApp, sem conteudo/matricula ao vivo):
- /social
- /edu

## Componentes Principais

```text
src/layouts/Layout.astro
src/components/Nav.astro
src/components/Footer.astro
src/styles/global.css
```

## Pendencias Imediatas

- Revisar visualmente a paleta quente aplicada no navegador
- Atualizar CTA do Nav (verificar se ainda se aplica — Nav.astro hoje nao tem CTA proprio, so logo e links)
- /social e /edu devem ficar fora da navegacao principal ate terem conteudo real (hoje sao so waitlist)

### Resolvidas (jul/2026)

- WhatsApp institucional da home: definido o numero do Dr. Jose (5516993732111), o mesmo ja usado em contato/Terra/Forma
- Card placeholder em /medicos: nao existe mais no template atual (3 medicos reais: Dr. Jose, Dra. Lara, Dr. Lean)
- bird-swirl.png: ja substituido — hoje sao SVGs (bird_swirl_colorido.svg, bird_swirl_claro.svg etc.) em public/images/brand/
- founders-individual.jpg: nao existe mais — /medicos hoje usa fotos individuais reais (founder_jose.jpg, founder_lara.jpg, founder_lean.jpg)
- Foto dos fundadores juntos para /manifesto: resolvida (Founders.jpg)
- Codigo morto removido: secao "Produtos" (nunca renderizada) e sistema `.pratica` (CSS + IntersectionObserver que rodava sem elemento correspondente) em index.astro; `.manifesto-image--wide` em manifesto.astro; bloco `.professionals-intro*` em medicos.astro; Welcome.astro e assets de exemplo do template Astro inicial; assets orfaos em public/ (logo.svg, logo-favicon.svg, favicon.svg, bird_swirl.svg, bird_swirl_médio.svg)
- Consolidacao de CSS: o bloco `@media (min-width: 769px)` com `!important` em global.css (que sobrescrevia tipografia de varias paginas ao mesmo tempo) foi removido; cada pagina agora define seu proprio valor de desktop no `<style>` local, preservando o visual atual
- /og-image.jpg: criado primeiro como placeholder (copia de /assets/hero.jpg, retrato), depois substituido pela imagem definitiva (1200x630, paisagem) fornecida pelo usuario

## Bugs / Cuidados

- Em Astro, CSS dentro de `.map()` pode perder escopo em alguns casos. Se necessario, usar seletor global ou `!important` com cuidado.
- Quando o tema altera o body, usar `bodyClass` + `<style is:global>` (hoje usado por /social com `page-terra` e /edu com `page-forma`).
- OG image ja existe e esta no formato correto (1200x630) em public/og-image.jpg.
- Evitar overrides globais de tipografia com `!important` em global.css afetando varios seletores de paginas diferentes ao mesmo tempo — dificulta saber qual pagina "ganha" a cascata. Preferir `@media (min-width: 769px)` no `<style>` local de cada pagina.

## Decisoes Mantidas

- Manifesto em coluna unica, com tipografia como protagonista
- Figura de card em /medicos com:

```css
border-radius: 48px 48px 6px 6px;
```

- /social e /edu devem ficar fora da navegacao principal ate terem conteudo real
