import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Switch } from './Switch';

const meta = {
  title: '03 Components/Forms/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { label: 'Email notifications' } };
export const On: Story = { args: { label: 'Email notifications', checked: true } };
export const Disabled: Story = { args: { label: 'Email notifications', disabled: true } };
