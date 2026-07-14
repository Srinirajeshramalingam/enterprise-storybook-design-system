import type { Preview } from '@storybook/react-vite'

const preview: Preview = {

    decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          padding: '32px',
          backgroundColor: '#f5f7fa',
          fontFamily:
            "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    options: {
  storySort: {
    order: [
      '01 Introduction',
      [
        'Overview',
        'Design Principles',
        'Figma → Storybook → AEM',
        'Governance',
      ],

      '02 Foundations',
      [
        'Design Tokens',
        'Color',
        'Typography',
        'Spacing',
        'Radius',
        'Elevation',
      ],

      '03 Components',
      [
        'Actions',
        'Forms',
        'Data Display',
        'Feedback',
        'Navigation',
        'Overlays',
      ],

      '04 CMS Patterns',
    ],
  },
},
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;