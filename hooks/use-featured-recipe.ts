"use client"

import { useState, useEffect } from "react"

export interface Recipe {
  id: string
  title: string
  description: string
  image: string
  slug: string
}

export function useFeaturedRecipe() {
  const [featuredRecipe, setFeaturedRecipe] = useState<Recipe>({
    id: "1",
    title: "Tortillas de Queso Turrialbeño con Natilla Orgánica",
    description:
      "Una de las 29 recetas tradicionales que Don Pepe y elguche.com están explorando en la región de Turrialba.",
    image: "/images/tortillas-queso.png",
    slug: "tortillas-queso-turrialba",
  })

  // This would typically fetch from an API
  useEffect(() => {
    // Simulating an API call
    // In a real app, you would fetch from your backend
    const getFeaturedRecipe = async () => {
      try {
        // const response = await fetch('/api/featured-recipe')
        // const data = await response.json()
        // setFeaturedRecipe(data)
      } catch (error) {
        console.error("Error fetching featured recipe:", error)
      }
    }

    // Uncomment to enable API fetching
    // getFeaturedRecipe()
  }, [])

  return { featuredRecipe }
}
