export type Product = {
  game_id: number;
  title: string;
  description: string;
  genre: string;
  tags: string[];
  price: number;
  stock_quantity: number;
  popularity_score: number;
  image_url: string;
  category: string;
  developer: string;
  release_date: Date;
};
