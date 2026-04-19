"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AdminAuthProvider } from "@/context/AdminAuthContext";

export const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminAuthProvider>{children}</AdminAuthProvider>
    </QueryClientProvider>
  );
}
