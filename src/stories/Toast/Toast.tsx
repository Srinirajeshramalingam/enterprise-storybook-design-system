import './toast.css';
export interface ToastProps {
  title:string; message:string; tone?:'info'|'success'|'warning'|'danger';
  actionLabel?:string; dismissible?:boolean; onAction?:()=>void; onDismiss?:()=>void;
}
export const Toast=({title,message,tone='info',actionLabel,dismissible=true,onAction,onDismiss}:ToastProps)=>(
  <div className={`ds-toast ds-toast--${tone}`} role={tone==='danger'?'alert':'status'}>
    <div className="ds-toast__content"><strong>{title}</strong><span>{message}</span>
      {actionLabel&&<button type="button" className="ds-toast__action" onClick={onAction}>{actionLabel}</button>}
    </div>
    {dismissible&&<button type="button" className="ds-toast__dismiss" aria-label="Dismiss notification" onClick={onDismiss}>×</button>}
  </div>
);
