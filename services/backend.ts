import { createClient } from '@supabase/supabase-js'
import type { ContactFormData, SubmitResponse } from "@/types/form"

// Configuración de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Función principal que ya es llamada desde el formulario
export async function submitToBackend(data: ContactFormData): Promise<SubmitResponse> {
  try {
    // Subir imagen si existe
    let fotoUrl = null
    if (data.foto) {
      fotoUrl = await uploadImage(data.foto)
    }

    // Insertar datos en la tabla
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{
        nombre: data.nombre,
        email: data.email,
        ciudad: data.ciudad,
        experiencia: data.experiencia,
        foto_url: fotoUrl,
        newsletter_consent: data.newsletter,
        created_at: new Date().toISOString()
      }])

    if (error) {
      console.error('Error al insertar:', error)
      return {
        success: false,
        error: "Error al guardar los datos"
      }
    }

    return {
      success: true,
      message: "Experiencia enviada exitosamente"
    }

  } catch (error) {
    console.error('Error inesperado:', error)
    return {
      success: false,
      error: "Error inesperado del servidor"
    }
  }
}

// Función auxiliar para subir imagen al bucket
async function uploadImage(file: File): Promise<string | null> {
  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `recipe-photos/${fileName}`

    const { error } = await supabase
      .storage
      .from('images')
      .upload(filePath, file)

    if (error) {
      console.error('Error subiendo imagen:', error)
      return null
    }

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath)

    return publicUrl
  } catch (error) {
    console.error('Error en uploadImage:', error)
    return null
  }
}
