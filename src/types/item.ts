export interface Item {
  id: number;
  item_id: string;
  item: string;
  rarity: string;
  price: number;
  quantity: number;
  [key: string]: any;
}

export interface ApiResponse {
  body: Item[];
}
