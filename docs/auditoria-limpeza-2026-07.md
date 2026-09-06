# Auditoria de código — julho/2026

Levantamento manual do repositório (`src/`, `public/`, `docs/`, `CLAUDE.md`), feito porque o `desloppify` não serviu pra esse projeto — ver seção final. Tudo abaixo foi verificado por leitura direta do código e `grep` cruzado (declaração vs. uso real), não é uma lista especulativa.

## 1. Bugs ativos (isso não é limpeza, é quebra em produção)

- **CTA principal do hero da home aponta pra um número falso.** `src/pages/index.astro` linha 4: `const WA = "https://wa.me/5516XXXXXXXXX?..."`. O botão "Agendar consulta" no topo da home — a ação mais importante da página — leva pra um link de WhatsApp que não existe. Já está documentado como pendência em `docs/04-pendencias-tecnicas.md`, mas continua sem resolver.
- **`/og-image.jpg` não existe.** `Layout.astro` referencia `/og-image.jpg` em `og:image` e `twitter:image` pra todas as páginas. O arquivo não está em `public/`. Compartilhamentos no WhatsApp/LinkedIn/etc. saem sem imagem.

## 2. Código morto confirmado

Cada item abaixo foi checado: existe no código, mas não é alcançado por nenhum caminho de renderização.

- **Seção "Produtos" inteira em `index.astro`**: array `products` (linhas 6–28) e bloco de CSS `.products`, `.products__grid`, `.card*` (linhas ~382–459) — nenhum dos dois é usado no template. Parece resto de uma versão anterior da home que tinha 3 cards (Consultas/Social/Edu) e foi substituída pela seção "Como trabalhamos" atual.
- **Sistema `.pratica` (fade-in) em `index.astro`**: o `<script>` no fim do arquivo procura `document.getElementById('pratica')` — não existe nenhum elemento com `id="pratica"` no template. O observer roda em toda visita à home e não faz nada. As classes `.pratica`, `.pratica__title`, `.pratica__p` também não são usadas (só `.pratica__cta`, que sobrou grudada no botão "Conheça os médicos" da seção pitch).
- **`.pitch__dash` e `.pitch__close`** (`index.astro`) — declaradas, sem elemento correspondente no template.
- **`.manifesto-image--wide`** (`manifesto.astro`) — declarada, o template só usa `.manifesto-image--portrait`.
- **`.professional-section__line`** (`src/styles/global.css` linha 235, dentro do bloco de overrides `!important`) — não existe em nenhum `.astro`. Provavelmente um nome antigo de classe que foi renomeada (hoje é `.professional-section__role` / `__formation`) sem atualizar o override global.
- **`src/components/Welcome.astro`** (210 linhas) + **`src/assets/astro.svg`** + **`src/assets/background.svg`** — sobra do template inicial do Astro (`npm create astro`). Não são importados em lugar nenhum.

## 3. Assets órfãos em `public/`

Sem nenhuma referência no código:

- `public/logo.svg`
- `public/logo-favicon.svg`
- `public/favicon.svg` (o favicon real vem de `bird-icon.png`, linkado explicitamente no `Layout.astro`)
- `public/images/brand/bird_swirl.svg`
- `public/images/brand/bird_swirl_médio.svg`

Todos parecem versões anteriores dos ícones que hoje têm variantes mais novas (`bird_swirl_claro.svg`, `bird_swirl_colorido.svg`, etc.).

## 4. `CLAUDE.md` e `docs/04-pendencias-tecnicas.md` estão desatualizados

Isso importa porque esses arquivos são o que eu (e você) usamos como fonte de verdade — se estão errados, geram decisão errada.

- Ambos listam **`/consultas` → `src/pages/consultas.astro`** como página completa. Esse arquivo não existe no repositório atual — não achei em nenhum lugar de `src/pages/`. O conteúdo de consultas parece ter sido incorporado direto na home.
- `CLAUDE.md` documenta só **dois médicos** (José e Lean). `medicos.astro` já tem **três**: Dr. José Augusto, **Dra. Lara Zancaner Ueta** (CRM/SP 164028 · RQE 65684) e Dr. Lean Pampana Basoli. A Lara não existe no arquivo de contexto.
- `CLAUDE.md` não menciona as sub-marcas **Terra** e **Forma** (usadas via `bodyClass="page-terra"` / `"page-forma"` em `social.astro` e `edu.astro`) — só fala em "Social" e "Edu" genéricos. A paleta e nomenclatura reais (oliva `#344023` pra Terra, teal `#153c40` pra Forma) não estão documentadas em lugar nenhum do `CLAUDE.md`.
- `docs/04-pendencias-tecnicas.md` lista pendências que já parecem resolvidas: "substituir bird-swirl.png pelo SVG definitivo" (já é SVG) e "investigar founders-individual.jpg" (hoje `medicos.astro` já usa fotos individuais reais — `founder_jose.jpg`, `founder_lara.jpg`, `founder_lean.jpg`). Vale confirmar com você antes de eu marcar como resolvido, mas pelo código parece que sim.

## 5. Padrão arriscado: CSS global com `!important` sobrescrevendo estilo de componente

`src/styles/global.css` tem um bloco (`@media (min-width: 769px)`) que redefine `font-size` com `!important` pra ~15 seletores espalhados por várias páginas — incluindo `.hero__headline`, que **já tem** um `clamp()` definido no `<style>` local de `index.astro`. Isso significa que existem hoje duas definições de tamanho pro mesmo elemento, uma delas sempre vencendo silenciosamente por especificidade forçada. É o mesmo padrão que o `CLAUDE.md` já registra como "bug conhecido" pra CSS dentro de `.map()` — mas aqui foi generalizado pra um mecanismo permanente de ajuste de escala tipográfica, não uma exceção pontual. Isso é provavelmente a raiz do "mexo em uma coisa e quebra em outro lugar" que você mencionou: quem for ajustar o tamanho de um título não vai necessariamente olhar esse bloco no `global.css` e vai editar o lugar errado.

## 6. Sobre o desloppify — recomendo abortar pra esse projeto

O scan rodou, mas o resultado não é confiável aqui: `security: clean (1 files scanned)` — ele analisou **1 arquivo** no projeto inteiro (provavelmente só `astro.config.mjs`). O score "objective 100%" não significa que o código está limpo — significa que a ferramenta não enxergou os 8 arquivos `.astro` onde vive praticamente todo o site. Isso bate com o que eu já suspeitava pelo README: `.astro` não está na lista de linguagens com suporte real (nem completo, nem genérico), e não há config de ESLint no projeto pra ele rodar linting sobre o JS/TS do frontmatter. Os 75% do score que sobraram ("subjective dimensions") estão zerados por não terem sido avaliados, não por serem ruins. Não vale o esforço de configuração pra esse stack — a auditoria manual acima já cobre mais chão do que ele conseguiria aqui.

---

## Próximos passos — o que eu preciso de você

Isso é levantamento, não mudei nada ainda. Pra eu seguir pra execução, preciso de decisão sua em três pontos:

1. **WhatsApp real da home** — qual número entra no lugar do placeholder? (`medicos.astro` já usa `5516993732111` pro Dr. José em vários lugares — é esse mesmo, ou a home deveria ser neutra entre os três médicos?)
2. **Remoção do código morto (seções 2 e 3)** — posso remover tudo isso com segurança, ou algum desses trechos é candidato a "voltar a ser usado em breve" (ex: a seção de Produtos, caso vocês queiram reintroduzir um grid de sub-marcas na home)?
3. **Atualização de `CLAUDE.md` e `docs/04`** — quer que eu já corrija as informações erradas (Lara, /consultas, Terra/Forma) como parte dessa limpeza?
