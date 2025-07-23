import type { Item } from "../types/item";

interface ListItemProps {
  item: Item;
}

export default function ListItem({ item }: ListItemProps) {
  const slotInfo = item.slot_type ? `${item.slot_type}` : "-";
  return (
    <li className={`customBorder flex items-center justify-between`}>
      <div className="flex items-center justify-between min-w-1/3 legendaryGradient">
        <img src={item.iconUrl} alt={item.item} className="max-w-5" />
        <div style={{ color: `var(--color-${item.rarity.toLowerCase()})` }}>
          {item.item} |
        </div>
        <div style={{ color: `var(--color-${item.rarity.toLowerCase()})` }}>
          {item.rarity} |
        </div>
      </div>
      <div>{slotInfo} |</div>
      <div>{item.type} |</div>
      <div>{item.price} gold</div>
    </li>
  );
}
