import Link from "next/link";

export default function Home() {
  return (
    <main className="m-8">
      <h1>page: home</h1>
      <ul>
        <li>
          <Link href="/server-component">/server-component</Link>
        </li>
      </ul>
    </main>
  );
}
