"use client"

import { useState } from "react"
import type { Collaborator } from "@/types/collaborator"

export function useCollaborators() {
  const [collaborators] = useState<Collaborator[]>([
    {
      id: "don-pepe",
      name: "Don Pepe",
      title: "AVENTURERO & FOTÓGRAFO",
      description:
        "A sus 29 años, Don Pepe se ha ganado una reputación como aventurero y fotógrafo apasionado por descubrir sabores exóticos. Conocido por probar todo tipo de comidas elaboradas con ingredientes autóctonos de las regiones que visita, ahora se embarca en una aventura gastronómica por Turrialba junto a elguche.com. Sus seguidores, jóvenes entre 24 y 28 años amantes de la aventura, lo acompañan virtualmente en cada nueva experiencia culinaria.",
      image: "/images/don-pepe.png",
      logo: "/images/logo-don-pepe-negro.png",
      socialLinks: {
        instagram: "https://instagram.com/donpepe",
        youtube: "https://youtube.com/donpepe",
        website: "https://donpepe.com",
      },
    },
    {
      id: "el-guche",
      name: "El Guche",
      title: "REVISTA GASTRONÓMICA DIGITAL",
      description:
        "elguche.com es una reconocida revista gastronómica digital especializada en la exploración de platos tradicionales deconstruidos. Con una audiencia de 29 a 36 años, tech-savvy y apasionada por la gastronomía, ahora busca expandirse a un público más joven. Su colaboración con Don Pepe les permite crear un puente hacia nuevas audiencias mientras promueven los productos de productores locales de Turrialba, una región conocida por sus ingredientes únicos, frescos y orgánicos.",
      image: "/images/el-guche.png",
      logo: "/images/logo-el-guche-negro.png",
      socialLinks: {
        instagram: "https://instagram.com/elguche",
        youtube: "https://youtube.com/elguche",
        website: "https://elguche.com",
      },
    },
  ])

  return { collaborators }
}
