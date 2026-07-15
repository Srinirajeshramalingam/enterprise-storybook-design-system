import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
const meta={title:'03 Components/Data Display/Avatar',component:Avatar,parameters:{layout:'centered'},tags:['autodocs'],
argTypes:{size:{control:'inline-radio',options:['small','medium','large'],table:{category:'Appearance'}},shape:{control:'inline-radio',options:['circle','rounded'],table:{category:'Appearance'}},status:{control:'inline-radio',options:['none','online','away','busy'],table:{category:'State'}}}} satisfies Meta<typeof Avatar>;
export default meta; type Story=StoryObj<typeof meta>;
export const Initials: Story={args:{name:'Srini Rajesh Ramalingam',status:'online'}};
export const Rounded: Story={args:{name:'Content Author',initials:'CA',shape:'rounded',status:'away'}};
export const Large: Story={args:{name:'Design System Lead',initials:'DS',size:'large',status:'busy'}};
