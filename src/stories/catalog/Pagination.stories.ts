import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './StarterComponents';

const meta = {
  title: '03 Components/Navigation/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
