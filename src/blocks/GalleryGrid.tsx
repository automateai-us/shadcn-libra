export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryGridProps {
  title?: string;
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

const gridCols: Record<NonNullable<GalleryGridProps['columns']>, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4'
};

export function GalleryGrid({ title = 'Gallery', images, columns = 3 }: GalleryGridProps) {
  return (
    <section className="space-y-6 py-10">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className={`grid gap-4 ${gridCols[columns]}`}>
        {images.map((image) => (
          <div key={image.src} className="group relative overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-square w-full object-cover transition-transform group-hover:scale-105"
            />
            {image.caption ? (
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-center text-xs text-white">
                {image.caption}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
