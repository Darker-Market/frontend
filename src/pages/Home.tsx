import { useEffect, useState } from "react";
import api from "../api/axios";

export interface Item {
  id: number;
  item_id: string;
  item: string;
  rarity: string;
  price: number;
  quantity: number;
  [key: string]: any;
}

interface ApiResponse {
  body: Item[];
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState("");

  console.log(items);

  useEffect(() => {
    api
      .get<ApiResponse>("/test")
      .then((res) => setItems(res.data.body))
      .catch((err) => {
        console.error(err);
        setError("Failed to load data");
      });
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Marketplace Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <img src={item.iconUrl} alt="" /> {item.item} — {item.rarity} —{" "}
            {item.price} gold
          </li>
        ))}
      </ul>
    </div>
  );
}
