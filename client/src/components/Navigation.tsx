import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/bundles", label: "Bundles" },
    { path: "/demo", label: "Demo" },
    { path: "/custom", label: "Custom" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home-logo">
            <pre className="font-mono text-[8px] sm:text-xs leading-tight text-primary hover-elevate active-elevate-2 cursor-pointer select-none">
{`__  __           _                
|  \\/  | ___   __| | ___ _ __  
| |\\/| |/ _ \\ / _\` |/ _ \\ '_ \\ 
| |  | | (_) | (_| |  __/ | | |
|_|  |_|\\___/ \\__,_|\\___|_| |_|
  MODERN · TECHNOLOGY`}
            </pre>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  size="sm"
                  data-testid={`link-${link.label.toLowerCase()}`}
                  className={location === link.path ? "text-primary" : ""}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === link.path ? "text-primary" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
