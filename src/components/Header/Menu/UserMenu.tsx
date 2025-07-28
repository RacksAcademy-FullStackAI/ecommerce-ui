import { type User } from "@/app/lib/auth/dal";
import { UserAvatar } from "../AuthForm/UserAvatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { logout } from "@/app/lib/auth/actions";

type UserMenuProps = {
  user: User;
};

export function UserMenu({ user }: UserMenuProps) {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <UserAvatar user={user} />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>
            <DialogTrigger>Cerrar sesión</DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cerrar sesión</DialogTitle>
        </DialogHeader>

        <form action={logout}>
          <DialogFooter>
            <DialogClose>Cancelar</DialogClose>
            <Button variant="destructive" type="submit">
              Confirmar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
