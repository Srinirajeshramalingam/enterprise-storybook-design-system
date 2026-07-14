import type { Meta, StoryObj } from '@storybook/react-vite';
import { Drawer } from './StarterComponents';

const meta = {
  title: '03 Components/Overlays/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
