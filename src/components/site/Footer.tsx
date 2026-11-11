import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { categories, company } from "@/lib/catalog";
import { ContactLines } from "./Blocks";

export function Footer() {
  return (
    <footer className="inverse border-t border-border bg-deep">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div>
          <img
            src="/ces-logo.svg"
            alt="CES Europe"
            width={100}
            height={60}
            className="h-14 w-auto"
            loading="lazy"
          />
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Official Paoli agent
          </p>
        </div>
        <div>
          <p className="eyebrow">Products</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">{categories.map(c => <li key={c.slug}><Link to="/products/$category" params={{ category: c.slug }} className="hover:text-foreground">{c.name}</Link></li>)}</ul>
        </div>
        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/services/servicing" className="hover:text-foreground">Servicing and Repair</Link></li>
            <li><Link to="/services/advice" className="hover:text-foreground">Advice and Consultation</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact</p>
          <address className="mt-6 not-italic leading-relaxed text-muted-foreground">
            {company.name}
            <br />
            {company.street}
            <br />
            {company.town}, {company.postcode}
            <br />
            {company.country}
          </address>
          <ContactLines className="mt-5 text-sm text-muted-foreground" />
          <p className="eyebrow mt-6">Follow</p>
          <div className="mt-5 flex gap-3">
            {[
              { href: company.socials.facebook, Icon: Facebook, label: "Facebook" },
              { href: company.socials.x, Icon: Twitter, label: "X (Twitter)" },
              { href: company.socials.instagram, Icon: Instagram, label: "Instagram" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
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
            <Link to="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
            <Link to="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
