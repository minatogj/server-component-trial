import { ItemType } from "@/types/ItemType";

interface Props {
  items: ItemType[];
}

export const ItemsList = ({ items }: Props) => {
  return (
    <dl>
      {items.map((item: ItemType) => (
        <div key={item.id}>
          <dt>{item.name}</dt>
          <dd>{item.description}</dd>
        </div>
      ))}
    </dl>
  );
};
