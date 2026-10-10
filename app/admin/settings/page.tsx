import AdminEmailRecipients from "@/src/_pages/admin/settings/ui/AdminEmailRecipients";
import AppBar from "@/src/_app/layout/AppBar/AppBar2";
import { Box } from "@mui/material";

export const metadata = { title: "Settings | Linguasprouts Admin" };

export default function SettingsPage() {
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" />
      <Box
        component={"main"}
        className="adminLayout"
        marginTop={"32px"}
        marginBottom={"20px"}
      >
        <AdminEmailRecipients />
      </Box>
    </Box>
  );
}
