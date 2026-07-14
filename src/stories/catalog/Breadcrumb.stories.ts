import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './StarterComponents';

const meta = {
  title: '03 Components/Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
