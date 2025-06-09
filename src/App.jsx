import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import { FaHome, FaUserMd, FaStethoscope, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <>
      {/* Navegação principal */}
      <nav className="p-4 bg-green-600 text-white flex gap-6 items-center">
        <Link to="/" className="flex items-center gap-1 hover:text-gray-300"><FaHome /> Home</Link>
        <Link to="/sobre" className="flex items-center gap-1 hover:text-gray-300"><FaUserMd /> Sobre</Link>
        <Link to="/servicos" className="flex items-center gap-1 hover:text-gray-300"><FaStethoscope /> Serviços</Link>
        <Link to="/contato" className="flex items-center gap-1 hover:text-gray-300"><FaEnvelope /> Contato</Link>
      </nav>


      {/* Conteúdo das páginas */}
      <main className="p-4 max-w-4xl mx-auto min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default App;
