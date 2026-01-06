import { Code, Palette, Cpu, Zap } from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    icon: <Code className="h-5 w-5 text-brand-primary-light" />,
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "CSS Animations", "Responsive Design"]
  },
  {
    title: "Design Systems",
    icon: <Palette className="h-5 w-5 text-brand-primary-light" />,
    skills: ["Component Libraries", "Design Tokens", "Figma", "Storybook", "Accessibility (WCAG)", "Radix UI"]
  },
  {
    title: "AI Integration",
    icon: <Cpu className="h-5 w-5 text-brand-primary-light" />,
    skills: ["Claude API", "OpenAI", "Prompt Engineering", "AI-Powered Tools", "MCP Protocol"]
  },
  {
    title: "Desktop & Tools",
    icon: <Zap className="h-5 w-5 text-brand-primary-light" />,
    skills: ["Electron", "Cross-Platform Apps", "SQLite", "Node.js", "Developer Experience"]
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">About Me</h2>
            <div className="space-y-4 text-brand-text-muted">
              <p className="text-lg leading-relaxed">
                I'm a Design Engineer who lives at the intersection of design and code. 
                I think in systems, obsess over details, and ship polished products that users love.
              </p>
              <p className="leading-relaxed">
                My background spans frontend engineering, mobile development, and AI integration. 
                I've built everything from design systems with 50+ components to AI-powered developer tools 
                that bridge the gap between Figma and code.
              </p>
              <p className="leading-relaxed">
                I'm particularly excited about building tools for developers - the kind of 
                thoughtful, keyboard-first interfaces that make complex workflows feel effortless. 
                I believe great developer tools should feel invisible: fast, intuitive, and 
                always one step ahead of what you need.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, I'm probably exploring new interaction paradigms, 
                contributing to design systems, or prototyping ideas that might just be crazy enough to work.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-brand-text mb-6">Skills & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className="bg-brand-surface-elevated border border-brand-border rounded-xl p-5 hover:border-brand-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary-light/20 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h4 className="font-semibold text-brand-text text-sm">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs px-2 py-1 rounded bg-brand-surface text-brand-text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-brand-bg border border-brand-border rounded-xl">
              <h4 className="font-semibold text-brand-text mb-3">What I'm Looking For</h4>
              <p className="text-brand-text-muted text-sm leading-relaxed">
                I'm seeking a Design Engineer role where I can build production-quality UI, 
                contribute to design systems, and help define new interaction paradigms - 
                especially in AI-powered developer tools. I thrive in small, talent-dense teams 
                that value craft, speed, and shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
