import { ExternalLink, Github, Figma, Workflow, Palette } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  highlights: string[]
  type: string
  icon: React.ReactNode
  githubUrl?: string
  liveUrl?: string
  figmaUrl?: string
}

const projects: Project[] = [
  {
    title: "Design-to-Code Bridge",
    description: "AI-powered tool that maps Figma designs to component libraries",
    longDescription: "Multi-library analysis tool that matches Figma components against design system libraries (LMDS, EUI, Beaker, etc.) using a 5-tier matching algorithm. Features pattern learning from repositories, confidence scoring, and automatic code generation for unmatched components.",
    technologies: ["React", "TypeScript", "Claude AI", "Figma API", "Node.js", "PostgreSQL"],
    highlights: [
      "5-tier matching algorithm (exact, semantic, import-based, fuzzy, generation)",
      "Pattern learning from existing codebases",
      "Multi-library simultaneous analysis",
      "Design token mapping across systems"
    ],
    type: "AI Developer Tool",
    icon: <Figma className="h-6 w-6 text-brand-primary-light" />,
    githubUrl: "https://github.com/mirabelle514/Design-to-Code-Bridge"
  },
  {
    title: "Workflow Hub",
    description: "Visual workflow automation platform with Electron desktop app",
    longDescription: "Local-first workflow automation tool with drag-and-drop canvas, 50+ pre-built templates, and cross-platform Electron desktop app. Features secure credential management, real-time execution visualization, and SQLite storage for complete privacy.",
    technologies: ["React", "TypeScript", "Electron", "SQLite", "Tailwind CSS", "Vite"],
    highlights: [
      "Cross-platform Electron app (Win/Mac/Linux)",
      "Local-first architecture with SQLite",
      "50+ workflow templates across 11 categories",
      "Secure credential encryption"
    ],
    type: "Desktop Application",
    icon: <Workflow className="h-6 w-6 text-brand-primary-light" />,
    githubUrl: "https://github.com/mirabelle514/workflow-hub"
  },
  {
    title: "Atelier Design System",
    description: "Production-ready React component library with design tokens",
    longDescription: "Comprehensive design system with 50+ accessible components, design tokens exportable in multiple formats (CSS, JS, JSON), and full TypeScript support. Built on Radix UI primitives with Class Variance Authority for type-safe variants.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "CVA", "Storybook"],
    highlights: [
      "50+ production-ready components",
      "Design tokens in CSS, JS, JSON formats",
      "WCAG 2.1 AA accessibility",
      "Type-safe component variants"
    ],
    type: "Design System",
    icon: <Palette className="h-6 w-6 text-brand-primary-light" />,
    githubUrl: "https://github.com/mirabelle514/Atelier-Design-System"
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden transition-all duration-300 hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/10 group">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-primary-light/20 flex items-center justify-center">
            {project.icon}
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-brand-surface-elevated text-brand-secondary border border-brand-border">
            {project.type}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-brand-text mb-2 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-brand-text-muted mb-4 text-sm leading-relaxed">
          {project.longDescription}
        </p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-brand-text-subtle uppercase tracking-wider mb-2">Key Features</h4>
          <ul className="space-y-1">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-brand-text-muted flex items-start gap-2">
                <span className="text-brand-secondary mt-1">-</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded bg-brand-surface-elevated text-brand-text-muted border border-brand-border"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-4 border-t border-brand-border">
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-primary transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-primary transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            AI developer tools, design systems, and desktop applications built at the intersection of design and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
