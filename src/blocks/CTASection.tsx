import { CSSProperties } from 'react';

import { Button } from '@/components/ui/button';

export interface CTASectionProps {
  title: string;
  description?: string;
  ctaLabel: string;
  ctaUrl?: string;
  variant?: 'default' | 'centered' | 'split';
  backgroundImage?: string;
}

export function CTASection({
  title,
  description,
  ctaLabel,
  ctaUrl,
  variant = 'centered',
  backgroundImage
}: CTASectionProps) {
  const bgStyle: CSSProperties = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    : {};

  if (variant === 'split') {
    return (
      <section className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-muted px-6 py-12 md:flex-row">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          {description ? <p className="mt-1 text-muted-foreground">{description}</p> : null}
        </div>
        <Button asChild size="lg">
          <a href={ctaUrl ?? '#'}>{ctaLabel}</a>
        </Button>
      </section>
    );
  }

  return (
    <section
      className={`rounded-2xl px-6 py-16 text-center ${backgroundImage ? 'text-white' : 'bg-primary text-primary-foreground'}`}
      style={bgStyle}
    >
      <div className={backgroundImage ? 'rounded-2xl bg-black/50 p-8' : ''}>
        <h2 className="text-3xl font-bold">{title}</h2>
        {description ? <p className="mx-auto mt-3 max-w-md">{description}</p> : null}
        <Button asChild size="lg" variant={backgroundImage ? 'default' : 'secondary'} className="mt-6">
          <a href={ctaUrl ?? '#'}>{ctaLabel}</a>
        </Button>
      </div>
    </section>
  );
}
