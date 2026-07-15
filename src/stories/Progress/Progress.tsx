import './progress.css';
export interface ProgressProps { label:string; value:number; max?:number; size?:'small'|'medium'|'large'; tone?:'brand'|'success'|'warning'; showValue?:boolean; }
export const Progress=({label,value,max=100,size='medium',tone='brand',showValue=true}:ProgressProps)=>{
  const safeMax=max>0?max:100; const percent=Math.max(0,Math.min(100,(value/safeMax)*100));
  return <div className="ds-progress"><div className="ds-progress__header"><span>{label}</span>{showValue&&<span>{Math.round(percent)}%</span>}</div>
    <div className={`ds-progress__track ds-progress__track--${size}`} role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={safeMax}>
      <div className={`ds-progress__value ds-progress__value--${tone}`} style={{width:`${percent}%`}}/>
    </div>
  </div>;
};
