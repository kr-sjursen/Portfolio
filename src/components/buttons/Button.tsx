import Link from "next/link";
import { AriaAttributes } from "react";

interface ButtonProps {
  Path: string;
  Text: string;
  Aria?: AriaAttributes['aria-label'];
}

export default function Button({ Path, Text, Aria }: ButtonProps) {
  /*if (destination === "currentPage") {
    return (
      <button
        type="button"
        className="u-pill"
        aria-label={Aria}
      >
        {Text}
      </button>
    );
  };*/

  return (
    <Link
      href={Path}
      className="u-pill"
      aria-label={Aria}
    >
      {Text}
    </Link>
  );
}