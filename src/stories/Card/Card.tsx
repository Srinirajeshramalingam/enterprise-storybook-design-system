import React from 'react';
import './card.css';

export interface CardProps {
  eyebrow?: string;
  title: string;
  description: string;
  imageUrl?: string;
  ctaLabel?: string;
  elevated?: boolean;
  onCtaClick?: () => void;
}

export const Card = ({ eyebrow, title, description, imageUrl, ctaLabel = 'Learn more', elevated = false, onCtaClick }: CardProps) => (
  <article className={`ds-card ${elevated ? 'ds-card--elevated' : ''}`}>
    {imageUrl && <img className="ds-card__image" src={imageUrl} alt="" />}
    <div className="ds-card__body">
      {eyebrow && <div className="ds-card__eyebrow">{eyebrow}</div>}
      <h3 className="ds-card__title">{title}</h3>
      <p className="ds-card__description">{description}</p>
      <button className="ds-card__action" type="button" onClick={onCtaClick}>{ctaLabel}</button>
    </div>
  </article>
);
