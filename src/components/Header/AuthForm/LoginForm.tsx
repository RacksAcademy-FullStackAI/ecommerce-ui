import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type LoginFormProps = {
  onClose: () => void;
};

export function LoginForm({ onClose }: LoginFormProps) {
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
