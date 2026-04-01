import Head from "next/head";
import { useState } from "react";

function ContactModal({ open, onClose }) {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "Dúvidas sobre os Termos de Uso",
    mensagem: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErr("");

    try {
      const res = await fetch("/form.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Falha ao enviar. Tente novamente.");
      setSent(true);
    } catch (e) {
      setErr(e.message || "Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-[6px]"
      onClick={onClose}
    >
      <div
        className="modal-shell w-full max-w-2xl rounded-[30px] border border-white/10 p-6 shadow-[0_30px_120px_rgba(0,0,0,.55)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="badge-premium">Fale conosco</span>
            <h3 className="mt-3 text-2xl font-black text-white">
              Tire suas dúvidas sobre os Termos de Uso
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Se você quiser entender melhor qualquer ponto destes Termos,
              envie sua mensagem pelo formulário abaixo.
            </p>
          </div>

          <button
            onClick={onClose}
            className="close-btn"
            aria-label="Fechar"
          >
            Fechar
          </button>
        </div>

        {!sent ? (
          <form onSubmit={submit} className="mt-6 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="input-label">Nome</label>
                <input
                  className="premium-input"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="input-label">E-mail</label>
                <input
                  type="email"
                  className="premium-input"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seuemail@exemplo.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="input-label">Assunto</label>
                <input
                  className="premium-input"
                  value={form.assunto}
                  onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                />
              </div>

              <div className="md:col-span-2">
                <label className="input-label">Mensagem</label>
                <textarea
                  rows={5}
                  className="premium-input"
                  required
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Escreva sua dúvida sobre estes Termos de Uso."
                />
              </div>
            </div>

            {err && <p className="text-sm font-medium text-red-400">{err}</p>}

            <div className="grid gap-3 md:grid-cols-[1fr_auto]">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Enviando..." : "Enviar mensagem"}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="btn-secondary"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <div className="success-box mt-6">
            <h4 className="text-lg font-bold text-white">Mensagem enviada com sucesso</h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Recebemos seu contato. Retornaremos assim que possível.
            </p>
            <button onClick={onClose} className="btn-primary mt-5">
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TermosDeUso() {
  const atualizadoEm = "27 de agosto de 2025";
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Head>
        <title>Termos de Uso — Ingresso CNH</title>
        <meta
          name="description"
          content="Leia os Termos de Uso do site de orientação inicial para quem deseja iniciar a CNH e entender melhor o começo da primeira habilitação."
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
                <p className="text-sm font-semibold text-white">Ingresso CNH</p>
                <p className="text-xs text-slate-400">Primeira habilitação</p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm md:flex">
              <a href="/inicio" className="text-slate-300 transition hover:text-white">
                Início
              </a>
              <a href="/politica-de-privacidade" className="text-slate-300 transition hover:text-white">
                Privacidade
              </a>
              <button onClick={() => setOpenForm(true)} className="btn-primary btn-header">
                Fale conosco
              </button>
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid" />

          <div className="mx-auto max-w-5xl px-5 pb-10 pt-14 text-center sm:px-6 md:pb-14 md:pt-20">
            <span className="badge-premium">Termos de Uso</span>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              Regras de uso, transparência e clareza no acesso às informações
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Esta página apresenta os termos aplicáveis ao uso do site e das informações
              oferecidas para quem deseja entender melhor o início do processo da CNH
              e da primeira habilitação.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Última atualização: {atualizadoEm}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6">
          <div className="grid gap-6">
            <div className="terms-card">
              <div className="card-tag" />
              <h2 className="mt-4 text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Ao navegar neste site e utilizar seus formulários, páginas e conteúdos,
                você declara que leu e concorda com estes Termos de Uso.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                O objetivo desta plataforma é oferecer uma experiência informativa e inicial
                para quem deseja começar a CNH com mais clareza, organização e entendimento
                sobre o começo da primeira habilitação.
              </p>
            </div>

            <div className="terms-card">
              <div className="card-tag" />
              <h2 className="mt-4 text-2xl font-bold text-white">2. Finalidade do site</h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Este site foi desenvolvido para ajudar usuários que desejam entender melhor
                o início do processo da CNH, registrar interesse e ter uma visão mais clara
                sobre a entrada na jornada da primeira habilitação.
              </p>

              <div className="terms-list mt-5">
                <div className="terms-list-item">
                  <span className="feature-bullet" />
                  <p>Explicar de forma mais clara o começo do processo da CNH.</p>
                </div>
                <div className="terms-list-item">
                  <span className="feature-bullet" />
                  <p>Permitir o envio de dados para contato inicial e manifestação de interesse.</p>
                </div>
                <div className="terms-list-item">
                  <span className="feature-bullet" />
                  <p>Oferecer uma navegação mais organizada para quem deseja começar a primeira habilitação.</p>
                </div>
              </div>
            </div>

            <div className="terms-card">
              <div className="card-tag" />
              <h2 className="mt-4 text-2xl font-bold text-white">3. Natureza das informações</h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                As informações apresentadas neste site têm caráter informativo e organizacional.
                O conteúdo busca facilitar a compreensão do usuário sobre o início da CNH,
                mas não substitui análise individual, orientação profissional específica
                ou exigências formais definidas por terceiros.
              </p>
            </div>

            <div className="terms-card">
              <div className="card-tag" />
              <h2 className="mt-4 text-2xl font-bold text-white">4. Responsabilidade do usuário</h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Ao utilizar este site, o usuário se responsabiliza por fornecer dados corretos,
                verdadeiros e atualizados ao preencher formulários e enviar mensagens.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Também é responsabilidade do usuário analisar suas próprias necessidades
                e verificar, quando necessário, informações complementares relacionadas ao seu caso.
              </p>
            </div>

            <div className="terms-card">
              <div className="card-tag" />
              <h2 className="mt-4 text-2xl font-bold text-white">5. Limitações de uso e disponibilidade</h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                O conteúdo, a estrutura visual, os textos e os formulários podem ser ajustados,
                atualizados ou modificados a qualquer momento, sem necessidade de aviso prévio,
                sempre que isso for necessário para melhorar a experiência, a clareza das informações
                ou a organização do serviço.
              </p>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Não garantimos disponibilidade contínua e ininterrupta da plataforma em todos os momentos.
              </p>
            </div>

            <div className="terms-card">
              <div className="card-tag" />
              <h2 className="mt-4 text-2xl font-bold text-white">6. Contato</h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-300">
                Se você tiver qualquer dúvida sobre estes Termos de Uso, pode utilizar o formulário
                de contato para falar conosco.
              </p>

              <button
                onClick={() => setOpenForm(true)}
                className="btn-primary mt-6"
              >
                Abrir formulário de contato
              </button>
            </div>

            <div className="terms-highlight">
              <h3 className="text-lg font-bold text-white">Importante</h3>
              <p className="mt-3 text-[15px] leading-8 text-slate-300">
                Estes Termos disciplinam o uso do site e do conteúdo apresentado.
                Ao continuar navegando, você concorda com as condições aqui descritas.
              </p>
              <button
                onClick={() => setOpenForm(true)}
                className="btn-secondary mt-5"
              >
                Fale conosco
              </button>
            </div>
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

            <div className="flex flex-wrap gap-5 text-sm text-slate-400">
              <a href="/inicio" className="transition hover:text-white">Início</a>
              <a href="/politica-de-privacidade" className="transition hover:text-white">Política de Privacidade</a>
              <button onClick={() => setOpenForm(true)} className="transition hover:text-white">
                Fale conosco
              </button>
            </div>
          </div>
        </footer>

        <ContactModal open={openForm} onClose={() => setOpenForm(false)} />

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
          }

          .btn-header {
            padding: 0.7rem 1rem;
            font-size: 0.92rem;
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

          .terms-card {
            border-radius: 1.7rem;
            border: 1px solid rgba(255,255,255,0.08);
            background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03));
            padding: 1.7rem;
            box-shadow: 0 18px 44px rgba(0,0,0,0.18);
            backdrop-filter: blur(16px);
          }

          .terms-highlight {
            border-radius: 1.8rem;
            border: 1px solid rgba(103,232,249,0.14);
            background:
              radial-gradient(circle at top, rgba(34,211,238,0.10), transparent 35%),
              linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
            padding: 1.8rem;
            box-shadow: 0 28px 90px rgba(0,0,0,0.24);
            backdrop-filter: blur(18px);
          }

          .terms-list {
            display: grid;
            gap: 0.9rem;
          }

          .terms-list-item {
            display: grid;
            grid-template-columns: 10px 1fr;
            gap: 0.85rem;
            align-items: start;
            border-radius: 1rem;
            border: 1px solid rgba(255,255,255,0.06);
            background: rgba(255,255,255,0.04);
            padding: 1rem;
          }

          .feature-bullet {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            margin-top: 0.55rem;
            background: linear-gradient(180deg, #67e8f9, #3b82f6);
            box-shadow: 0 0 14px rgba(34,211,238,.45);
          }

          .card-tag {
            width: 48px;
            height: 8px;
            border-radius: 999px;
            background: linear-gradient(90deg, #67e8f9, #3b82f6);
            box-shadow: 0 0 16px rgba(103,232,249,.25);
          }

          .modal-shell {
            background:
              linear-gradient(180deg, rgba(10,16,35,0.96), rgba(6,11,24,0.97));
            backdrop-filter: blur(18px);
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
        `}</style>
      </main>
    </>
  );
}