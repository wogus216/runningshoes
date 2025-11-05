'use client';

import Link from "next/link";
import type { LinkProps } from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type InternalNavLink = {
  label: string;
  href: LinkProps["href"];
  matchPath?: string;
  external?: false;
};

type ExternalNavLink = {
  label: string;
  href: string;
  external: true;
};

type NavLink = InternalNavLink | ExternalNavLink;

const compareHref: LinkProps["href"] = {
  pathname: "/compare",
  query: { ids: "metaspeed-sky-4,on-cloudsurfer-max" },
};

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/brands", label: "Brands" },
  {
    href: compareHref,
    label: "Compare",
    matchPath: "/compare",
  },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-semibold">
          Running Shoes Hub
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                >
                  {link.label}
                </a>
              );
            }

            const activePath =
              link.matchPath ??
              (typeof link.href === "string"
                ? link.href.split("?")[0]
                : link.href.pathname ?? "");
            const isActive = pathname === activePath;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <Link href={compareHref}>Quick Compare</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6">
              <nav className="mt-10 flex flex-col gap-4">
                {links.map((link) =>
                  link.external ? (
                    <a key={link.label} href={link.href} className="text-base font-medium text-muted-foreground">
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} className="text-base font-medium">
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <Button asChild size="lg" className="mt-auto">
                <Link href={compareHref}>Launch Compare Tool</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
