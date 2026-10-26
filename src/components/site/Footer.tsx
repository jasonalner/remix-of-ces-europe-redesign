import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { company } from "@/lib/catalog";

export function Footer() {
  const quick = [
    { label: "Paoli Wheel Guns", slug: "paoli-wheel-guns" },
    { label: "Paoli Accessories", slug: "paoli-accessories" },
    { label: "Hose Assemblies and Fittings", slug: "hose-assemblies-and-fittings" },
    { label: "Compressors", slug: "compressors" },
  ];
  return (
    <footer className="inverse border-t border-border bg-deep">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src="/ces-logo.svg" alt="CES Europe" width={100} height={60} className="h-14 w-auto" loading="lazy" />
          <address className="mt-6 not-italic leading-relaxed text-muted-foreground">
            {company.name}<br />{company.street}<br />{company.town}, {company.postcode}<br />{company.country}
          </address>
          {/* PLACEHOLDER: swap for official Paoli logo file when supplied */}
          <div className="mt-8 inline-flex items-center gap-3 border border-border px-4 py-3">
            <span className="font-display text-lg font-bold tracking-widest">PAOLI</span>
            <span className="border-l border-border pl-3 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Part of the<br />Dino Paoli group</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Quick links</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Product Range</Link></li>
            {quick.map((q) => (
              <li key={q.slug}><Link to="/products/$category" params={{ category: q.slug }} className="hover:text-foreground">{q.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Follow</p>
          <div className="mt-5 flex gap-3">
            {[
              { href: company.socials.facebook, Icon: Facebook, label: "Facebook" },
              { href: company.socials.x, Icon: Twitter, label: "X (Twitter)" },
              { href: company.socials.instagram, Icon: Instagram, label: "Instagram" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CES Europe Ltd</p>
          <div className="flex gap-6">
            <Link to="/cookies" className="hover:text-foreground">Cookies</Link>
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
