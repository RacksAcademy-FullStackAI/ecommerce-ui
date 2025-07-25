import { type Product } from "@/api/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/utils/currency";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

type RecommendedProductProps = {
  className?: string;
}

export function RecommendedProducts({ className }: RecommendedProductProps) {
  const products: Product[] = [
    mockedProduct,
    { ...mockedProduct, game_id: 456 },
    { ...mockedProduct, game_id: 789 },
    { ...mockedProduct, game_id: 176 },
    { ...mockedProduct, game_id: 234 },
    { ...mockedProduct, game_id: 345 },
  ];

  return (
    <Carousel className={className}>
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.game_id} className="sm:basis-1/2 md:basis-1/3">
            <Card>
              <CardContent>
                <div className="h-10 w-full bg-blue-400 rounded-md" />
              </CardContent>
              <CardFooter className="space-x-4">
                <p>{product.title}</p>
                <p>{formatCurrency(product.price)}</p>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
