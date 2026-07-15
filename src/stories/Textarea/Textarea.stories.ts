import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Textarea } from './Textarea';
const meta = {
  title:'03 Components/Forms/Textarea', component:Textarea, parameters:{layout:'centered'}, tags:['autodocs'], args:{onChange:fn()},
  argTypes:{
    rows:{control:{type:'range',min:2,max:10,step:1},table:{category:'Appearance'}},
    required:{control:'boolean',table:{category:'State'}}, disabled:{control:'boolean',table:{category:'State'}},
    onChange:{control:false,table:{category:'Events'}}
  }
} satisfies Meta<typeof Textarea>;
export default meta; type Story = StoryObj<typeof meta>;
export const Default: Story = { args:{label:'Description',placeholder:'Describe the content...',helperText:'Maximum 500 characters.'} };
export const Required: Story = { args:{label:'Author note',placeholder:'Add a note',required:true} };
export const Error: Story = { args:{label:'Description',defaultValue:'Too short',errorMessage:'Add at least 20 characters.'} };
export const Disabled: Story = { args:{label:'System note',defaultValue:'Managed by the platform',disabled:true} };
