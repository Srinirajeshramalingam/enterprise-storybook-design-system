import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './StarterComponents';

const meta = {
  title: '03 Components/Forms/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
