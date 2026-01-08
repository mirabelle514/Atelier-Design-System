import type { Preview } from '@storybook/react'
import React from 'react'
import { Controls, Primary, Source, Stories, Title } from '@storybook/blocks'

import '../src/index.css'
import '../src/App.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'brand-bg',
      values: [
        { name: 'brand-bg', value: '#1a1a2e' },
        { name: 'brand-surface', value: '#16213e' },
        { name: 'brand-surface-elevated', value: '#1f2b47' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1200px', height: '800px' } },
        largeDesktop: { name: 'Large Desktop', styles: { width: '1440px', height: '900px' } },
      },
    },
    docs: {
      source: {
        type: 'dynamic',
      },
      page: () => (
        <>
          <Title />
          <Primary />

          <div style={{ marginTop: 24 }}>
            <h2 style={{ margin: 0 }}>See the code</h2>
            <div style={{ marginTop: 12 }}>
              <Source />
            </div>
          </div>

          <Controls />
          <Stories />
        </>
      ),
      theme: {
        base: 'dark',
        colorPrimary: '#e94560',
        colorSecondary: '#4ecdc4',
        appBg: '#1a1a2e',
        appContentBg: '#16213e',
        appBorderColor: 'rgba(255,255,255,0.1)',
        textColor: '#ffffff',
        textInverseColor: '#1a1a2e',
        barTextColor: '#ffffff',
        barSelectedColor: '#4ecdc4',
        barBg: '#1a1a2e',
        inputBg: '#16213e',
        inputBorder: '#4a3f6b',
        inputTextColor: '#ffffff',
        inputBorderRadius: 8,
        brandTitle: 'Atelier Design System',
        brandUrl: 'https://thewednesdaycollective.com',
        fontBase: '"Inter", system-ui, sans-serif',
        fontCode: 'monospace',
      },
    },
  },
}

export default preview

