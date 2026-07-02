# Redesign "Minimalismo Bold" — Resumo de Decisões

Handoff para continuar em novo chat. Todas as decisões abaixo foram fechadas em conversa de estratégia/copy. **Nenhum código foi escrito ainda — tudo pendente de execução em CSS/markup.**

## Princípio que guia tudo

Minimalismo bold = **contenção + um gesto decisivo**, não contraste nem acúmulo de blocos. Cada bloco precisa carregar peso máximo; o que não carrega, sai. Disciplina de *setup/payoff* para motivos: um motivo dito uma vez é assinatura, repetido vira maneirismo/slogan.

Voz: precisa, humana, contemplativa, sóbria, levemente literária. Evitar: registro de coach inspiracional, marketing exagerado, tom de startup, clichês de terapia (ex.: "escuta"). Fonte canônica de voz: `docs/03-conteudo-e-voz.md`.

Cor: campo **creme/linho dominante** na página inteira; escuro só nas pontas (nav + rodapé); cobre `#D87744` e mel dourado só como **acento** (links, kickers, filetes), nunca fundo cheio. Paleta nova: vinho `#421E29`, mogno `#6B3728`, terracota `#A0522D`, cobre `#D87744`, mel dourado `#E7B864`, creme `#E9D8BE`.

---

## HOME (`src/pages/index.astro`)

1. **Bloco `.pitch` ("Como o atendimento é conduzido faz diferença"): APAGADO.** Era enchimento abstrato, sem informação. (Já removido pelo José.)

2. **Bloco de agendamento** (ex-card "Na prática"): card arredondado removido, mantido só o link. Copy nova:
   - Título: **"Você escolhe o médico. O resto é direto."**
   - Corpo: **"Você decide com quem quer se tratar e marca pelo WhatsApp — presencial em Ribeirão Preto ou por telemedicina."** (cortado o "Conheça" repetido; travessão antes de "presencial")
   - Link: **"Conheça os médicos"**
   - Pendência visual: o link flutua longe do parágrafo, com vão grande — alinhar no CSS.

3. **Preview do manifesto: MANTER** (é a afirmação de marca mais forte da home). Decisão de cor:
   - **Sem slab colorido.** Manifesto sobre o creme, tipografia como protagonista (citação grande em itálico), texto em vinho ou mogno, filete fino de cobre como única marca gráfica, link "Leia o manifesto completo" em cobre.
   - **Vinho como fundo foi testado e descartado** (página fica pesada nas duas pontas).
   - Copy: hoje está lorem ipsum. Trocar pela **provocação de abertura** do manifesto (tamanho da frase "crise de produtividade"), curta e cortante — não colar o manifesto inteiro (mataria o motivo de clicar).

4. **Separador entre blocos = filete fino** (cobre ou mogno), NÃO um respiro vertical gigante. Isso substitui a ideia anterior de "caprichar no espaço em branco".

5. **Ordem:** manifesto **antes** do bloco "Como trabalhamos" (promessa → porquê → como agendar).

6. Kicker "Como trabalhamos" migra do laranja antigo para cobre `#D87744`.

---

## PROFISSIONAIS / MÉDICOS (`src/pages/medicos.astro`)

7. **Hero reformulado.** Estrutura final escolhida (a mais clean), só duas linhas:
   - Título: **OS MÉDICOS** (rótulo seco, grande)
   - Sub (pequena, sussurro): **"As mãos que fazem a Átris"**
   - **Kicker removido** ("Equipe clínica" era terceiro sinônimo do mesmo grupo).
   - "Os médicos" venceu "Profissionais" (este só repetia o rótulo da nav).
   - "As mãos que fazem a Átris" rima com o hero da home ("Psiquiatria feita à mão") — setup/payoff. "que fazem" venceu "por trás" (ativo, não conspiratório; rima mais apertada: fazem↔feita).
   - **GUARDRAIL:** "feita à mão" tem que continuar sendo o **único** outro lugar onde a mão aparece. Não espalhar (legenda, CTA, etc.) ou o payoff vira tique.

8. **Bloco "Presença clínica"** (intro antes dos médicos): hero antigo e esse bloco diziam a mesma coisa duas vezes. Reescrever ou cortar. Se mantido:
   - Título: **"O cuidado não começa pelo sintoma isolado. Começa pela história inteira."**
   - Corpo: **"O tempo do sofrimento, o contexto em que ele aparece, a continuidade que uma decisão clínica exige."**
   - "escuta" cortado (clichê de terapia). Considerar **cortar o bloco inteiro** para máximo clean — ir do hero direto aos médicos.

9. **Bandas ambiente (`.space-break`) entre os cards: REMOVER as duas.** Poluição visual — 54vh de altura, ritmo redundante (cards já alternam e têm respiro), diluem os retratos, e destoam estilisticamente (retângulo sangrado vs. cards arredondados). Atmosfera do "espaço físico real" fica só no hero (uma foto de abertura).

10. **CTA final reformulado.** Sobrepor o CTA sobre **uma** imagem ambiente — usar a foto do **vidro soprado** (é "feita à mão" em imagem; payoff visual do motivo, no único ponto deliberado). Gradiente sobre a foto para legibilidade (mesmo tratamento do hero). Cria simetria de moldura: página abre e fecha com texto sobre o espaço. Remove o slab vinho chapado.
    - Copy nova: **"Quando você estiver pronto, nós temos tempo."** + botão "Entrar em contato".
    - Descartado: "O cuidado começa quando há tempo suficiente para compreender" (registro de coach/biscoito da sorte).

---

## Estado de execução

- Conversa foi 100% estratégia + copy. **Falta aplicar tudo em código.**
- `medicos.astro` hoje tem 3 médicos (foi adicionada Dra. Lara Zancaner Ueta como placeholder — CRM/RQE/áreas "em definição").
- Custo do projeto: R$0/mês. Não sugerir soluções com custo recorrente.
