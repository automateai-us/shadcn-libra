import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface HeroIdentityBlockProps {
  title: string;
  description: string;
  subtitle?: string;
  image?: string;
  rating?: string;
  priceRange?: string;
  badge?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export function HeroIdentityBlock({
  title,
  description,
  subtitle,
  image,
  rating,
  priceRange,
  badge,
  ctaPrimary = 'Book now',
  ctaSecondary = 'Explore'
}: HeroIdentityBlockProps) {
  return (
    <section className="grid gap-8 py-12 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        {(badge || priceRange || rating) && (
          <div className="flex flex-wrap gap-2">
            {badge ? <Badge variant="secondary">{badge}</Badge> : null}
            {priceRange ? <Badge variant="outline">{priceRange}</Badge> : null}
            {rating ? <Badge>{rating}</Badge> : null}
          </div>
        )}
        {subtitle ? (
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{subtitle}</p>
        ) : null}
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="max-w-xl text-lg text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-3">
          <Button>{ctaPrimary}</Button>
          <Button variant="outline">{ctaSecondary}</Button>
        </div>
      </div>
      {image ? (
        <img src={image} alt={title} className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg" />
      ) : null}
    </section>
  );
}
