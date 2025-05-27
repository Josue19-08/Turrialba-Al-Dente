"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export interface NavigationItem {
  label: string
  href: string
  sectionId: string
  active?: boolean
}

export function useNavigation() {
  const pathname = usePathname()
  const [navItems, setNavItems] = useState<NavigationItem[]>([
    { label: "INICIO", href: "#inicio", sectionId: "inicio" },
    { label: "NOSOTROS", href: "#nosotros", sectionId: "nosotros" },
    { label: "RECETA", href: "#receta", sectionId: "receta" },
    { label: "CONTACTO", href: "#contacto", sectionId: "contacto" },
  ])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Get all sections by their IDs directly, not from navItems state
      const sectionIds = ["inicio", "nosotros", "receta", "contacto"]
      const sections = sectionIds.map((id) => {
        const element = document.getElementById(id)
        return {
          id,
          offset: element?.offsetTop || 0,
          height: element?.offsetHeight || 0,
        }
      })

      // Determine which section is currently in view
      const currentSection = sections.find((section) => {
        const sectionTop = section.offset - 100 // Offset for header
        const sectionBottom = sectionTop + section.height
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom
      })

      if (currentSection) {
        setNavItems((prev) =>
          prev.map((item) => ({
            ...item,
            active: item.sectionId === currentSection.id,
          })),
        )
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      handleScroll()
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, []) // Empty dependency array - we don't want to recreate this effect

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const headerOffset = 80
      const sectionPosition = section.offsetTop - headerOffset

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      })
    }
  }

  return { navItems, scrollToSection }
}
