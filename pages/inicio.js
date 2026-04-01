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
              <p className="text-xs text-slate-400">Página de entrada e orientação inicial</p>
            </div>
          </div>

          <button
            onClick={() => setFormOpen(true)}
            className="btn-primary"
          >
            Garantir acesso
          </button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />

        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-16 md:grid-cols-[1.08fr_.92fr] md:items-center">
          <div>
            <span className="badge-premium">
              Plataforma de ingresso para primeira habilitação
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl md:leading-[1.02]">
              Comece sua <span className="text-gradient">CNH</span> com uma experiência mais clara, moderna e organizada
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Esta página foi desenhada para funcionar como um ponto de entrada premium para quem deseja iniciar o processo da habilitação. Em vez de uma estrutura comum e sem presença visual, você tem aqui um layout mais sofisticado, organizado e pensado para transmitir confiança logo no primeiro contato.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
              O foco é facilitar o ingresso, explicar melhor a proposta, valorizar a ação principal da página e deixar a navegação com cara de produto moderno. Tudo com um visual mais refinado, semelhante a uma interface de app de alto nível adaptada para site.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="btn-primary btn-lg"
              >
                Garantir acesso
              </button>

              <a
                href="#como-funciona"
                className="btn-secondary btn-lg"
              >
                Ver como funciona
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="stat-chip">
                <span className="stat-dot" />
                Entrada mais clara
              </div>
              <div className="stat-chip">
                <span className="stat-dot" />
                Estrutura moderna
              </div>
              <div className="stat-chip">
                <span className="stat-dot" />
                Visual premium
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="premium-panel">
              <div className="premium-panel-inner">
                <div className="mock-card">
                  <div className="mock-top">
                    <span className="mock-pill" />
                    <span className="mock-pill" />
                    <span className="mock-pill active" />
                  </div>

                  <div className="mx-auto mt-8 flex h-28 w-44 items-center justify-center rounded-[28px] border border-cyan-300/20 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur">
                    <div className="flex flex-col items-center">
                      <div className="mb-2 text-3xl">🪪</div>
                      <span className="text-xl font-black tracking-[0.25em] text-cyan-300">CNH</span>
                    </div>
                  </div>

                  <h2 className="mt-8 text-center text-2xl font-extrabold text-white">
                    Ingresso inteligente para sua habilitação
                  </h2>

                  <p className="mt-4 text-center text-sm leading-7 text-slate-300">
                    Uma página com estética premium, foco em conversão e estrutura visual pensada para valorizar o início da jornada da CNH.
                  </p>

                  <div className="mt-7 grid gap-3">
                    <div className="feature-row">
                      <span>✦</span>
                      <p>Design mais sofisticado e com aparência de app moderno.</p>
                    </div>
                    <div className="feature-row">
                      <span>✦</span>
                      <p>Cards organizados, melhor contraste e hierarquia visual mais forte.</p>
                    </div>
                    <div className="feature-row">
                      <span>✦</span>
                      <p>Botão principal valorizado para aumentar a ação do visitante.</p>
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
            <div key={i} className="glass-card">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-premium">
            Nova estética, mais valor visual
          </span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Cores mais fortes, contraste melhor e sensação de produto premium
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            O site agora usa uma base escura elegante com detalhes em azul elétrico e cyan luminoso para criar uma identidade muito mais moderna. Esse tipo de composição passa mais força visual, melhora a percepção de qualidade e deixa a página com aparência de plataforma digital de alto nível.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="premium-card group">
              <div className="icon-box">
                {i === 0 ? "🧭" : i === 1 ? "📘" : i === 2 ? "💬" : i === 3 ? "📝" : i === 4 ? "🔒" : "🚗"}
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="showcase-strip">
          <div className="showcase-item">
            <span>Interface mais premium</span>
          </div>
          <div className="showcase-item">
            <span>Foco total em conversão</span>
          </div>
          <div className="showcase-item">
            <span>Visual de app em formato de site</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[.95fr_1.05fr] md:items-center">
          <div>
            <span className="badge-premium">
              Experiência visual mais refinada
            </span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Um site com cara de produto moderno transmite mais confiança
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              O visual foi trabalhado para parecer uma interface atual, com camadas, profundidade, blur sutil, sombras suaves e contrastes mais sofisticados. Isso faz a página parecer menos genérica e mais próxima de uma solução digital de verdade.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              A combinação entre fundo escuro, luzes difusas, botões com gradiente e blocos translúcidos cria uma estética mais valiosa e mais profissional. Em vez de um site simples, o visitante passa a sentir que entrou em uma experiência mais bem construída.
            </p>

            <button
              onClick={() => setFormOpen(true)}
              className="btn-primary btn-lg mt-8"
            >
              Garantir acesso
            </button>
          </div>

          <div className="grid gap-5">
            <div className="glass-feature">
              <h3 className="text-lg font-bold text-white">Paleta mais nobre</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Azul profundo, cyan premium, branco suave e transparências elegantes substituem o visual simples anterior.
              </p>
            </div>
            <div className="glass-feature">
              <h3 className="text-lg font-bold text-white">Mais presença visual</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Os blocos agora têm mais impacto visual, mais espaçamento e hierarquia muito melhor entre títulos, textos e ações.
              </p>
            </div>
            <div className="glass-feature">
              <h3 className="text-lg font-bold text-white">Estilo app-like</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                A sensação final é de uma landing page moderna inspirada em dashboards e plataformas premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-premium">
            Etapas iniciais
          </span>
          <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
            Como funciona o ingresso nesta página
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            A proposta continua simples, mas agora apresentada com uma experiência visual muito mais refinada. O usuário entende melhor o fluxo, sente mais confiança e tem mais clareza para avançar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="step-card">
              <div className="step-number">{s.n}</div>
              <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="cta-shell">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-light">
              Ingresso com mais clareza e mais impacto visual
            </span>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Quem quer começar a CNH merece uma página mais forte, bonita e convincente
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Esta nova direção visual melhora a estética, aumenta a sensação de valor e deixa o site muito mais próximo do padrão de produtos digitais premium. Tudo isso sem complicar a navegação e mantendo a ação principal muito clara.
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
        <div className="mx-auto max-w-3xl text-center">
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
        <div className="footer-cta">
          <div className="mx-auto flex h-20 w-28 items-center justify-center rounded-[28px] border border-cyan-300/20 bg-white/[0.08] backdrop-blur">
            <div className="flex flex-col items-center">
              <div className="text-2xl">🪪</div>
              <span className="text-sm font-black tracking-[0.25em] text-cyan-300">CNH</span>
            </div>
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-black text-white md:text-5xl">
            Pronto para entrar no processo da sua CNH com uma experiência mais premium?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Preencha o formulário e garanta seu acesso. A página agora está mais elegante, mais tecnológica e muito mais alinhada com um visual moderno de produto digital.
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
              <p className="text-xs text-slate-400">Página informativa de entrada</p>
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

        .feature-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.04);
          padding: 0.9rem 1rem;
          color: #d6e5f2;
        }

        .feature-row span {
          color: #67e8f9;
          font-size: 1rem;
          line-height: 1;
          margin-top: 0.2rem;
        }

        .glass-card {
          border-radius: 1.6rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1.5rem;
          box-shadow: 0 14px 34px rgba(0,0,0,0.18);
          backdrop-filter: blur(14px);
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
          justify-content: center;
          width: 3.25rem;
          height: 3.25rem;
          border-radius: 1rem;
          border: 1px solid rgba(103,232,249,0.16);
          background: linear-gradient(180deg, rgba(34,211,238,0.12), rgba(59,130,246,0.08));
          font-size: 1.35rem;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
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
        }

        .glass-feature {
          border-radius: 1.6rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1.45rem;
          box-shadow: 0 16px 42px rgba(0,0,0,0.18);
          backdrop-filter: blur(12px);
        }

        .step-card {
          border-radius: 1.7rem;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 1.7rem;
          box-shadow: 0 16px 46px rgba(0,0,0,0.18);
          backdrop-filter: blur(14px);
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