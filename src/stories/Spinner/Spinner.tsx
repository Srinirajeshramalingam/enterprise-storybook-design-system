import './spinner.css';
export interface SpinnerProps { label?:string; size?:'small'|'medium'|'large'; tone?:'brand'|'neutral'|'inverse'; }
export const Spinner=({label='Loading',size='medium',tone='brand'}:SpinnerProps)=>(
  <span className="ds-spinner-wrap" role="status" aria-live="polite"><span className={`ds-spinner ds-spinner--${size} ds-spinner--${tone}`} aria-hidden="true"/><span className="ds-spinner__label">{label}</span></span>
);
