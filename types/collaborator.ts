export interface SocialLinks {
  instagram?: string
  youtube?: string
  website?: string
}

export interface Collaborator {
  id: string
  name: string
  title: string
  description: string
  image: string
  logo?: string
  socialLinks: SocialLinks
}
