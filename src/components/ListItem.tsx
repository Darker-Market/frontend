import type { Item } from "../types/item";

interface ListItemProps {
  item: Item;
}

export default function ListItem({ item }: ListItemProps) {
  const slotInfo = item.slot_type ? `${item.slot_type}` : "-";
  const rarityInfo = item.rarity.toLocaleLowerCase();
  const textColor = `text-${rarityInfo}`;
  const quantityInfo = item.quantity > 1 ? `(${item.quantity})` : "";

  return (
    <li className="text-white text-center customBorder grid grid-cols-6 grid-rows-1 gap-4 items-center">
      <div className="grid grid-cols-3 grid-rows-1 gap-4 items-center min-w-1/3 text-left col-span-2 ">
        <img
          src={item.iconUrl}
          alt={item.item}
          className="max-w-15 max-h-15 min-w-15 min-h-15 object-contain self-center justify-self-center"
        />
        <div className={`${textColor} w-100%`}>{item.item} </div>
        <div className={`${textColor}`}>{item.rarity} </div>
      </div>
      <div>{slotInfo} </div>
      <div>{item.type} </div>
      <div>{item.expires_in}</div>
      <div>{`${item.price} ${quantityInfo}`} gold</div>
    </li>
  );
}
