import React from 'react';

import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;

  /** What background color to use */
  backgroundColor?: string;

  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';

  /** Button contents */
  label: string;

  /** Is the button disabled? */
  disabled?: boolean;

  /** Is the button showing a loading state? */
  loading?: boolean;

  /** Optional click handler */
  onClick?: () => void;
}

/**
 * Button component user action-ah trigger panna use aagum.
 *
 * Common use cases:
 * - Form submit
 * - Save or continue action
 * - Modal open or close action
 * - CMS call-to-action
 *
 * Primary variant main action-ku use pannuvom.
 * Secondary variant supporting action-ku use pannuvom.
 * Disabled state interaction-ah prevent pannum.
 * Loading state action processing-la irukku-nu communicate pannum.
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  loading = false,
  onClick,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size}`,
        mode,
      ].join(' ')}
      style={{ backgroundColor }}
      disabled={isDisabled}
      aria-busy={loading}
      onClick={isDisabled ? undefined : onClick}
      {...props}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};