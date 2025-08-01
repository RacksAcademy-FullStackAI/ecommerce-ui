import clsx, { type ClassValue } from "clsx";

type StockProps = {
  stock: number;
  className?: ClassValue;
};

const ENOUGH_STOCK = 10;

export const Stock = ({ stock, className }: StockProps) => {
  const getLabel = () => {
    switch (stock) {
      case 1:
        return "Queda 1 disponible";
      case 0:
        return "No hay stock";
      default:
        return `Quedan ${stock} disponibles`;
    }
  };

  return (
    <p
      className={clsx(
        {
          "text-green-500": stock >= ENOUGH_STOCK,
          "text-orange-500": stock < ENOUGH_STOCK,
          "text-red-500": !stock,
        },
        className,
      )}
    >
      {getLabel()}
    </p>
  );
};
