import React from 'react';
import './badge.css';

export interface BadgeProps {
  label: string;
  tone?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
}

export const Badge = ({ label, tone = 'neutral' }: BadgeProps) => (
  <span className={`ds-badge ds-badge--${tone}`}>{label}</span>
);
