# 05 - Estado Atual do Código (setembro/2026)

Levantamento feito logo após consolidar em `Atris_Setembro06` a limpeza de
julho/2026 (commit `1a39d39`, ver `docs/auditoria-limpeza-2026-07.md`).
Compara o código hoje com o handoff de redesign em
`docs/redesign-minimalismo-bold.md`, que registra decisões de
estratégia/copy fechadas em conversa anterior.

## Contexto importante

`docs/redesign-minimalismo-bold.md` afirma no topo que "nenhum código foi
escrito ainda — tudo pendente de execução". Isso está desatualizado: parte
do redesign já foi implementada no código atual. A tarefa não é mais
executar um redesign do zero, é fechar um trabalho que já está pela
metade.

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

## Pendências identificadas, por prioridade

1. **Lorem ipsum ao vivo na home.** `src/pages/index.astro` linha 49,
   dentro do preview do manifesto: "Lorem ipsum dolor sit amet, consectetur
   adipiscing elit. Sed do". O handoff pede a frase de abertura do
   manifesto no lugar — nunca foi trocado.
2. **`/manifesto` está com texto antigo.** `docs/manifesto.md` (aprovado
   por José em 2026-07-14, com os 4 pilares incluindo "O João-de-Barro") é
   declarado no próprio arquivo como fonte canônica "até a página ser
   atualizada" — mas `src/pages/manifesto.astro` não tem nenhuma menção ao
   pássaro/pilar 4. Provavelmente a peça mais importante pendente: a home
   já cita "Psiquiatria feita à mão" esperando o payoff em `/medicos` e no
   manifesto.
3. **Kicker "Equipe clínica" ainda no hero de `/medicos`**, mas o handoff
   decidiu removê-lo (era um terceiro sinônimo redundante de
   "médicos"/"profissionais").
4. **CTA final de `/medicos` com copy divergente da decidida.** Hoje:
   "Quando você estiver pronto, podemos começar" + "Agende sua consulta".
   Decidido no handoff: "Quando você estiver pronto, nós temos tempo." +
   "Entrar em contato". Confirmar se a decisão mudou depois ou se ficou
   pra trás.
5. **`/social` e `/edu` ainda na navegação principal** (`Nav.astro`), mas
   `docs/04-pendencias-tecnicas.md` registra como decisão mantida que
   devem ficar fora do menu até terem conteúdo real (hoje são só
   waitlist).

## Achado à parte — tela de acesso restrito

`Layout.astro` tem uma tela de "site em construção" com senha, e a senha
(`"draarlete"`) está em texto puro num `<script>` client-side — visível a
qualquer um que abra o código-fonte da página. Não impede acesso de
verdade, só evita indexação/visualização casual antes do lançamento. Não é
bug de funcionamento; vale confirmar se essa é mesmo a intenção (cortina
cosmética) ou se a expectativa era de proteção real.

## Sem achados novos de código morto

A limpeza de julho segurou bem — não apareceu nenhum código morto ou asset
órfão novo nesta passada. O que falta é essencialmente fechar o redesign
já em andamento (itens 1-5 acima).
