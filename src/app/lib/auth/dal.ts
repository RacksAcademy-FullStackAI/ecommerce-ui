import "server-only";

import { cookies } from "next/headers";
import { cache } from "react";
import { refreshSession } from "./actions";

export const verifySession = cache(async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return {
      isAuth: false,
      accessToken: null,
      refreshToken: null
    }
  }

  const isAuth = await refreshSession(refreshToken);

  const accessToken = cookieStore.get("accessToken")?.value;

  return {
    isAuth,
    accessToken,
    refreshToken: cookieStore.get("refreshToken")?.value
  }
});

export type User = {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
};

export const getUser = cache(async () => {
  try {
    const { isAuth } = await verifySession();

    if (!isAuth) {
      return null;
    }

    const user = await Promise.resolve({
      id: "1",
      email: "user@example.com",
      name: "Leifer Mendez",
      avatarUrl: "https://example.com/avatar.jpg"
    });

    return user;
  } catch(error) {
    console.error('Error fetching user:', error);
    throw new Error("Unauthorized");
  }
});
