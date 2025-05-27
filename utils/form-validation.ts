import type { ContactFormData, FormErrors } from "@/types/form"

export function validateContactForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {}

  // Validar nombre
  if (!data.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio"
  } else if (data.nombre.trim().length < 2) {
    errors.nombre = "El nombre debe tener al menos 2 caracteres"
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!data.email.trim()) {
    errors.email = "El correo electrónico es obligatorio"
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Por favor ingresa un correo electrónico válido"
  }

  // Validar ciudad
  if (!data.ciudad.trim()) {
    errors.ciudad = "La ciudad es obligatoria"
  }

  // Validar experiencia
  if (!data.experiencia.trim()) {
    errors.experiencia = "Por favor comparte tu experiencia con la receta"
  } else if (data.experiencia.trim().length < 10) {
    errors.experiencia = "La experiencia debe tener al menos 10 caracteres"
  }

  // Validar checkbox de autorización
  if (!data.newsletter) {
    errors.newsletter = "Debes aceptar los términos para continuar"
  }

  return errors
}

export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0
}
