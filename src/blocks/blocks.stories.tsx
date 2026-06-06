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
    <div className="mx-auto max-w-6xl px-6">
      <HeroIdentityBlock
        title="Stay in the heart of the city"
        subtitle="Boutique hotel"
        description="A design-forward hospitality experience with spa access, rooftop dining, and concierge booking support."
        image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
        badge="Featured"
        priceRange="$$$"
        rating="4.9 stars"
      />
    </div>
  )
};

export const ContactLocation: Story = {
  render: () => (
    <div className="p-6">
      <ContactLocationCard
        address="21 Market Street, San Francisco, CA"
        neighborhood="Downtown Waterfront"
        hours="Open daily · 8am – 10pm"
        phone="(415) 555-0192"
        email="hello@ezmenus.com"
        mapUrl="https://maps.google.com"
      />
    </div>
  )
};

export const Amenities: Story = {
  render: () => (
    <div className="mx-auto max-w-5xl px-6">
      <AmenityGrid
        intro="Everything a traveler needs for a seamless stay."
        items={['Complimentary breakfast', 'Pool access', 'Airport transfer', 'Pet friendly', 'Fast Wi-Fi', 'Late checkout']}
      />
    </div>
  )
};

export const BookingSummary: Story = {
  render: () => (
    <div className="p-6">
      <BookingSummaryCard
        primaryLabel="Reserve your stay"
        checkin="Today · 3:00 PM"
        checkout="Tomorrow · 11:00 AM"
        rooms={3}
        priceRange="$220–$340/night"
        languages={['English', 'Spanish', 'French']}
      />
    </div>
  )
};

export const Gallery: Story = {
  render: () => (
    <div className="mx-auto max-w-6xl px-6">
      <GalleryGrid
        images={[
          {
            src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
            alt: 'Room interior',
            caption: 'Signature suite'
          },
          {
            src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80',
            alt: 'Dining area',
            caption: 'Dining lounge'
          },
          {
            src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
            alt: 'Outdoor terrace',
            caption: 'Garden terrace'
          }
        ]}
      />
    </div>
  )
};

export const Testimonials: Story = {
  render: () => (
    <div className="mx-auto max-w-4xl px-6">
      <TestimonialStrip
        testimonials={[
          { text: 'Beautiful rooms and warm service from check-in to checkout.', author: 'Avery', rating: 5, date: 'May 2026' },
          { text: 'Perfect location for our team retreat and client dinners.', author: 'Jordan', rating: 5, date: 'April 2026' },
          { text: 'The rooftop breakfast was the highlight of our stay.', author: 'Casey', rating: 4, date: 'March 2026' }
        ]}
      />
    </div>
  )
};

export const CallToAction: Story = {
  render: () => (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <CTASection
        title="Ready to launch your next hospitality page?"
        description="Use the EzMenus projection blocks to assemble a polished, themed experience in minutes."
        ctaLabel="Start building"
        ctaUrl="https://example.com"
      />
    </div>
  )
};

export const Footer: Story = {
  render: () => (
    <FooterBlock
      businessName="EzMenus"
      copyright="© 2026 EzMenus. All rights reserved."
      columns={[
        { title: 'Product', links: [{ label: 'Features', url: '#' }, { label: 'Pricing', url: '#' }] },
        { title: 'Company', links: [{ label: 'About', url: '#' }, { label: 'Careers', url: '#' }] }
      ]}
      socialLinks={[{ label: 'Instagram', url: '#' }, { label: 'LinkedIn', url: '#' }]}
    />
  )
};
