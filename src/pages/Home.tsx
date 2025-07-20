import api from "../api/axios";
import type { Item, ApiResponse } from "../types/item";
import { useQuery } from "@tanstack/react-query";

const fetchItems = async (): Promise<Item[]> => {
  const res = await api.get<ApiResponse>("/test");
  return res.data.body;
};

export default function Home() {
  const {
    data: items,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["market-items"],
    queryFn: fetchItems,
    refetchOnWindowFocus: false,
  });

  console.log(items);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load data</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Marketplace Items</h1>
      <ul>
        {items?.map((item) => (
          <li key={item.id}>
            <img src={item.iconUrl} alt="" /> {item.item} — {item.rarity} —{" "}
            {item.price} gold
          </li>
        ))}
      </ul>
    </div>
  );
}
