import { useState } from "react";

export default function SalesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "Orientação administrativa sobre dívidas",
    mensagem: "",
  });

  const faqs = [
    {
      q: "O que exatamente vocês fazem?",
      a: "Oferecemos orientação administrativa e educacional para organizar pendências, entender prazos, montar um plano de ação e encaminhar solicitações formais diretamente aos responsáveis (como empresas e órgãos públicos) quando apropriado.",
    },
    {
      q: "Vocês prestam intermediação financeira?",
      a: "Não. Não prestamos, anunciamos ou promovemos nenhum serviço financeiro. Nosso foco é exclusivamente informativo e administrativo (modelos de requerimentos, rotas oficiais, organização documental e instruções passo a passo).",
    },
    {
      q: "Em quanto tempo recebo um retorno?",
      a: "Normalmente respondemos em até 24h úteis com um checklist inicial e as orientações de próximos passos.",
    },
    {
      q: "As orientações são confiáveis?",
      a: "Baseamos nosso material em fontes públicas e procedimentos administrativos reconhecidos. Explicamos em linguagem simples como reunir documentos, a quem endereçar e como acompanhar protocolos.",
    },
  ];

  const bullets = [
    {
      title: "Passo a passo prático",
      desc: "Roteiros claros para organizar documentos, registrar solicitações formais e acompanhar prazos administrativos.",
    },
    {
      title: "Modelos e checklists",
      desc: "Modelos de requerimento, planilhas de controle e checklists para você executar com autonomia.",
    },
    {
      title: "Privacidade em primeiro lugar",
      desc: "As informações fornecidas por você são usadas apenas para retorno do contato e montagem do seu plano administrativo.",
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Você descreve sua situação",
      desc: "Conte, de forma geral, o contexto da dívida (sem dados sensíveis) e o que já tentou fazer.",
    },
    {
      n: 2,
      title: "Organizamos o plano administrativo",
      desc: "Indicamos documentos a reunir, prazos típicos, canais oficiais e modelos para protocolar solicitações.",
    },
    {
      n: 3,
      title: "Você executa com autonomia",
      desc: "Com o passo a passo em mãos, você protocola e acompanha diretamente nos canais indicados.",
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
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* LOGO AREA */}
      <header className="w-full bg-white shadow-sm">
        <title>Orientação Administrativa sobre Dívidas — Passo a passo prático</title>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
          </div>
          <button
            onClick={() => setFormOpen(true)}
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Fale conosco
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <img src="/images/logo.png" alt="Logo" className="logo-brand" />
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                Orientação administrativa — sem serviços financeiros
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                Organize suas pendências com <span className="text-blue-600">passo a passo, modelos e checklists</span>
              </h1>
              <p className="mt-5 text-lg text-gray-600">
                Receba instruções administrativas claras para protocolar solicitações, entender prazos e acompanhar
                seus pedidos — tudo de forma educativa, direta e sem intermediação financeira.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 active:scale-[0.99] transition"
                >
                  Fale conosco
                </button>
                <a href="#beneficios" className="text-gray-600 hover:text-gray-900">
                  Ver como funciona
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><span className="i-check" />Privacidade</div>
                <div className="flex items-center gap-2"><span className="i-check" />Checklist prático</div>
                <div className="flex items-center gap-2"><span className="i-check" />Resposta em até 24h úteis</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <p>Exemplo de checklist e modelos de requerimento.</p>
                  <p>Guia prático para você executar com autonomia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SELLOS */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <span>Conteúdo educacional</span>
            <span>Privacidade</span>
            <span>Passo a passo</span>
            <span>Respostas objetivas</span>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Por que falar conosco?</h2>
          <p className="mt-3 text-gray-600">Porque você merece orientações claras para agir com segurança e autonomia.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bullets.map((b, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Como funciona</h2>
            <p className="mt-3 text-gray-600">Um fluxo simples e objetivo para você avançar sem complicação.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              nome: "Maria Souza",
              status: "Checklist entregue",
              depoimento:
                "Eu estava perdida sobre por onde começar. Recebi um plano com prazos e modelos e consegui protocolar tudo sozinha.",
            },
            {
              nome: "João Pereira",
              status: "Roteiro concluído",
              depoimento:
                "As orientações foram diretas e fáceis de aplicar. Agora sei exatamente como acompanhar meus protocolos.",
            },
            {
              nome: "Ana Lima",
              status: "Modelos e instruções",
              depoimento:
                "Veio tudo explicado em linguagem simples. Facilitou muito a organização dos documentos.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img src="/images/logo.png" alt="Logo" className="logo-avatar" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{c.nome}</p>
                  <p className="text-xs text-gray-500">{c.status}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">“{c.depoimento}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO (sem preço/pagamento) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Fale conosco</h2>
            <p className="mt-3 text-gray-600">
              Tire dúvidas e receba orientações administrativas iniciais. Sem cobrança exibida nesta página.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <ul className="space-y-3 text-sm text-gray-700">
              <li>• Resposta inicial em até 24h úteis</li>
              <li>• Conte sobre sua situação (sem dados sensíveis)</li>
              <li>• Receba um passo a passo objetivo</li>
            </ul>
            <button
              onClick={() => setFormOpen(true)}
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 active:scale-[0.99] transition"
            >
              Abrir formulário de contato
            </button>
           
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6" open={i===0}>
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-gray-900">
                {f.q}
                <span className="ml-4 select-none rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-500 group-open:hidden">abrir</span>
                <span className="ml-4 hidden select-none rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-500 group-open:inline">fechar</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(60%_60%_at_100%_0%,white,transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">Precisa de um plano administrativo claro?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Abra o formulário e descreva sua situação. Responderemos com um roteiro objetivo para você executar com autonomia.
          </p>
          <button
            onClick={() => setFormOpen(true)}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white/95 px-6 py-3 text-base font-semibold text-blue-700 shadow hover:bg-white"
          >
            Fale conosco
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <p>© 2025. Todos os direitos reservados.</p>
            </div>
            <nav className="flex gap-6">
              <a href="/politica-de-privacidade" className="hover:text-gray-700">Política de Privacidade</a>
              <a href="/termos-de-uso" className="hover:text-gray-700">Termos de Uso</a>
              <a href="/servicos" className="hover:text-gray-700">Suporte</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* MODAL DE FORMULÁRIO */}
      {formOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setFormOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Formulário de contato</h3>
              <button
                onClick={() => setFormOpen(false)}
                className="rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-600 hover:bg-gray-50"
                aria-label="Fechar"
              >
                Fechar
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Assunto</label>
                  <input
                    type="text"
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mensagem (evite dados sensíveis)
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                    placeholder="Descreva, de forma geral, sua situação e o que você já tentou."
                  />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60"
                >
                  {submitting ? "Enviando..." : "Enviar"}
                </button>
              </form>
            ) : (
              <div className="mt-4">
                <p className="text-gray-700">
                  Obrigado! Recebemos seu contato e retornaremos em até 24h úteis.
                </p>
                <button
                  onClick={() => setFormOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* tiny icon util */}
      <style jsx>{`
        .i-check::before { content: "✔"; }
        .logo-brand {
          width: 64px;
          height: 64px;
          display: block;
          object-fit: contain;
          image-rendering: -webkit-optimize-contrast;
          filter: drop-shadow(0 1px 0 rgba(0,0,0,0.04));
        }
        .logo-badge {
          width: 48px;
          height: 48px;
          display: block;
          object-fit: contain;
        }
        .logo-avatar {
          width: 40px;
          height: 40px;
          display: block;
          object-fit: contain;
          border-radius: 0.75rem;
          background: transparent;
        }
        @media (min-width: 768px) {
          .logo-brand { width: 72px; height: 72px; }
        }
      `}</style>

      <style jsx global>{`
        /* Base polish */
        html { scroll-behavior: smooth; }
        :root {
          --radius-xl: 1.25rem;
          --elev-1: 0 8px 24px rgba(16, 24, 40, 0.08);
          --elev-2: 0 12px 32px rgba(16, 24, 40, 0.12);
          --ring: 0 0 0 3px rgba(37, 99, 235, 0.18);
        }

        /* HERO animated glow */
        section.relative:first-of-type::before {
          content: "";
          position: absolute; inset: -20% -10% auto -10%;
          height: 60%;
          background: radial-gradient(40% 50% at 50% 50%, rgba(59,130,246,.18), transparent 70%);
          filter: blur(20px);
          animation: glow 12s ease-in-out infinite alternate;
          pointer-events: none;
        }
        @keyframes glow {
          0%   { transform: translateY(0) scale(1);   opacity: .9; }
          100% { transform: translateY(10px) scale(1.08); opacity: 1; }
        }

        /* Cards: lift, shine, and smooth edges */
        .rounded-2xl.bg-white.shadow-sm {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          border-radius: var(--radius-xl);
          box-shadow: var(--elev-1);
        }
        .rounded-2xl.bg-white.shadow-sm:hover {
          transform: translateY(-3px);
          box-shadow: var(--elev-2);
          border-color: rgba(59,130,246,.25) !important;
        }

        /* CTA buttons */
        button.bg-blue-600, button.bg-white\\/95 {
          position: relative;
          transition: transform .15s ease, box-shadow .2s ease, background-color .2s ease, color .2s ease;
          will-change: transform;
        }
        button.bg-blue-600:hover { box-shadow: 0 10px 24px rgba(59,130,246,.35); transform: translateY(-1px); }
        button.bg-blue-600:active { transform: translateY(0); }
        button.bg-white\\/95:hover { box-shadow: 0 10px 24px rgba(255,255,255,.35); transform: translateY(-1px); }
        /* sutil pulse */
        section.relative:first-of-type button.bg-blue-600,
        section.bg-gradient-to-br button.bg-white\\/95 {
          animation: pulseSoft 2.8s ease-in-out infinite;
        }
        @keyframes pulseSoft {
          0%, 100% { box-shadow: 0 10px 24px rgba(59,130,246,.25); }
          50%      { box-shadow: 0 14px 32px rgba(59,130,246,.40); }
        }

        /* Links */
        a { transition: color .2s ease, opacity .2s ease; }
        a:hover { opacity: .92; }

        /* Logos */
        .logo-brand, .logo-badge, .logo-avatar {
          transition: transform .25s ease, filter .25s ease;
        }
        .logo-brand:hover, .logo-badge:hover, .logo-avatar:hover {
          transform: translateY(-2px) scale(1.03);
          filter: drop-shadow(0 6px 14px rgba(0,0,0,.08));
        }

        /* FAQ (details/summary) */
        details { transition: background-color .25s ease; border-radius: var(--radius-xl); }
        details[open] { background: linear-gradient(180deg, rgba(59,130,246,.06), transparent 60%); }
        details summary { list-style: none; }
        details summary::-webkit-details-marker { display: none; }
        details summary::after {
          content: "▸";
          font-size: .9rem;
          transform: translateY(1px);
          transition: transform .2s ease;
          opacity: .6;
        }
        details[open] summary::after { transform: rotate(90deg) translateX(2px); opacity: .9; }

        /* Inputs */
        input, select, textarea {
          border-radius: .9rem;
          transition: box-shadow .2s ease, border-color .2s ease, background-color .2s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none; box-shadow: var(--ring); border-color: rgba(59,130,246,.45);
        }

        /* Section separators */
        section.border-y { position: relative; overflow: hidden; }
        section.border-y::after {
          content: ""; position: absolute; left: 50%; transform: translateX(-50%);
          bottom: -2px; width: 60%; height: 2px;
          background: radial-gradient(50% 100% at 50% 50%, rgba(59,130,246,.25), transparent 70%);
          filter: blur(2px);
          pointer-events: none;
        }

        /* Footer hover links */
        footer a:hover { text-decoration: underline; }

        /* Reduce motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
