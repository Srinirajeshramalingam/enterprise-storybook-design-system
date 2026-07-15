import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';
const meta={title:'03 Components/Feedback/Progress',component:Progress,parameters:{layout:'centered'},tags:['autodocs'],argTypes:{value:{control:{type:'range',min:0,max:100,step:1},table:{category:'State'}},size:{control:'inline-radio',options:['small','medium','large'],table:{category:'Appearance'}},tone:{control:'inline-radio',options:['brand','success','warning'],table:{category:'Appearance'}},showValue:{control:'boolean',table:{category:'Content'}}}} satisfies Meta<typeof Progress>;
export default meta; type Story=StoryObj<typeof meta>;
export const Default: Story={args:{label:'Design system migration',value:64}};
export const Success: Story={args:{label:'Component coverage',value:92,tone:'success'}};
export const Warning: Story={args:{label:'Documentation coverage',value:48,tone:'warning',size:'large'}};
