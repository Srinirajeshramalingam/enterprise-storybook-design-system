import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './StarterComponents';

const meta = {
  title: '03 Components/Feedback/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
