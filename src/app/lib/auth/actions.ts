"use server";

import { cookies } from "next/headers";

type SignupResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  id: string;
};

const mockSignupResponse: SignupResponse = {
  access_token: "mock_access_token",
  refresh_token: "mock_refresh_token",
  token_type: "bearer",
  expires_in: 900,
  id: "1",
};

export async function signup(formData: FormData) {
  try {
    console.log("formData: ", Object.fromEntries(formData.entries()));
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    const response = Promise.resolve(mockSignupResponse);

    console.log({
      email,
      password,
      username,
      response,
    });

    const cookieStore = await cookies();

    cookieStore.set("access_token", mockSignupResponse.access_token);
    cookieStore.set("refresh_token", mockSignupResponse.refresh_token);
  } catch (error) {
    console.error(error);
    throw new Error("Signup failed");
  }
}
