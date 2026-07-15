import type { Meta, StoryObj } from '@storybook/react-vite';
import { DataTable } from './DataTable';
const columns=[{key:'component',label:'Component'},{key:'domain',label:'Domain'},{key:'status',label:'Status'}];
const rows=[{component:'Button',domain:'Actions',status:'Ready'},{component:'Input',domain:'Forms',status:'Ready'},{component:'Hero Banner',domain:'CMS Patterns',status:'Ready'}];
const meta={title:'03 Components/Data Display/Table',component:DataTable,parameters:{layout:'centered'},tags:['autodocs'],argTypes:{striped:{control:'boolean',table:{category:'Appearance'}},compact:{control:'boolean',table:{category:'Appearance'}}}} satisfies Meta<typeof DataTable>;
export default meta; type Story=StoryObj<typeof meta>;
export const Default: Story={args:{caption:'Component inventory',columns,rows}};
export const Striped: Story={args:{caption:'Component inventory',columns,rows,striped:true}};
export const Compact: Story={args:{caption:'Component inventory',columns,rows,compact:true}};
