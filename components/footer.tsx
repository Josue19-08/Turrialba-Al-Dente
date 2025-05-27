"use client"

import Image from "next/image"
import { Logo } from "@/components/ui/logo"
import { useNavigation } from "@/hooks/use-navigation"
import Link from "next/link"

export default function Footer() {
  const { scrollToSection } = useNavigation()

  return (
    <footer className="bg-[#464f5e] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Logo variant="white" />
            <p className="text-sm text-gray-300 mt-4 max-w-xs">
              Parte de una serie de 29 recetas tradicionales de Turrialba, exploradas por Don Pepe y elguche.com para
              promover la gastronomía local y apoyar a los productores de la región.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("receta")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Receta
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Síguenos</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Link href="https://donpepe.com" className="text-gray-300 hover:text-white transition-colors">
                  Don Pepe
                </Link>
                <Link href="https://donpepe.com" className="block">
                  <Image
                    src="/images/logo-don-pepe-blanco.png"
                    alt="Logo de Don Pepe en color blanco - Aventurero y fotógrafo"
                    width={40}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
              </div>
              <div className="space-y-2">
                <Link href="https://elguche.com" className="text-gray-300 hover:text-white transition-colors">
                  elguche.com
                </Link>
                <Link href="https://elguche.com" className="block">
                  <Image
                    src="/images/logo-el-guche-blanco.png"
                    alt="Logo de elguche.com en color blanco - Revista gastronómica digital"
                    width={40}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-600">
          <p className="text-sm text-gray-400 text-center">
            © 2024 Don Pepe & elguche.com. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
