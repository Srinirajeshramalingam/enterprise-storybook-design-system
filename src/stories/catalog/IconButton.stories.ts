import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconButton } from './StarterComponents';

const meta = {
  title: '03 Components/Actions/Icon Button',
  component: IconButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
