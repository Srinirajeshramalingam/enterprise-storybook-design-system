import './header.css';
export interface HeaderProps { brand:string; navItems?:string[]; activeItem?:string; ctaLabel?:string; compact?:boolean; onCtaClick?:()=>void; onNavigate?:(item:string)=>void; }
export const Header=({brand,navItems=['Overview','Components','Docs'],activeItem='Overview',ctaLabel='Get started',compact=false,onCtaClick,onNavigate}:HeaderProps)=>(
  <header className={`ds-header ${compact?'ds-header--compact':''}`}><strong className="ds-header__brand">{brand}</strong>
    <nav className="ds-header__nav" aria-label="Primary navigation">{navItems.map(item=><button type="button" key={item} className={item===activeItem?'is-active':''} aria-current={item===activeItem?'page':undefined} onClick={()=>onNavigate?.(item)}>{item}</button>)}</nav>
    <button type="button" className="ds-header__cta" onClick={onCtaClick}>{ctaLabel}</button>
  </header>
);
