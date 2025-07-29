import { type Product } from "@/api/products";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/utils/currency";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="h-10 w-full bg-blue-400 rounded-md" />
      </CardContent>
      <CardFooter className="space-x-4">
        <p>{product.title}</p>
        <p>{formatCurrency(product.price)}</p>
      </CardFooter>
    </Card>
  );
}
