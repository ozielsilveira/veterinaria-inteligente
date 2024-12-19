import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold font-montserrat mb-4">Veterinária Inteligente</h3>
            <p className="font-open-sans">Soluções tecnológicas para saúde animal e gestão eficiente de rebanhos.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-bold font-montserrat mb-4">Links Rápidos</h4>
            <nav className="space-y-2 font-open-sans">
              <Link href="#" className="block hover:text-[#FFEB3B] transition-colors">Sobre Nós</Link>
              <Link href="#" className="block hover:text-[#FFEB3B] transition-colors">Soluções</Link>
              <Link href="#" className="block hover:text-[#FFEB3B] transition-colors">Termos de Uso</Link>
              <Link href="#" className="block hover:text-[#FFEB3B] transition-colors">Política de Privacidade</Link>
              <Link href="#" className="block hover:text-[#FFEB3B] transition-colors">Contato</Link>
            </nav>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold font-montserrat mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFEB3B] transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-[#FFEB3B] transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-[#FFEB3B] transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-[#FFEB3B] transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center font-open-sans">
          <p>&copy; 2024 Veterinária Inteligente. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

