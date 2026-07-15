import './drawer.css';
export interface DrawerProps { open?:boolean; title:string; side?:'left'|'right'; width?:'small'|'medium'|'large'; showOverlay?:boolean; onClose?:()=>void; }
export const Drawer=({open=true,title,side='right',width='medium',showOverlay=true,onClose}:DrawerProps)=>{
  if(!open)return null;
  return <div className="ds-drawer-layer">{showOverlay&&<div className="ds-drawer-backdrop" aria-hidden="true"/>}
    <aside className={`ds-drawer ds-drawer--${side} ds-drawer--${width}`} aria-label={title}>
      <div className="ds-drawer__header"><h2>{title}</h2><button type="button" aria-label="Close drawer" onClick={onClose}>×</button></div>
      <div className="ds-drawer__content"><label><span>Component domain</span><select defaultValue="forms"><option value="forms">Forms</option><option value="feedback">Feedback</option><option value="navigation">Navigation</option></select></label>
        <label className="ds-drawer__check"><input type="checkbox" defaultChecked/> Include documented components</label>
        <label className="ds-drawer__check"><input type="checkbox"/> Show deprecated components</label>
      </div>
      <div className="ds-drawer__footer"><button type="button">Reset</button><button type="button" className="is-primary">Apply filters</button></div>
    </aside>
  </div>;
};
