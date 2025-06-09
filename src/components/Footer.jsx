// src/components/Footer.jsx
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-semibold">Dr. Rafael Oliveira</h3>
          <p className="text-sm">CREFITO 404633-F • Atendimento domiciliar</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <a href="https://wa.me/5547999569880" className="flex items-center gap-2 hover:underline">
            <FaWhatsapp className="text-lg" />
            (47)&nbsp;99956-9880
          </a>
          <a href="mailto:dr.rafael.fisioterapeuta@gmail.com" className="flex items-center gap-2 hover:underline">
            <FaEnvelope className="text-lg" />
            dr.rafael.fisioterapeuta@gmail.com
          </a>
        </div>
      </div>

      <p className="text-center text-xs mt-6 opacity-80">
        © {new Date().getFullYear()} Dr. Rafael Oliveira. Todos os direitos reservados.
      </p>
    </footer>
  );
}
