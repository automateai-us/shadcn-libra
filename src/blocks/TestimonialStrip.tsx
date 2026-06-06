import { Star } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

export interface Testimonial {
  text: string;
  author: string;
  rating?: number;
  date?: string;
}

export interface TestimonialStripProps {
  title?: string;
  testimonials: Testimonial[];
  variant?: 'grid' | 'carousel';
}

export function TestimonialStrip({
  title = 'What our guests say',
  testimonials,
  variant = 'grid'
}: TestimonialStripProps) {
  if (variant === 'carousel') {
    return (
      <section className="space-y-6 py-10">
        <h2 className="text-center text-2xl font-semibold">{title}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.author}-${index}`} {...testimonial} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-6 py-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.author}-${index}`} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({ text, author, rating, date }: Testimonial) {
  return (
    <Card>
      <CardContent className="space-y-3 p-6">
        {rating ? (
          <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        ) : null}
        <p className="italic text-muted-foreground">&quot;{text}&quot;</p>
        <div className="text-sm font-medium">{author}</div>
        {date ? <div className="text-xs text-muted-foreground">{date}</div> : null}
      </CardContent>
    </Card>
  );
}
