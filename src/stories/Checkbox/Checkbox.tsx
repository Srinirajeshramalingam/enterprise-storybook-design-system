import React from 'react';
import './checkbox.css';

export interface CheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  description?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ label, checked = false, disabled = false, description, onChange }: CheckboxProps) => (
  <label className={`ds-check ${disabled ? 'ds-check--disabled' : ''}`}>
    <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
    <span>
      <span className="ds-check__label">{label}</span>
      {description && <span className="ds-check__description">{description}</span>}
    </span>
  </label>
);
