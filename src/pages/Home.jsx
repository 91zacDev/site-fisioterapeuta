import React from "react";
import { Link } from 'react-router-dom';

// Home.jsx
export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">Dr. Rafael Oliveira</h1>
          <nav className="space-x-6 text-sm md:text-base">
 <Link to="/sobre" className="hover:text-gray-200 transition">Sobre</Link>
 <Link to="/servicos" className="hover:text-gray-200 transition">Serviços</Link>
 <Link to="/contato" className="hover:text-gray-200 transition">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Section 1: Hero */}
 <section className="bg-gray-100 py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 <div className="max-w-4xl mx-auto text-center md:text-left">
 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-600">Cuidando do seu bem-estar</h2>
 <p className="text-lg md:text-xl mb-8 text-gray-700">Fisioterapia personalizada com atenção, experiência e resultados.</p>
 <a
 href="#contato"
 className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition"
 >
 Fale com o Dr. Rafael
 </a>
 </div>
 <div className="bg-gray-300 h-64 w-full flex items-center justify-center rounded-md text-gray-600">
          Image Placeholder
        </div>
      </section>

      {/* Section 2: Sobre o Profissional */}
 <section id="sobre" className="py-20 px-4 bg-green-50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 <div className="max-w-4xl mx-auto text-center md:text-left">
 <h3 className="text-3xl font-bold mb-6 text-blue-700">Sobre o Dr. Rafael Oliveira</h3>
 <p className="text-gray-700 leading-relaxed text-base md:text-lg">
 Fisioterapeuta especializado no tratamento de dores musculares, reabilitação e melhora da qualidade de vida.
 Atendimento humanizado com foco em resultados eficazes e duradouros.
 </p>
 </div>
 <div className="bg-gray-300 h-64 w-full flex items-center justify-center rounded-md text-gray-600">
          Image Placeholder
        </div>
      </section>

      {/* Section 3: Serviços */}
 <section id="servicos" className="py-20 px-4 bg-blue-50">
 <div className="max-w-6xl mx-auto">
 <h3 className="text-3xl font-bold mb-12 text-green-600 text-center">Serviços Oferecidos</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 <div className="bg-gray-300 h-64 w-full flex items-center justify-center rounded-md text-gray-600">
          Image Placeholder
 </div>
 <div className="grid grid-cols-1 gap-8">
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
 <h4 className="text-xl font-semibold text-blue-700 mb-3">Reabilitação Ortopédica</h4>
 <p className="text-gray-600">Tratamentos personalizados para lesões musculares e articulares.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
 <h4 className="text-xl font-semibold text-blue-700 mb-3">Fisioterapia Respiratória</h4>
 <p className="text-gray-600">Melhore sua capacidade pulmonar com sessões eficazes e seguras.</p>
 </div>
 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
 <h4 className="text-xl font-semibold text-blue-700 mb-3">Alongamentos e Mobilizações</h4>
 <p className="text-gray-600">Alívio das tensões musculares e melhora da mobilidade corporal.</p>
 </div>
 </div>

          </div>
        </div>
      </section>

      {/* Contato */}
 <section id="contato" className="py-20 px-4 bg-green-50 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 <div className="bg-gray-300 h-64 w-full flex items-center justify-center rounded-md text-gray-600">
          Image Placeholder
 </div>
 <div className="max-w-2xl mx-auto text-center md:text-left">
 <h3 className="text-3xl font-bold mb-6 text-blue-700">Entre em Contato</h3>
          <p className="mb-6 text-gray-700">Fale pelo WhatsApp ou preencha o formulário abaixo:</p>

          <a
            href="https://wa.me/47999569880"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition mb-6"
          >
            WhatsApp
          </a>

          <form className="grid grid-cols-1 gap-4 text-left">
 <input type="text" placeholder="Seu nome" className="border border-gray-300 p-3 rounded-md w-full" />
 <input type="email" placeholder="Seu e-mail" className="border border-gray-300 p-3 rounded-md w-full" />
            <textarea rows="4" placeholder="Mensagem" className="border border-gray-300 p-3 rounded-md w-full"></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Enviar
            </button>
          </form>
        </div>

      </section>
    </main>
  );
}
