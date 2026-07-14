import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Card } from './Card';

const meta = {
  title: '03 Components/Data Display/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onCtaClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { eyebrow: 'Design System', title: 'Reusable enterprise components', description: 'Build consistent product experiences with documented, accessible UI patterns.', ctaLabel: 'Explore component' } };
export const Elevated: Story = { args: { eyebrow: 'Featured', title: 'Design-to-development workflow', description: 'Connect Figma specifications, Storybook implementation, and CMS authoring.', elevated: true, ctaLabel: 'View workflow' } };
