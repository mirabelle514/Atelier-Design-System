import './App.css'
import {
  Navigation,
  PortfolioHero,
  ProjectsSection,
  AboutSection,
  DesignSystemSection,
  ContactSection,
  Footer
} from './sections'

function App() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Navigation scrollToSection={scrollToSection} />
      <div id="hero">
        <PortfolioHero scrollToSection={scrollToSection} />
      </div>
      <ProjectsSection />
      <AboutSection />
      <DesignSystemSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
