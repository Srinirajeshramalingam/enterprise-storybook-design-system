import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Toast } from './Toast';
const meta={title:'03 Components/Feedback/Toast',component:Toast,parameters:{layout:'centered'},tags:['autodocs'],args:{onAction:fn(),onDismiss:fn()},argTypes:{tone:{control:'inline-radio',options:['info','success','warning','danger'],table:{category:'Appearance'}},dismissible:{control:'boolean',table:{category:'State'}},onAction:{control:false,table:{category:'Events'}},onDismiss:{control:false,table:{category:'Events'}}}} satisfies Meta<typeof Toast>;
export default meta; type Story=StoryObj<typeof meta>;
export const Success: Story={args:{title:'Changes saved',message:'Your component configuration has been updated.',tone:'success'}};
export const Warning: Story={args:{title:'Review required',message:'Two accessibility checks need attention.',tone:'warning',actionLabel:'Review'}};
export const Danger: Story={args:{title:'Publish failed',message:'The CMS component could not be published.',tone:'danger',actionLabel:'Retry'}};
