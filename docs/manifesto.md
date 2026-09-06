# Manifesto — texto final aprovado

Status: implementado em `src/pages/manifesto.astro` em setembro/2026. Esta
versão substitui a de 2026-07-14 (que passou por stress test linha a
linha, registro mantido abaixo) — José revisou e simplificou o texto
depois disso; o texto atual é o anexado por ele em 2026-09-06.

Uma correção pontual foi feita ao implementar: o pilar 3 tinha "para nós,
para nós," duplicado (provável repetição de digitação) — implementado
como uma ocorrência só. Sinalizado a José para confirmação.

---

## Texto

**Manifesto**
**A prática da psiquiatria enquanto ofício**

"O que preciso saber sobre você, enquanto pessoa, para lhe oferecer o melhor cuidado possível?"¹

Antes de existir como lugar, a Átris existe como uma maneira de compreender o mundo. Acreditamos que a saúde é resultado de uma história e de um corpo que experimenta, sente e atribui sentidos ao mundo. A partir dessa perspectiva, construímos um espaço dedicado à construção de um cuidado científico, ético e profundamente humano. A clínica é nosso núcleo, mas não nosso limite. Atuamos também na produção de conhecimento e na ampliação do acesso a um cuidado psiquiátrico de qualidade.

Essa é a nossa filosofia em movimento:

**1. Rigor científico é inegociável.**
Os capítulos infelizes da história da psiquiatria e o contato com pacientes que sofreram com isso nos ensinaram o alto preço da falta de rigor científico e apontaram a direção: ciência é fundamental. Entendemos que a base do cuidado é o conhecimento técnico e nos orgulhamos de todos os nossos profissionais possuírem uma trajetória científica sólida. Acreditamos que a singularidade da nossa profissão nasce da capacidade de utilizar esse conhecimento para compreender as mais diferentes histórias e balizar nossas ações. Portanto, nossa psiquiatria é científica e compassiva.

**2. A presença que se faz no corpo.**
Acreditamos que a prática se faz no encontro genuíno entre duas pessoas que compartilham o mesmo espaço, o mesmo silêncio e o mesmo ritmo. Cuidar exige presença, olhar atento e uma escuta sem pressa. Do resultado dessa vivência, surge a capacidade de transformação. Praticamos a hospitalidade como um valor filosófico: o gesto, o ambiente e a relação também cuidam, preparando o terreno para que a pessoa possa aparecer antes do seu sintoma.

**3. O tempo como matéria-prima**
Nós reconhecemos o ritmo da sociedade contemporânea: uma aceleração constante, na qual o tempo é cada vez mais curto e disputado, o que esgota, fragmenta e adoece. No entanto, nos recusamos a trazer essa dinâmica para dentro da Átris. Construir uma vivência de tempo interno, para nós, não é luxo, é uma ferramenta importante: diagnósticos psiquiátricos complexos e histórias de vida ricas se constroem entre duas pessoas vivenciando o momento juntas. Acreditamos que uma investigação profunda resulta em uma medicina precisa e segura.

*(texto original enviado por José tinha "para nós, para nós," repetido aqui — implementado com uma ocorrência só; confirmar se foi intencional.)*

**4. O João-de-Barro**
Cada detalhe da Átris existe porque foi considerado necessário enquanto um gesto de cuidado. O gesto é o que nomeia e transforma toda essa filosofia em experiência. Por isso, nosso símbolo é o João-de-Barro. Assim como ele, que molda sua casa à mão, curva por curva, para construir um abrigo seguro e sob medida, nós entendemos o cuidado como uma construção. Não usamos fórmulas prontas, erguemos cada plano terapêutico com paciência, intencionalidade e respeito à matéria-prima que nos foi oferecida: a história de vida de cada paciente.

---

¹ Trecho do artigo "Eliciting Personhood Within Clinical Practice: Effects on Patients, Families, and Health Care Providers", de Chochinov e colaboradores.

---

## Registro do stress test (2026-07-14) — versão anterior

Mantido para contexto histórico. O texto abaixo se refere à versão de
2026-07-14, já substituída pela versão de setembro/2026 acima.

**Corrigido nesta versão:**
- Erros de regência/crase/grafia: "poder lhe oferece" → "oferecer"; "época onde" → "época em que"; "basear performance" → "basear em performance"; "dedicado a construção" → "dedicado à"; "paciencia" → "paciência"; maiúscula indevida depois de dois-pontos ("Diagnósticos" → "diagnósticos"); "uma uma investigação" (palavra duplicada) + frase com sujeito solto, reescrita em duas frases.
- Vírgula picada em "'abstratos, eles fazem parte'" → travessão.
- Fechamento do parágrafo 2 ("prática de transformação") reescrito. Motivo: a frase original nomeava o resultado ("somos transformadores") em vez de mostrar o gesto — soava como discurso de coach/prepotente. Nova versão afirma a ambição pelo ato ("tentativa de provar, na prática") em vez de prometer o resultado, e ecoa "prática" do título.
- "Ativo individual" (parágrafo 1) reaproximado do gatilho que o justifica ("em nome da produtividade" veio pra mais perto de "ativo", em vez de só no fim da frase). Intenção confirmada por José: é paródia deliberada e levemente ácida do jargão de auto-otimização/coach ("você é seu maior ativo") aplicada ao sofrimento — mantida, não é erro. Cortado "desprovido de" por "sem", frase mais enxuta.

**Avaliado e mantido de propósito (não são erros, são decisões):**
- "escuta sem pressa" (pilar 2) — é clichê de terapia por definição do próprio guia de voz, mas José decidiu manter: é pontual, localizada, e o resto do texto já diferencia a marca o suficiente para conter o estranhamento. Ousadia da Átris é conceitual, não de forma — rebuscar a frase pra fugir do clichê violaria essa régua.
- "cuidado administrado" (pilar 1) — inicialmente lido como possível jargão de "managed care"; José corrigiu: é particípio verbal comum em português clínico ("cuidado que é administrado"), não o termo de mercado de saúde. Objeção não se sustentava.
- "à mão" no pilar 4 (João-de-Barro) — não viola o guardrail de repetição do motivo definido em `redesign-minimalismo-bold.md` ("feita à mão" na home e "que fazem" em médicos devem ser os únicos ecos). O manifesto é a origem do motivo, não mais um eco — a nota do guardrail ainda não registra essa relação de origem, considerar atualizar.
- "recusamos" aparece duas vezes (parágrafo 1 e pilar 3) — lido como refrão proposital, não repetição acidental. Uma terceira ocorrência existia na versão anterior do fechamento do parágrafo 2 ("é a recusa em...") e foi removida ao reescrever essa frase, evitando que o refrão virasse cacoete.

**Levantado e ainda em aberto (não resolvido nesta rodada):**
- Repetição "fornece um norte / fornece a ética" na mesma frase (pilar 1) — redundância estilística, não gramatical.
- Frase "essa experiência é uma parte importante de quem somos e direciona a forma como oferecemos nosso trabalho" (pilar 1) — soa como filler redundante com a frase anterior.
