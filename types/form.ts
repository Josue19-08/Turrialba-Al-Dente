export interface ContactFormData {
  nombre: string
  email: string
  ciudad: string
  experiencia: string
  foto: File | null
  newsletter: boolean
}

export interface FormErrors {
  nombre?: string
  email?: string
  ciudad?: string
  experiencia?: string
  newsletter?: string
  general?: string
}

export interface SubmitResponse {
  success: boolean
  message?: string
  error?: string
}
