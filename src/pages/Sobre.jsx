import React from "react";
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dr. Rafael Oliveira</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/servicos" className="hover:underline">Serviços</Link>
            <Link to="/contato" className="hover:underline">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Sobre o Profissional */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Sobre o Dr. Rafael Oliveira</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Dr. Rafael Oliveira é fisioterapeuta com ampla experiência no atendimento clínico, com foco na reabilitação de pacientes com dores musculares, desgastes articulares, fraturas e com doenças ortopédicas em geral,juntamente, tratando doenças como acidente vascular encefálico (AVC), esclerose lateral amiotrófica (ELA), paralisia cerebral (PC) e demais doenças neurológicas. Atuando com dedicação e empatia, proporcionando um atendimento humanizado e focado na qualidade de vida.
            Com formação sólida e atualização constante, ofereço tratamentos modernos e personalizados, buscando sempre os melhores resultados para meus pacientes. Meu compromisso é ajudar cada pessoa a recuperar a mobilidade, aliviar dores e retomar suas atividades com segurança e bem-estar.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Reabilitação Ortopédica
            Focada na recuperação de lesões musculares, articulares e ósseas. Ideal para pacientes que sofreram fraturas, entorses, cirurgias ou outras condições ortopédicas. Os atendimentos são personalizados conforme a necessidade de cada caso
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Além do atendimento clínico, Dr. Rafael também se preocupa com a educação em saúde e pretende futuramente compartilhar dicas, orientações e artigos através de um blog informativo neste site.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Dr. Rafael Oliveira. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
