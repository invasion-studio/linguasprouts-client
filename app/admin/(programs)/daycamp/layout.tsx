import AppBar from "@/src/_app/layout/AppBar/AppBar2";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function DayCampLayout({ children }: { children: ReactNode }) {
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" noBorder />
      {children}
    </Box>
  );
}
