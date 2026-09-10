import AppBar from "@/src/shared/ui/AppBar/AppBar2";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import AdminTab from "./Tab";
import { connection } from "next/server";
import Banner from "@/src/shared/ui/Banner";

export default async function TabLayout({ children }: { children: ReactNode }) {
  await connection();
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" />
      <Banner title="Summer Camp 2026" />
      <Box
        component={"div"}
        className="adminLayout"
        marginTop={"20px"}
        marginBottom={"20px"}
      >
        <AdminTab />
        {children}
      </Box>
    </Box>
  );
}
