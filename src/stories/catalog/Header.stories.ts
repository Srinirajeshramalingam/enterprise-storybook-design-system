import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './StarterComponents';

const meta = {
  title: '03 Components/Navigation/Header',
  component: Header,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
