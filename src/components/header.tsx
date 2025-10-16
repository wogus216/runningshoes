'use client';

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/brands", label: "Brands" },
  { href: "/compare?ids=metaspeed-sky-4,on-cloudsurfer-max", label: "Compare" },
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
            const activePath = link.href.split("?")[0];
            const isActive = pathname === activePath;
            return (
            <Link
              key={link.href}
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
            <Link href="/compare?ids=metaspeed-sky-4,on-cloudsurfer-max">Quick Compare</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle navigation">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6">
              <nav className="mt-10 flex flex-col gap-4">
                {links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-base font-medium">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild size="lg" className="mt-auto">
                <Link href="/compare?ids=metaspeed-sky-4,on-cloudsurfer-max">Launch Compare Tool</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
