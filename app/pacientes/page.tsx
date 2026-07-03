"use client";

import { useState, useEffect } from "react";

type Paciente = {
  nome: string;
  idade: string;
  diagnostico: string;
  eva: string;
  tempoLesao: string;
};

export default function Pacientes() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [eva, setEva] = useState("");
  const [tempoLesao, setTempoLesao] = useState("");
  const [condutaIA, setCondutaIA] = useState("");

  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("pacientes");

    if (dadosSalvos) {
      setPacientes(JSON.parse(dadosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const salvarPaciente = () => {
    if (!nome || !idade || !diagnostico) {
      alert("Preencha todos os campos!");
      return;
    }

  const novoPaciente: Paciente = {
  nome,
  idade,
  diagnostico,
  eva,
  tempoLesao,
};

    if (editandoIndex !== null) {
      const listaAtualizada = [...pacientes];
      listaAtualizada[editandoIndex] = novoPaciente;
      setPacientes(listaAtualizada);
      setEditandoIndex(null);
    } else {
      setPacientes((prev) => [...prev, novoPaciente]);
    }

  setNome("");
setIdade("");
setDiagnostico("");
setEva("");
setTempoLesao("");
  };

  const editarPaciente = (index: number) => {
  const paciente = pacientes[index];

  setNome(paciente.nome);
  setIdade(paciente.idade);
  setDiagnostico(paciente.diagnostico);
  setEva(paciente.eva);
  setTempoLesao(paciente.tempoLesao);

  setEditandoIndex(index);
};

  const excluirPaciente = (index: number) => {
    const listaAtualizada = pacientes.filter((_, i) => i !== index);
    setPacientes(listaAtualizada);
  };

const gerarCondutaIA = () => {
  const diag = diagnostico.toLowerCase();
  const dor = Number(eva);
  const tempo = tempoLesao.toLowerCase();

  if (diag.includes("lombalgia")) {

    if (
      tempo.includes("mês") ||
      tempo.includes("mes") ||
      tempo.includes("ano")
    ) {

      setCondutaIA(`
Lombalgia Crônica

Objetivos:
• Recuperação funcional
• Ganho de força

Recursos:
• Exercícios graduados
• Estabilização lombar
• Treino funcional

Educação em dor:
• Recomendada

Reavaliar:
• 15 dias
`);

    } else if (dor >= 7) {

      setCondutaIA(`
Lombalgia Aguda

Objetivos:
• Controle da dor

Recursos:
• TENS
• Mobilização suave
• Educação em dor

Evitar:
• Altas cargas

Reavaliar:
• 7 dias
`);

    } else {

      setCondutaIA(`
Lombalgia Subaguda

Objetivos:
• Mobilidade
• Ganho funcional

Recursos:
• Alongamentos
• Exercícios terapêuticos
• Estabilização lombar

Reavaliar:
• 7 dias
`);
    }

  } else {
    setCondutaIA(`
Diagnóstico ainda não cadastrado.
`);
  }
};
  return (
    <main className="flex flex-col items-center p-6 bg-purple-100 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-700">
        Pacientes 💜
      </h1>

      <p className="text-gray-700">
        Sistema com salvamento automático 💾
      </p>

      <input
        type="text"
        placeholder="Nome do paciente"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="mt-4 p-2 border rounded w-64"
      />

      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        className="mt-2 p-2 border rounded w-64"
      />

      <input
        type="text"
        placeholder="Diagnóstico"
        value={diagnostico}
        onChange={(e) => setDiagnostico(e.target.value)}
        className="mt-2 p-2 border rounded w-64"
      />

      <input
        type="number"
        placeholder="EVA da dor (0 a 10)"
        value={eva}
        onChange={(e) => setEva(e.target.value)}
        className="mt-2 p-2 border rounded w-64"
      />
<input
  type="text"
  placeholder="Tempo da lesão (ex: 3 dias, 2 meses)"
  value={tempoLesao}
  onChange={(e) => setTempoLesao(e.target.value)}
  className="mt-2 p-2 border rounded w-64"
/>
      <button
        onClick={salvarPaciente}
        className="mt-4 px-6 py-2 bg-purple-600 text-white rounded"
      >
        {editandoIndex !== null ? "Atualizar" : "Salvar"}
      </button>

      <button
        onClick={gerarCondutaIA}
        className="mt-2 px-6 py-2 bg-green-600 text-white rounded"
      >
        Gerar Conduta IA
      </button>

      {condutaIA && (
        <div className="mt-6 bg-white p-4 rounded shadow w-full max-w-md">
          <h2 className="text-xl font-bold text-purple-700">
            Sugestão Movara AI 🧠
          </h2>

          <pre className="whitespace-pre-wrap mt-2">
            {condutaIA}
          </pre>
        </div>
      )}

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-purple-700 mb-2">
          Pacientes cadastrados
        </h2>

        {pacientes.length === 0 ? (
          <p className="text-gray-600">Nenhum paciente ainda</p>
        ) : (
          pacientes.map((p, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded shadow mb-2"
            >
              <p>
                <strong>Nome:</strong> {p.nome}
              </p>

              <p>
                <strong>Idade:</strong> {p.idade}
              </p>

              <p>
                <strong>Diagnóstico:</strong> {p.diagnostico}
              </p>
              <p>
  <strong>EVA:</strong> {p.eva}
</p>
<p>
  <strong>Tempo da lesão:</strong> {p.tempoLesao}
</p>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => editarPaciente(index)}
                  className="px-3 py-1 bg-yellow-400 rounded"
                >
                  Editar
                </button>

                <button
                  onClick={() => excluirPaciente(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}