import React from 'react';
import './select.css';

export interface SelectOption { label: string; value: string; }
export interface SelectProps {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, options, placeholder = 'Select an option', disabled = false, errorMessage, onChange }: SelectProps) => (
  <label className="ds-select-field">
    <span className="ds-select-field__label">{label}</span>
    <select className={`ds-select ${errorMessage ? 'ds-select--error' : ''}`} disabled={disabled} aria-invalid={Boolean(errorMessage)} onChange={onChange} defaultValue="">
      <option value="" disabled>{placeholder}</option>
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
    {errorMessage && <span className="ds-select-field__error">{errorMessage}</span>}
  </label>
);
