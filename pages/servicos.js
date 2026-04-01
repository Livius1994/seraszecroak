import Head from "next/head";
import { useState } from "react";

export default function Servicos() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "Quero orientação administrativa",
    mensagem: "",
  });

  const serviceCards = [
    {
      title: "Checklist inicial",
      desc: "Mapeie seu cenário, organize documentos e estruture as primeiras ações administrativas sem complicação.",
      points: ["Levantamento de informações", "Documentos necessários", "Roteiro de prazos"],
    },
    {
      title: "Modelos & protocolos",
      desc: "Tenha modelos editáveis e orientações objetivas para protocolar solicitações nos canais corretos.",
      points: ["Modelos de requerimento", "Canais oficiais", "Acompanhamento de protocolo"],
    },
    {
      title: "Acompanhamento administrativo",
      desc: "Organize devolutivas e prazos para conduzir cada etapa com autonomia e mais previsibilidade.",
      points: ["Controle de respostas", "Alertas de prazos", "Checklist de pendências"],
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Conte seu contexto",
      desc: "Você envia um resumo simples da sua situação para entendermos o melhor direcionamento inicial.",
    },
    {
      n: 2,
      title: "Receba a estrutura",
      desc: "Organizamos os próximos passos administrativos com foco em clareza, ordem e execução prática.",
    },
    {
      n: 3,
      title: "Siga com autonomia",
      desc: "Você conduz as ações com mais segurança usando os materiais e orientações recebidas.",
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
      setSent(true);
    } catch (err) {
      setError(err.message || "Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Serviços — Inscrição CNH</title>
        <meta
          name="description"
          content="Orientações administrativas com checklist, modelos e organização de protocolos em um fluxo claro."
        />
      </Head>

      <main className="min-h-screen bg-premium text-slate-100">
        <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
            <a href="/inicio" className="flex items-center gap-3">
              <div className="cnh-mark">
                <span>CNH</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Inscrição CNH</p>
                <p className="text-xs text-slate-400">Orientações administrativas</p>
              </div>
            </a>

            <button onClick={() => setFormOpen(true)} className="btn-primary">
              Fale conosco
            </button>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid" />

          <div className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-6 md:pb-20 md:pt-16">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
              <div className="fade-up">
                <span className="badge-premium">Soluções organizadas</span>
                <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl xl:text-6xl xl:leading-[1.02]">
                  Organize seus processos administrativos com clareza e direção
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  A página de serviços agora segue o mesmo visual premium da página inicial, com navegação objetiva,
                  blocos de conteúdo claros e foco total na ação.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={() => setFormOpen(true)} className="btn-primary btn-lg">
                    Abrir formulário
                  </button>
                  <a href="#servicos-lista" className="btn-secondary btn-lg">
                    Ver serviços
                  </a>
                </div>
              </div>

              <div className="premium-panel fade-up-delay">
                <div className="premium-panel-inner">
                  <h2 className="text-2xl font-bold text-white">O que você encontra aqui</h2>
                  <div className="mt-6 grid gap-3">
                    <div className="feature-row">
                      <div className="feature-bullet" />
                      <p>Checklist para iniciar com segurança.</p>
                    </div>
                    <div className="feature-row">
                      <div className="feature-bullet" />
                      <p>Modelos para padronizar solicitações.</p>
                    </div>
                    <div className="feature-row">
                      <div className="feature-bullet" />
                      <p>Estrutura para acompanhar prazos e respostas.</p>
                    </div>
                  </div>
                  <button onClick={() => setFormOpen(true)} className="btn-primary mt-7 w-full">
                    Quero orientação
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos-lista" className="mx-auto max-w-7xl px-5 py-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center fade-up">
            <span className="badge-premium">Nossos serviços</span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Tudo que você precisa para conduzir sua organização administrativa
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card, i) => (
              <div key={card.title} className="premium-card fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="card-tag" />
                <h3 className="mt-5 text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-slate-300">{card.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-7xl px-5 pb-20 sm:px-6">
          <div className="mx-auto max-w-3xl text-center fade-up">
            <span className="badge-premium">Como funciona</span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Um fluxo simples para começar hoje</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={step.n} className="step-card fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="step-number">{step.n}</div>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-[15px] leading-8 text-slate-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 bg-slate-950/70">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-400">© 2026 Benefic Verific. Todos os direitos reservados.</p>
            <nav className="flex flex-wrap gap-5 text-sm text-slate-400">
              <a href="/politica-de-privacidade" className="transition hover:text-white">Política de Privacidade</a>
              <a href="/termos-de-uso" className="transition hover:text-white">Termos de Uso</a>
              <button onClick={() => setFormOpen(true)} className="transition hover:text-white">Fale conosco</button>
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
                  <span className="badge-premium">Contato</span>
                  <h3 className="mt-3 text-2xl font-black text-white">Receba orientações administrativas</h3>
                </div>

                <button onClick={() => setFormOpen(false)} className="btn-secondary" aria-label="Fechar">
                  Fechar
                </button>
              </div>

              {!sent ? (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5">
                    <div>
                      <label className="input-label">Nome completo</label>
                      <input
                        type="text"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        className="premium-input"
                        placeholder="Digite seu nome"
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
                      <label className="input-label">Assunto</label>
                      <input
                        type="text"
                        value={form.assunto}
                        onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                        className="premium-input"
                      />
                    </div>

                    <div>
                      <label className="input-label">Mensagem</label>
                      <textarea
                        required
                        rows={4}
                        value={form.mensagem}
                        onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                        className="premium-input"
                        placeholder="Descreva seu contexto sem dados sensíveis"
                      />
                    </div>
                  </div>

                  {error && <p className="text-sm font-medium text-red-400">{error}</p>}

                  <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
                    {submitting ? "Enviando..." : "Enviar"}
                  </button>
                </form>
              ) : (
                <div className="success-box mt-6">
                  <h4 className="text-lg font-bold text-white">Mensagem enviada com sucesso</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Recebemos sua solicitação e retornaremos em até 24h úteis.</p>
                  <button onClick={() => setFormOpen(false)} className="btn-primary mt-5">Fechar</button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

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
          border: 1px solid rgba(148, 163, 184, 0.34);
          background: rgba(15, 23, 42, 0.5);
          color: #cbd5e1;
          border-radius: 999px;
          padding: 0.45rem 0.95rem;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 700;
        }

        .btn-primary {
          border: 0;
          border-radius: 0.95rem;
          padding: 0.85rem 1.25rem;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(92deg, #06b6d4, #3b82f6);
          box-shadow: 0 12px 30px rgba(14, 165, 233, 0.35);
          transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
        }

        .btn-primary:hover { transform: translateY(-1px); filter: brightness(1.03); }
        .btn-lg { padding: 1rem 1.45rem; font-size: 0.95rem; }

        .btn-secondary {
          border-radius: 0.95rem;
          padding: 0.82rem 1.2rem;
          border: 1px solid rgba(148, 163, 184, 0.35);
          background: rgba(15, 23, 42, 0.5);
          color: #e2e8f0;
          font-weight: 600;
        }

        .premium-panel {
          border-radius: 28px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.72), rgba(15, 23, 42, 0.44));
          box-shadow: 0 30px 80px rgba(2, 6, 23, 0.5);
          backdrop-filter: blur(16px);
        }

        .premium-panel-inner { padding: 1.7rem; }
        .premium-card, .step-card {
          border-radius: 24px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          background: rgba(15, 23, 42, 0.5);
          padding: 1.2rem;
        }
        .card-tag { width: 45px; height: 4px; border-radius: 999px; background: linear-gradient(90deg, #22d3ee, #3b82f6); }

        .feature-row { display: flex; align-items: flex-start; gap: .6rem; color: #cbd5e1; }
        .feature-bullet { width: .55rem; height: .55rem; border-radius: 999px; background: linear-gradient(90deg, #22d3ee, #3b82f6); margin-top: .45rem; flex-shrink: 0; }

        .cnh-mark {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.95rem;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.9), rgba(59, 130, 246, 0.85));
          color: white;
          font-weight: 800;
          letter-spacing: 0.02em;
          box-shadow: 0 12px 28px rgba(14, 165, 233, 0.35);
        }

        .step-number {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: rgba(59, 130, 246, 0.18);
          border: 1px solid rgba(59, 130, 246, 0.45);
          color: #bfdbfe;
          font-weight: 700;
        }

        .modal-shell {
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.94), rgba(2, 6, 23, 0.92));
          backdrop-filter: blur(14px);
        }
        .input-label { display: block; margin-bottom: .45rem; font-size: .84rem; color: #cbd5e1; font-weight: 600; }
        .premium-input {
          width: 100%;
          border-radius: 0.85rem;
          border: 1px solid rgba(148, 163, 184, 0.28);
          background: rgba(15, 23, 42, 0.58);
          color: #f8fafc;
          padding: .72rem .9rem;
        }

        .success-box {
          border-radius: 20px;
          border: 1px solid rgba(34, 197, 94, 0.32);
          background: rgba(22, 101, 52, 0.15);
          padding: 1rem;
        }

        .fade-up { animation: fadeUp .55s ease both; }
        .fade-up-delay { animation: fadeUp .55s ease .15s both; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes drift {
          from { transform: translateY(0) translateX(0); }
          to { transform: translateY(18px) translateX(-16px); }
        }
      `}</style>
    </>
  );
}
