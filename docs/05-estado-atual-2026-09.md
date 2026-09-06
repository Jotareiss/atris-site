# 05 - Estado Atual do Código (setembro/2026)

Levantamento feito logo após consolidar em `Atris_Setembro06` a limpeza de
julho/2026 (commit `1a39d39`, ver `docs/auditoria-limpeza-2026-07.md`).
Compara o código hoje com o handoff de redesign em
`docs/redesign-minimalismo-bold.md`, que registra decisões de
estratégia/copy fechadas em conversa anterior.

Atualizado ao fechar o branch `fix/pendencias-2026-09` (auditoria SEO com
`/seo:seo`, ver `ACTION-PLAN.md`/`FULL-AUDIT-REPORT.md` gerados na época):
todos os itens abaixo foram revisados e resolvidos ou mantidos como
decisão deliberada.

## O que do redesign "Minimalismo Bold" já está aplicado

- Paleta nova em `global.css` — vinho `#421E29`, cobre `#D87744`, dourado
  `#E7B864`, creme `#F6EFE3` — usada em todo o site.
- Home (`index.astro`): bloco "pitch" antigo (enchimento abstrato) removido;
  bloco de agendamento reescrito com a copy decidida — "Você escolhe o
  médico. O resto é direto." / "Conheça os médicos"; ordem manifesto →
  "Como trabalhamos" aplicada.
- `/medicos`: bloco "Presença clínica" (que duplicava o hero) já foi
  cortado; as bandas `.space-break` entre os cards de médicos também já
  não existem mais.

## Itens revisados nesta rodada (fix/pendencias-2026-09)

1. **Lorem ipsum na home — resolvido.** Não existe mais no código atual.
2. **Pilar "João-de-Barro" no manifesto — resolvido.** Já implementado por
   completo em `src/pages/manifesto.astro`.
3. **Kicker "Equipe clínica" no hero de `/medicos` — mantido como está.**
   Revisado e decidido manter, não é mais tratado como pendência.
4. **CTA final de `/medicos` ("Quando você estiver pronto, podemos
   começar" / "Agende sua consulta") — mantido como está.** Revisado e
   decidido manter a copy atual em vez da alternativa do handoff antigo.
5. **`/social` e `/edu` na navegação principal — mantido como está.**
   Revisado e decidido manter no menu.

## Redesign de SEO técnico + GEO (schema, robots.txt, sitemap.xml)

Reestruturado por completo no commit `4c6ed29`:

- Schema JSON-LD deixou de ser um `MedicalClinic` idêntico duplicado nas 7
  páginas. Agora usa um padrão `@graph` em `Layout.astro`: um bloco de
  identidade fixo (`MedicalClinic` + `WebSite`, com `@id` estáveis) mais
  um `pageSchema` específico por página (`WebPage`, `AboutPage`,
  `ContactPage`, `Physician` × 3 em `/medicos`, `Service` em `/social` e
  `/edu`), todos referenciando a identidade por `@id` em vez de duplicar
  dados.
- `/social` e `/edu` corrigidos de `MedicalClinic` para `Service`.
- `robots.txt` reescrito com política explícita por bot de IA (permite
  GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, anthropic-ai,
  Google-Extended, Applebot-Extended, Bingbot; bloqueia CCBot e
  Bytespider).
- `sitemap.xml` reescrito: `priority`/`changefreq` removidos (Google os
  ignora), `lastmod` corrigido para refletir a data real de última
  alteração de cada página.
- Performance: fotos dos médicos convertidas para WebP, as 14 variações
  de Pétala Pro convertidas para WOFF2, preload do hero da home.

## Achado à parte — tela de acesso restrito

Resolvido: a tela de "site em construção" com senha em texto puro que
existia em versões antigas de `Layout.astro` não existe mais no código
atual.

## Sem achados novos de código morto

A limpeza de julho segurou bem — não apareceu nenhum código morto ou asset
órfão novo nesta passada.

## Fluxo de branch para as edições pontuais

As pendências acima foram resolvidas no branch `fix/pendencias-2026-09`,
criado a partir do commit `265be23`, em vez de direto na `main` — porque o
Cloudflare Pages faz deploy automático a cada push na `main`, e essa
rodada de edições ficou em revisão até aqui.

Próximo passo: dar push do branch, mesclar na `main` e deixar o Cloudflare
Pages publicar automaticamente (ver comandos no final da conversa com o
Claude).
