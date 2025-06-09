import React from "react";
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header - Existing Header */}
      <header className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-6 px-4 shadow-md mb-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dr. Rafael Oliveira</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/servicos" className="hover:underline">Serviços</Link>
            <Link to="/contato" className="hover:underline">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Seção 1: Sobre o Profissional - Introdução */}
      <section className="py-16 px-4 bg-green-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2"> {/* Content on the right for this section */}
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Sobre o Dr. Rafael Oliveira</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Rafael Oliveira é fisioterapeuta com ampla experiência no atendimento clínico, com foco na reabilitação de pacientes com dores musculares, desgastes articulares, fraturas e com doenças ortopédicas em geral, juntamente, tratando doenças como acidente vascular encefálico (AVC), esclerose lateral amiotrófica (ELA), paralisia cerebral (PC) e demais doenças neurológicas. Atuando com dedicação e empatia, proporcionando um atendimento humanizado e focado na qualidade de vida.
              Com formação sólida e atualização constante, ofereço tratamentos modernos e personalizados, buscando sempre os melhores resultados para meus pacientes. Meu compromisso é ajudar cada pessoa a recuperar a mobilidade, aliviar dores e retomar suas atividades com segurança e bem-estar.
            </p>
          </div>
          <div className="md:order-1 flex justify-center items-center border-2 border-dashed border-gray-400 p-4">
            {/* Espaço para Imagem 1 */}
            <p className="text-gray-600">Inserir Imagem Aqui</p>
          </div>
        </div>
      </section>

      {/* Seção 2: Reabilitação Ortopédica */}
      <section className="py-16 px-4 bg-blue-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div> {/* Content on the left for this section */}
          <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Sobre o Dr. Rafael Oliveira</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Focada na recuperação de lesões musculares, articulares e ósseas. Ideal para pacientes que sofreram fraturas, entorses, cirurgias ou outras condições ortopédicas. Os atendimentos são personalizados conforme a necessidade de cada caso
          </p>
          </div>
          <div className="flex justify-center items-center border-2 border-dashed border-gray-400 p-4">
            {/* Espaço para Imagem 2 */}
            <p className="text-gray-600">Inserir Imagem Aqui</p>
          </div>
        </div>
      </section>

      {/* Seção 3: Educação em Saúde */}
      <section className="py-16 px-4 bg-green-100">
        <div className="max-w-6xl mx-auto text-center"> {/* Center the text in this section */}
          <h3 className="text-2xl font-bold mb-4 text-blue-700">Educação em Saúde</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
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
