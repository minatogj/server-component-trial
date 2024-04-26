import { ItemType } from "@/types/ItemType";

export const postItem = async (item: ItemType) => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/items`, {
    method: "POST",
    body: JSON.stringify(item),
  });

  return result.json();
};
