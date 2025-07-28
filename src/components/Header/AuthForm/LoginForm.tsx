import {
    DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import { login } from "@/app/lib/auth/actions";

type LoginFormProps = {
  onClose: () => void;
};

export function LoginForm({ onClose }: LoginFormProps) {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Iniciar sesión</DialogTitle>
        <DialogDescription>
          Introduce tus credenciales para acceder a tu cuenta.
        </DialogDescription>
      </DialogHeader>

      <form className="flex flex-col space-y-3" action={action}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" placeholder="name@example.com" />
        {state?.errors?.email && <p className="text-red-400">{state.errors.email}</p>}

        <Label htmlFor="password">Contraseña</Label>
        <Input id="password" type="password" name="password" placeholder="********" />
        {state?.errors?.password && <p className="text-red-400">{state.errors.password}</p>}

        <DialogFooter>
          <DialogClose>Cancelar</DialogClose>
          <Button type="submit" disabled={pending}>Iniciar sesión</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
