import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-semibold tracking-tight">
          Ashish Tirkey
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/Ashish_Tirkey_Resume.pdf"
            download
            className="font-mono text-accent transition-colors hover:text-foreground"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
