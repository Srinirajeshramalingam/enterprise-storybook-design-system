import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
const meta={title:'03 Components/Data Display/Tooltip',component:Tooltip,parameters:{layout:'centered'},tags:['autodocs'],argTypes:{position:{control:'inline-radio',options:['top','right','bottom','left'],table:{category:'Appearance'}}}} satisfies Meta<typeof Tooltip>;
export default meta; type Story=StoryObj<typeof meta>;
export const Top: Story={args:{label:'Component status',content:'Ready for design and development review.',position:'top'}};
export const Right: Story={args:{label:'CMS field help',content:'Authors can update content without changing layout rules.',position:'right'}};
export const Bottom: Story={args:{label:'Accessibility note',content:'Keyboard focus also reveals this tooltip.',position:'bottom'}};
