import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Tabs } from './Tabs';
const items=['Overview','Usage','Accessibility','Changelog'];
const meta={title:'03 Components/Navigation/Tabs',component:Tabs,parameters:{layout:'centered'},tags:['autodocs'],args:{onChange:fn()},argTypes:{orientation:{control:'inline-radio',options:['horizontal','vertical'],table:{category:'Appearance'}},onChange:{control:false,table:{category:'Events'}}}} satisfies Meta<typeof Tabs>;
export default meta; type Story=StoryObj<typeof meta>;
export const Horizontal: Story={args:{items,activeTab:'Overview'}};
export const AccessibilityActive: Story={args:{items,activeTab:'Accessibility'}};
export const Vertical: Story={args:{items,activeTab:'Usage',orientation:'vertical'}};
