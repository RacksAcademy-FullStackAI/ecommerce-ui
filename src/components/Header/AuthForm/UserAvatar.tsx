import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { type User } from "@/app/lib/auth/dal";

type UserAvatarProps = {
  user: User;
};

export async function UserAvatar({ user }: UserAvatarProps) {
  const getUserInitials = (name: string) => {
    const names = name.split(" ");
    if (names.length === 1) return names[0].toUpperCase();
    const [firstName, lastName] = names;

    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
  };

  return (
    <Avatar>
      <AvatarImage src={user.avatarUrl} alt={user.name} />
      <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
    </Avatar>
  );
}
