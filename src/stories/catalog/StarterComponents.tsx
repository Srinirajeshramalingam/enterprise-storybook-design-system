import React from 'react';
import './starter-components.css';

export const IconButton = ({ label = 'Settings' }: { label?: string }) => (
  <button className="ds-shell-icon-button" type="button" aria-label={label}>⚙</button>
);

export const Textarea = ({ label = 'Description', placeholder = 'Enter description' }: { label?: string; placeholder?: string }) => (
  <label className="ds-shell-field"><span>{label}</span><textarea rows={4} placeholder={placeholder} /></label>
);

export const Avatar = ({ initials = 'SR', name = 'Srini Rajesh' }: { initials?: string; name?: string }) => (
  <div className="ds-shell-avatar" title={name} aria-label={name}>{initials}</div>
);

export const DataTable = () => (
  <table className="ds-shell-table">
    <thead><tr><th>Name</th><th>Status</th><th>Role</th></tr></thead>
    <tbody><tr><td>Design System</td><td>Active</td><td>Platform</td></tr></tbody>
  </table>
);

export const Tooltip = ({ text = 'Helpful information' }: { text?: string }) => (
  <span className="ds-shell-tooltip" tabIndex={0}>Hover / focus<span role="tooltip">{text}</span></span>
);

export const Toast = ({ message = 'Changes saved successfully.' }: { message?: string }) => (
  <div className="ds-shell-toast" role="status">{message}</div>
);

export const Progress = ({ value = 64 }: { value?: number }) => (
  <div className="ds-shell-progress"><div style={{ width: `${Math.max(0, Math.min(100, value))}%` }} /></div>
);

export const Spinner = () => <div className="ds-shell-spinner" role="status" aria-label="Loading" />;

export const Skeleton = () => (
  <div className="ds-shell-skeleton"><span /><span /><span /></div>
);

export const Header = () => (
  <header className="ds-shell-header"><strong>Enterprise DS</strong><nav>Home&nbsp;&nbsp; Components&nbsp;&nbsp; Docs</nav></header>
);

export const Breadcrumb = () => (
  <nav className="ds-shell-breadcrumb" aria-label="Breadcrumb">Home / Components / Current</nav>
);

export const Tabs = () => (
  <div className="ds-shell-tabs"><button className="is-active">Overview</button><button>Usage</button><button>Accessibility</button></div>
);

export const Pagination = () => (
  <nav className="ds-shell-pagination" aria-label="Pagination"><button>‹</button><button className="is-active">1</button><button>2</button><button>3</button><button>›</button></nav>
);

export const Modal = () => (
  <div className="ds-shell-modal"><h3>Confirm action</h3><p>Review the information before continuing.</p><div><button>Cancel</button><button className="is-primary">Confirm</button></div></div>
);

export const Drawer = () => (
  <aside className="ds-shell-drawer"><h3>Filters</h3><p>Category</p><label><input type="checkbox" /> Design systems</label></aside>
);
