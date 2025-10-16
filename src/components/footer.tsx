import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-3 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Running Shoes Hub. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/brands" className="transition-colors hover:text-primary">
            Brands
          </Link>
          <Link href="/compare?ids=metaspeed-sky-4,on-cloudsurfer-max" className="transition-colors hover:text-primary">
            Compare
          </Link>
          <Link href="https://example.com/sitemap.xml" className="transition-colors hover:text-primary">
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
