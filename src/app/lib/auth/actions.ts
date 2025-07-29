"use server";

import { cookies } from "next/headers";
import { LoginFormSchema, SignupFormSchema } from "./validator";

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

type FormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;

type LoginFormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
      };
      message?: string;
      success?: boolean;
    }
  | undefined;

type CreateSessionParams = {
  accessToken: string;
  refreshToken: string;
};

async function createSession({
  accessToken,
  refreshToken,
}: CreateSessionParams) {
  const cookieStore = await cookies();

  cookieStore.set("accessToken", accessToken);
  cookieStore.set("refreshToken", refreshToken);
}

export async function signup(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = formData.get("username") as string;

    const validatedFields = SignupFormSchema.safeParse({
      email,
      username,
      password,
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }

    const response = await Promise.resolve(mockSignupResponse);

    await createSession({
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
    });

    return { success: true, message: "Signup successful" };
  } catch (error) {
    console.error(error);
    return { message: "Signup failed", success: false, isAuth: false };
  }
}

export async function refreshSession(refreshToken: string) {
  try {
    const response = await Promise.resolve(mockSignupResponse);

    // await createSession({
    //   access_token: response.access_token,
    //   refresh_token: response.refresh_token,
    // });

    return {
      isAuth: true,
    };
  } catch (error) {
    console.error("[refreshSession] Error refreshing session: ", error);
    return {
      isAuth: false,
    };
  }
}

export async function logout() {
  const cookieStore = await cookies();

  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
}

export async function login(_: LoginFormState, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return {
        errors: {
          email: !email ? ["El correo electrónico es requerido"] : [],
          password: !password ? ["La contraseña es requerida"] : [],
        },
        success: false,
      };
    }

    const validatedFields = LoginFormSchema.safeParse({ email, password });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        success: false,
      };
    }

    const response = await Promise.resolve(mockSignupResponse);

    await createSession({
      accessToken: response.access_token,
      refreshToken: response.refresh_token,
    });

    return {
      isAuth: true,
    };
  } catch (error) {
    console.error("[login] Error logging in: ", error);
    return {
      isAuth: false,
    };
  }
}
