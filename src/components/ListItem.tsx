import type { Item } from "../types/item";

interface ListItemProps {
  item: Item;
}

export default function ListItem({ item }: ListItemProps) {
  const slotInfo = item.slot_type ? `${item.slot_type}` : "-";
  return (
    <li className="text-white customBorder">
      <img src={item.iconUrl} alt={item.item} />
      {item.item} | {item.rarity} | {slotInfo} | {item.type} | {item.price} gold
    </li>
  );
}
