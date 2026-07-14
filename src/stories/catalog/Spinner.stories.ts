import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './StarterComponents';

const meta = {
  title: '03 Components/Feedback/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
