import './modal.css';
export interface ModalProps { open?:boolean; title:string; description:string; primaryLabel?:string; secondaryLabel?:string; destructive?:boolean; onConfirm?:()=>void; onCancel?:()=>void; }
export const Modal=({open=true,title,description,primaryLabel='Confirm',secondaryLabel='Cancel',destructive=false,onConfirm,onCancel}:ModalProps)=>{
  if(!open)return null;
  return <div className="ds-modal-layer"><div className="ds-modal-backdrop" aria-hidden="true"/><section className="ds-modal" role="dialog" aria-modal="true" aria-labelledby="ds-modal-title" aria-describedby="ds-modal-description">
    <h2 id="ds-modal-title">{title}</h2><p id="ds-modal-description">{description}</p>
    <div className="ds-modal__actions"><button type="button" className="ds-modal__secondary" onClick={onCancel}>{secondaryLabel}</button><button type="button" className={`ds-modal__primary ${destructive?'ds-modal__primary--danger':''}`} onClick={onConfirm}>{primaryLabel}</button></div>
  </section></div>;
};
