import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from './StarterComponents';

const meta = {
  title: '03 Components/Data Display/Table',
  component: DataTable,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
