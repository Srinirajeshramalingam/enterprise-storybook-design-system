import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';
const meta={title:'03 Components/Feedback/Spinner',component:Spinner,parameters:{layout:'centered'},tags:['autodocs'],argTypes:{size:{control:'inline-radio',options:['small','medium','large'],table:{category:'Appearance'}},tone:{control:'inline-radio',options:['brand','neutral','inverse'],table:{category:'Appearance'}}}} satisfies Meta<typeof Spinner>;
export default meta; type Story=StoryObj<typeof meta>;
export const Default: Story={args:{label:'Loading component data'}};
export const Small: Story={args:{label:'Saving',size:'small'}};
export const Large: Story={args:{label:'Publishing experience',size:'large',tone:'neutral'}};
