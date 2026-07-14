import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './StarterComponents';

const meta = {
  title: '03 Components/Overlays/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
