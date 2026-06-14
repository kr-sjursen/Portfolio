import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-slate-400/20 bg-slate-950/82 backdrop-blur-md"
      aria-label="Site footer"
    >
      <div className="footer-inner u-container u-grid py-5">
        <div className="footer-brand-col flex flex-wrap items-center justify-start gap-1">
          <p className="m-0 font-bold tracking-wide">Kr-sjursen</p>
          <p className="t-copy u-muted m-0 text-[.92rem]">
            Full-Stack developer building thoughtful web interfaces.
          </p>
        </div>

        <nav
          className="footer-nav-col flex flex-wrap items-center justify-center gap-3"
          aria-label="Footer navigation"
        >
          <Link href="/#projects" className="u-link">Projects</Link>
          <Link href="/#about" className="u-link">About</Link>
          <Link href="/#contact" className="u-link">Contact</Link>
        </nav>

        <div className="footer-social-col flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/kr-sjursen"
            className="u-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="u-link"
            target="_blank"
            rel="noreferrer"
          >
            {/* TODO: Add LinkedIn link */}
            LinkedIn
          </a>
          <Link href="/#main" className="u-link font-semibold">Back to top</Link>
        </div>
      </div>

      <div className="border-t border-slate-400/16">
        <p className="t-copy u-muted m-0 px-4 py-3 text-center text-[.88rem]">
          © {year} Kr-sjursen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}