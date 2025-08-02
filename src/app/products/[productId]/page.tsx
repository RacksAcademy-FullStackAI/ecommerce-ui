import { type Product } from "@/api/products";
import { Pill } from "@/components/Pill";
import { Rating } from "@/components/Rating";
import { Stock } from "@/components/Stock";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/currency";
import { formatDate } from "@/utils/dates";
import Image from "next/image";

const getProductDetails = async (productId: string) => {
  const url = new URL(`/products/${productId}`, process.env.BASE_URL);

  const mockedProduct: Product = {
    game_id: 123,
    title: "Nombre del juego",
    description: "Descripcion del juego",
    genre: "simulator",
    tags: ["tag1", "tag2", "tag3"],
    price: 19.99,
    stock_quantity: 10,
    popularity_score: 0.95,
    image_url:
      "https://images.unsplash.com/photo-1572537577590-ac6a88150100?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "the category",
    developer: "Racks Studios",
    release_date: new Date("2023-01-01"),
  };

  await fetch(url.toString(), {
    cache: "no-store",
  });

  return mockedProduct;
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const {
    title,
    description,
    genre,
    tags,
    price,
    stock_quantity: stockQuantity,
    popularity_score: popularityScore,
    category,
    developer,
    release_date: releaseDate,
    image_url: imageUrl,
  } = await getProductDetails(productId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-4 md:gap-0">
      <div className="py-2 px-8 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt="Product Image"
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 500px"
          className="h-auto w-auto"
          priority
          width={300}
          height={300}
        />
      </div>

      <div className="py-2 px-8">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-teal-700 underline">{developer}</p>
        <Rating rating={popularityScore} />
        <Separator className="my-4" />
        <p className="text-3xl font-bold">{formatCurrency(price)}</p>
        <p>{description}</p>

        <Separator className="my-4" />

        <h3 className="text-xl">Acerca de este producto</h3>

        <ul className="list-disc pl-4 mb-4">
          <li>{category}</li>
          <li>{genre}</li>
          <li>
            Fecha de lanzamiento:{" "}
            <span className="text-lg">{formatDate(releaseDate)}</span>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Pill>{tag}</Pill>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4">
        <aside className="border border-divider rounded-md p-4">
          <p className="text-3xl font-bold">{formatCurrency(price)}</p>
          <Stock stock={stockQuantity} />

          <Button disabled={!stockQuantity} className="my-4">
            Comprar ya
          </Button>
        </aside>
      </div>
    </div>
  );
}
