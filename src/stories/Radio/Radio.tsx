import React from 'react';
import './radio.css';

export interface RadioProps {
  label: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio = ({ label, name = 'radio-group', checked = false, disabled = false, onChange }: RadioProps) => (
  <label className={`ds-radio ${disabled ? 'ds-radio--disabled' : ''}`}>
    <input type="radio" name={name} checked={checked} disabled={disabled} onChange={onChange} />
    <span>{label}</span>
  </label>
);
