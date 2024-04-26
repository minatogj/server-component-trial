import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <Link href={"/"} prefetch={false}>
        root
      </Link>
    </header>
  );
};
