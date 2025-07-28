import { getUser } from "@/app/lib/auth/dal";
import { UserMenu } from "./UserMenu";
import { AuthMenu } from "./AuthMenu";

export async function Menu() {
  const user = await getUser();

  return user ? <UserMenu user={user} /> : <AuthMenu />;
}
