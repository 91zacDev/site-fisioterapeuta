import React from "react";
import { Link } from "react-router-dom";

export default function Servicos() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-6 px-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dr. Rafael Oliveira</h1>
          <nav className="space-x-4">
 <Link to="/" className="hover:underline">Home</Link>
 <Link to="/sobre" className="hover:underline">Sobre</Link>
 <Link to="/contato" className="hover:underline">Contato</Link>
          </nav>
        </div>
      </header>

      {/* Serviços Detalhados */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-600 text-center">Serviços de Fisioterapia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Reabilitação Ortopédica</h3>
              <p className="text-gray-700 leading-relaxed">
 Atendimento Domiciliar/ home care: Tornando a fisioterapia cada vez mais acessível, sendo umas das modalidades mais abrangentes na fisioterapia, ela permite a exclusividade do tratamento com o conforto que você merece, com o âmbito acolhedor da sua casa e a praticidade de não ter transtornos para o seu deslocamento e nem espera dentro de uma clínica, o atendimento domiciliar vem ganhando cada vez mais espaço nos tratamentos executados hoje em dia.
              </p>
            </div>
 <div className="border-2 border-dashed border-gray-400 p-8 text-center text-gray-600">
              Espaço para Imagem de Reabilitação Ortopédica
 </div>
          </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-blue-50 p-6 rounded-xl shadow mb-12">
 <div className="border-2 border-dashed border-gray-400 p-8 text-center text-gray-600">
              Espaço para Imagem de Fisioterapia Respiratória
 </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Fisioterapia Respiratória</h3>
              <p className="text-gray-700 leading-relaxed">
                Tratamento voltado para melhorar a capacidade pulmonar, auxiliar na eliminação de secreções e promover a reeducação respiratória. Recomendado para pessoas com doenças respiratórias crônicas ou em pós-operatório.
              </p>
            </div>
          </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-green-50 p-6 rounded-xl shadow">
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Alongamentos e Mobilizações</h3>
              <p className="text-gray-700 leading-relaxed">
                Técnicas manuais para aliviar tensões musculares, melhorar a flexibilidade e restaurar a mobilidade corporal. Contribui para a prevenção de lesões e promoção do bem-estar físico.
              </p>
            </div>
 <div className="border-2 border-dashed border-gray-400 p-8 text-center text-gray-600">
              Espaço para Imagem de Alongamentos e Mobilizações
 </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Dr. Rafael Oliveira. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
