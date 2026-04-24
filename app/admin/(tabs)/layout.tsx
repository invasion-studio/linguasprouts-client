import AppBar from "@/components/AppBar/AppBar";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import AdminTab from "./Tab";
import { connection } from "next/server";

export default async function TabLayout({ children }: { children: ReactNode }) {
  await connection();
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" />
      <Box component={"div"} className="adminLayout" marginTop={"20px"}>
        <AdminTab />
        {children}
      </Box>
    </Box>
  );
}
