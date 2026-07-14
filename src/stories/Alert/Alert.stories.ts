import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Alert } from './Alert';

const meta = {
  title: '03 Components/Feedback/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onDismiss: fn() },
  argTypes: {
    tone: { control: 'inline-radio', options: ['info','success','warning','danger'] },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = { args: { title: 'Information', message: 'Your profile changes will be visible after approval.', tone: 'info' } };
export const Success: Story = { args: { title: 'Published', message: 'The content has been published successfully.', tone: 'success' } };
export const Warning: Story = { args: { title: 'Review required', message: 'Some fields need attention before publishing.', tone: 'warning' } };
export const Danger: Story = { args: { title: 'Publish failed', message: 'We could not publish the page. Try again.', tone: 'danger', dismissible: true } };
