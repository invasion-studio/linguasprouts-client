import AppBar from "@/components/AppBar/AppBar2";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function AfterSchoolLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box minHeight={"100vh"} bgcolor={"#F5F5F5"}>
      <AppBar variant="admin" />
      {children}
    </Box>
  );
}
