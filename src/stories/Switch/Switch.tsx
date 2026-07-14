import React from 'react';
import './switch.css';

export interface SwitchProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch = ({ label, checked = false, disabled = false, onChange }: SwitchProps) => (
  <label className={`ds-switch ${disabled ? 'ds-switch--disabled' : ''}`}>
    <input className="ds-switch__input" type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={onChange} />
    <span className="ds-switch__track" aria-hidden="true"><span className="ds-switch__thumb" /></span>
    <span className="ds-switch__label">{label}</span>
  </label>
);
