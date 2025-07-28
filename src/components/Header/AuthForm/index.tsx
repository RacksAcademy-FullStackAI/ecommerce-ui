import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

type AuthFormProps = {
  type: "signup" | "login";
  onClose: () => void;
};

export function AuthForm({ type, onClose }: AuthFormProps) {
  switch (type) {
    case "signup":
      return <SignupForm onClose={onClose} />;
    case "login":
      return <LoginForm onClose={onClose} />;
    default:
      return null;
  }
}
