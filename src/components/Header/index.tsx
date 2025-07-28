import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu } from "./Menu";

export async function Header() {
  return (
    <header className="bg-sidebar box-border py-4 px-8 flex justify-between items-center">
      <h1>Racks Games</h1>

      <div className="flex items-center space-x-2">
        <Menu />
        <ThemeToggle />
      </div>
    </header>
  );
}
