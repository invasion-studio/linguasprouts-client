"use client";

import AppBar from "@/src/_app/layout/AppBar/AppBar2";
import AdminEmailsNotice from "@/src/_pages/admin/dashboard/ui/AdminEmailsNotice";
import ProgramList from "@/src/_pages/admin/dashboard/ui/ProgramList";
import { Box, Stack, Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" noBorder />
      <Box
        component={"div"}
        className="adminLayout"
        marginTop={"32px"}
        marginBottom={"20px"}
      >
        <AdminEmailsNotice />
        <Stack marginBottom={"24px"}>
          <Typography
            variant="h3"
            sx={{
              fontSize: (theme) => ({
                xs: "24px",
                md: theme.typography.h3.fontSize,
              }),
              lineHeight: (theme) => ({
                xs: "40px",
                md: theme.typography.h3.fontSize,
              }),
            }}
          >
            Programs
          </Typography>
        </Stack>

        <ProgramList />
      </Box>
    </Box>
  );
}
