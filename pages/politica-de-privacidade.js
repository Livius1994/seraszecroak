import Head from "next/head";
import { useState } from "react";

function ContactModal({ open, onClose }) {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "Dúvidas sobre a Política de Privacidade",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Fale conosco</h3>
          <button onClick={onClose} className="rounded-md border border-gray-200 px-2 py-1 text-sm text-gray-600 hover:bg-gray-50">
            Fechar
          </button>
        </div>
        {!sent ? (
          <form onSubmit={submit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome</label>
              <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" required
                value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" required
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Assunto</label>
              <input className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                value={form.assunto} onChange={(e) => setForm({ ...form, assunto: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mensagem (evite dados sensíveis)</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2" required
                value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
            </div>
            {err && <p className="text-sm text-red-600">{err}</p>}
            <button type="submit" disabled={submitting}
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 disabled:opacity-60">
              {submitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        ) : (
          <div className="mt-4">
            <p className="text-gray-700">Obrigado! Retornaremos em até 24h úteis.</p>
            <button onClick={onClose} className="mt-4 inline-flex items-center justify-center rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50">Fechar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PoliticaDePrivacidade() {
  const atualizadoEm = "27 de agosto de 2025";
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Head>
        <title>Política de Privacidade — Orientação Administrativa</title>
        <meta name="description" content="Como coletamos, usamos e protegemos seus dados em nosso serviço de orientação administrativa sobre dívidas." />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Header */}
        <header className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="/inicio" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <span className="font-semibold text-gray-900">Benefic Verific</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="/servicos" className="text-gray-600 hover:text-gray-900">Orientações</a>
              <a href="/termos-de-uso" className="text-gray-600 hover:text-gray-900">Termos</a>
              <button onClick={() => setOpenForm(true)} className="rounded-xl bg-blue-600 px-3 py-1.5 text-white font-semibold hover:bg-blue-700">Fale conosco</button>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Política de Privacidade</h1>
            <p className="mt-3 text-gray-600">Última atualização: {atualizadoEm}</p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">1. Informações que coletamos</h2>
              <p className="mt-2 text-gray-700">
                Coletamos apenas os dados necessários para retorno do contato e para fornecer orientações administrativas (p. ex., <strong>nome</strong> e <strong>e-mail</strong>). Se optar por compartilhar documentos, trate-os sem dados sensíveis sempre que possível.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">2. Como usamos seus dados</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li>Responder ao seu contato e fornecer passo a passo administrativo;</li>
                <li>Organizar checklists e modelos sob demanda;</li>
                <li>Cumprir obrigações legais aplicáveis.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">3. Compartilhamento</h2>
              <p className="mt-2 text-gray-700">Não vendemos seus dados. Compartilhamos informações apenas se exigido por lei.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">4. Segurança e retenção</h2>
              <p className="mt-2 text-gray-700">Adotamos medidas técnicas e administrativas adequadas. Retemos informações somente pelo tempo necessário à finalidade informada.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">5. Seus direitos</h2>
              <p className="mt-2 text-gray-700">
                Você pode solicitar acesso, correção ou exclusão de dados. Para exercer seus direitos, use o botão abaixo.
              </p>
              <button onClick={() => setOpenForm(true)} className="mt-3 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Abrir formulário de contato
              </button>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 text-blue-900">
              <p className="text-sm">Em caso de dúvidas sobre esta Política, fale conosco pelo formulário.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
            <p>© 2025 Benefic Verific. Todos os direitos reservados.</p>
            <button onClick={() => setOpenForm(true)} className="rounded-xl border border-gray-300 px-3 py-1.5 hover:bg-gray-50">
              Fale conosco
            </button>
          </div>
        </footer>
      </main>

      <ContactModal open={openForm} onClose={() => setOpenForm(false)} />
    </>
  );
}
