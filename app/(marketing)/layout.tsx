import { adminTheme } from "@/theme";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
