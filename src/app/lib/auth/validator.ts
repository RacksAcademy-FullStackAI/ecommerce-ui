import z from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres")
    .trim()
    .max(20, "El nombre de usuario no puede tener más de 20 caracteres"),
  email: z.email("El correo electrónico no es válido").trim(),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.email("El correo electrónico no es válido").trim(),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .trim(),
});
