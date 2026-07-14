import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Select } from './Select';

const options = [
  { label: 'India', value: 'in' },
  { label: 'Singapore', value: 'sg' },
  { label: 'United Kingdom', value: 'uk' },
];

const meta = {
  title: '03 Components/Forms/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    placeholder: { control: 'text', table: { category: 'Content' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    errorMessage: { control: 'text', table: { category: 'State' } },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Country', options } };
export const Error: Story = { args: { label: 'Country', options, errorMessage: 'Please select a country.' } };
export const Disabled: Story = { args: { label: 'Country', options, disabled: true } };
