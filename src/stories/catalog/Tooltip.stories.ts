import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './StarterComponents';

const meta = {
  title: '03 Components/Data Display/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
