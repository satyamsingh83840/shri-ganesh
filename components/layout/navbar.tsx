"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Fan } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "#categories" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  };

  // Replace with your company's actual WhatsApp number (include country code, no "+" or spaces)
  const whatsappNumber = "919560112230";
  const encodedMessage = encodeURIComponent(
    "Hello Shri Ganesh Enterprises, I was exploring your website and wanted to know more about your products.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/60 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 sm:gap-3 font-heading font-bold"
            >
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform duration-500 group-hover:rotate-180">
                <Fan className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <div className="flex flex-col justify-center">
                <p className="leading-none text-base sm:text-xl text-foreground whitespace-nowrap">
                  Shri Ganesh
                </p>
                <p className="text-xs sm:text-sm font-normal text-muted-foreground whitespace-nowrap">
                  Enterprises
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden items-center gap-8 md:flex"
              aria-label="Main Navigation"
            >
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA - Now launches WhatsApp */}
            <div className="hidden md:block">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full px-6 transition-transform hover:scale-105 active:scale-95">
                  Whatsapp
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-white/5 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Slide-Over */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-screen w-full max-w-xs border-l border-white/10 bg-zinc-950 p-6 md:hidden"
            >
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-lg font-bold text-foreground">
                    Shri Ganesh
                  </h2>
                  <p className="text-sm text-muted-foreground">Enterprises</p>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Staggered Links */}
              <motion.nav
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {links.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Mobile CTA - Now launches WhatsApp & closes menu panel */}
              <div className="mt-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="w-full rounded-full">Whatsapp</Button>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
