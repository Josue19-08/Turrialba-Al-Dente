"use client"

import { useState } from "react"

export interface Ingredient {
  name: string
  description: string
  quantity: string
  image: string
}

export interface Step {
  number: number
  title: string
  description: string
  image: string
}

export interface Recipe {
  id: string
  title: string
  description: string
  prepTime: string
  difficulty: string
  servings: number
  ingredients: Ingredient[]
  steps: Step[]
  footer: string
}

export function useRecipe(recipeId: string) {
  const [recipe, setRecipe] = useState<Recipe>({
    id: "tortillas-queso-turrialba",
    title: "Tortillas de Queso Turrialbeño con Natilla Orgánica",
    description:
      "En las montañas de Turrialba, donde el queso es tan fresco como el aire de la región, nace esta receta. Don Pepe descubrió esta joya gastronómica durante su exploración con elguche.com, destacando los ingredientes orgánicos y las técnicas tradicionales que hacen de Turrialba un centro gastronómico de nivel mundial.",
    prepTime: "30 min",
    difficulty: "Fácil",
    servings: 4,
    ingredients: [
      {
        name: "Masa de Maíz",
        description: "La base de la tortilla. Fresca y suave.",
        quantity: "2 tazas",
        image: "/placeholder-88ixa.png",
      },
      {
        name: "Queso Turrialba",
        description: "Queso artesanal local, único en su textura.",
        quantity: "1 taza rallado",
        image: "/placeholder.svg?height=48&width=48&query=cheese",
      },
      {
        name: "Natilla Orgánica",
        description: "Producida por ganaderos locales de Turrialba.",
        quantity: "1/2 taza",
        image: "/placeholder.svg?height=48&width=48&query=cream",
      },
      {
        name: "Sal",
        description: "Preferiblemente sal marina.",
        quantity: "1 cucharadita",
        image: "/placeholder.svg?height=48&width=48&query=salt",
      },
    ],
    steps: [
      {
        number: 1,
        title: "Mezcla la masa con el queso",
        description:
          "En un recipiente grande, mezcla la masa de maíz con el queso Turrialba rallado hasta obtener una mezcla homogénea. Añade la sal y mezcla bien para distribuirla uniformemente. El queso Turrialba, producido localmente, aporta un sabor único a esta receta tradicional.",
        image: "/placeholder.svg?height=400&width=600&query=mixing corn masa with cheese",
      },
      {
        number: 2,
        title: "Forma las bolitas y aplánalas",
        description:
          "Toma porciones de la mezcla y forma bolitas del tamaño de una pelota de golf. Aplánalas entre tus manos o con una prensa para tortillas hasta obtener un grosor de aproximadamente 1/4 de pulgada. Esta técnica ha sido transmitida por generaciones en la región de Turrialba.",
        image: "/placeholder.svg?height=400&width=600&query=forming corn tortillas by hand",
      },
      {
        number: 3,
        title: "Cocina en el comal",
        description:
          "Calienta un comal o sartén a fuego medio-alto. Cocina las tortillas por ambos lados hasta que estén doradas y el queso comience a derretirse, aproximadamente 2-3 minutos por lado. Tradicionalmente se usa un comal de barro, pero una sartén antiadherente funciona bien.",
        image: "/placeholder.svg?height=400&width=600&query=cooking corn tortillas on griddle",
      },
      {
        number: 4,
        title: "Sirve con la natilla",
        description:
          "Sirve las tortillas calientes con una generosa porción de natilla orgánica por encima. También puedes acompañarlas con aguacate, frijoles o un café recién hecho para una experiencia auténtica de Turrialba. La natilla orgánica local complementa perfectamente el sabor del queso.",
        image: "/placeholder.svg?height=400&width=600&query=corn tortilla with cream on top",
      },
    ],
    footer:
      "Esta receta es parte de la colección de 29 platos tradicionales de Turrialba que Don Pepe y elguche.com están explorando. ¡Comparte tu experiencia y sigue nuestras aventuras gastronómicas!",
  })

  return { recipe }
}
