"use client";

import AppBar from "@/components/AppBar/AppBar2";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <Box minHeight={"100vh"} bgcolor={"var(--palette-ibmgrey-10)"}>
      <AppBar variant="admin" />
      <Box
        component={"div"}
        className="adminLayout"
        marginTop={"32px"}
        marginBottom={"20px"}
      >
        <Typography variant="h3" marginBottom={"32px"}>
          Welcome, Admin
        </Typography>

        <Typography variant="body2" color="textSecondary" marginBottom={"24px"}>
          Manage your active programs
        </Typography>
        <Box
          display={"grid"}
          sx={{
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
              xl: "1fr 1fr 1fr 1fr 1fr",
            },
            gap: { xs: "4px", sm: "24px" },
            borderRadius: { xs: "8px", sm: "0px" },
            overflow: "clip",
          }}
        >
          <ProgramCard
            label="French Immigration Sprint"
            href="/admin/french-immigration-sprint/orders"
          />
          <ProgramCard label="Summer Camp 2026" href="/admin/orders" />
        </Box>
      </Box>
    </Box>
  );
}

function ProgramCard({ label, href }: { label: string; href: string }) {
  return (
    <Button
      LinkComponent={Link}
      href={href}
      sx={{
        borderRadius: { xs: "0px", sm: "8px" },
        border: 0,
        padding: "20px",
        bgcolor: "white",
        height: "132px",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textTransform: "unset",
        ["&:hover"]: {
          bgcolor: (theme) => theme.palette.ibmgrey[20],
        },
      }}
      color="inherit"
    >
      <Typography>{label}</Typography>
    </Button>
  );
}
