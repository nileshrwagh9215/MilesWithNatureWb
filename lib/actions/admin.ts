"use server";

import { loginSchema, type LoginInput } from "@/lib/schemas";
import { setAdminSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = loginSchema.safeParse({ email, password });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
    };
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    await setAdminSession();
    redirect("/admin");
  } else {
    return {
      error: {
        form: ["Invalid email or password"],
      },
    };
  }
}

export async function logoutAction() {
  await logoutAdmin();
  redirect("/admin/login");
}
