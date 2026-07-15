import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Modal } from './Modal';
const meta={title:'03 Components/Overlays/Modal',component:Modal,parameters:{layout:'fullscreen'},tags:['autodocs'],args:{onConfirm:fn(),onCancel:fn()},argTypes:{open:{control:'boolean',table:{category:'State'}},destructive:{control:'boolean',table:{category:'State'}},onConfirm:{control:false,table:{category:'Events'}},onCancel:{control:false,table:{category:'Events'}}}} satisfies Meta<typeof Modal>;
export default meta; type Story=StoryObj<typeof meta>;
export const Confirmation: Story={args:{title:'Publish component?',description:'This will make the approved component available to product and CMS teams.',primaryLabel:'Publish'}};
export const Destructive: Story={args:{title:'Delete component?',description:'This action cannot be undone and may impact consuming experiences.',primaryLabel:'Delete',destructive:true}};
export const Closed: Story={args:{title:'Hidden modal',description:'This story demonstrates the closed state.',open:false}};
