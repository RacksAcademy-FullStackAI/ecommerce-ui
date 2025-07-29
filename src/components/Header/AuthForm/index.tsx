import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";

type AuthFormProps = {
  type: "signup" | "login";
};

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
