import { ItemType } from "@/types/ItemType";

export default async function Page() {
  const itemsResult = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/items`,
    { cache: "no-store" }
  ).then((res) => res.json());
  const items: ItemType[] = itemsResult.data;

  return (
    <main className="m-8">
      <h1>page: server-component</h1>
      <dl>
        {items.map((item: ItemType) => (
          <div key={item.id}>
            <dt>{item.name}</dt>
            <dd>{item.description}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
