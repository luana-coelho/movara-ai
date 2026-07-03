"use client";

import { useState } from "react";

export default function Avaliacao() {
  const [queixa, setQueixa] = useState("");
  const [regiao, setRegiao] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [tempoLesao, setTempoLesao] = useState("");
  const [unidadeTempo, setUnidadeTempo] = useState("Dias");
  const [eva, setEva] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [observacoes, setObservacoes] = useState("");

  return (
    <main className="min-h-screen bg-purple-100 p-8 flex flex-col items-center">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">

        <h1 className="text-3xl font-bold text-purple-700">
          Avaliação Clínica 💜
        </h1>

        <p className="text-gray-600 mb-6">
          Preencha as informações da avaliação.
        </p>

        <input
          className="border rounded p-2 w-full mb-3"
          placeholder="Queixa Principal"
          value={queixa}
          onChange={(e)=>setQueixa(e.target.value)}
        />

        <select
  value={regiao}
  onChange={(e) => setRegiao(e.target.value)}
  className="border rounded p-2 w-full mb-3"
>
  <option value="">Selecione a região</option>
  <option>Lombar</option>
  <option>Cervical</option>
  <option>Torácica</option>
  <option>Ombro</option>
  <option>Cotovelo</option>
  <option>Punho</option>
  <option>Quadril</option>
  <option>Joelho</option>
  <option>Tornozelo</option>
  <option>Pé</option>
</select>

        <select
  value={diagnostico}
  onChange={(e) => setDiagnostico(e.target.value)}
  className="border rounded p-2 w-full mb-3"
>
  <option value="">Selecione o diagnóstico</option>

  <option>Lombalgia</option>
  <option>Cervicalgia</option>
  <option>Tendinite</option>
  <option>Artrose</option>
  <option>Entorse</option>
  <option>Bursite</option>
  <option>Lesão Muscular</option>
  <option>Pós-operatório</option>
</select>

        <div className="flex gap-2 mb-3">

  <input
    type="number"
    placeholder="Tempo"
    value={tempoLesao}
    onChange={(e)=>setTempoLesao(e.target.value)}
    className="border rounded p-2 w-1/2"
  />

 <select
  value={unidadeTempo}
  onChange={(e) => setUnidadeTempo(e.target.value)}
  className="border rounded p-2 w-1/2"
>
  <option>Dias</option>
  <option>Semanas</option>
  <option>Meses</option>
  <option>Anos</option>
</select>

</div>

        <input
          type="number"
          className="border rounded p-2 w-full mb-3"
          placeholder="EVA (0-10)"
          value={eva}
          onChange={(e)=>setEva(e.target.value)}
        />

        <input
          className="border rounded p-2 w-full mb-3"
          placeholder="Objetivo do Paciente"
          value={objetivo}
          onChange={(e)=>setObjetivo(e.target.value)}
        />

        <textarea
          className="border rounded p-2 w-full mb-4"
          rows={5}
          placeholder="Observações"
          value={observacoes}
          onChange={(e)=>setObservacoes(e.target.value)}
        />

        <button className="bg-purple-600 text-white px-6 py-2 rounded w-full">
          Salvar Avaliação
        </button>

      </div>

    </main>
  );
}