"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (email === "admin@movara.com" && senha === "123456") {
      alert("Login realizado com sucesso!");
      window.location.href = "/pacientes";
    } else {
      alert("Email ou senha inválidos!");
    }
  }

  return (
    <main className="flex items-center justify-center h-screen bg-purple-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-80"
      >
        <h1 className="text-2xl font-bold text-purple-700 mb-6 text-center">
          Login Movara 💜
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          className="w-full mb-4 p-2 border rounded"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}