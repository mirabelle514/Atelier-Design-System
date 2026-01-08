import './App.css'
import { useState } from 'react'
import { 
  Zap, 
  Lightbulb, 
  CheckCircle, 
  Sparkles, 
  Menu, 
  X,
  Check
} from 'lucide-react'

const FIGMA_LIBRARY_URL =
  'https://www.figma.com/design/5JADpXkx4NjukMAmWfvdFq/Atelier?node-id=7-917&t=b5Hbc0eZ4u6vIXcT-1'

interface ColorSwatchProps {
  token: string
  hex: string
  usage: string
  colorClass: string
}

function ColorSwatch({ token, hex, usage, colorClass }: ColorSwatchProps) {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden transition-all duration-150 hover:border-brand-primary hover:scale-102">
      <div className={`h-20 ${colorClass}`} />
      <div className="p-4">
        <div className="font-mono text-xs text-brand-primary-light mb-1">{token}</div>
        <div className="font-mono text-sm text-brand-text mb-1">{hex}</div>
        <div className="text-xs text-brand-text-muted">{usage}</div>
      </div>
    </div>
  )
}

interface TypeSampleProps {
  className: string
  label: string
  specs: string
  text: string
}

function TypeSample({ className, label, specs, text }: TypeSampleProps) {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-6 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-4 items-center">
      <div className={`text-brand-text ${className}`}>{text}</div>
      <div className="md:text-right">
        <span className="font-mono text-xs text-brand-primary-light block mb-1">{label}</span>
        <span className="text-xs text-brand-text-muted">{specs}</span>
      </div>
    </div>
  )
}

interface CardDemoProps {
  icon: React.ReactNode
  title: string
  description: string
  scale?: boolean
  metric?: string
}

function CardDemo({ icon, title, description, scale, metric }: CardDemoProps) {
  return (
    <div className={`bg-brand-surface border border-brand-border rounded-xl p-6 transition-all duration-150 hover:border-brand-primary/50 ${scale ? 'hover:scale-105' : ''}`}>
      <div className="w-12 h-12 rounded-full bg-brand-primary-light/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-brand-text mb-3">{title}</h3>
      <p className="text-base text-brand-text-muted leading-relaxed">{description}</p>
      {metric && (
        <div className="flex items-center gap-2 text-brand-secondary mt-4">
          <Check className="h-5 w-5" />
          <span className="font-semibold">{metric}</span>
        </div>
      )}
    </div>
  )
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { href: '#colors', label: 'Colors' },
    { href: '#typography', label: 'Typography' },
    { href: '#components', label: 'Components' },
    { href: '#layout', label: 'Layout' },
    { href: '#effects', label: 'Effects' },
    { href: '#accessibility', label: 'Accessibility' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border-light z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-brand-primary">Atelier</div>
        
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-brand-text-muted text-sm hover:text-brand-text transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={FIGMA_LIBRARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-text-muted text-sm hover:text-brand-text transition-colors"
          >
            Figma Library
          </a>
        </div>

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
              <li key={link.href}>
                <a 
                  href={link.href} 
                  className="text-brand-text-muted text-sm hover:text-brand-text transition-colors block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={FIGMA_LIBRARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-muted text-sm hover:text-brand-text transition-colors block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Figma Library
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

function HeroSection() {
  return (
    <header className="pt-32 pb-20 px-6 bg-gradient-to-br from-brand-bg to-brand-surface text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative z-10">
        <span className="inline-block bg-brand-surface border border-brand-border px-4 py-2 rounded-full text-sm text-brand-secondary mb-8">
          Design System v2.0
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          <span className="text-brand-primary">Atelier</span>
          <br />
          Design System
        </h1>
        <p className="text-lg md:text-xl text-brand-text-muted max-w-xl mx-auto mb-4">
          A comprehensive design system for The Wednesday Collective.
        </p>
      </div>
    </header>
  )
}

function ColorsSection() {
  return (
    <section id="colors" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Color Palette</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            A carefully crafted dark theme palette optimized for readability and visual hierarchy.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-brand-text mb-4">Primary Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorSwatch token="brand-bg" hex="#1a1a2e" usage="Main page background" colorClass="bg-brand-bg border-b border-brand-border" />
            <ColorSwatch token="brand-surface" hex="#16213e" usage="Card backgrounds, sections" colorClass="bg-brand-surface" />
            <ColorSwatch token="brand-surface-elevated" hex="#1f2b47" usage="Elevated elements, hover states" colorClass="bg-brand-surface-elevated" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-brand-text mb-4">Accent Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <ColorSwatch token="brand-primary" hex="#e94560" usage="Primary buttons, headings, CTAs" colorClass="bg-brand-primary" />
            <ColorSwatch token="brand-primary-hover" hex="#d63d56" usage="Button hover states" colorClass="bg-brand-primary-hover" />
            <ColorSwatch token="brand-primary-light" hex="#f8b4c4" usage="Icons, subtle accents" colorClass="bg-brand-primary-light" />
            <ColorSwatch token="brand-secondary" hex="#4ecdc4" usage="Success states, highlights, metrics" colorClass="bg-brand-secondary" />
            <ColorSwatch token="brand-secondary-light" hex="#7eddd6" usage="Secondary hover states" colorClass="bg-brand-secondary-light" />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-brand-text mb-4">Text Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorSwatch token="brand-text" hex="#ffffff" usage="Primary text, headings" colorClass="bg-white border-b border-brand-border" />
            <ColorSwatch token="brand-text-muted" hex="#9ca3af" usage="Body text, descriptions" colorClass="bg-brand-text-muted" />
            <ColorSwatch token="brand-text-subtle" hex="#6b7280" usage="Captions, metadata" colorClass="bg-brand-text-subtle" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-brand-text mb-4">Border & Utility Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorSwatch token="brand-border" hex="#4a3f6b" usage="Card borders, dividers" colorClass="bg-brand-border" />
            <ColorSwatch token="brand-border-light" hex="rgba(255,255,255,0.1)" usage="Subtle borders, nav border" colorClass="bg-white/10 border border-dashed border-brand-border" />
            <ColorSwatch token="brand-warning" hex="#ffd93d" usage="Warning states" colorClass="bg-brand-warning" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TypographySection() {
  return (
    <section id="typography" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Typography</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Inter font family with a carefully designed type scale for clear hierarchy.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <TypeSample className="text-display-xl" label="text-display-xl" specs="64px / 1.1 / 700" text="Display XL" />
          <TypeSample className="text-display-lg" label="text-display-lg" specs="48px / 1.2 / 700" text="Display Large" />
          <TypeSample className="text-display-md" label="text-display-md" specs="36px / 1.3 / 700" text="Display Medium" />
          <TypeSample className="text-display-sm" label="text-display-sm" specs="24px / 1.4 / 600" text="Display Small" />
          <TypeSample className="text-body-lg" label="text-body-lg" specs="18px / 1.75 / 400" text="Body Large - Lead paragraphs and important text" />
          <TypeSample className="text-body-md" label="text-body-md" specs="16px / 1.75 / 400" text="Body Medium - Standard body text for content" />
          <TypeSample className="text-body-sm" label="text-body-sm" specs="14px / 1.5 / 400" text="Body Small - Captions and metadata" />
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-4">Responsive Typography</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-brand-surface-elevated border border-brand-border rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Breakpoint</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Hero Size</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Section Size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4 text-sm text-brand-text-muted">Mobile (&lt; 768px)</td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">text-4xl</code></td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">text-3xl</code></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4 text-sm text-brand-text-muted">Tablet (768px - 1024px)</td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">text-5xl</code></td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">text-4xl</code></td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Desktop (&gt; 1024px)</td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">text-6xl</code></td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">text-4xl</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function ComponentsSection() {
  return (
    <section id="components" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Components</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Reusable UI components built with the design system tokens.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-6">Buttons</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-text px-8 py-4 text-lg font-medium rounded-lg transition-colors">
            Primary Button
          </button>
          <button className="bg-transparent border-2 border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-bg px-8 py-4 text-lg font-medium rounded-lg transition-all">
            Outline Button
          </button>
          <button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-text px-4 py-2 text-sm font-medium rounded-lg transition-colors">
            Small Button
          </button>
        </div>

        <div className="bg-brand-surface-elevated border border-brand-border rounded-lg p-4 mb-12 overflow-x-auto">
          <pre className="font-mono text-sm text-brand-text-muted whitespace-pre">
            <code>
              <span className="text-brand-primary">&lt;Button</span> <span className="text-brand-secondary">className</span>=<span className="text-brand-primary-light">"bg-brand-primary hover:bg-brand-primary-hover text-brand-text px-8 py-6 text-lg"</span><span className="text-brand-primary">&gt;</span>{'\n'}
              {'  '}Button Text{'\n'}
              <span className="text-brand-primary">&lt;/Button&gt;</span>
            </code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-6">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <CardDemo 
            icon={<Zap className="h-6 w-6 text-brand-primary-light" />}
            title="Feature Card"
            description="Standard feature card with icon, title, and description. Hover to see the border highlight effect."
          />
          <CardDemo 
            icon={<Lightbulb className="h-6 w-6 text-brand-primary-light" />}
            title="Product Card"
            description="Product card with scale effect on hover. Uses larger icon container with gradient background."
            scale
          />
          <CardDemo 
            icon={<CheckCircle className="h-6 w-6 text-brand-primary-light" />}
            title="Success Metrics"
            description="Card with success metric display."
            metric="40% efficiency increase"
          />
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-6">Icon Containers</h3>
        <div className="flex gap-8 items-end">
          <div>
            <div className="w-12 h-12 rounded-full bg-brand-primary-light/20 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-brand-primary-light" />
            </div>
            <p className="text-xs text-brand-text-muted mt-2">Small (48px)</p>
          </div>
          <div>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary/20 to-brand-primary-light/20 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-brand-primary" />
            </div>
            <p className="text-xs text-brand-text-muted mt-2">Large (64px)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpacingSection() {
  return (
    <section className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Spacing</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Consistent spacing tokens for layout and component design.
          </p>
        </div>

        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-brand-surface-elevated border border-brand-border rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Token</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Value</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">py-section-y</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">5rem (80px)</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Vertical section padding</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">px-section-x</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">1.5rem (24px)</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Horizontal section padding</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">p-6</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">1.5rem (24px)</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Card padding</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">gap-6</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">1.5rem (24px)</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Card grid gap</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">px-8 py-6</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">2rem / 1.5rem</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Large button padding</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">w-12 h-12</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">48px</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Small icon container</td>
              </tr>
              <tr>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">w-16 h-16</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">64px</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Large icon container</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-4">Grid System</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-brand-surface-elevated border border-brand-border rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Token</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Value</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">max-w-7xl</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">80rem (1280px)</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Max content width</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">max-w-4xl</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">56rem (896px)</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Narrow content</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">md:grid-cols-2</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">2 columns</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Tablet card layout</td>
              </tr>
              <tr>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">lg:grid-cols-3</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">3 columns</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Desktop card layout</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function LayoutSection() {
  return (
    <section id="layout" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Layout Patterns</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Page structure and section organization guidelines.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-4">Page Structure</h3>
        <div className="bg-brand-surface-elevated border border-brand-border rounded-lg p-4 mb-8 overflow-x-auto">
          <pre className="font-mono text-sm text-brand-text-muted whitespace-pre">
{`Navigation (fixed, bg-brand-bg/95, backdrop-blur)
        |
Hero Section (pt-32 pb-20, gradient background)
        |
Content Sections (py-20 px-6, alternating bg-brand-bg / bg-brand-surface)
        |
CTA Section (py-20 px-6)
        |
Footer (py-12 px-6, bg-brand-surface)`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-4">Section Alternation</h3>
        <p className="text-brand-text-muted mb-4">
          Alternate between <code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">bg-brand-bg</code> and <code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">bg-brand-surface</code> for visual rhythm:
        </p>
        <ol className="text-brand-text-muted space-y-2 pl-6 list-decimal">
          <li><strong className="text-brand-text">Hero:</strong> bg-brand-bg with gradient overlay</li>
          <li><strong className="text-brand-text">Problem:</strong> bg-brand-surface</li>
          <li><strong className="text-brand-text">Four Flavors:</strong> bg-brand-bg</li>
          <li><strong className="text-brand-text">Services:</strong> bg-brand-surface</li>
          <li><strong className="text-brand-text">Templates:</strong> bg-brand-bg</li>
          <li><strong className="text-brand-text">About:</strong> bg-brand-surface</li>
          <li><strong className="text-brand-text">Success Stories:</strong> bg-brand-bg</li>
          <li><strong className="text-brand-text">CTA:</strong> bg-brand-bg</li>
          <li><strong className="text-brand-text">Footer:</strong> bg-brand-surface</li>
        </ol>
      </div>
    </section>
  )
}

function EffectsSection() {
  return (
    <section id="effects" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Shadows & Effects</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Glow effects and shadows for depth and emphasis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-brand-surface-elevated shadow-brand-glow text-center">
            <p className="text-brand-text font-medium">Subtle Glow</p>
            <p className="text-sm text-brand-text-muted mt-2">shadow-brand-glow</p>
          </div>
          <div className="p-8 rounded-2xl bg-brand-surface-elevated shadow-brand-glow-lg text-center">
            <p className="text-brand-text font-medium">Large Glow</p>
            <p className="text-sm text-brand-text-muted mt-2">shadow-brand-glow-lg</p>
          </div>
          <div className="p-8 rounded-2xl bg-brand-surface-elevated text-center relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-3xl -z-10" />
            <p className="text-brand-text font-medium">Gradient Glow</p>
            <p className="text-sm text-brand-text-muted mt-2">Hero element style</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-4">Animation Guidelines</h3>
        <div className="overflow-x-auto">
          <table className="w-full bg-brand-surface-elevated border border-brand-border rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Element</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Transition</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4 text-sm text-brand-text-muted">Buttons</td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">transition-colors</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Darken primary color</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4 text-sm text-brand-text-muted">Cards</td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">transition-all</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Border color + scale (hover:scale-105)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Links</td>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">transition-colors</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Muted to white</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function BreakpointsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Responsive Breakpoints</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Tailwind CSS breakpoints for responsive design.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-brand-surface border border-brand-border rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Breakpoint</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Width</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-brand-text">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface-elevated px-2 py-1 rounded text-brand-primary-light">sm</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">640px</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Small tablets</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface-elevated px-2 py-1 rounded text-brand-primary-light">md</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">768px</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Tablets, 2-column layouts</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface-elevated px-2 py-1 rounded text-brand-primary-light">lg</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">1024px</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Desktop, 3-column layouts</td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface-elevated px-2 py-1 rounded text-brand-primary-light">xl</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">1280px</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Large desktop</td>
              </tr>
              <tr>
                <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface-elevated px-2 py-1 rounded text-brand-primary-light">2xl</code></td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">1536px</td>
                <td className="px-6 py-4 text-sm text-brand-text-muted">Extra large screens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function AccessibilitySection() {
  return (
    <section id="accessibility" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Accessibility</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            WCAG compliant color contrast ratios and focus states.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-6">Color Contrast</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-6 rounded-lg bg-brand-bg text-center">
            <div className="text-2xl font-bold text-white mb-1">12.6:1</div>
            <div className="text-sm text-brand-text-muted">White on Dark Navy</div>
          </div>
          <div className="p-6 rounded-lg bg-brand-bg text-center">
            <div className="text-2xl font-bold text-brand-text-muted mb-1">4.5:1</div>
            <div className="text-sm text-brand-text-muted">Muted Gray on Dark Navy</div>
          </div>
          <div className="p-6 rounded-lg bg-brand-bg text-center">
            <div className="text-2xl font-bold text-brand-primary mb-1">4.8:1</div>
            <div className="text-sm text-brand-text-muted">Pink Accent on Dark Navy</div>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-4">Focus States</h3>
        <p className="text-brand-text-muted mb-4">Use visible focus rings for keyboard navigation:</p>
        <button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-text px-8 py-4 text-lg font-medium rounded-lg transition-colors focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg outline-none mr-4 mb-4">
          Tab to Focus Me
        </button>
        <div className="bg-brand-surface-elevated border border-brand-border rounded-lg p-4 overflow-x-auto">
          <pre className="font-mono text-sm text-brand-text-muted whitespace-pre">
            <code>
              <span className="text-brand-secondary">className</span>=<span className="text-brand-primary-light">"focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg"</span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

function FileStructureSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">File Structure</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto">
            Recommended project organization.
          </p>
        </div>

        <div className="bg-brand-surface-elevated border border-brand-border rounded-lg p-4 mb-8 overflow-x-auto">
          <pre className="font-mono text-sm text-brand-text-muted whitespace-pre">
{`src/
    components/
        ui/           # shadcn/ui components
    App.tsx           # Main application
    App.css           # Global styles
    tailwind.config.js # Design tokens
DESIGN_SYSTEM.md  # This documentation
STYLE_GUIDE.md    # Brand style guide`}
          </pre>
        </div>

        <h3 className="text-xl font-semibold text-brand-text mb-4">Extending the System</h3>
        <ol className="text-brand-text-muted space-y-2 pl-6 list-decimal">
          <li>Use existing design tokens (don't introduce new hex values)</li>
          <li>Follow the established spacing scale</li>
          <li>Maintain the dark theme aesthetic</li>
          <li>Test on mobile, tablet, and desktop</li>
          <li>Ensure accessibility standards are met</li>
          <li>Document new patterns in this file</li>
        </ol>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-brand-surface border-t border-brand-border text-center">
      <p className="text-brand-text-muted text-sm">
        <strong className="text-brand-primary">Atelier</strong> Design System
      </p>
      <p className="text-brand-text-muted text-sm mt-2">
        Transform AI from buzzword to business value
      </p>
      <p className="text-brand-text-muted text-sm mt-4">
        <a
          href={FIGMA_LIBRARY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-brand-text transition-colors"
        >
          Figma Library
        </a>
      </p>
      <p className="text-brand-text-muted text-sm mt-4">
        Part of The Wednesday Collective / built by Mirabelle with love &#10084; for all pets
      </p>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans">
      <Navigation />
      <HeroSection />
      <ColorsSection />
      <TypographySection />
      <ComponentsSection />
      <SpacingSection />
      <LayoutSection />
      <EffectsSection />
      <BreakpointsSection />
      <AccessibilitySection />
      <FileStructureSection />
      <Footer />
    </div>
  )
}

export default App
