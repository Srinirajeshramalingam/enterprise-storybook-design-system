import './icon-button.css';
export interface IconButtonProps {
  label: string;
  icon?: 'settings' | 'search' | 'more' | 'close';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}
const icons = { settings: '⚙', search: '⌕', more: '⋯', close: '×' };
export const IconButton = ({ label, icon='settings', variant='secondary', size='medium', disabled=false, onClick }: IconButtonProps) => (
  <button type="button" className={`ds-icon-button ds-icon-button--${variant} ds-icon-button--${size}`}
    aria-label={label} title={label} disabled={disabled} onClick={disabled ? undefined : onClick}>
    <span aria-hidden="true">{icons[icon]}</span>
  </button>
);
