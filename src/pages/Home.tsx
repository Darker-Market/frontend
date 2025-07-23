import api from "../api/axios";
import type { Item, ApiResponse } from "../types/item";
import { useQuery } from "@tanstack/react-query";
import ListItem from "../components/ListItem";

const fetchItems = async (): Promise<Item[]> => {
  const res = await api.get<ApiResponse>("/test");
  return res.data.body;
};

export default function Home() {
  const {
    data: items,
    isLoading,
    error,
    refetch,
    isFetching,
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
      <h1 className="text-white">Marketplace Items</h1>
      <button
        className="bg-custom-button  px-4 py-2 text-white rounded hover:opacity-80 transition"
        onClick={() => refetch()}
        disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refresh"}
      </button>
      <ul>
        {items?.map((item) => {
          return <ListItem item={item} />;
        })}
      </ul>
    </div>
  );
}
