import './avatar.css';
export interface AvatarProps { name:string; initials?:string; imageUrl?:string; size?:'small'|'medium'|'large'; shape?:'circle'|'rounded'; status?:'none'|'online'|'away'|'busy'; }
const getInitials=(name:string)=>name.trim().split(/\s+/).slice(0,2).map(p=>p[0]?.toUpperCase()).join('');
export const Avatar=({name,initials,imageUrl,size='medium',shape='circle',status='none'}:AvatarProps)=>(
  <span className={`ds-avatar-wrap ds-avatar-wrap--${size}`}>
    <span className={`ds-avatar ds-avatar--${size} ds-avatar--${shape}`} role="img" aria-label={name} title={name}>
      {imageUrl?<img src={imageUrl} alt=""/>:<span aria-hidden="true">{initials||getInitials(name)}</span>}
    </span>
    {status!=='none'&&<span className={`ds-avatar__status ds-avatar__status--${status}`} aria-label={`${status} status`}/>}
  </span>
);
