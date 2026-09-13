"use client";

import AppBar from "@/src/_app/layout/AppBar/AppBar2";
import Greeting from "@/src/_pages/admin/dashboard/ui/Greeting";
import ProgramList from "@/src/_pages/admin/dashboard/ui/ProgramList";
import { Box, Stack, Typography } from "@mui/material";

export default function DashboardPage() {
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" />
      <Box
        component={"div"}
        className="adminLayout"
        marginTop={"36px"}
        marginBottom={"20px"}
      >
        <Stack gap={"4px"} marginBottom={"40px"}>
          <Greeting />
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
            Manage Language Programs
          </Typography>
        </Stack>

        <ProgramList />
      </Box>
    </Box>
  );
}
