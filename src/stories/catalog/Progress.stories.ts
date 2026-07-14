import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './StarterComponents';

const meta = {
  title: '03 Components/Feedback/Progress',
  component: Progress,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
