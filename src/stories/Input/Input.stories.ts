import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Input } from './Input';

const meta = {
  title: '03 Components/Forms/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    placeholder: { control: 'text', table: { category: 'Content' } },
    helperText: { control: 'text', table: { category: 'Content' } },
    errorMessage: { control: 'text', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    required: { control: 'boolean', table: { category: 'State' } },
    type: { control: 'select', options: ['text','email','password','number'], table: { category: 'Behavior' } },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Email address', placeholder: 'name@company.com', helperText: 'Use your work email.' } };
export const Required: Story = { args: { label: 'Full name', placeholder: 'Enter full name', required: true } };
export const Error: Story = { args: { label: 'Email address', defaultValue: 'invalid-email', errorMessage: 'Enter a valid email address.' } };
export const Disabled: Story = { args: { label: 'Account ID', defaultValue: 'AC-10294', disabled: true } };
