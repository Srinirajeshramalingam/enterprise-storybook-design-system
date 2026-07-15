import './tabs.css';
export interface TabsProps { items:string[]; activeTab:string; orientation?:'horizontal'|'vertical'; onChange?:(item:string)=>void; }
export const Tabs=({items,activeTab,orientation='horizontal',onChange}:TabsProps)=>(
  <div className={`ds-tabs ds-tabs--${orientation}`} role="tablist" aria-orientation={orientation}>
    {items.map(item=><button key={item} type="button" role="tab" aria-selected={item===activeTab} className={item===activeTab?'is-active':''} onClick={()=>onChange?.(item)}>{item}</button>)}
  </div>
);
