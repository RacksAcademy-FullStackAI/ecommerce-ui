import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SignupForm } from "./SignupForm";

type AuthFormProps = {
  type: "signup" | "login";
  onClose: () => void;
};

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

export function AuthForm({ type, onClose }: AuthFormProps) {
  switch (type) {
    case "signup":
      return <SignupForm onClose={onClose} />;
    case "login":
      return <LoginForm />;
    default:
      return null;
  }
}
