import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signup } from "@/app/lib/auth/actions";

type AuthFormProps = {
  type: "signup" | "login";
};

function SignupForm() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Registro</DialogTitle>
        <DialogDescription>
          Completa el formulario para registrarte y recibir recomendaciones
          personalizadas.
        </DialogDescription>
      </DialogHeader>

      <form className="flex flex-col space-y-3" action={signup}>
        <Label htmlFor="username">Nombre de usuario</Label>
        <Input id="username" type="text" name="username" placeholder="gamer45" />

        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" placeholder="name@example.com" />

        <Label htmlFor="password">Contraseña</Label>
        <Input id="password" type="password" name="password" placeholder="********" />

        <DialogFooter>
          <Button type="submit">Registrarse</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

function LoginForm() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Iniciar sesión</DialogTitle>
        <DialogDescription>
          Introduce tus credenciales para acceder a tu cuenta.
        </DialogDescription>
      </DialogHeader>

      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </DialogContent>
  );
}

export function AuthForm({ type }: AuthFormProps) {
  switch (type) {
    case "signup":
      return <SignupForm />;
    case "login":
      return <LoginForm />;
    default:
      return null;
  }
}
