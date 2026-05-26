# 04 - Pendencias Tecnicas

## Paginas

Rotas atuais:

```text
/
/manifesto
/consultas
/medicos
/contato
/social
/edu
/privacidade
```

Paginas completas:
- Home
- Manifesto
- Consultas
- Medicos
- Contato
- Privacidade

Paginas MVP:
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
- Definir WhatsApp institucional ou decidir estrategia com dois medicos
- Atualizar CTA do Nav
- Criar /og-image.jpg
- Remover card placeholder em /medicos
- Substituir bird-swirl.png pelo SVG definitivo
- Investigar founders-individual.jpg que existe localmente mas nao carrega em producao
- Confirmar foto real dos fundadores juntos para /manifesto

## Bugs / Cuidados

- Em Astro, CSS dentro de `.map()` pode perder escopo em alguns casos. Se necessario, usar seletor global ou `!important` com cuidado.
- Quando o tema altera o body, usar `bodyClass` + `<style is:global>`.
- OG image esta referenciada no Layout, mas o arquivo ainda nao existe.

## Decisoes Mantidas

- Home hero sem CTA
- Manifesto em coluna unica, com tipografia como protagonista
- Cards com:

```css
border-radius: 48px 48px 6px 6px;
```

- /social e /edu devem ficar fora da navegacao principal ate terem conteudo real
