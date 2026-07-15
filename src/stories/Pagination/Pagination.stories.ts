import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Pagination } from './Pagination';
const meta={title:'03 Components/Navigation/Pagination',component:Pagination,parameters:{layout:'centered'},tags:['autodocs'],args:{onPageChange:fn()},argTypes:{currentPage:{control:{type:'number',min:1},table:{category:'State'}},totalPages:{control:{type:'number',min:1,max:100},table:{category:'Content'}},compact:{control:'boolean',table:{category:'Appearance'}},onPageChange:{control:false,table:{category:'Events'}}}} satisfies Meta<typeof Pagination>;
export default meta; type Story=StoryObj<typeof meta>;
export const Default: Story={args:{currentPage:3,totalPages:7}};
export const FirstPage: Story={args:{currentPage:1,totalPages:5}};
export const LastPage: Story={args:{currentPage:7,totalPages:7}};
export const Compact: Story={args:{currentPage:2,totalPages:5,compact:true}};
