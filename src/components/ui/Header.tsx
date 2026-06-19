import Link from "next/link";
import Navigation from "@/components/ui/Navigation";

export default function Header() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-400/20 bg-slate-950/80 backdrop-blur-md">
      <Link
        href="#main"
        className="absolute left-2 top-2 z-50 -translate-y-16 rounded-md bg-black px-3 py-2 text-white transition focus:translate-y-0"
      >
        Skip to main content
      </Link>
      <Navigation links={links} />
    </header>
  );
}