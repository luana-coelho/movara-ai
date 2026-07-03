import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-purple-100">
      <h1 className="text-4xl font-bold text-purple-700">
        Movara AI 🧠
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Assistente inteligente para fisioterapeutas
      </p>

      <Link href="/login">
        <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg">
          Entrar
        </button>
      </Link>
    </main>
  );
}