import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from './StarterComponents';

const meta = {
  title: '03 Components/Navigation/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
