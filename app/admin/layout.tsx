import { adminTheme } from "@/src/_app/styles/theme";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={adminTheme}>{children}</ThemeProvider>;
}
