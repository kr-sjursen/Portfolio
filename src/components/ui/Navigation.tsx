import Link from "next/link";

export default function Navigation(
  { links }: { links: Array<{ href: string; label: string }> }
) {
  return (
    <nav
      className="u-container flex min-h-[4.5rem] items-center justify-center"
      aria-label="Primary"
    >
      <ul className="m-0 flex list-none flex-wrap gap-3 p-0 md:gap-5">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="u-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}