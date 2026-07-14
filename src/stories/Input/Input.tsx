import React from 'react';
import './input.css';

export interface InputProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  required = false,
  type = 'text',
  defaultValue,
  onChange,
}: InputProps) => (
  <label className="ds-field">
    <span className="ds-field__label">
      {label}
      {required && <span className="ds-field__required"> *</span>}
    </span>
    <input
      className={`ds-input ${errorMessage ? 'ds-input--error' : ''}`}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      defaultValue={defaultValue}
      aria-invalid={Boolean(errorMessage)}
      aria-describedby={errorMessage ? `${label}-error` : undefined}
      onChange={onChange}
    />
    {errorMessage ? (
      <span className="ds-field__error" id={`${label}-error`}>{errorMessage}</span>
    ) : helperText ? (
      <span className="ds-field__helper">{helperText}</span>
    ) : null}
  </label>
);
