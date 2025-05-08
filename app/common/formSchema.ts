import { z } from "zod";

// basic fields
export const email = z.string().email("Invalid email format");

export const password = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(30, "Password cannot exceed 30 characters");

export const keepAlive = z.boolean();

export const verifyCode = z
  .string()
  .length(6, "Verification code must be 6 digits");

export const name = z
  .string()
  .min(3, "Name must be at least 3 characters")
  .max(16, "Name cannot exceed 16 characters");

export const comment = z
  .string()
  .min(3, "Comment must be at least 3 characters")
  .max(1000, "Comment cannot exceed 1000 characters");

const updatePasswordFormFields = {
  email,
  password,
  password2: password,
  verifyCode,
};

// signInForm
export const signInForm = z.object({ email, password, keepAlive });

// signUpForm
export const signUpForm = z
  .object({ ...updatePasswordFormFields, name })
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

// updatePasswordForm
export const updatePasswordForm = z
  .object(updatePasswordFormFields)
  .refine((data) => data.password === data.password2, {
    message: "Passwords do not match",
    path: ["password2"],
  });

// commentForm
export const commentForm = z.object({ comment });
