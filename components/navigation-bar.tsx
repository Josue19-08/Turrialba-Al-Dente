"use client"

import { useState } from "react"
import { Logo } from "@/components/ui/logo"
import { useNavigation } from "@/hooks/use-navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function NavigationBar() {
  const { navItems, scrollToSection } = useNavigation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    scrollToSection("inicio")
    setMobileMenuOpen(false)
  }

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Desktop Logo */}
      <div className="hidden md:block">
        <Logo />
      </div>

      {/* Mobile Logo */}
      <button onClick={handleLogoClick} className="md:hidden flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Logo de Turrialba Al Dente - Olla de cocina con hierbas"
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="flex flex-col">
          <span className="text-[#1e3a8a] font-bold text-sm leading-none tracking-tight">TURRIALBA</span>
          <span className="text-[#f0b040] text-[6px] font-medium leading-none tracking-wide">AL DENTE</span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.sectionId}
            onClick={() => scrollToSection(item.sectionId)}
            className={`text-[#1e3a8a] text-sm font-medium hover:text-[#1e3a8a]/80 transition-colors ${
              item.active ? "font-semibold" : ""
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Desktop Subscribe Button */}
      <button
        onClick={() => scrollToSection("contacto")}
        className="hidden md:block bg-[#FFC459] text-white px-5 py-1.5 rounded-md text-sm font-medium hover:bg-[#F9A826] hover:shadow-md hover:scale-[0.98] active:bg-[#FFD07B] active:shadow-md transition-all transform"
      >
        Suscribirse
      </button>

      {/* Mobile Menu Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-[#1e3a8a]">
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 h-auto max-h-[350px] bg-white z-50 md:hidden">
          <div className="flex justify-between items-center p-6 border-b border-gray-100">
            <button onClick={handleLogoClick} className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo de Turrialba Al Dente - Olla de cocina con hierbas"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="flex items-baseline">
                <span className="text-[#1e3a8a] font-bold text-lg">TURRIALBA</span>
                <span className="text-[#FFC459] text-xs font-medium ml-2">AL DENTE</span>
              </div>
            </button>
            <button onClick={toggleMobileMenu} className="text-[#1e3a8a]">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col">
            {navItems.map((item, index) => (
              <div key={item.sectionId}>
                <button
                  onClick={() => handleNavClick(item.sectionId)}
                  className="py-4 px-6 w-full text-left text-[#1e3a8a] font-medium text-lg"
                >
                  {item.label}
                </button>
                <div className="h-px bg-gray-200 w-full"></div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
