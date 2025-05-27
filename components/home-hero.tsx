"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

export default function HomeHero() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      className="relative w-full h-[calc(100vh-70px)] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/tortillas-queso.png')" }}
      aria-label="Imagen de fondo de tortillas de queso turrialbeño - Plato tradicional de la región de Turrialba"
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 h-full w-full flex flex-col justify-center">
        <div
          ref={ref}
          className={cn(
            "pl-6 md:pl-16 lg:pl-24 max-w-xl transition-all duration-1000 ease-out",
            isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
          )}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">TURRIALBA</span> <span className="text-[#FFC459]">AL</span>
            <br />
            <span className="text-[#FFC459]">DENTE</span>
          </h1>

          <div className="w-32 h-1 bg-[#FFC459] my-6"></div>

          <p className="text-white text-base md:text-lg mb-8 leading-relaxed">
            Tortillas de Queso Turrialbeño con Natilla Orgánica - Una de las 29 recetas tradicionales que Don Pepe y
            elguche.com están explorando en la región de Turrialba.
          </p>

          <button
            onClick={() => {
              const recetaSection = document.getElementById("receta")
              if (recetaSection) {
                const headerOffset = 80
                const sectionPosition = recetaSection.offsetTop - headerOffset

                window.scrollTo({
                  top: sectionPosition,
                  behavior: "smooth",
                })
              }
            }}
            className="inline-block bg-[#FFC459] text-white px-6 py-3 rounded-md font-medium hover:bg-[#F9A826] hover:shadow-md hover:scale-[0.98] active:bg-[#FFD07B] active:shadow-md transition-all transform"
          >
            Ir a la receta
          </button>
        </div>
      </div>
    </section>
  )
}
