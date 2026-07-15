import './skeleton.css';
export interface SkeletonProps { variant?:'text'|'card'|'avatar'; lines?:number; animated?:boolean; }
export const Skeleton=({variant='text',lines=3,animated=true}:SkeletonProps)=>{
  const cls=`ds-skeleton ds-skeleton--${variant} ${animated?'ds-skeleton--animated':''}`;
  if(variant==='avatar') return <div className={cls} aria-label="Loading profile"><span className="ds-skeleton__circle"/><div className="ds-skeleton__stack"><span className="ds-skeleton__bar ds-skeleton__bar--medium"/><span className="ds-skeleton__bar ds-skeleton__bar--small"/></div></div>;
  if(variant==='card') return <div className={cls} aria-label="Loading card"><span className="ds-skeleton__media"/><span className="ds-skeleton__bar ds-skeleton__bar--medium"/><span className="ds-skeleton__bar"/><span className="ds-skeleton__bar ds-skeleton__bar--small"/></div>;
  return <div className={cls} aria-label="Loading content">{Array.from({length:Math.max(1,lines)},(_,i)=><span key={i} className={`ds-skeleton__bar ${i===lines-1?'ds-skeleton__bar--small':''}`}/>)}</div>;
};
