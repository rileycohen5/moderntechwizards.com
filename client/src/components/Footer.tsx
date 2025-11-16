import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="glass-effect border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-lg text-primary">Modern Technology</h3>
            <p className="text-sm text-muted-foreground">
              AI systems that handle calls, schedule appointments, and automate marketing — 24/7.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-services">Services</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-products">Products</Link></li>
              <li><Link href="/demo" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-demo">Demo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-about">About Us</Link></li>
              <li><Link href="/custom" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-custom">Custom Solutions</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:riley@moderntechnology.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="text-contact-email"
                >
                  riley@moderntechnology.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:949-887-9822" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="text-contact-phone"
                >
                  949-887-9822
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">&copy; 2025 Modern Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
