export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterBlockProps {
  businessName: string;
  columns?: FooterColumn[];
  socialLinks?: FooterLink[];
  copyright?: string;
}

export function FooterBlock({
  businessName,
  columns = [],
  socialLinks = [],
  copyright
}: FooterBlockProps) {
  return (
    <footer className="mt-auto border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">{businessName}</h3>
            {copyright ? <p className="mt-2 text-sm text-muted-foreground">{copyright}</p> : null}
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-3 font-semibold">{column.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.url} className="hover:text-foreground hover:underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {socialLinks.length > 0 ? (
            <div>
              <h4 className="mb-3 font-semibold">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
