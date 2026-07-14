import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Radio } from './Radio';

const meta = {
  title: '03 Components/Forms/Radio',
  component: Radio,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = { args: { label: 'Standard delivery' } };
export const Selected: Story = { args: { label: 'Express delivery', checked: true } };
export const Disabled: Story = { args: { label: 'Unavailable option', disabled: true } };
