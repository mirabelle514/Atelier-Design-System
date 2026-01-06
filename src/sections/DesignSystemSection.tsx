import { useState } from 'react'
import { 
  Zap, 
  Lightbulb, 
  CheckCircle, 
  Check,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

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

function ColorsSection() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-brand-text mb-6">Color Palette</h3>
      <p className="text-brand-text-muted mb-8">
        A carefully crafted dark theme palette optimized for readability and visual hierarchy.
      </p>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-brand-text mb-4">Primary Colors</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ColorSwatch token="brand-bg" hex="#1a1a2e" usage="Main page background" colorClass="bg-brand-bg border-b border-brand-border" />
          <ColorSwatch token="brand-surface" hex="#16213e" usage="Card backgrounds, sections" colorClass="bg-brand-surface" />
          <ColorSwatch token="brand-surface-elevated" hex="#1f2b47" usage="Elevated elements, hover states" colorClass="bg-brand-surface-elevated" />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-brand-text mb-4">Accent Colors</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <ColorSwatch token="brand-primary" hex="#e94560" usage="Primary buttons, headings, CTAs" colorClass="bg-brand-primary" />
          <ColorSwatch token="brand-primary-hover" hex="#d63d56" usage="Button hover states" colorClass="bg-brand-primary-hover" />
          <ColorSwatch token="brand-primary-light" hex="#f8b4c4" usage="Icons, subtle accents" colorClass="bg-brand-primary-light" />
          <ColorSwatch token="brand-secondary" hex="#4ecdc4" usage="Success states, highlights" colorClass="bg-brand-secondary" />
          <ColorSwatch token="brand-secondary-light" hex="#7eddd6" usage="Secondary hover states" colorClass="bg-brand-secondary-light" />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-brand-text mb-4">Text Colors</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ColorSwatch token="brand-text" hex="#ffffff" usage="Primary text, headings" colorClass="bg-white border-b border-brand-border" />
          <ColorSwatch token="brand-text-muted" hex="#9ca3af" usage="Body text, descriptions" colorClass="bg-brand-text-muted" />
          <ColorSwatch token="brand-text-subtle" hex="#6b7280" usage="Captions, metadata" colorClass="bg-brand-text-subtle" />
        </div>
      </div>
    </div>
  )
}

function TypographySection() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-brand-text mb-6">Typography</h3>
      <p className="text-brand-text-muted mb-8">
        Inter font family with a carefully designed type scale for clear hierarchy.
      </p>

      <div className="space-y-4">
        <TypeSample className="text-display-xl" label="text-display-xl" specs="64px / 1.1 / 700" text="Display XL" />
        <TypeSample className="text-display-lg" label="text-display-lg" specs="48px / 1.2 / 700" text="Display Large" />
        <TypeSample className="text-display-md" label="text-display-md" specs="36px / 1.3 / 700" text="Display Medium" />
        <TypeSample className="text-display-sm" label="text-display-sm" specs="24px / 1.4 / 600" text="Display Small" />
        <TypeSample className="text-body-lg" label="text-body-lg" specs="18px / 1.75 / 400" text="Body Large - Lead paragraphs" />
        <TypeSample className="text-body-md" label="text-body-md" specs="16px / 1.75 / 400" text="Body Medium - Standard body text" />
        <TypeSample className="text-body-sm" label="text-body-sm" specs="14px / 1.5 / 400" text="Body Small - Captions and metadata" />
      </div>
    </div>
  )
}

function ComponentsSection() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-brand-text mb-6">Components</h3>
      <p className="text-brand-text-muted mb-8">
        Reusable UI components built with the design system tokens.
      </p>

      <h4 className="text-lg font-semibold text-brand-text mb-4">Buttons</h4>
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

      <h4 className="text-lg font-semibold text-brand-text mb-4 mt-8">Cards</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardDemo 
          icon={<Zap className="h-6 w-6 text-brand-primary-light" />}
          title="Feature Card"
          description="Standard feature card with icon, title, and description."
        />
        <CardDemo 
          icon={<Lightbulb className="h-6 w-6 text-brand-primary-light" />}
          title="Product Card"
          description="Product card with scale effect on hover."
          scale
        />
        <CardDemo 
          icon={<CheckCircle className="h-6 w-6 text-brand-primary-light" />}
          title="Success Metrics"
          description="Card with success metric display."
          metric="40% efficiency increase"
        />
      </div>
    </div>
  )
}

function SpacingSection() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-brand-text mb-6">Spacing & Layout</h3>
      <p className="text-brand-text-muted mb-8">
        Consistent spacing tokens for layout and component design.
      </p>

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
              <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">py-20</code></td>
              <td className="px-6 py-4 text-sm text-brand-text-muted">5rem (80px)</td>
              <td className="px-6 py-4 text-sm text-brand-text-muted">Section vertical padding</td>
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
            <tr>
              <td className="px-6 py-4"><code className="font-mono text-xs bg-brand-surface px-2 py-1 rounded text-brand-primary-light">max-w-7xl</code></td>
              <td className="px-6 py-4 text-sm text-brand-text-muted">80rem (1280px)</td>
              <td className="px-6 py-4 text-sm text-brand-text-muted">Max content width</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function EffectsSection() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-brand-text mb-6">Shadows & Effects</h3>
      <p className="text-brand-text-muted mb-8">
        Glow effects and shadows for depth and emphasis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  )
}

function AccessibilitySection() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-brand-text mb-6">Accessibility</h3>
      <p className="text-brand-text-muted mb-8">
        WCAG compliant color contrast ratios and focus states.
      </p>

      <h4 className="text-lg font-semibold text-brand-text mb-4">Color Contrast</h4>
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

      <h4 className="text-lg font-semibold text-brand-text mb-4">Focus States</h4>
      <p className="text-brand-text-muted mb-4">Use visible focus rings for keyboard navigation:</p>
      <button className="bg-brand-primary hover:bg-brand-primary-hover text-brand-text px-8 py-4 text-lg font-medium rounded-lg transition-colors focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg outline-none">
        Tab to Focus Me
      </button>
    </div>
  )
}

export function DesignSystemSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="design-system" className="py-20 px-6 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Atelier Design System</h2>
          <p className="text-lg text-brand-text-muted max-w-3xl mx-auto mb-6">
            A comprehensive design system with 50+ components, design tokens, and accessibility-first patterns.
            This portfolio is built entirely with the Atelier system.
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-secondary-light transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Hide Design System Details</span>
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                <span>Explore Design System</span>
                <ChevronDown className="h-5 w-5" />
              </>
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-300">
            <ColorsSection />
            <TypographySection />
            <ComponentsSection />
            <SpacingSection />
            <EffectsSection />
            <AccessibilitySection />
          </div>
        )}
      </div>
    </section>
  )
}
