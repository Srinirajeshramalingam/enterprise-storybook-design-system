import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: '03 Components/Data Display/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'inline-radio', options: ['neutral','success','warning','danger','info'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { label: 'Draft', tone: 'neutral' } };
export const Success: Story = { args: { label: 'Published', tone: 'success' } };
export const Warning: Story = { args: { label: 'Review', tone: 'warning' } };
export const Danger: Story = { args: { label: 'Blocked', tone: 'danger' } };
export const Info: Story = { args: { label: 'New', tone: 'info' } };
