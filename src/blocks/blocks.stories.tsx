import type { Meta, StoryObj } from '@storybook/react';

import {
  AmenityGrid,
  BookingSummaryCard,
  CTASection,
  ContactLocationCard,
  FooterBlock,
  GalleryGrid,
  HeroIdentityBlock,
  TestimonialStrip
} from '@/index';

const meta = {
  title: 'Blocks/Universal',
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroIdentity: Story = {
  render: () => (
    <div className="bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <HeroIdentityBlock
          title="Stay in the heart of the city"
          subtitle="Boutique Hotel · San Francisco"
          description="A design-forward hospitality experience with rooftop dining, full-service spa, and dedicated concierge support. Steps from Union Square and the waterfront."
          image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
          badge="Editor's Pick"
          priceRange="$$$"
          rating="4.9 · 340 reviews"
          ctaPrimary="Book your stay"
          ctaSecondary="View amenities"
        />
      </div>
    </div>
  )
};

export const ContactLocation: Story = {
  render: () => (
    <div className="bg-background p-8">
      <div className="mx-auto max-w-xl">
        <ContactLocationCard
          address="21 Market Street, San Francisco, CA 94105"
          neighborhood="Downtown Waterfront"
          hours="Open daily · 8:00 AM – 10:00 PM"
          phone="(415) 555-0192"
          email="hello@ezmenus.com"
          mapUrl="https://maps.google.com"
        />
      </div>
    </div>
  )
};

export const Amenities: Story = {
  render: () => (
    <div className="bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <AmenityGrid
          title="Amenities & Services"
          intro="Everything you need for a seamless and memorable stay."
          items={[
            'Complimentary breakfast',
            'Rooftop pool & sundeck',
            'Airport transfer',
            'Pet friendly',
            'High-speed Wi-Fi',
            'Late checkout',
            'Spa & wellness center',
            'On-site restaurant',
            'Valet parking',
            'Concierge service',
            '24-hour room service',
            'EV charging stations'
          ]}
          columns={3}
        />
      </div>
    </div>
  )
};

export const BookingSummary: Story = {
  render: () => (
    <div className="bg-background p-8">
      <div className="mx-auto max-w-sm">
        <BookingSummaryCard
          primaryLabel="The Grand Market Hotel"
          checkin="Fri, Jun 20 · 3:00 PM"
          checkout="Sun, Jun 22 · 11:00 AM"
          rooms={2}
          priceRange="$285 – $420 / night"
          languages={['English', 'Spanish', 'French', 'Mandarin']}
          ctaLabel="Check Availability"
        />
      </div>
    </div>
  )
};

export const Gallery: Story = {
  render: () => (
    <div className="bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <GalleryGrid
          title="Photo Gallery"
          images={[
            {
              src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
              alt: 'Signature suite',
              caption: 'Signature Suite'
            },
            {
              src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80',
              alt: 'Dining lounge',
              caption: 'Dining Lounge'
            },
            {
              src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
              alt: 'Garden terrace',
              caption: 'Garden Terrace'
            },
            {
              src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
              alt: 'Rooftop pool',
              caption: 'Rooftop Pool'
            },
            {
              src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
              alt: 'Spa treatment room',
              caption: 'Spa & Wellness'
            },
            {
              src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
              alt: 'Restaurant dinner',
              caption: 'Rooftop Restaurant'
            }
          ]}
          columns={3}
        />
      </div>
    </div>
  )
};

export const Testimonials: Story = {
  render: () => (
    <div className="bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <TestimonialStrip
          title="What our guests say"
          variant="carousel"
          testimonials={[
            {
              text: 'Exceptional service from check-in to checkout. The rooftop breakfast was a highlight of our entire trip — worth every penny.',
              author: 'Avery M.',
              rating: 5,
              date: 'May 2026'
            },
            {
              text: 'Perfect location for our corporate retreat. The concierge team arranged everything flawlessly and the rooms are stunning.',
              author: 'Jordan K.',
              rating: 5,
              date: 'April 2026'
            },
            {
              text: 'We visit every year and the quality never slips. The spa is world-class and the staff remembers your name — a rare touch.',
              author: 'Casey R.',
              rating: 5,
              date: 'March 2026'
            }
          ]}
        />
      </div>
    </div>
  )
};

export const CallToAction: Story = {
  render: () => (
    <div className="bg-background p-8">
      <div className="mx-auto max-w-5xl">
        <CTASection
          title="Launch your hospitality page in minutes"
          description="Use EzMenus projection blocks to assemble a polished, branded experience — no design skills required."
          ctaLabel="Start building for free"
          ctaUrl="https://example.com"
          variant="centered"
        />
      </div>
    </div>
  )
};

export const Footer: Story = {
  render: () => (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1" />
      <FooterBlock
        businessName="EzMenus"
        copyright="© 2026 EzMenus Inc. All rights reserved."
        columns={[
          {
            title: 'Product',
            links: [
              { label: 'Features', url: '#' },
              { label: 'Pricing', url: '#' },
              { label: 'Block Library', url: '#' },
              { label: 'Changelog', url: '#' }
            ]
          },
          {
            title: 'Company',
            links: [
              { label: 'About', url: '#' },
              { label: 'Blog', url: '#' },
              { label: 'Careers', url: '#' },
              { label: 'Press', url: '#' }
            ]
          },
          {
            title: 'Support',
            links: [
              { label: 'Documentation', url: '#' },
              { label: 'API Reference', url: '#' },
              { label: 'Status', url: '#' },
              { label: 'Contact', url: '#' }
            ]
          }
        ]}
        socialLinks={[
          { label: 'Instagram', url: '#' },
          { label: 'LinkedIn', url: '#' },
          { label: 'X / Twitter', url: '#' }
        ]}
      />
    </div>
  )
};
