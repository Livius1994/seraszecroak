import { useState } from "react";

export default function SalesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cidade: "",
    assunto: "Ingresso para CNH",
    mensagem: "",
  });

  const faqs = [
    {
      q: "Como funciona o ingresso para iniciar a CNH?",
      a: "Você preenche seu formulário com os dados iniciais e recebe as informações sobre as próximas etapas do processo, documentação necessária, organização do cadastro e instruções para dar entrada.",
    },
    {
      q: "Quem pode iniciar o processo da CNH?",
      a: "De forma geral, pessoas em idade permitida para habilitação e com documentação básica em dia podem iniciar o processo, seguindo as exigências do órgão responsável e da auto escola.",
    },
    {
      q: "Preciso já saber dirigir para começar?",
      a: "Não. O início do processo serve justamente para organizar sua entrada, entender as etapas e se preparar corretamente para as fases teóricas e práticas.",
    },
    {
      q: "Depois de preencher, o que acontece?",
      a: "Após o envio, seus dados entram para análise inicial e você recebe o direcionamento com os próximos passos para continuar o ingresso no processo da CNH.",
    },
    {
      q: "Essa página é para quem quer começar do zero?",
      a: "Sim. Ela foi organizada especialmente para quem quer entender melhor como funciona a entrada na CNH e deseja iniciar de forma mais clara e organizada.",
    },
  ];

  const benefits = [
    {
      title: "Entrada mais organizada",
      desc: "Saiba exatamente quais dados reunir, quais etapas vêm primeiro e como se preparar para iniciar seu processo sem confusão.",
    },
    {
      title: "Explicação clara do processo",
      desc: "Entenda em linguagem simples como funciona o começo da CNH, desde o cadastro até a sequência das próximas fases.",
    },
    {
      title: "Menos dúvidas no início",
      desc: "Uma página feita para orientar quem quer ingressar na CNH e não sabe por onde começar.",
    },
    {
      title: "Formulário rápido",
      desc: "Envie seus dados de forma simples e entre no fluxo inicial para receber as orientações necessárias.",
    },
    {
      title: "Mais segurança para começar",
      desc: "Em vez de ficar perdido, você já inicia com uma estrutura organizada e uma visão completa do que fazer.",
    },
    {
      title: "Foco total em ingresso",
      desc: "Todo o conteúdo desta página foi pensado para o início da jornada de quem quer conquistar a habilitação.",
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Preencha seus dados",
      desc: "Informe nome, e-mail, telefone, data de nascimento, cidade e uma mensagem simples para iniciar seu cadastro de interesse.",
    },
    {
      n: 2,
      title: "Receba a orientação inicial",
      desc: "Após o envio, você entra no fluxo de contato inicial para entender melhor como funciona o ingresso no processo da CNH.",
    },
    {
      n: 3,
      title: "Siga as próximas etapas",
      desc: "Com as orientações iniciais em mãos, você consegue avançar com mais clareza e organização no caminho da sua habilitação.",
    },
  ];

  const infoCards = [
    {
      title: "Para quem é esta página?",
      text: "Esta página é ideal para quem deseja começar o processo da CNH, mas ainda está com dúvidas sobre como funciona a entrada, quais dados precisa separar e quais são os primeiros passos.",
    },
    {
      title: "O que você encontra aqui?",
      text: "Você encontra uma explicação objetiva sobre o ingresso na CNH, uma estrutura mais organizada das etapas iniciais e um formulário para dar início ao seu contato.",
    },
    {
      title: "Por que preencher o formulário?",
      text: "Porque assim você formaliza seu interesse e já entra com as informações básicas necessárias para ser direcionado ao início do processo.",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/form.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Falha ao enviar. Tente novamente.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Ocorreu um erro. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_48%,#ffffff_100%)] text-slate-800">
      <header className="sticky top-0 z-30 border-b border-blue-100/80 bg-white/85 backdrop-blur">
        <title>Ingresso CNH 2026 — Comece seu processo com mais clareza</title>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="cnh-mark">
              <span>CNH</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Ingresso CNH</p>
              <p className="text-xs text-slate-500">Página de entrada e orientação inicial</p>
            </div>
          </div>

          <button
            onClick={() => setFormOpen(true)}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-[1px] hover:bg-blue-700"
          >
            Garantir acesso
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.16),transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_.85fr] md:items-center">
          <div>
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              Inicie sua jornada para a habilitação
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Entre no processo da sua <span className="text-blue-600">CNH</span> com uma página mais clara, organizada e feita para quem quer começar do jeito certo
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Se você quer ingressar na CNH, mas ainda está perdido sobre por onde começar, esta página foi montada para deixar tudo mais simples. Aqui você entende a proposta de entrada, visualiza as etapas iniciais e pode preencher seu formulário para dar o primeiro passo com mais segurança.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Em vez de ficar procurando informações soltas, você encontra um conteúdo centralizado, explicativo e focado em quem deseja iniciar o processo da habilitação. A proposta é facilitar sua entrada, organizar seus dados iniciais e tornar o caminho mais direto.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-[1px] hover:bg-blue-700"
              >
                Garantir acesso
              </button>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
              >
                Entender como funciona
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <div className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
                Início mais claro
              </div>
              <div className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
                Organização dos dados
              </div>
              <div className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
                Processo mais objetivo
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-blue-100 bg-white p-7 shadow-[0_24px_70px_rgba(24,39,75,0.10)]">
              <div className="rounded-[24px] border border-dashed border-blue-200 bg-[linear-gradient(180deg,#f7fbff_0%,#edf5ff_100%)] p-8">
                <div className="mx-auto flex h-28 w-44 items-center justify-center rounded-3xl border border-blue-200 bg-white shadow-sm">
                  <div className="flex flex-col items-center">
                    <div className="mb-2 text-3xl">🪪</div>
                    <span className="text-xl font-extrabold tracking-[0.18em] text-blue-700">CNH</span>
                  </div>
                </div>

                <h2 className="mt-7 text-2xl font-bold text-slate-900">
                  Página de ingresso para quem quer iniciar a CNH
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Sem imagens desnecessárias, sem poluição visual e com foco total no que realmente importa: explicar melhor o começo do processo e incentivar o envio do formulário para dar início ao acesso.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <span className="mt-1 text-blue-600">✔</span>
                    <p className="text-sm text-slate-600">Botões de ação distribuídos pela página para facilitar a conversão.</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <span className="mt-1 text-blue-600">✔</span>
                    <p className="text-sm text-slate-600">Mais conteúdo explicativo para deixar a proposta mais forte e profissional.</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                    <span className="mt-1 text-blue-600">✔</span>
                    <p className="text-sm text-slate-600">Formulário visualmente melhorado com campos mais completos.</p>
                  </div>
                </div>

                <button
                  onClick={() => setFormOpen(true)}
                  className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-[1px] hover:bg-blue-700"
                >
                  Garantir acesso agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-5 md:grid-cols-3">
          {infoCards.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,.05)]"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Estrutura mais bonita e organizada
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Uma página pensada para explicar melhor o ingresso na CNH
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            O objetivo aqui não é apenas ter um formulário. É construir uma página que passe mais clareza, mais confiança e mais organização para quem está buscando iniciar o processo da habilitação. Por isso, a estrutura foi desenhada com seções explicativas, destaques visuais limpos, textos mais completos e chamadas de ação bem distribuídas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.05)] transition hover:-translate-y-1 hover:border-blue-200"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-blue-700">
                {i === 0 ? "🧭" : i === 1 ? "📘" : i === 2 ? "💬" : i === 3 ? "📝" : i === 4 ? "🔒" : "🚗"}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[.95fr_1.05fr] md:items-center">
            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                Mais explicação para aumentar confiança
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
                Entenda por que esta página foi feita para converter melhor
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Uma página bonita sem organização não segura a atenção. Uma página organizada, com visual limpo e texto certo, consegue explicar melhor a proposta e aumenta a chance de a pessoa realmente preencher os dados. Por isso, esta estrutura foi montada para parecer mais séria, mais atual e mais alinhada com uma página de ingresso.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                A escolha de remover fotos também ajuda a deixar a identidade visual mais limpa e profissional. No lugar disso, entra um símbolo visual simples e direto, com o ícone de identificação da CNH, reforçando imediatamente o tema da página sem distrair o usuário.
              </p>

              <button
                onClick={() => setFormOpen(true)}
                className="mt-8 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-[1px] hover:bg-blue-700"
              >
                Garantir acesso
              </button>
            </div>

            <div className="grid gap-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">Visual mais limpo</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Menos excesso visual, mais foco na proposta central da página e no envio do formulário.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">Mais blocos de explicação</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  O visitante entende com mais facilidade o que está acessando, por que deve preencher e o que acontece depois.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-900">Chamadas de ação melhor distribuídas</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Em vez de um único botão isolado, a página convida o usuário a agir ao longo de toda a navegação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Etapas iniciais
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Como funciona o ingresso nesta página
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            O processo foi pensado para ser simples, direto e intuitivo. A ideia é que qualquer pessoa consiga entender rapidamente o que precisa fazer para demonstrar interesse em iniciar a CNH.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,.05)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/20">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-blue-700 shadow-sm">
              Ingresso com mais clareza
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
              Quem quer começar a CNH precisa de uma entrada simples e bem explicada
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Muitas pessoas desistem ou ficam travadas logo no início porque não entendem bem a ordem do processo. Quando a página organiza as informações e convida a pessoa a preencher um formulário objetivo, a entrada fica muito mais fácil.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-white bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,.06)]">
              <h3 className="text-xl font-bold text-slate-900">O que esta página resolve</h3>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                Ela resolve o problema da falta de clareza no início. Em vez de uma tela fraca, com pouco texto e pouco direcionamento, o visitante encontra uma estrutura mais robusta, com contexto, benefícios, explicações e um formulário completo para dar o primeiro passo.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                Isso melhora a experiência visual, transmite mais profissionalismo e tende a aumentar a confiança de quem quer seguir adiante.
              </p>
            </div>

            <div className="rounded-[28px] border border-white bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,.06)]">
              <h3 className="text-xl font-bold text-slate-900">Por que o formulário é importante</h3>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                O formulário não serve só para capturar dados. Ele funciona como a porta de entrada do processo. Ao preencher nome, e-mail, telefone, data de nascimento, cidade e mensagem, a pessoa já demonstra intenção real e facilita o próximo contato.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-600">
                Isso deixa a navegação mais funcional e transforma a página em uma verdadeira etapa de ingresso.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => setFormOpen(true)}
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-[1px] hover:bg-blue-700"
            >
              Garantir acesso agora
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-5xl">
            Tire suas dúvidas sobre o início da CNH
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl divide-y divide-slate-200 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,.05)]">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 md:p-7" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-bold text-slate-900">
                {f.q}
                <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 transition group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-sm leading-8 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#2563eb_0%,#1d4ed8_100%)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.20),transparent_30%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 text-center text-white">
          <div className="mx-auto flex h-20 w-28 items-center justify-center rounded-3xl border border-white/25 bg-white/10 backdrop-blur">
            <div className="flex flex-col items-center">
              <div className="text-2xl">🪪</div>
              <span className="text-sm font-extrabold tracking-[0.25em]">CNH</span>
            </div>
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-extrabold md:text-5xl">
            Está pronto para dar o primeiro passo e ingressar no processo da sua CNH?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-blue-100">
            Preencha o formulário e garanta seu acesso à etapa inicial. A página foi estruturada para facilitar sua entrada, organizar seus dados e deixar o começo da jornada muito mais claro.
          </p>

          <button
            onClick={() => setFormOpen(true)}
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-2xl transition hover:-translate-y-[1px]"
          >
            Garantir acesso
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="cnh-mark cnh-mark-sm">
              <span>CNH</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Ingresso CNH</p>
              <p className="text-xs text-slate-500">Página informativa de entrada</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-500">
            <a href="/politica-de-privacidade" className="transition hover:text-slate-700">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="transition hover:text-slate-700">
              Termos de Uso
            </a>
            <a href="/contato" className="transition hover:text-slate-700">
              Contato
            </a>
          </nav>
        </div>
      </footer>

      {formOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-[2px]"
          onClick={() => setFormOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-[30px] border border-white/60 bg-white p-6 shadow-[0_30px_100px_rgba(15,23,42,.35)] md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  Formulário de ingresso
                </span>
                <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
                  Garanta seu acesso à entrada da CNH
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Preencha seus dados abaixo para iniciar seu contato e avançar para a próxima etapa.
                </p>
              </div>

              <button
                onClick={() => setFormOpen(false)}
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                aria-label="Fechar"
              >
                Fechar
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Nome completo</label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700">E-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Telefone</label>
                    <input
                      type="tel"
                      required
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700">Data de nascimento</label>
                    <input
                      type="date"
                      required
                      value={form.dataNascimento}
                      onChange={(e) => setForm({ ...form, dataNascimento: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700">Cidade</label>
                    <input
                      type="text"
                      required
                      value={form.cidade}
                      onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="Digite sua cidade"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700">Assunto</label>
                    <input
                      type="text"
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700">Mensagem</label>
                    <textarea
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                      placeholder="Escreva uma mensagem simples informando que deseja iniciar o processo da CNH."
                    />
                  </div>
                </div>

                {error && <p className="text-sm font-medium text-red-600">{error}</p>}

                <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-[1px] hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Enviando..." : "Garantir acesso"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormOpen(false)}
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 rounded-3xl border border-green-100 bg-green-50 p-6">
                <h4 className="text-lg font-bold text-slate-900">Seu acesso foi solicitado com sucesso</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Recebemos seus dados iniciais. Agora é só aguardar o retorno para seguir com a próxima etapa do processo.
                </p>
                <button
                  onClick={() => setFormOpen(false)}
                  className="mt-5 inline-flex items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .cnh-mark {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 10px 24px rgba(37, 99, 235, 0.12);
        }

        .cnh-mark span {
          font-size: 0.95rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          color: #1d4ed8;
          transform: translateX(1px);
        }

        .cnh-mark-sm {
          width: 48px;
          height: 48px;
          border-radius: 15px;
        }

        .cnh-mark-sm span {
          font-size: 0.78rem;
        }
      `}</style>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #ffffff;
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}