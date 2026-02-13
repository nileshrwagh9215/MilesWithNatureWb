import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import AdminShell from "@/components/admin/admin-shell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = await getAdminSession();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  return <AdminShell>{children}</AdminShell>;
}
