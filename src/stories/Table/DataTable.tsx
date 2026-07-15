import './data-table.css';
export interface DataTableColumn { key:string; label:string; }
export interface DataTableProps { caption?:string; columns:DataTableColumn[]; rows:Array<Record<string,string|number>>; striped?:boolean; compact?:boolean; }
export const DataTable=({caption,columns,rows,striped=false,compact=false}:DataTableProps)=>(
  <div className="ds-table-wrap"><table className={`ds-table ${striped?'ds-table--striped':''} ${compact?'ds-table--compact':''}`}>
    {caption&&<caption>{caption}</caption>}<thead><tr>{columns.map(c=><th key={c.key} scope="col">{c.label}</th>)}</tr></thead>
    <tbody>{rows.map((r,i)=><tr key={i}>{columns.map(c=><td key={c.key}>{r[c.key]}</td>)}</tr>)}</tbody>
  </table></div>
);
