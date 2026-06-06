import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface ContactLocationCardProps {
  address: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
  latitude?: string;
  longitude?: string;
  neighborhood?: string;
  hours?: string;
}

export function ContactLocationCard({
  address,
  phone,
  email,
  mapUrl,
  neighborhood,
  hours
}: ContactLocationCardProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <MapPin className="h-5 w-5" />
          Visit Us
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        {neighborhood ? <div className="text-muted-foreground">{neighborhood}</div> : null}
        <div className="font-medium">{address}</div>
        {hours ? <div className="text-muted-foreground">{hours}</div> : null}
        {phone ? (
          <div className="flex items-center gap-2 pt-2">
            <Phone className="h-4 w-4" />
            <a href={`tel:${phone}`} className="hover:underline">
              {phone}
            </a>
          </div>
        ) : null}
        {email ? (
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${email}`} className="hover:underline">
              {email}
            </a>
          </div>
        ) : null}
        {mapUrl ? (
          <Button asChild variant="outline" className="mt-2 w-full">
            <a href={mapUrl} target="_blank" rel="noopener noreferrer">
              Open in Maps
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
