"use client";

import * as React from "react";
import { Slash } from "lucide-react";
import { cn } from "@/lib/utils";

const Breadcrumb = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)} {...props} />
);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
  <ol className={cn("flex flex-wrap items-center gap-1.5", className)} {...props} />
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className={cn("inline-flex items-center gap-1.5", className)} {...props} />
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(({ className, ...props }, ref) => (
  <a ref={ref} className={cn("transition-colors hover:text-foreground", className)} {...props} />
));
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("font-semibold text-foreground", className)} {...props} />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement> & { children?: React.ReactNode }) => (
  <span role="presentation" className={cn("px-1 text-muted-foreground", className)} {...props}>
    {children ?? <Slash className="h-3 w-3" />}
  </span>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator };
