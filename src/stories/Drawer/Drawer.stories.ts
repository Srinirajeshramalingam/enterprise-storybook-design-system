import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Drawer } from './Drawer';
const meta={title:'03 Components/Overlays/Drawer',component:Drawer,parameters:{layout:'fullscreen'},tags:['autodocs'],args:{onClose:fn()},argTypes:{open:{control:'boolean',table:{category:'State'}},side:{control:'inline-radio',options:['left','right'],table:{category:'Appearance'}},width:{control:'inline-radio',options:['small','medium','large'],table:{category:'Appearance'}},showOverlay:{control:'boolean',table:{category:'Appearance'}},onClose:{control:false,table:{category:'Events'}}}} satisfies Meta<typeof Drawer>;
export default meta; type Story=StoryObj<typeof meta>;
export const Right: Story={args:{title:'Filter components',side:'right'}};
export const Left: Story={args:{title:'Filter components',side:'left'}};
export const Large: Story={args:{title:'Component configuration',width:'large',showOverlay:true}};
export const WithoutOverlay: Story={args:{title:'Persistent panel',showOverlay:false}};
