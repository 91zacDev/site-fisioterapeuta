import { FaWhatsapp, FaEnvelope, FaIdBadge } from 'react-icons/fa';

export default function Contato() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-green-700">Entre em Contato</h2>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-center gap-2">
          <FaWhatsapp className="text-green-500" />
          <a href="https://wa.me/5547999569880" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
            (47) 99956-9880
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaEnvelope className="text-red-500" />
          <a href="mailto:dr.rafael.fisioterapeuta@gmail.com" className="text-blue-600 hover:underline">
            dr.rafael.fisioterapeuta@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaIdBadge className="text-gray-500" />
          CREFITO 404633-F
        </li>
      </ul>
    </div>
  );
}
