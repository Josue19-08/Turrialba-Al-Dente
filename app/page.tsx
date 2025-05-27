import NavigationBar from "@/components/navigation-bar"
import HomeHero from "@/components/home-hero"
import CollaboratorsSection from "@/components/collaborators-section"
import RecipeSection from "@/components/recipe-section"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavigationBar />
      <section id="inicio">
        <HomeHero />
      </section>
      <div className="h-20"></div>
      <section id="nosotros">
        <CollaboratorsSection />
      </section>
      <div className="h-20"></div>
      <section id="receta">
        <RecipeSection />
      </section>
      <div className="h-20"></div>
      <section id="contacto">
        <NewsletterSection />
      </section>
      <Footer />
    </main>
  )
}
