import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { connection } from "next/server";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  await connection();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
