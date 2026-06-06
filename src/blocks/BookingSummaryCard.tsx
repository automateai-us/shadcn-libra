import { Calendar, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface BookingSummaryCardProps {
  primaryLabel: string;
  checkin?: string;
  checkout?: string;
  rooms?: number | string;
  priceRange?: string;
  languages?: string[];
  ctaLabel?: string;
}

export function BookingSummaryCard({
  primaryLabel,
  checkin,
  checkout,
  rooms,
  priceRange,
  languages,
  ctaLabel = 'Check Availability'
}: BookingSummaryCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{primaryLabel}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 text-sm">
          {checkin ? (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                Check-in: <span className="font-medium">{checkin}</span>
              </span>
            </div>
          ) : null}
          {checkout ? (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>
                Check-out: <span className="font-medium">{checkout}</span>
              </span>
            </div>
          ) : null}
          {rooms ? (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{rooms} rooms available</span>
            </div>
          ) : null}
          {priceRange ? <div className="pt-2 text-lg font-semibold">{priceRange}</div> : null}
          {languages && languages.length > 0 ? (
            <div className="text-xs text-muted-foreground">Languages: {languages.join(', ')}</div>
          ) : null}
        </div>
        <Button className="w-full">{ctaLabel}</Button>
      </CardContent>
    </Card>
  );
}
