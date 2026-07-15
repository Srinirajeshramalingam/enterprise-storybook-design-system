import './tooltip.css';
export interface TooltipProps { label:string; content:string; position?:'top'|'right'|'bottom'|'left'; }
export const Tooltip=({label,content,position='top'}:TooltipProps)=>(
  <span className="ds-tooltip"><button type="button" className="ds-tooltip__trigger" aria-describedby="ds-tooltip-content">{label}</button>
    <span id="ds-tooltip-content" role="tooltip" className={`ds-tooltip__content ds-tooltip__content--${position}`}>{content}</span>
  </span>
);
