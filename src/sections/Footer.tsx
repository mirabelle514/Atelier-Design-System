import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-brand-text-muted text-sm">
          {currentYear} Mirabelle Doiron. Built with React, TypeScript, and Tailwind CSS.
        </div>
        <div className="flex items-center gap-2 text-brand-text-subtle text-sm">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-brand-primary" />
          <span>using the Atelier Design System</span>
        </div>
      </div>
    </footer>
  )
}
