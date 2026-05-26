# 02 - Identidade Visual

## Paleta Oficial

A identidade antiga azul/laranja foi depreciada. Usar uma direcao quente, sofisticada e editorial.

| Token CSS | Hex | Uso |
|---|---|---|
| --vinho | #421E29 | marca, headers, overlays, titulos escuros, fundos profundos, footer |
| --mogno | #7A3D27 | subtitulos, divisorias, hovers, elementos editoriais |
| --cobre | #D87744 | CTAs, links ativos, linhas e microdetalhes |
| --dourado | #E7B864 | highlights suaves, detalhes do passaro, swirls ocasionais |
| --areia | #EAD7B8 | cards claros e superficies secundarias |
| --creme | #F6EFE3 | fundo principal, areas de leitura, blocos institucionais |
| --texto | #1B1616 | texto principal |
| --muted | #7B6762 | CRM, metadata, legendas, descricoes auxiliares |

Regras:
- Nunca usar branco puro (#FFFFFF).
- Evitar preto absoluto (#000000).
- Cobre e dourado sao acentos, idealmente 5-10% da composicao.
- Usar overlays vinho transludicos sobre imagens, como `rgba(66, 30, 41, 0.42)`.

## Tipografia

Fonte: Petala Pro
Nome tecnico no CSS: `"Petala Pro"` sem acento. Nao alterar.

Fallback:

```css
"Petala Pro", Georgia, serif
```

Arquivos esperados:

```text
src/fonts/PetalaPro-*.otf
```

## Direcao Visual

- Serif elegante
- Alto contraste
- Espaco negativo generoso
- Luz quente
- Tons vinho, madeira, creme e cobre
- Sensacao cinematografica, arquitetonica e acolhedora
- Editorial, arquitetonica, silenciosa, sofisticada, humana e contemplativa

Evitar:
- neuroimagem
- renders digitais
- imagens de IA
- estetica hospitalar
- wellness generico
- startup medica
- SaaS healthcare
- branco excessivo

## Logo e Marca

Usar SVG com fundo transparente.

Assets atuais:

```text
atris_completo.svg
atris_completo_claro.svg
atris_limpo.svg
atris_limpo_claro.svg
bird_swirl.svg
bird_swirl_claro.svg
bird_swirl_colorido.svg
bird_swirl_medio.svg
```
