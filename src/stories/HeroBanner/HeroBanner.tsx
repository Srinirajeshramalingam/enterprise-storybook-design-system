import React from 'react';
import './hero-banner.css';

export interface HeroBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  imageUrl?: string;
  alignment?: 'left' | 'center';
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

export const HeroBanner = ({
  eyebrow,
  title,
  description,
  primaryCtaLabel = 'Get started',
  secondaryCtaLabel,
  imageUrl,
  alignment = 'left',
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: HeroBannerProps) => (
  <section className={`ds-hero ds-hero--${alignment}`}>
    <div className="ds-hero__content">
      {eyebrow && <div className="ds-hero__eyebrow">{eyebrow}</div>}
      <h1 className="ds-hero__title">{title}</h1>
      <p className="ds-hero__description">{description}</p>
      <div className="ds-hero__actions">
        <button className="ds-hero__primary" type="button" onClick={onPrimaryCtaClick}>{primaryCtaLabel}</button>
        {secondaryCtaLabel && <button className="ds-hero__secondary" type="button" onClick={onSecondaryCtaClick}>{secondaryCtaLabel}</button>}
      </div>
    </div>
    {imageUrl && <img className="ds-hero__image" src={imageUrl} alt="" />}
  </section>
);
