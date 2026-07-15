import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Header } from './Header';
const meta={title:'03 Components/Navigation/Header',component:Header,parameters:{layout:'centered'},tags:['autodocs'],args:{onCtaClick:fn(),onNavigate:fn()},argTypes:{compact:{control:'boolean',table:{category:'Appearance'}},onCtaClick:{control:false,table:{category:'Events'}},onNavigate:{control:false,table:{category:'Events'}}}} satisfies Meta<typeof Header>;
export default meta; type Story=StoryObj<typeof meta>;
export const Default: Story={args:{brand:'Enterprise DS',activeItem:'Overview'}};
export const ComponentsActive: Story={args:{brand:'Enterprise DS',activeItem:'Components',ctaLabel:'View Storybook'}};
export const Compact: Story={args:{brand:'Enterprise DS',activeItem:'Docs',compact:true}};
