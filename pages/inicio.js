import { useEffect, useState } from "react";

export default function SalesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    dataNascimento: "",
    cidade: "",
    assunto: "Quero iniciar minha CNH",
    mensagem: "",
  });

  const heroSlides = [
    {
      badge: "Primeira habilitação",
      title: "Comece sua CNH com mais clareza, organização e direção",
      text: "Tirar a carteira de motorista é um objetivo importante para quem quer mais liberdade, mobilidade e novas oportunidades. O problema é que muita gente quer começar, mas trava logo no início por não saber como funciona a entrada no processo.",
      subtext:
        "Aqui a proposta é ajudar você a entender melhor esse começo, organizar suas informações e dar um primeiro passo mais objetivo rumo à sua primeira habilitação.",
      cta: "Garantir acesso agora",
      points: [
        "Entenda melhor como funciona o início da CNH.",
        "Organize seus dados para começar com mais segurança.",
        "Dê um primeiro passo real rumo à carteira de motorista.",
      ],
    },
    {
      badge: "Dê o primeiro passo",
      title: "Saiba como iniciar sua CNH sem ficar perdido nas primeiras etapas",
      text: "Muitas pessoas passam meses adiando a habilitação não porque não querem, mas porque não sabem exatamente por onde começar. Quando o início fica mais claro, o processo inteiro parece mais leve, mais possível e muito mais objetivo.",
      subtext:
        "A primeira CNH não precisa começar com confusão. Ela pode começar com entendimento, direção e um caminho muito mais claro para quem quer dirigir legalmente.",
      cta: "Quero começar minha CNH",
      points: [
        "Tenha mais clareza sobre o começo da habilitação.",
        "Entenda a lógica das primeiras etapas do processo.",
        "Comece sua jornada com mais confiança e menos dúvida.",
      ],
    },
    {
      badge: "Entrada mais organizada",
      title: "Transforme vontade em ação e comece sua caminhada para tirar a CNH",
      text: "A carteira de motorista pode representar independência, acesso a trabalho, praticidade no dia a dia e mais autonomia. Mas tudo isso começa com uma entrada bem feita e com a decisão de realmente iniciar o processo.",
      subtext:
        "Registrar seus dados e demonstrar interesse é uma forma prática de sair da intenção e partir para a ação com muito mais clareza.",
      cta: "Dar o primeiro passo",
      points: [
        "Saia da intenção e entre em movimento.",
        "Comece sua primeira habilitação com mais objetividade.",
        "Avance com foco no seu objetivo de dirigir legalmente.",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const faqs = [
    {
      q: "Como funciona o começo do processo da CNH?",
      a: "O início da CNH normalmente envolve cadastro, organização das informações básicas, preparação dos documentos e direcionamento para as etapas seguintes da primeira habilitação.",
    },
    {
      q: "Quem pode iniciar a primeira habilitação?",
      a: "De forma geral, quem estiver dentro dos requisitos mínimos exigidos e com a documentação necessária pode começar o processo para tirar a primeira CNH.",
    },
    {
      q: "Preciso já saber dirigir para começar?",
      a: "Não. A primeira habilitação existe justamente para quem está começando do zero e precisa passar pelas etapas necessárias para aprender e evoluir ao longo do processo.",
    },
    {
      q: "Por que é importante começar com organização?",
      a: "Porque quando a pessoa entende melhor o início, reduz a insegurança, ganha mais clareza sobre o caminho e evita ficar perdida nas primeiras etapas.",
    },
    {
      q: "O que acontece depois de preencher o formulário?",
      a: "Depois do envio, seu interesse fica registrado e você dá um primeiro passo importante para iniciar sua entrada rumo à CNH com mais clareza.",
    },
  ];

  const benefits = [
    {
      title: "Entenda por onde começar",
      desc: "Um dos maiores bloqueios de quem quer tirar a CNH está justamente no começo. Quando a entrada fica mais clara, tudo passa a parecer mais possível.",
    },
    {
      title: "Tenha mais noção das etapas",
      desc: "A habilitação não é uma coisa só. Ela acontece por fases, e compreender isso desde cedo ajuda você a seguir com mais tranquilidade.",
    },
    {
      title: "Comece com mais segurança",
      desc: "Saber que você está dando o primeiro passo da forma certa traz mais confiança para continuar sua caminhada até a carteira de motorista.",
    },
    {
      title: "Organize suas informações",
      desc: "Ter seus dados básicos bem preenchidos ajuda a transformar vontade em ação e deixa seu começo muito mais objetivo.",
    },
    {
      title: "Evite ficar travado no início",
      desc: "Muita gente quer tirar a carteira, mas fica meses sem agir. Um ponto de partida mais claro ajuda você a sair da dúvida.",
    },
    {
      title: "Foqué no seu objetivo final",
      desc: "A meta é simples: ajudar você a começar sua jornada para conquistar a primeira CNH com muito mais clareza e direção.",
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Preencha seus dados",
      desc: "Informe suas informações básicas para registrar seu interesse e iniciar sua entrada rumo à primeira habilitação.",
    },
    {
      n: 2,
      title: "Entenda melhor o começo",
      desc: "Depois desse primeiro passo, fica mais fácil visualizar como funciona a entrada no processo da CNH e suas etapas iniciais.",
    },
    {
      n: 3,
      title: "Siga rumo à sua habilitação",
      desc: "Com um início mais claro e mais organizado, você avança com muito mais confiança até a carteira de motorista.",
    },
  ];

  const infoCards = [
    {
      title: "Para quem quer tirar a primeira CNH",
      text: "Se você quer começar sua primeira habilitação, esta página foi pensada para ajudar você a entender melhor esse início e dar o primeiro passo com mais direção.",
    },
    {
      title: "Para quem ainda está cheio de dúvidas",
      text: "Muita gente quer dirigir legalmente, mas trava porque não entende como entrar no processo. Aqui o objetivo é deixar esse começo mais claro.",
    },
    {
      title: "Para quem quer sair da intenção",
      text: "A diferença entre querer tirar a carteira e realmente começar está em agir. Registrar seu interesse é uma forma prática de iniciar.",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

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

  const slide = heroSlides[activeSlide];

  return (
    <main className="min-h-screen bg-premium text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <title>Ingresso CNH 2026 — Comece sua habilitação</title>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
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

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 md:pb-20 md:pt-14">
          <div className="hero-layout">
            <div className="hero-copy fade-up">
              <span className="badge-premium">{slide.badge}</span>

              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl xl:text-6xl xl:leading-[1.02] transition-all duration-500">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg transition-all duration-500">
                {slide.text}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 transition-all duration-500">
                {slide.subtext}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => setFormOpen(true)} className="btn-primary btn-lg">
                  {slide.cta}
                </button>

                <a href="#como-funciona" className="btn-secondary btn-lg">
                  Ver como funciona
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button type="button" className="nav-btn" onClick={prevSlide} aria-label="Slide anterior">
                  ‹
                </button>

                <div className="flex items-center gap-3">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Ir para slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className={`hero-dot ${activeSlide === index ? "active" : ""}`}
                    />
                  ))}
                </div>

                <button type="button" className="nav-btn" onClick={nextSlide} aria-label="Próximo slide">
                  ›
                </button>
              </div>

              <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="stat-chip">
                  <span className="stat-dot" />
                  Início mais claro
                </div>
                <div className="stat-chip">
                  <span className="stat-dot" />
                  Mais direção
                </div>
                <div className="stat-chip">
                  <span className="stat-dot" />
                  Foco na CNH
                </div>
              </div>
            </div>

            <div className="hero-visual fade-up-delay">
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

                    <h2 className="mt-7 text-center text-xl font-extrabold text-white sm:text-2xl text-balance">
                      {slide.title}
                    </h2>

                    <p className="mt-4 text-center text-sm leading-7 text-slate-300 sm:text-[15px] text-pretty">
                      {slide.text}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {slide.points.map((point, idx) => (
                        <div className="feature-row" key={idx}>
                          <div className="feature-bullet" />
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setFormOpen(true)}
                      className="btn-primary mt-7 w-full"
                    >
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {infoCards.map((item, i) => (
            <div key={i} className="glass-card fade-up" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="card-tag" />
              <h3 className="mt-4 text-lg font-bold text-white text-balance">{item.title}</h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-300 text-pretty">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <span className="badge-premium">Começar bem muda sua jornada</span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Tirar a CNH fica muito mais simples quando você entende melhor o início do processo
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            A carteira de motorista não é apenas um documento. Para muita gente, ela representa independência, acesso a trabalho, mais autonomia no dia a dia e novas possibilidades de vida. Por isso, começar a CNH com clareza faz diferença: você reduz dúvidas, entende melhor o caminho e segue com muito mais segurança rumo à sua primeira habilitação.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="premium-card group fade-up"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="card-tag" />
              <h3 className="mt-5 text-xl font-bold text-white text-balance">{b.title}</h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-300 text-pretty">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
        <div className="showcase-strip">
          <div className="showcase-item">Primeira habilitação</div>
          <div className="showcase-item">Começo da CNH</div>
          <div className="showcase-item">Carteira de motorista</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <div className="fade-up">
            <span className="badge-premium">
              Sua carteira de motorista começa na decisão de iniciar
            </span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Quem quer tirar a CNH precisa sair da dúvida e dar um primeiro passo real
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Muitas pessoas querem dirigir legalmente, mas passam muito tempo sem agir porque não sabem como funciona a entrada no processo. Quando esse começo fica mais claro, a jornada deixa de parecer complicada e passa a parecer possível.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              É exatamente aí que um início mais organizado faz diferença: você entende melhor a lógica do processo, visualiza seu próximo passo e ganha mais confiança para continuar caminhando até a primeira habilitação.
            </p>

            <button
              onClick={() => setFormOpen(true)}
              className="btn-primary btn-lg mt-8"
            >
              Quero começar minha CNH
            </button>
          </div>

          <div className="grid gap-5">
            <div className="glass-feature fade-up">
              <div className="card-tag" />
              <h3 className="mt-4 text-lg font-bold text-white">Registre seu interesse</h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Preencher suas informações é uma forma prática de sair da intenção e realmente começar sua caminhada rumo à CNH.
              </p>
            </div>
            <div className="glass-feature fade-up" style={{ animationDelay: "120ms" }}>
              <div className="card-tag" />
              <h3 className="mt-4 text-lg font-bold text-white">Entenda o caminho</h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Quando você entende melhor as etapas iniciais, fica muito mais fácil enxergar a jornada até a carteira de motorista.
              </p>
            </div>
            <div className="glass-feature fade-up" style={{ animationDelay: "220ms" }}>
              <div className="card-tag" />
              <h3 className="mt-4 text-lg font-bold text-white">Comece com mais confiança</h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Um começo mais claro e mais objetivo reduz a insegurança e ajuda você a seguir com mais firmeza para tirar sua habilitação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <span className="badge-premium">Como funciona</span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            O começo da sua CNH pode ser mais simples, mais claro e muito mais bem direcionado
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            O objetivo aqui é ajudar você a sair da dúvida e entrar em movimento. Tudo foi organizado para deixar o início da primeira habilitação mais fácil de entender e mais natural de começar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={s.n} className="step-card fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="step-number">{s.n}</div>
              <h3 className="mt-5 text-lg font-bold text-white text-balance">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-8 text-slate-300 text-pretty">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="cta-shell fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-light">Dê o primeiro passo agora</span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Sua primeira CNH começa quando você decide parar de adiar e começar
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Quem quer conquistar a carteira de motorista precisa começar em algum momento. Este pode ser o seu ponto de partida: registrar seu interesse, organizar seus dados e iniciar sua jornada com muito mais direção e clareza.
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <span className="badge-premium">Perguntas frequentes</span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Tire suas dúvidas sobre como começar sua primeira habilitação
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

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6">
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
            Pronto para começar sua caminhada rumo à carteira de motorista?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Preencha o formulário e registre seu interesse para iniciar sua primeira habilitação com mais clareza, mais direção e mais segurança desde o começo.
          </p>

          <button
            onClick={() => setFormOpen(true)}
            className="btn-primary btn-lg mt-8"
          >
            Quero iniciar minha CNH
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
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
                <span className="badge-premium">Formulário de ingresso</span>
                <h3 className="mt-3 text-2xl font-black text-white">
                  Garanta seu acesso à entrada da CNH
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Preencha seus dados para registrar seu interesse e começar sua primeira habilitação.
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
                      placeholder="Escreva uma mensagem informando que deseja iniciar sua CNH."
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
                <h4 className="text-lg font-bold text-white">Seu interesse foi enviado com sucesso</h4>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Recebemos suas informações iniciais. Agora você já deu um primeiro passo importante para começar sua entrada rumo à CNH.
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

        .hero-layout {
          display: grid;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-layout {
            grid-template-columns: minmax(0, 1.05fr) minmax(420px, 520px);
            gap: 2.5rem;
          }
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

        .nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          color: #dff7ff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all .18s ease;
          font-size: 1.25rem;
          line-height: 1;
        }

        .nav-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(103,232,249,0.22);
        }

        .hero-dot {
          width: 11px;
          height: 11px;
          border-radius: 999px;
          background: rgba(255,255,255,0.22);
          border: 0;
          transition: transform .2s ease, background .2s ease, box-shadow .2s ease;
        }

        .hero-dot.active {
          background: #67e8f9;
          box-shadow: 0 0 18px rgba(103,232,249,.45);
          transform: scale(1.15);
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
          width: 100%;
          max-width: 520px;
          margin-inline: auto;
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
          padding: 1.1rem;
        }

        .mock-card {
          border-radius: 1.8rem;
          border: 1px solid rgba(255,255,255,0.08);
          background:
            radial-gradient(circle at top, rgba(103,232,249,0.06), transparent 35%),
            rgba(255,255,255,0.03);
          padding: 1.35rem;
        }

        @media (min-width: 768px) {
          .premium-panel-inner {
            padding: 1.3rem;
          }

          .mock-card {
            padding: 1.6rem;
          }
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
          margin: 1.6rem auto 0;
          width: 100%;
          max-width: 250px;
          border-radius: 22px;
          padding: 1rem;
          border: 1px solid rgba(103, 232, 249, 0.18);
          background:
            linear-gradient(135deg, rgba(103,232,249,0.12), rgba(59,130,246,0.08)),
            rgba(255,255,255,0.04);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 14px 36px rgba(0,0,0,0.18);
        }

        @media (min-width: 768px) {
          .cnh-card-visual {
            max-width: 290px;
            padding: 1.2rem;
          }
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
          width: 36px;
          height: 24px;
          border-radius: 9px;
          background: linear-gradient(135deg, #67e8f9, #3b82f6);
          box-shadow: 0 8px 20px rgba(59,130,246,0.25);
        }

        @media (min-width: 768px) {
          .cnh-card-chip {
            width: 42px;
            height: 28px;
          }
        }

        .cnh-card-title {
          font-size: 0.95rem;
          font-weight: 900;
          letter-spacing: 0.22em;
          color: #baf6ff;
        }

        .cnh-card-lines {
          margin-top: 1rem;
          display: grid;
          gap: 0.7rem;
        }

        .cnh-card-lines span {
          display: block;
          height: 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.12);
        }

        .cnh-card-lines .w-sm {
          width: 58%;
        }

        .feature-row {
          display: grid;
          grid-template-columns: 10px 1fr;
          align-items: start;
          gap: 0.85rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.04);
          padding: 1rem 1rem;
          color: #d6e5f2;
          transition: transform .18s ease, border-color .18s ease;
        }

        .feature-row:hover {
          transform: translateY(-2px);
          border-color: rgba(103, 232, 249, 0.16);
        }

        .feature-row p {
          font-size: 0.96rem;
          line-height: 1.85;
          margin: 0;
        }

        .feature-bullet {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          margin-top: 0.55rem;
          background: linear-gradient(180deg, #67e8f9, #3b82f6);
          box-shadow: 0 0 14px rgba(34,211,238,.45);
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

        .card-tag {
          width: 48px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(90deg, #67e8f9, #3b82f6);
          box-shadow: 0 0 16px rgba(103,232,249,.25);
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

        @media (max-width: 767px) {
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