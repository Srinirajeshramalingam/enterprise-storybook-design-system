import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';
const meta={title:'03 Components/Feedback/Skeleton',component:Skeleton,parameters:{layout:'centered'},tags:['autodocs'],argTypes:{variant:{control:'inline-radio',options:['text','card','avatar'],table:{category:'Appearance'}},lines:{control:{type:'range',min:1,max:8,step:1},table:{category:'Content'}},animated:{control:'boolean',table:{category:'State'}}}} satisfies Meta<typeof Skeleton>;
export default meta; type Story=StoryObj<typeof meta>;
export const Text: Story={args:{variant:'text',lines:4}};
export const Card: Story={args:{variant:'card'}};
export const Avatar: Story={args:{variant:'avatar'}};
export const Static: Story={args:{variant:'text',lines:3,animated:false}};
