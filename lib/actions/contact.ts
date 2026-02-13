"use server";

import { contactSchema, type ContactInput } from "@/lib/schemas";

export async function contactAction(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const result = contactSchema.safeParse({ name, email, subject, message });

  if (!result.success) {
    return {
      error: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real app, you would send an email here.
  // Since NO database is allowed, we just simulate success.
  console.log("Contact form submitted:", result.data);

  // Return success message
  return {
    error: null,
    success: true,
    message: "Thank you for reaching out! We will get back to you soon.",
  };
}
