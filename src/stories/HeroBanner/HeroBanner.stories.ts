import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { HeroBanner } from './HeroBanner';

const meta = {
  title: '04 CMS Patterns/Hero Banner',
  component: HeroBanner,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  args: {
    onPrimaryCtaClick: fn(),
    onSecondaryCtaClick: fn(),
  },
  argTypes: {
    alignment: { control: 'inline-radio', options: ['left','center'] },
  },
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    eyebrow: 'Enterprise Design System',
    title: 'Design once. Scale across every digital touchpoint.',
    description: 'A CMS-ready hero pattern mapped from Figma specifications to Storybook implementation and reusable authoring fields.',
    primaryCtaLabel: 'Explore system',
    secondaryCtaLabel: 'View documentation',
    alignment: 'left',
  },
};

export const Centered: Story = {
  args: {
    eyebrow: 'CMS Pattern',
    title: 'Flexible content without breaking the design system.',
    description: 'Authors can change content while layout, tokens, accessibility, and component rules remain governed.',
    primaryCtaLabel: 'Get started',
    alignment: 'center',
  },
};
