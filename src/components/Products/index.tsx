import { type Product } from "@/api/products";
import clsx from "clsx";
import { ProductCard } from "./ProductCard";
import { getUser } from "@/app/lib/auth/dal";

const mockedProduct: Product = {
  game_id: 123,
  title: "Nombre del juego",
  description: "Descripcion del juego",
  genre: "simulator",
  tags: [],
  price: 19.99,
  stock_quantity: 10,
  popularity_score: 0.95,
  image_url:
    "https://imgs.search.brave.com/oApXBl0KqvMXTEZNp5sP2_hZab5QgrNgAmiPS3ywG54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtcHJlbWl1/bS9yZXRyYXRvLWp1/Z2Fkb3ItanVndWV0/b24tbG9jby1xdWUt/ZGlzZnJ1dGEtanVn/YW5kby12aWRlb2p1/ZWdvc18xOTQxNDMt/NDA2LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDA",
  category: "",
  developer: "Racks Studios",
  release_date: new Date("2023-01-01"),
};

const mockedResponse = [
  mockedProduct,
  { ...mockedProduct, game_id: 456 },
  { ...mockedProduct, game_id: 789 },
  { ...mockedProduct, game_id: 176 },
  { ...mockedProduct, game_id: 234 },
  { ...mockedProduct, game_id: 345 },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
  { ...mockedProduct, game_id: parseInt(`${Math.random() * 5000}`) },
]

type ProductsProps = {
  className?: string;
}

const getProducts = async (userId: string | null) => {
  const url = new URL('/products', process.env.BASE_URL);

  if (userId) {
    url.searchParams.set('user_id', userId);
  }

   await fetch(url.toString(), {
    cache: "no-store",
  });

  return mockedResponse;
};

export async function Products({ className }: ProductsProps) {
  const user = await getUser();
  const products = await getProducts(user?.id || null);

  return (
    <div className={clsx('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4', className)}>
      {products.map(product => {
        return <ProductCard product={product} key={product.game_id} />;
      })}
    </div>
  );
}
