import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { IconButton } from './IconButton';
const meta = {
  title: '03 Components/Actions/Icon Button', component: IconButton,
  parameters: { layout: 'centered' }, tags: ['autodocs'], args: { onClick: fn() },
  argTypes: {
    icon: { control: 'inline-radio', options: ['settings','search','more','close'], table:{category:'Content'} },
    variant: { control: 'inline-radio', options: ['primary','secondary','ghost'], table:{category:'Appearance'} },
    size: { control: 'inline-radio', options: ['small','medium','large'], table:{category:'Appearance'} },
    disabled: { control: 'boolean', table:{category:'State'} },
    onClick: { control:false, table:{category:'Events'} },
  },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = { args:{ label:'Open settings', icon:'settings', variant:'primary' } };
export const Secondary: Story = { args:{ label:'Search', icon:'search' } };
export const Ghost: Story = { args:{ label:'More options', icon:'more', variant:'ghost' } };
export const Disabled: Story = { args:{ label:'Close', icon:'close', disabled:true } };
