import { Github, Linkedin, Mail, FileText } from 'lucide-react'

interface PortfolioHeroProps {
  scrollToSection: (sectionId: string) => void
}

export function PortfolioHero({ scrollToSection }: PortfolioHeroProps) {
  return (
    <header className="pt-32 pb-20 px-6 bg-gradient-to-br from-brand-bg to-brand-surface text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-block bg-brand-surface border border-brand-border px-4 py-2 rounded-full text-sm text-brand-secondary mb-8">
          Available for opportunities
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="text-brand-text">Design</span>{' '}
          <span className="text-brand-primary">Engineer</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto mb-4">
          Building AI developer tools at the intersection of design and code.
          I create polished interfaces, design systems, and tools that help developers ship faster.
        </p>
        <p className="text-base text-brand-text-subtle max-w-xl mx-auto mb-8">
          TypeScript, React, Electron, Figma, Design Systems, AI Integration
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => scrollToSection('projects')}
            className="bg-brand-primary hover:bg-brand-primary-hover text-brand-text px-8 py-4 text-lg font-medium rounded-lg transition-all hover:scale-105"
          >
            View Projects
          </button>
          <button 
            onClick={() => scrollToSection('design-system')}
            className="bg-transparent border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-bg px-8 py-4 text-lg font-medium rounded-lg transition-all"
          >
            Design System
          </button>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/mirabelle514" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-text-muted hover:text-brand-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/mirabelle-doiron-84955a28/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-text-muted hover:text-brand-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:mirabelle.doiron@gmail.com"
            className="text-brand-text-muted hover:text-brand-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a 
            href="/resume.pdf"
            download
            className="text-brand-text-muted hover:text-brand-primary transition-colors"
            aria-label="Download Resume"
          >
            <FileText className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  )
}
