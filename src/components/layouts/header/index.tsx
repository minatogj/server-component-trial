"use client";

import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push("/");
    router.refresh();
  };

  return (
    <header>
      <a
        href="/"
        onClick={handleLinkClick}
        aria-current={pathname === "/" ? "page" : undefined}
      >
        root
      </a>
    </header>
  );
};
