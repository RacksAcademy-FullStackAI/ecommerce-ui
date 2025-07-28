import { signup } from "@/app/lib/auth/actions";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState, useEffect } from "react";

export function SignupForm({ onClose }: { onClose: () => void }) {
  const [state, action, pending] = useActionState(signup, undefined);

  useEffect(() => {
    if (state?.success) {
      onClose();
    }
  }, [state, onClose]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Registro</DialogTitle>
        <DialogDescription>
          Completa el formulario para registrarte y recibir recomendaciones
          personalizadas.
        </DialogDescription>
      </DialogHeader>

      <form className="flex flex-col space-y-3" action={action}>
        <Label htmlFor="username">Nombre de usuario</Label>
        <Input
          id="username"
          type="text"
          name="username"
          placeholder="gamer45"
        />
        {state?.errors?.username && (
          <p className="text-red-400">{state.errors.username}</p>
        )}

        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="name@example.com"
        />
        {state?.errors?.email && <p className="text-red-400">{state.errors.email}</p>}

        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          type="password"
          name="password"
          placeholder="********"
        />
        {state?.errors?.password && (
          <p className="text-red-400">{state.errors.password}</p>
        )}

        <DialogFooter>
          <Button type="submit" disabled={pending}>
            Registrarse
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
