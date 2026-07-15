import type { ChangeEvent } from 'react';
import './textarea.css';
export interface TextareaProps {
  label:string; placeholder?:string; helperText?:string; errorMessage?:string; rows?:number;
  required?:boolean; disabled?:boolean; defaultValue?:string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
export const Textarea = ({ label, placeholder, helperText, errorMessage, rows=4, required=false, disabled=false, defaultValue, onChange }: TextareaProps) => {
  const messageId = `${label.replace(/\s+/g,'-').toLowerCase()}-message`;
  return <label className="ds-textarea-field">
    <span className="ds-textarea-field__label">{label}{required && <span className="ds-textarea-field__required"> *</span>}</span>
    <textarea className={`ds-textarea ${errorMessage?'ds-textarea--error':''}`} placeholder={placeholder} rows={rows}
      required={required} disabled={disabled} defaultValue={defaultValue} aria-invalid={Boolean(errorMessage)}
      aria-describedby={(errorMessage||helperText)?messageId:undefined} onChange={onChange}/>
    {(errorMessage||helperText) && <span id={messageId} className={errorMessage?'ds-textarea-field__error':'ds-textarea-field__helper'}>{errorMessage||helperText}</span>}
  </label>;
};
