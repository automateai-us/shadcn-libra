import { Card, CardContent } from '@/components/ui/card';

export interface AmenityGridProps {
  title?: string;
  intro?: string;
  items: string[];
  columns?: 2 | 3 | 4;
}

const gridCols: Record<NonNullable<AmenityGridProps['columns']>, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4'
};

export function AmenityGrid({ title = 'Amenities', intro, items, columns = 3 }: AmenityGridProps) {
  return (
    <section className="space-y-6 py-10">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {intro ? <p className="mt-1 text-muted-foreground">{intro}</p> : null}
      </div>
      <div className={`grid gap-4 ${gridCols[columns]}`}>
        {items.map((item) => (
          <Card key={item}>
            <CardContent className="p-4 text-sm">{item}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
