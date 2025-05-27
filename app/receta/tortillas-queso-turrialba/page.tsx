import Image from "next/image"
import NavigationBar from "@/components/navigation-bar"
import { Clock, Gauge, Users } from "lucide-react"

export default function RecipePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <NavigationBar />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#1e3a8a] text-center mb-4">
          Tortillas de Queso Turrialbeño con Natilla Orgánica
        </h1>

        <div className="w-32 h-1 bg-[#FFC459] mx-auto mb-8"></div>

        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          En las montañas de Turrialba, donde el queso es tan fresco como el aire de la región, nace esta receta. Don
          Pepe descubrió esta joya gastronómica durante su exploración con elguche.com, destacando los ingredientes
          orgánicos y las técnicas tradicionales que hacen de Turrialba un centro gastronómico de nivel mundial.
        </p>

        <div className="flex justify-center gap-12 mb-16">
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
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-[#FFC459] text-white w-8 h-8 rounded-md flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-xl font-bold text-[#1e3a8a]">Ingredientes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFF5E0] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/placeholder-88ixa.png"
                  alt="Masa de Maíz"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-[#1e3a8a]">Masa de Maíz</h3>
                <p className="text-gray-600 text-sm">La base de la tortilla. Fresca y suave.</p>
                <p className="text-[#FFC459] text-xs mt-1">2 tazas</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFF5E0] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=48&width=48&query=cheese"
                  alt="Queso Turrialba"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-[#1e3a8a]">Queso Turrialba</h3>
                <p className="text-gray-600 text-sm">Queso artesanal local, único en su textura.</p>
                <p className="text-[#FFC459] text-xs mt-1">1 taza rallado</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFF5E0] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=48&width=48&query=cream"
                  alt="Natilla Orgánica"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-[#1e3a8a]">Natilla Orgánica</h3>
                <p className="text-gray-600 text-sm">Producida por ganaderos locales de Turrialba.</p>
                <p className="text-[#FFC459] text-xs mt-1">1/2 taza</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFF5E0] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=48&width=48&query=salt"
                  alt="Sal"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-[#1e3a8a]">Sal</h3>
                <p className="text-gray-600 text-sm">Preferiblemente sal marina.</p>
                <p className="text-[#FFC459] text-xs mt-1">1 cucharadita</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preparation Section */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-[#FFC459] text-white w-8 h-8 rounded-md flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-xl font-bold text-[#1e3a8a]">Preparación</h2>
          </div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="md:w-1/2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#FFC459] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                  1
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=mixing corn masa with cheese"
                  alt="Mezcla la masa con el queso"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Mezcla la masa con el queso</h3>
              <p className="text-gray-600">
                En un recipiente grande, mezcla la masa de maíz con el queso Turrialba rallado hasta obtener una mezcla
                homogénea. Añade la sal y mezcla bien para distribuirla uniformemente. El queso Turrialba, producido
                localmente, aporta un sabor único a esta receta tradicional.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="md:w-1/2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#FFC459] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                  2
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=forming corn tortillas by hand"
                  alt="Forma las bolitas y aplánalas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Forma las bolitas y aplánalas</h3>
              <p className="text-gray-600">
                Toma porciones de la mezcla y forma bolitas del tamaño de una pelota de golf. Aplánalas entre tus manos
                o con una prensa para tortillas hasta obtener un grosor de aproximadamente 1/4 de pulgada. Esta técnica
                ha sido transmitida por generaciones en la región de Turrialba.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="md:w-1/2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#FFC459] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                  3
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=cooking corn tortillas on griddle"
                  alt="Cocina en el comal"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Cocina en el comal</h3>
              <p className="text-gray-600">
                Calienta un comal o sartén a fuego medio-alto. Cocina las tortillas por ambos lados hasta que estén
                doradas y el queso comience a derretirse, aproximadamente 2-3 minutos por lado. Tradicionalmente se usa
                un comal de barro, pero una sartén antiadherente funciona bien.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="md:w-1/2">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <div className="absolute top-4 left-4 bg-[#FFC459] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                  4
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600&query=corn tortilla with cream on top"
                  alt="Sirve con la natilla"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Sirve con la natilla</h3>
              <p className="text-gray-600">
                Sirve las tortillas calientes con una generosa porción de natilla orgánica por encima. También puedes
                acompañarlas con aguacate, frijoles o un café recién hecho para una experiencia auténtica de Turrialba.
                La natilla orgánica local complementa perfectamente el sabor del queso.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-16 border-t border-gray-200 pt-8">
          Esta receta es parte de la colección de 29 platos tradicionales de Turrialba que Don Pepe y elguche.com están
          explorando. ¡Comparte tu experiencia y sigue nuestras aventuras gastronómicas!
        </p>
      </div>
    </main>
  )
}
