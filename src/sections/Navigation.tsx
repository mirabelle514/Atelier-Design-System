import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'design-system', label: 'Design System' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border-light z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('hero')}
          className="text-xl font-bold text-brand-primary hover:text-brand-primary-hover transition-colors"
        >
          Mirabelle Doiron
        </button>
        
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button 
                onClick={() => handleNavClick(link.id)}
                className="text-brand-text-muted text-sm hover:text-brand-text transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button 
          className="md:hidden text-brand-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-surface border-t border-brand-border">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => handleNavClick(link.id)}
                  className="text-brand-text-muted text-sm hover:text-brand-text transition-colors block w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
