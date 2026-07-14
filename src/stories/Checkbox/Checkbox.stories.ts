import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Checkbox } from './Checkbox';

const meta = {
  title: '03 Components/Forms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = { args: { label: 'Remember me', description: 'Keep this device signed in.' } };
export const Checked: Story = { args: { label: 'Remember me', checked: true } };
export const Disabled: Story = { args: { label: 'Option unavailable', disabled: true } };
