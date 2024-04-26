import { getAllItems } from "@/services/getAllItems";
import { ItemType } from "@/types/ItemType";
import Link from "next/link";
import { ItemsList } from "./_components/ItemsList";

export default async function InputForm() {
  const items: ItemType[] = await getAllItems();

  return (
    <main className="m-8">
      <h1>page: home</h1>
      <ul>
        <li>
          <Link href="/input-form">/input-form</Link>
        </li>
      </ul>

      <ItemsList items={items} />
    </main>
  );
}
