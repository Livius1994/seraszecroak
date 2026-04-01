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
      q: "Como funciona o início do processo da CNH?",
      a: "O início normalmente envolve cadastro, apresentação de documentos, análise inicial e encaminhamento para as etapas exigidas, como exames, aulas teóricas e aulas práticas, conforme as regras aplicáveis.",
    },
    {
      q: "Quem pode começar o processo da CNH?",
      a: "De forma geral, quem estiver dentro da idade mínima exigida e com a documentação necessária pode dar início ao processo para obter a primeira habilitação.",
    },
    {
      q: "Preciso saber dirigir antes de começar?",
      a: "Não. O processo da CNH existe justamente para preparar o aluno desde a base, com orientação teórica, prática e acompanhamento em cada fase.",
    },
    {
      q: "Quais informações preciso preencher no formulário?",
      a: "Você pode informar nome, e-mail, telefone, data de nascimento, cidade e uma mensagem simples dizendo que deseja iniciar sua CNH.",
    },
    {
      q: "Depois de preencher, qual é o próximo passo?",
      a: "Após o envio, você segue para o contato inicial e recebe a orientação para entender melhor as próximas etapas necessárias para ingressar no processo.",
    },
  ];

  const benefits = [
    {
      title: "Entenda por onde começar",
      desc: "Muitas pessoas querem tirar a CNH, mas ficam perdidas no início. Aqui você encontra uma entrada mais clara para começar com mais organização.",
    },
    {
      title: "Saiba quais dados preparar",
      desc: "Antes de iniciar, é importante ter as informações básicas organizadas para facilitar o andamento do processo.",
    },
    {
      title: "Tenha visão das etapas",
      desc: "Cadastro, orientações iniciais, etapas obrigatórias e progressão até a habilitação: tudo começa com uma entrada bem feita.",
    },
    {
      title: "Começo mais seguro",
      desc: "Ter clareza desde o início evita dúvidas, reduz insegurança e ajuda você a seguir com mais confiança.",
    },
    {
      title: "Mais objetividade",
      desc: "Ao preencher corretamente seus dados, você já dá um primeiro passo importante para iniciar seu caminho rumo à CNH.",
    },
    {
      title: "Foco em primeira habilitação",
      desc: "A proposta desta página é ajudar quem deseja começar sua jornada para conquistar a carteira de motorista.",
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Preencha seus dados",
      desc: "Informe nome, e-mail, telefone, data de nascimento, cidade e uma mensagem simples para registrar seu interesse em iniciar a CNH.",
    },
    {
      n: 2,
      title: "Receba a orientação inicial",
      desc: "Depois do envio, você entra na etapa inicial de contato para entender melhor como funciona o começo do processo.",
    },
    {
      n: 3,
      title: "Avance para as próximas fases",
      desc: "Com a orientação recebida, você consegue seguir com mais clareza para as etapas necessárias da sua habilitação.",
    },
  ];

  const infoCards = [
    {
      title: "Primeira habilitação",
      text: "Se você quer conquistar sua primeira CNH, o ideal é começar entendendo melhor a entrada no processo e organizando suas informações desde o início.",
    },
    {
      title: "Mais clareza no começo",
      text: "O início costuma gerar muitas dúvidas. Ter uma estrutura mais direta ajuda a entender melhor o caminho até a habilitação.",
    },
    {
      title: "Ingresso no processo",
      text: "O formulário funciona como uma etapa inicial para quem deseja começar e ter um direcionamento mais claro sobre a CNH.",
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

  const CardIcon = ({ type = "doc" }) => {
    if (type === "doc") {
      return (
        <span className="icon-shell" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="icon-svg">
            <path d="M8 3.75h6.2L19.25 8.8V18A2.25 2.25 0 0 1 17 20.25H8A2.25 2.25 0 0 1 5.75 18V6A2.25 2.25 0 0 1 8 3.75Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M14 3.75V8.25H18.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8.75 12H16.25M8.75 15.25H13.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          </svg>
        </span>
      );
    }

    if (type === "shield") {
      return (
        <span className="icon-shell" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="icon-svg">
            <path d="M12 3.75C13.9 5.1 16.05 5.8 18.25 5.8V10.4C18.25 14.55 15.75 18.3 12 20.25C8.25 18.3 5.75 14.55 5.75 10.4V5.8C7.95 5.8 10.1 5.1 12 3.75Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M9.4 12.1L11.15 13.85L14.8 10.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        </span>
      );
    }

    if (type === "route") {
      return (
        <span className="icon-shell" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="icon-svg">
            <path d="M6.25 18.25C7.49264 18.25 8.5 17.2426 8.5 16C8.5 14.7574 7.49264 13.75 6.25 13.75C5.00736 13.75 4 14.7574 4 16C4 17.2426 5.00736 18.25 6.25 18.25Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M17.75 10.25C18.9926 10.25 20 9.24264 20 8C20 6.75736 18.9926 5.75 17.75 5.75C16.5074 5.75 15.5 6.75736 15.5 8C15.5 9.24264 16.5074 10.25 17.75 10.25Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8.1 15.2C12.7 15.2 11 8.8 15.45 8.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          </svg>
        </span>
      );
    }

    return (
      <span className="icon-shell" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="icon-svg">
          <path d="M12 4.25L19.25 8V16L12 19.75L4.75 16V8L12 4.25Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 12L11.1 14.1L15.25 9.95" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </svg>
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-premium text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
        <title>Ingresso CNH 2026 — Comece seu processo com mais clareza</title>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="cnh-mark">
              <span>CNH</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Ingresso CNH</p>
              <p className="text-xs text-slate-400">Primeira habilitação</p>
            </div>
          </div>

          <button onClick={() => setFormOpen(true)} className="btn-primary">
            Garantir acesso
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-16 md:grid-cols-[1.08fr_.92fr] md:items-center">
          <div className="fade-up">
            <span className="badge-premium">
              Inicie sua jornada para tirar a carteira de motorista
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl md:leading-[1.02]">
              Comece sua <span className="text-gradient">CNH</span> com mais clareza, organização e segurança
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Tirar a primeira habilitação é um passo importante. Para muitas pessoas, a maior dificuldade não está nem em começar, mas em entender direito como funciona o início do processo, quais informações preparar e como dar o primeiro passo da forma correta.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
              Esta página foi organizada para ajudar quem deseja ingressar na CNH com mais objetividade. Aqui você encontra uma entrada mais clara, entende melhor a lógica inicial do processo e pode preencher seus dados para seguir rumo às próximas etapas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => setFormOpen(true)} className="btn-primary btn-lg">
                Garantir acesso
              </button>

              <a href="#como-funciona" className="btn-secondary btn-lg">
                Ver como funciona
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="stat-chip">
                <span className="stat-dot" />
                Primeiro passo mais claro
              </div>
              <div className="stat-chip">
                <span className="stat-dot" />
                Entrada mais organizada
              </div>
              <div className="stat-chip">
                <span className="stat-dot" />
                Foco em habilitação
              </div>
            </div>
          </div>

          <div className="relative fade-up-delay">
            <div className="premium-panel floating-soft">
              <div className="premium-panel-inner">
                <div className="mock-card">
                  <div className="mock-top">
                    <span className="mock-pill" />
                    <span className="mock-pill" />
                    <span className="mock-pill active" />
                  </div>

                  <div className="cnh-card-visual">
                    <div className="cnh-card-head">
                      <span className="cnh-card-chip" />
                      <span className="cnh-card-title">CNH</span>
                    </div>

                    <div className="cnh-card-lines">
                      <span />
                      <span />
                      <span className="w-sm" />
                    </div>
                  </div>

                  <h2 className="mt-8 text-center text-2xl font-extrabold text-white">
                    Seu início para conquistar a carteira de motorista
                  </h2>

                  <p className="mt-4 text-center text-sm leading-7 text-slate-300">
                    O processo da CNH começa com organização, entendimento das etapas e envio das informações corretas. Quanto mais claro for o começo, melhor tende a ser a jornada até a habilitação.
                  </p>

                  <div className="mt-7 grid gap-3">
                    <div className="feature-row">
                      <CardIcon type="doc" />
                      <p>Informe seus dados iniciais para registrar seu interesse em começar a CNH.</p>
                    </div>
                    <div className="feature-row">
                      <CardIcon type="route" />
                      <p>Entenda melhor a entrada no processo e a lógica das primeiras etapas.</p>
                    </div>
                    <div className="feature-row">
                      <CardIcon type="shield" />
                      <p>Avance com mais segurança rumo à sua primeira habilitação.</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setFormOpen(true)}
                    className="btn-primary mt-7 w-full"
                  >
                    Garantir acesso agora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-5 md:grid-cols-3">
          {infoCards.map((item, i) => (
            <div key={i} className="glass-card fade-up" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="mb-4">
                <CardIcon type={i === 0 ? "doc" : i === 1 ? "route" : "shield"} />
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <span className="badge-premium">
            O começo certo faz diferença no processo
          </span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Entender melhor a CNH desde o início ajuda você a avançar com mais confiança
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Quem deseja tirar a carteira de motorista normalmente quer rapidez, clareza e menos confusão. Por isso, o mais importante no começo é ter uma visão organizada do processo, saber quais dados preparar e entender que a jornada para a habilitação acontece por etapas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="premium-card group fade-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="icon-box">
                <CardIcon type={i % 3 === 0 ? "doc" : i % 3 === 1 ? "route" : "shield"} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="showcase-strip">
          <div className="showcase-item">Cadastro inicial</div>
          <div className="showcase-item">Etapas da habilitação</div>
          <div className="showcase-item">Primeira CNH</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[.95fr_1.05fr] md:items-center">
          <div className="fade-up">
            <span className="badge-premium">
              O início da CNH exige atenção e direção certa
            </span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Dar entrada da forma certa pode deixar sua caminhada mais simples
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Quando a pessoa entende melhor como funciona o processo da CNH desde o começo, ela tende a seguir com mais segurança. Isso ajuda a reduzir dúvidas, melhora a preparação inicial e deixa mais claro o que precisa ser feito para avançar rumo à carteira de motorista.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              A primeira habilitação representa liberdade, mobilidade e novas possibilidades. Por isso, começar com uma estrutura mais organizada e com as informações corretas é um passo importante para quem quer seguir com mais firmeza.
            </p>

            <button
              onClick={() => setFormOpen(true)}
              className="btn-primary btn-lg mt-8"
            >
              Garantir acesso
            </button>
          </div>

          <div className="grid gap-5">
            <div className="glass-feature fade-up">
              <div className="mb-4">
                <CardIcon type="doc" />
              </div>
              <h3 className="text-lg font-bold text-white">Organize seus dados</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Ter seus dados iniciais bem preenchidos ajuda a começar com mais objetividade.
              </p>
            </div>
            <div className="glass-feature fade-up" style={{ animationDelay: "120ms" }}>
              <div className="mb-4">
                <CardIcon type="route" />
              </div>
              <h3 className="text-lg font-bold text-white">Entenda o caminho</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                O processo da CNH acontece por fases, e entender isso logo no início faz diferença.
              </p>
            </div>
            <div className="glass-feature fade-up" style={{ animationDelay: "220ms" }}>
              <div className="mb-4">
                <CardIcon type="shield" />
              </div>
              <h3 className="text-lg font-bold text-white">Comece com mais segurança</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Um começo bem direcionado ajuda você a seguir com mais clareza rumo à habilitação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <span className="badge-premium">
            Etapas iniciais
          </span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Como funciona o ingresso nesta etapa da CNH
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            O objetivo é simples: registrar seu interesse, organizar suas informações iniciais e facilitar seu avanço para as próximas fases da primeira habilitação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={s.n} className="step-card fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="step-number">{s.n}</div>
              <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="cta-shell fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-light">
              Sua primeira habilitação começa com um bom primeiro passo
            </span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Quem quer tirar a CNH precisa começar com clareza e direção
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Preencher seus dados e iniciar corretamente o contato é uma forma prática de dar entrada no processo com mais organização. O começo importa, e uma entrada mais objetiva pode facilitar sua caminhada até a carteira de motorista.
            </p>

            <button
              onClick={() => setFormOpen(true)}
              className="btn-primary btn-lg mt-8"
            >
              Garantir acesso agora
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <span className="badge-premium">
            Perguntas frequentes
          </span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Tire suas dúvidas sobre o início da CNH
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,.28)] backdrop-blur-xl">
          {faqs.map((f, i) => (
            <details key={i} className="faq-item group" open={i === 0}>
              <summary className="faq-summary">
                {f.q}
                <span className="faq-arrow">▼</span>
              </summary>
              <p className="faq-answer">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="footer-cta fade-up">
          <div className="cnh-card-visual cnh-card-visual-small">
            <div className="cnh-card-head">
              <span className="cnh-card-chip" />
              <span className="cnh-card-title">CNH</span>
            </div>

            <div className="cnh-card-lines">
              <span />
              <span />
              <span className="w-sm" />
            </div>
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-black text-white md:text-5xl">
            Pronto para começar sua jornada rumo à CNH?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Preencha o formulário e registre seu interesse para iniciar sua primeira habilitação com mais clareza e organização.
          </p>

          <button
            onClick={() => setFormOpen(true)}
            className="btn-primary btn-lg mt-8"
          >
            Garantir acesso
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="cnh-mark cnh-mark-sm">
              <span>CNH</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Ingresso CNH</p>
              <p className="text-xs text-slate-400">Primeira habilitação</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a href="/politica-de-privacidade" className="transition hover:text-white">
              Política de Privacidade
            </a>
            <a href="/termos-de-uso" className="transition hover:text-white">
              Termos de Uso
            </a>
            <a href="/contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </footer>

      {formOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/78 p-4 backdrop-blur-[6px]"
          onClick={() => setFormOpen(false)}
        >
          <div
            className="modal-shell w-full max-w-2xl rounded-[32px] border border-white/10 p-6 shadow-[0_30px_120px_rgba(0,0,0,.55)] md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="badge-premium">
                  Formulário de ingresso
                </span>
                <h3 className="mt-3 text-2xl font-black text-white">
                  Garanta seu acesso à entrada da CNH
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Preencha seus dados abaixo para iniciar seu contato e avançar para a próxima etapa.
                </p>
              </div>

              <button
                onClick={() => setFormOpen(false)}
                className="close-btn"
                aria-label="Fechar"
              >
                Fechar
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="input-label">Nome completo</label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="premium-input"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="input-label">E-mail</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="premium-input"
                      placeholder="seuemail@exemplo.com"
                    />
                  </div>

                  <div>
                    <label className="input-label">Telefone</label>
                    <input
                      type="tel"
                      required
                      value={form.telefone}
                      onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                      className="premium-input"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label className="input-label">Data de nascimento</label>
                    <input
                      type="date"
                      required
                      value={form.dataNascimento}
                      onChange={(e) => setForm({ ...form, dataNascimento: e.target.value })}
                      className="premium-input"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="input-label">Cidade</label>
                    <input
                      type="text"
                      required
                      value={form.cidade}
                      onChange={(e) => setForm({ ...form, cidade: e.target.value })}
                      className="premium-input"
                      placeholder="Digite sua cidade"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="input-label">Assunto</label>
                    <input
                      type="text"
                      value={form.assunto}
                      onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                      className="premium-input"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="input-label">Mensagem</label>
                    <textarea
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      className="premium-input"
                      placeholder="Escreva uma mensagem simples informando que deseja iniciar o processo da CNH."
                    />
                  </div>
                </div>

                {error && <p className="text-sm font-medium text-red-400">{error}</p>}

                <div className="grid gap-3 md:grid-cols-[1fr_auto]">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Enviando..." : "Garantir acesso"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormOpen(false)}
                    className="btn-secondary"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            ) : (
              <div className="success-box mt-6">
                <h4 className="text-lg font-bold text-white">Seu acesso foi solicitado com sucesso</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Recebemos seus dados iniciais. Agora é só aguardar o retorno para seguir com a próxima etapa do processo.
                </p>
                <button
                  onClick={() => setFormOpen(false)}
                  className="btn-primary mt-5"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        .bg-premium {
          background:
            radial-gradient(1200px 700px at 10% -10%, rgba(34, 211, 238, 0.12), transparent 55%),
            radial-gradient(900px 600px at 90% 10%, rgba(37, 99, 235, 0.16), transparent 50%),
            linear-gradient(180deg, #050816 0%, #0a1023 45%, #07111f 100%);
        }

        .hero-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          pointer-events: none;
          animation: drift 12s ease-in-out infinite alternate;
        }

        .hero-orb-1 {
          width: 420px;
          height: 420px;
          top: -120px;
          left: -80px;
          background: rgba(34, 211, 238, 0.14);
        }

        .hero-orb-2 {
          width: 480px;
          height: 480px;
          top: 10%;
          right: -120px;
          background: rgba(59, 130, 246, 0.14);
          animation-duration: 14s;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(180deg, rgba(0,0,0,.9), transparent 85%);
          pointer-events: none;
        }

        .text-gradient {
          background: linear-gradient(90deg, #67e8f9 0%, #60a5fa 50%, #22d3ee 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .badge-premium {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 999px;
          border: 1px solid rgba(103, 232, 249, 0.18);
          background: rgba(255, 255, 255, 0.06);
          color: #b6efff;
          padding: 0.45rem 0.9rem;
          font-size: 0.82rem;
          font-weight: 600;
          backdrop-filter: blur(14px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .badge-light {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255,255,255,0.12);
          color: #d9f7ff;
          padding: 0.45rem 0.95rem;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          padding: 0.9rem 1.4rem;
          font-weight: 700;
          color: #03111f;
          background: linear-gradient(135deg, #67e8f9 0%, #60a5fa 55%, #3b82f6 100%);
          box-shadow:
            0 12px 32px rgba(59, 130, 246, 0.28),
            inset 0 1px 0 rgba(255,255,255,0.45);
          transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          filter: brightness(1.03);
          box-shadow:
            0 18px 40px rgba(59, 130, 246, 0.32),
            inset 0 1px 0 rgba(255,255,255,0.5);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          padding: 0.9rem 1.4rem;
          font-weight: 700;
          color: #e5f5ff;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          backdrop-filter: blur(14px);
          transition: all .18s ease;
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(103, 232, 249, 0.22);
        }

        .btn-lg {
          padding: 1rem 1.65rem;
        }

        .stat-chip {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.05);
          padding: 0.95rem 1rem;
          color: #d5e4f3;
          backdrop-filter: blur(10px);
          transition: transform .18s ease, border-color .18s ease;
        }

        .stat-chip:hover {
          transform: translateY(-2px);
          border-color: rgba(103, 232, 249, 0.2);
        }

        .stat-dot {
          width: 0.55rem;
          height: 0.55rem;
          border-radius: 999px;
          background: linear-gradient(180deg, #67e8f9, #3b82f6);
          box-shadow: 0 0 14px rgba(34, 211, 238, 0.6);
        }

        .premium-panel {
          position: relative;
          border-radius: 2rem;
          padding: 1px;
          background: linear-gradient(180deg, rgba(103,232,249,0.28), rgba(255,255,255,0.03));
          box-shadow: 0 30px 90px rgba(0,0,0,0.28);
        }

        .premium-panel-inner {
          border-radius: calc(2rem - 1px);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03)),
            rgba(8, 16, 33, 0.88);
          backdrop-filter: blur(18px);
          padding: 1.3rem;
        }

        .mock-card {
          border-radius: 1.8rem;
          border: 1px solid rgba(255,255,255,0.08);
          background:
            radial-gradient(circle at top, rgba(103,232,249,0.06), transparent 35%),
            rgba(255,255,255,0.03);
          padding: 1.6rem;
        }

        .mock-top {
          display: flex;
          gap: 0.5rem;
        }

        .mock-pill {
          width: 2.4rem;
          height: 0.45rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
        }

        .mock-pill.active {
          background: linear-gradient(90deg, #67e8f9, #3b82f6);
          box-shadow: 0 0 14px rgba(59, 130, 246, 0.4);
        }

        .cnh-card-visual {
          margin: 2rem auto 0;
          width: 100%;
          max-width: 290px;
          border-radius: 24px;
          padding: 1.2rem;
          border: 1px solid rgba(103, 232, 249, 0.18);
          background:
            linear-gradient(135deg, rgba(103,232,249,0.12), rgba(59,130,246,0.08)),
            rgba(255,255,255,0.04);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 14px 36px rgba(0,0,0,0.18);
        }

        .cnh-card-visual-small {
          max-width: 210px;
          margin-top: 0;
        }

        .cnh-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cnh-card-chip {
          width: 42px;
          height: 28px;
          border-radius: 10px;
          background: linear-gradient(135deg, #67e8f9, #3b82f6);
          box-shadow: 0 8px 20px rgba(59,130,246,0.25);
        }

        .cnh-card-title {
          font-size: 1rem;
          font-weight: 900;
          letter-spacing: 0.26em;
          color: #baf6ff;
        }

        .cnh-card-lines {
          margin-top: 1rem;
          display: grid;
          gap: 0.7rem;
        }

        .cnh-card-lines span {
          display: block;
          height: 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
        }

        .cnh-card-lines .w-sm {
          width: 58%;
        }

        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.04);
          padding: 0.9rem 1rem;
          color: #d6e5f2;
          transition: transform .18s ease, border-color .18s ease;
        }

        .feature-row:hover {
          transform: translateY(-2px);
          border-color: rgba(103, 232, 249, 0.16);
        }

        .glass-card {
          border-radius: 1.6rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1.5rem;
          box-shadow: 0 14px 34px rgba(0,0,0,0.18);
          backdrop-filter: blur(14px);
          transition: transform .18s ease, border-color .18s ease;
        }

        .glass-card:hover {
          transform: translateY(-3px);
          border-color: rgba(103,232,249,0.16);
        }

        .premium-card {
          border-radius: 1.7rem;
          border: 1px solid rgba(255,255,255,0.08);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
          padding: 1.7rem;
          box-shadow: 0 18px 44px rgba(0,0,0,0.18);
          backdrop-filter: blur(16px);
          transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease;
        }

        .premium-card:hover {
          transform: translateY(-3px);
          border-color: rgba(103, 232, 249, 0.18);
          box-shadow: 0 24px 52px rgba(0,0,0,0.24);
        }

        .icon-box {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 3.25rem;
          height: 3.25rem;
        }

        .icon-shell {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 3.1rem;
          height: 3.1rem;
          border-radius: 1rem;
          border: 1px solid rgba(103,232,249,0.16);
          background: linear-gradient(180deg, rgba(34,211,238,0.12), rgba(59,130,246,0.08));
          color: #8ce8ff;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
        }

        .icon-svg {
          width: 1.3rem;
          height: 1.3rem;
          display: block;
        }

        .showcase-strip {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .showcase-item {
          border-radius: 1.3rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1rem 1.15rem;
          text-align: center;
          color: #dbe9f5;
          font-weight: 600;
          backdrop-filter: blur(12px);
          transition: transform .18s ease, border-color .18s ease;
        }

        .showcase-item:hover {
          transform: translateY(-2px);
          border-color: rgba(103,232,249,0.18);
        }

        .glass-feature {
          border-radius: 1.6rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1.45rem;
          box-shadow: 0 16px 42px rgba(0,0,0,0.18);
          backdrop-filter: blur(12px);
          transition: transform .18s ease, border-color .18s ease;
        }

        .glass-feature:hover {
          transform: translateY(-3px);
          border-color: rgba(103,232,249,0.16);
        }

        .step-card {
          border-radius: 1.7rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1.7rem;
          box-shadow: 0 16px 46px rgba(0,0,0,0.18);
          backdrop-filter: blur(14px);
          transition: transform .18s ease, border-color .18s ease;
        }

        .step-card:hover {
          transform: translateY(-3px);
          border-color: rgba(103,232,249,0.18);
        }

        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3rem;
          height: 3rem;
          border-radius: 1rem;
          background: linear-gradient(135deg, #67e8f9 0%, #3b82f6 100%);
          color: #04121e;
          font-weight: 900;
          box-shadow: 0 12px 24px rgba(59,130,246,0.24);
        }

        .cta-shell {
          border-radius: 2.2rem;
          border: 1px solid rgba(103,232,249,0.14);
          background:
            radial-gradient(circle at top, rgba(34,211,238,0.10), transparent 35%),
            linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
          padding: 3rem 1.5rem;
          box-shadow: 0 28px 90px rgba(0,0,0,0.24);
          backdrop-filter: blur(18px);
        }

        .faq-item {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 1.4rem 1.6rem;
        }

        .faq-item:first-child {
          border-top: 0;
        }

        .faq-summary {
          display: flex;
          cursor: pointer;
          list-style: none;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          color: white;
          font-weight: 800;
        }

        .faq-summary::-webkit-details-marker {
          display: none;
        }

        .faq-arrow {
          color: #8ce8ff;
          font-size: 0.8rem;
          transition: transform .18s ease;
        }

        details[open] .faq-arrow {
          transform: rotate(180deg);
        }

        .faq-answer {
          margin-top: 1rem;
          color: #c8d6e5;
          font-size: 0.95rem;
          line-height: 1.9;
        }

        .footer-cta {
          border-radius: 2.2rem;
          border: 1px solid rgba(255,255,255,0.08);
          background:
            radial-gradient(circle at top, rgba(34,211,238,0.10), transparent 35%),
            linear-gradient(135deg, rgba(59,130,246,0.16), rgba(255,255,255,0.03));
          padding: 4rem 1.5rem;
          text-align: center;
          box-shadow: 0 28px 90px rgba(0,0,0,0.28);
          backdrop-filter: blur(16px);
        }

        .modal-shell {
          background:
            linear-gradient(180deg, rgba(10,16,35,0.96), rgba(6,11,24,0.97));
          backdrop-filter: blur(18px);
          animation: modalIn .22s ease-out;
        }

        .close-btn {
          border-radius: 0.9rem;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          padding: 0.7rem 0.9rem;
          color: #dbe7f2;
          font-size: 0.9rem;
          font-weight: 600;
          transition: background .18s ease;
        }

        .close-btn:hover {
          background: rgba(255,255,255,0.08);
        }

        .input-label {
          display: block;
          font-size: 0.92rem;
          font-weight: 700;
          color: #e8f4ff;
        }

        .premium-input {
          width: 100%;
          margin-top: 0.55rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.05);
          color: white;
          padding: 0.95rem 1rem;
          outline: none;
          transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
        }

        .premium-input::placeholder {
          color: #8fa4b8;
        }

        .premium-input:focus {
          border-color: rgba(103,232,249,0.34);
          background: rgba(255,255,255,0.07);
          box-shadow: 0 0 0 4px rgba(34,211,238,0.10);
        }

        .success-box {
          border-radius: 1.6rem;
          border: 1px solid rgba(34,197,94,0.16);
          background: linear-gradient(180deg, rgba(34,197,94,0.08), rgba(255,255,255,0.03));
          padding: 1.5rem;
        }

        .cnh-mark {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            linear-gradient(180deg, rgba(103,232,249,0.16) 0%, rgba(59,130,246,0.10) 100%);
          border: 1px solid rgba(103,232,249,0.18);
          box-shadow:
            0 12px 28px rgba(34,211,238,0.12),
            inset 0 1px 0 rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
        }

        .cnh-mark span {
          font-size: 0.95rem;
          font-weight: 900;
          letter-spacing: 0.18em;
          color: #baf6ff;
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

        .fade-up {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp .7s ease forwards;
        }

        .fade-up-delay {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp .8s ease forwards;
          animation-delay: 120ms;
        }

        .floating-soft {
          animation: floatingSoft 6s ease-in-out infinite;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatingSoft {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes drift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(12px, -10px, 0) scale(1.05);
          }
        }

        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (max-width: 768px) {
          .showcase-strip {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #050816;
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