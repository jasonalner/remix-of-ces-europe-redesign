import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/lib/catalog";
import { cn } from "@/lib/utils";

const navLink =
  "font-display text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground";
const dropdownPanel =
  "invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100";
const dropdownItem =
  "block px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "inverse fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-deep/95" : "border-transparent bg-deep/90",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-4" aria-label="CES Europe home">
          <img
            src="/ces-logo.svg"
            alt="CES Europe"
            width={106}
            height={63}
            className="h-14 w-auto"
          />
          <span className="hidden border-l border-border pl-4 text-[10px] uppercase leading-tight tracking-[0.2em] text-muted-foreground xl:block">
            Official
            <br />
            Paoli agent
          </span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className={navLink}
            activeProps={{ className: "text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link to="/about" className={navLink} activeProps={{ className: "text-foreground" }}>
            About Us
          </Link>
          <div className="group relative">
            <Link
              to="/products"
              className={cn(navLink, "inline-flex items-center gap-1")}
              activeProps={{ className: "text-foreground" }}
            >
              Our Products <ChevronDown className="size-3" />
            </Link>
            <div className={dropdownPanel}>
              <ul className="border border-border bg-deep py-2">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/products/$category"
                      params={{ category: c.slug }}
                      className={dropdownItem}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="group relative">
            <Link
              to="/services"
              className={cn(navLink, "inline-flex items-center gap-1")}
              activeProps={{ className: "text-foreground" }}
            >
              Services <ChevronDown className="size-3" />
            </Link>
            <div className={dropdownPanel}>
              <ul className="border border-border bg-deep py-2">
                <li>
                  <Link to="/services/servicing" className={dropdownItem}>
                    Servicing and Repair
                  </Link>
                </li>
                <li>
                  <Link to="/services/advice" className={dropdownItem}>
                    Advice and Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/contact" className={navLink} activeProps={{ className: "text-foreground" }}>
            Contact Us
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="lg" className="hidden sm:inline-flex">
            <Link to="/contact">Enquire</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-deep transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="container-x flex h-20 items-center justify-between">
          <img src="/ces-logo.svg" alt="CES Europe" className="h-12 w-auto" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="size-6" />
          </Button>
        </div>
        <nav
          aria-label="Mobile"
          className="container-x flex flex-1 flex-col gap-6 overflow-y-auto pb-10 pt-6"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <Link to="/" className="font-display text-3xl font-semibold">
            Home
          </Link>
          <Link to="/about" className="font-display text-3xl font-semibold">
            About Us
          </Link>
          <Link to="/products" className="font-display text-3xl font-semibold">
            Our Products
          </Link>
          <ul className="space-y-3 border-l border-border pl-4">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/products/$category"
                  params={{ category: c.slug }}
                  className="text-muted-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/services" className="font-display text-3xl font-semibold">
            Services
          </Link>
          <ul className="space-y-3 border-l border-border pl-4">
            <li>
              <Link to="/services/servicing" className="text-muted-foreground">
                Servicing and Repair
              </Link>
            </li>
            <li>
              <Link to="/services/advice" className="text-muted-foreground">
                Advice and Consultation
              </Link>
            </li>
          </ul>
          <Link to="/contact" className="font-display text-3xl font-semibold">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
