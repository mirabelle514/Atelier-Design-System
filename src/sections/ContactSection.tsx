import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-brand-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Let's Connect</h2>
        <p className="text-lg text-brand-text-muted mb-8 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, especially roles focused on 
          design engineering, AI developer tools, and building polished user experiences.
        </p>
        
        <div className="bg-brand-surface border border-brand-border rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="mailto:mirabelle.doiron@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-brand-surface-elevated border border-brand-border hover:border-brand-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary-light/20 flex items-center justify-center group-hover:bg-brand-primary-light/30 transition-colors">
                <Mail className="h-5 w-5 text-brand-primary-light" />
              </div>
              <div className="text-left">
                <div className="text-sm text-brand-text-subtle">Email</div>
                <div className="text-brand-text group-hover:text-brand-primary transition-colors">mirabelle.doiron@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="https://github.com/mirabelle514"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-brand-surface-elevated border border-brand-border hover:border-brand-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary-light/20 flex items-center justify-center group-hover:bg-brand-primary-light/30 transition-colors">
                <Github className="h-5 w-5 text-brand-primary-light" />
              </div>
              <div className="text-left">
                <div className="text-sm text-brand-text-subtle">GitHub</div>
                <div className="text-brand-text group-hover:text-brand-primary transition-colors">@mirabelle514</div>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mirabelle-doiron-84955a28/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-brand-surface-elevated border border-brand-border hover:border-brand-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary-light/20 flex items-center justify-center group-hover:bg-brand-primary-light/30 transition-colors">
                <Linkedin className="h-5 w-5 text-brand-primary-light" />
              </div>
              <div className="text-left">
                <div className="text-sm text-brand-text-subtle">LinkedIn</div>
                <div className="text-brand-text group-hover:text-brand-primary transition-colors">Mirabelle Doiron</div>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-4 rounded-lg bg-brand-surface-elevated border border-brand-border">
              <div className="w-12 h-12 rounded-full bg-brand-primary-light/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-brand-primary-light" />
              </div>
              <div className="text-left">
                <div className="text-sm text-brand-text-subtle">Location</div>
                <div className="text-brand-text">Open to SF / NY / Remote</div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-brand-text-subtle text-sm">
          Prefer email for initial contact. I typically respond within 24-48 hours.
        </p>
      </div>
    </section>
  )
}
