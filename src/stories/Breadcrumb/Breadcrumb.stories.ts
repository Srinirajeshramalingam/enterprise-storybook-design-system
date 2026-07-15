import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Breadcrumb } from './Breadcrumb';
const meta={title:'03 Components/Navigation/Breadcrumb',component:Breadcrumb,parameters:{layout:'centered'},tags:['autodocs'],args:{onNavigate:fn()},argTypes:{separator:{control:'inline-radio',options:['/','chevron'],table:{category:'Appearance'}},onNavigate:{control:false,table:{category:'Events'}}}} satisfies Meta<typeof Breadcrumb>;
export default meta; type Story=StoryObj<typeof meta>;
export const Default: Story={args:{items:['Home','Components','Button']}};
export const CMSPath: Story={args:{items:['Home','CMS Patterns','Hero Banner'],separator:'/'}};
export const DeepHierarchy: Story={args:{items:['Enterprise','Design System','Forms','Input','Error State']}};
