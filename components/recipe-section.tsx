"use client"

import Image from "next/image"
import { Clock, Gauge, Users } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

export default function RecipeSection() {
  const { ref: headerRef, isIntersecting: headerVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: step1Ref, isIntersecting: step1Visible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: step2Ref, isIntersecting: step2Visible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: step3Ref, isIntersecting: step3Visible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { ref: step4Ref, isIntersecting: step4Visible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headerRef}
          className={cn(
            "transition-all duration-1000 ease-out",
            headerVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
          )}
        >
          <SectionTitle
            title="Tortillas de Queso Turrialbeño con Natilla Orgánica"
            description="En las montañas de Turrialba, donde el queso es tan fresco como el aire de la región, nace esta receta. Don Pepe descubrió esta joya gastronómica durante su exploración con elguche.com, destacando los ingredientes orgánicos y las técnicas tradicionales que hacen de Turrialba un centro gastronómico de nivel mundial."
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16 mt-8">
            <div className="flex items-center gap-2">
              <Clock className="text-[#FFC459]" size={20} />
              <span className="text-gray-600">Preparación: 30 min</span>
            </div>

            <div className="flex items-center gap-2">
              <Gauge className="text-[#FFC459]" size={20} />
              <span className="text-gray-600">Dificultad: Fácil</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="text-[#FFC459]" size={20} />
              <span className="text-gray-600">Porciones: 4</span>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#FFC459] text-white w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h2 className="text-2xl font-bold text-[#1e3a8a]">Ingredientes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/masa.png"
                    alt="Masa de maíz fresca para tortillas - Ingrediente principal de la receta"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e3a8a] text-lg">Masa de Maíz</h3>
                  <p className="text-gray-600 mb-1">La base de la tortilla. Fresca y suave.</p>
                  <p className="text-[#FFC459]">2 tazas</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/queso-rallado.png"
                    alt="Queso Turrialba rallado - Queso artesanal local con textura única"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e3a8a] text-lg">Queso Turrialba</h3>
                  <p className="text-gray-600 mb-1">Queso artesanal local, único en su textura.</p>
                  <p className="text-[#FFC459]">1 taza rallado</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/natilla.png"
                    alt="Natilla orgánica - Crema producida por ganaderos locales de Turrialba"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e3a8a] text-lg">Natilla Orgánica</h3>
                  <p className="text-gray-600 mb-1">Producida por ganaderos locales de Turrialba.</p>
                  <p className="text-[#FFC459]">1/2 taza</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/sal.png"
                    alt="Sal marina - Condimento esencial para realzar el sabor de las tortillas"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#1e3a8a] text-lg">Sal</h3>
                  <p className="text-gray-600 mb-1">Preferiblemente sal marina.</p>
                  <p className="text-[#FFC459]">1 cucharadita</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preparation Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#FFC459] text-white w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a]">Preparación</h2>
          </div>

          {/* Step 1 - Left to Right */}
          <div
            ref={step1Ref}
            className={cn(
              "bg-white rounded-lg overflow-hidden mb-12 shadow-sm transition-all duration-1000 ease-out",
              step1Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
            )}
          >
            <div className="flex flex-col md:flex-row md:h-[450px]">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute top-6 left-6 bg-[#FFC459] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10 text-xl">
                  1
                </div>
                <Image
                  src="/images/mezclar.png"
                  alt="Paso 1: Mezcla de masa de maíz con queso Turrialba y sal en un recipiente grande"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 md:mb-6">
                  Mezcla la masa con el queso
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  En un recipiente grande, mezcla la masa de maíz con el queso Turrialba rallado hasta obtener una
                  mezcla homogénea. Añade la sal y mezcla bien para distribuirla uniformemente. El queso Turrialba,
                  producido localmente, aporta un sabor único a esta receta tradicional.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - Right to Left */}
          <div
            ref={step2Ref}
            className={cn(
              "bg-white rounded-lg overflow-hidden mb-12 shadow-sm transition-all duration-1000 ease-out",
              step2Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
            )}
          >
            <div className="flex flex-col md:flex-row md:h-[450px]">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute top-6 left-6 bg-[#FFC459] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10 text-xl">
                  2
                </div>
                <Image
                  src="/images/bolitas-masa.png"
                  alt="Paso 2: Formación de bolitas de masa y aplanado para formar las tortillas"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 md:mb-6">
                  Forma las bolitas y aplánalas
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Toma porciones de la mezcla y forma bolitas del tamaño de una pelota de golf. Aplánalas entre tus
                  manos o con una prensa para tortillas hasta obtener un grosor de aproximadamente 1/4 de pulgada. Esta
                  técnica ha sido transmitida por generaciones en la región de Turrialba.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 - Left to Right */}
          <div
            ref={step3Ref}
            className={cn(
              "bg-white rounded-lg overflow-hidden mb-12 shadow-sm transition-all duration-1000 ease-out",
              step3Visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16",
            )}
          >
            <div className="flex flex-col md:flex-row md:h-[450px]">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute top-6 left-6 bg-[#FFC459] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10 text-xl">
                  3
                </div>
                <Image
                  src="/images/tortillas-comal.png"
                  alt="Paso 3: Tortillas cocinándose en un comal o sartén caliente hasta dorarse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 md:mb-6">Cocina en el comal</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Calienta un comal o sartén a fuego medio-alto. Cocina las tortillas por ambos lados hasta que estén
                  doradas y el queso comience a derretirse, aproximadamente 2-3 minutos por lado. Tradicionalmente se
                  usa un comal de barro, pero una sartén antiadherente funciona bien.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 - Right to Left */}
          <div
            ref={step4Ref}
            className={cn(
              "bg-white rounded-lg overflow-hidden mb-12 shadow-sm transition-all duration-1000 ease-out",
              step4Visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16",
            )}
          >
            <div className="flex flex-col md:flex-row md:h-[450px]">
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <div className="absolute top-6 left-6 bg-[#FFC459] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10 text-xl">
                  4
                </div>
                <Image
                  src="/images/tortillas-servidas-natilla.png"
                  alt="Paso 4: Tortillas de queso servidas con natilla orgánica por encima"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 md:mb-6">Sirve con la natilla</h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  Sirve las tortillas calientes con una generosa porción de natilla orgánica por encima. También puedes
                  acompañarlas con aguacate, frijoles o un café recién hecho para una experiencia auténtica de
                  Turrialba. La natilla orgánica local complementa perfectamente el sabor del queso.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-16 border-t border-gray-200 pt-8 max-w-4xl mx-auto">
          Esta receta es parte de la colección de 29 platos tradicionales de Turrialba que Don Pepe y elguche.com están
          explorando. ¡Comparte tu experiencia y sigue nuestras aventuras gastronómicas!
        </p>
      </div>
    </section>
  )
}
