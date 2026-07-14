import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './StarterComponents';

const meta = {
  title: '03 Components/Data Display/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
