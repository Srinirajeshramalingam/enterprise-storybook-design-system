import React from 'react';
import './alert.css';

export interface AlertProps {
  title: string;
  message: string;
  tone?: 'info' | 'success' | 'warning' | 'danger';
  dismissible?: boolean;
  onDismiss?: () => void;
}

export const Alert = ({ title, message, tone = 'info', dismissible = false, onDismiss }: AlertProps) => (
  <div className={`ds-alert ds-alert--${tone}`} role={tone === 'danger' ? 'alert' : 'status'}>
    <div>
      <div className="ds-alert__title">{title}</div>
      <div className="ds-alert__message">{message}</div>
    </div>
    {dismissible && <button className="ds-alert__dismiss" type="button" aria-label="Dismiss alert" onClick={onDismiss}>×</button>}
  </div>
);
