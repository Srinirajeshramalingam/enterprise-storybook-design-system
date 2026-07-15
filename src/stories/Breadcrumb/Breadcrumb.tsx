import './breadcrumb.css';
export interface BreadcrumbProps { items:string[]; separator?:'/'|'chevron'; onNavigate?:(item:string)=>void; }
export const Breadcrumb=({items,separator='chevron',onNavigate}:BreadcrumbProps)=>(
  <nav aria-label="Breadcrumb"><ol className="ds-breadcrumb">
    {items.map((item,index)=>{const isCurrent=index===items.length-1;return <li key={`${item}-${index}`}>
      {index>0&&<span className="ds-breadcrumb__separator" aria-hidden="true">{separator==='chevron'?'›':'/'}</span>}
      {isCurrent?<span aria-current="page" className="ds-breadcrumb__current">{item}</span>:<button type="button" onClick={()=>onNavigate?.(item)}>{item}</button>}
    </li>})}
  </ol></nav>
);
