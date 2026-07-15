import Link from "next/link";
import { Fan, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "#products" },
  { name: "Categories", href: "#categories" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-background via-background/95 to-muted/20">
      {/* Decorative ambient glow background element */}
      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column (Span 5) */}
          <div className="space-y-6 lg:col-span-5">
            <div className="flex items-center gap-3.5">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/10">
                <Fan className="h-5 w-5 animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-0 rounded-xl bg-primary/20 blur-sm animate-ping [animation-duration:3s]" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Shri Ganesh
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
                  Enterprises
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground/90">
              Premium custom fans engineered with superior quality, ultimate
              durability, and optimum airflow efficiency for modern living
              spaces.
            </p>
          </div>

          {/* Navigation Links Column (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground/90 transition-all duration-300 hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Get In Touch
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground/90">
              <li>
                <a
                  href="tel:+919560112230"
                  className="group flex items-start gap-3 rounded-lg border border-transparent transition-colors hover:text-primary"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted border border-border group-hover:border-primary/20 group-hover:bg-primary/5">
                    <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs text-muted-foreground/60 font-medium">
                      Call Us
                    </p>
                    <p className="font-medium">+91 9560112230</p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@shriganesh.com"
                  className="group flex items-start gap-3 rounded-lg border border-transparent transition-colors hover:text-primary"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted border border-border group-hover:border-primary/20 group-hover:bg-primary/5">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                  <div className="pt-0.5">
                    <p className="text-xs text-muted-foreground/60 font-medium">
                      Email Us
                    </p>
                    <p className="font-medium break-all">adrs03613@gmail.com</p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted border border-border">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="pt-0.5">
                  <p className="text-xs text-muted-foreground/60 font-medium">
                    Location
                  </p>
                  <p className="font-medium leading-tight">
                    A-2/111 Mohan Garden, Uttam Nagar, New Delhi, India
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="mt-12 border-t border-border/50" />

        {/* Bottom Legal bar */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground/80">
          <p>
            © {new Date().getFullYear()} Shri Ganesh Enterprises. All rights
            reserved.
          </p>
          <div className="flex gap-6 font-medium">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
