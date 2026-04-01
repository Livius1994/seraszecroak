import { useState } from "react";

export default function SalesPage() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    assunto: "Orientação sobre CNH e Auto Escola",
    mensagem: "",
  });

  const faqs = [
    {
      q: "Como funciona o processo para tirar a CNH?",
      a: "Você precisa se matricular em uma auto escola, realizar exames médicos e psicológicos, fazer aulas teóricas e práticas, e ser aprovado nas provas do DETRAN.",
    },
    {
      q: "Quanto tempo leva para tirar a CNH?",
      a: "O processo pode levar de 1 a 3 meses, dependendo da disponibilidade de aulas, provas e da sua dedicação.",
    },
    {
      q: "Posso tirar CNH sem auto escola?",
      a: "Atualmente, o processo tradicional exige auto escola, mas existem discussões sobre mudanças nas regras para flexibilizar isso no futuro.",
    },
    {
      q: "Quais são os custos para tirar a CNH?",
      a: "Os valores variam por estado e auto escola, incluindo taxas do DETRAN, aulas e exames obrigatórios.",
    },
  ];

  const bullets = [
    {
      title: "Passo a passo completo",
      desc: "Saiba exatamente como iniciar seu processo na auto escola até a aprovação final.",
    },
    {
      title: "Dicas para passar de primeira",
      desc: "Evite erros comuns nas provas teóricas e práticas com orientações claras.",
    },
    {
      title: "Informações atualizadas",
      desc: "Entenda as regras atuais e possíveis mudanças na nova CNH.",
    },
  ];

  const steps = [
    {
      n: 1,
      title: "Cadastro e exames",
      desc: "Faça sua inscrição e realize os exames obrigatórios no DETRAN.",
    },
    {
      n: 2,
      title: "Aulas teóricas e prova",
      desc: "Estude o conteúdo exigido e faça a prova teórica.",
    },
    {
      n: 3,
      title: "Aulas práticas e prova final",
      desc: "Treine direção e realize o exame prático para obter sua CNH.",
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

      <header className="w-full bg-white shadow-sm">
        <title>Guia Completo CNH 2026 — Como tirar sua habilitação</title>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
          </div>
          <button
            onClick={() => setFormOpen(true)}
            className="rounded-xl bg-blue-600 px-4 py-2 text-white"
          >
            Tirar dúvidas
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <span className="bg-blue-50 px-3 py-1 rounded text-blue-700 text-sm">
              Guia atualizado da CNH
            </span>

            <h1 className="mt-4 text-4xl font-bold">
              Tire sua CNH com segurança e <span className="text-blue-600">sem erros</span>
            </h1>

            <p className="mt-5 text-gray-600">
              Entenda como funciona o processo da auto escola, quais etapas você precisa cumprir
              e como aumentar suas chances de aprovação.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setFormOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Começar agora
              </button>

              <a href="#beneficios">Ver detalhes</a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <p>Guia prático para tirar sua CNH</p>
          </div>

        </div>
      </section>

      <section id="beneficios" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Por que seguir esse guia?</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {bullets.map((b, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-gray-600 mt-2">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold text-center">Como funciona</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {steps.map((s) => (
              <div key={s.n} className="p-6 border rounded-xl">
                <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Depoimentos</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            {
              nome: "Carlos",
              depoimento: "Segui o passo a passo e passei de primeira!",
            },
            {
              nome: "Fernanda",
              depoimento: "Me ajudou muito a entender o processo da CNH.",
            },
            {
              nome: "Lucas",
              depoimento: "Economizei tempo e evitei erros na prova.",
            },
          ].map((c, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <p className="font-semibold">{c.nome}</p>
              <p className="mt-2 text-gray-600">{c.depoimento}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">Tire suas dúvidas</h2>
          <p className="text-gray-600 mt-2">
            Envie suas perguntas e receba orientação sobre como tirar sua CNH
          </p>

          <button
            onClick={() => setFormOpen(true)}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Falar agora
          </button>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center">Perguntas frequentes</h2>

        {faqs.map((f, i) => (
          <details key={i} className="mt-4 border p-4 rounded-xl">
            <summary className="font-semibold">{f.q}</summary>
            <p className="mt-2 text-gray-600">{f.a}</p>
          </details>
        ))}
      </section>

      {formOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  placeholder="Nome"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <input
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <textarea
                  placeholder="Sua dúvida sobre CNH"
                  required
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full border p-2 rounded"
                />

                <button className="bg-blue-600 text-white w-full py-3 rounded">
                  Enviar
                </button>
              </form>
            ) : (
              <p>Recebemos sua mensagem!</p>
            )}
          </div>
        </div>
      )}

    </main>
  );
}