"use client";

import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminTab() {
  const pathname = usePathname();
  return (
    <Tabs
      value={pathname}
      sx={{
        marginBottom: "24px",
        ["& .MuiButtonBase-root.MuiTab-root"]: {
          textTransform: "capitalize",
          fontWeight: 600,
        },
        ["& .MuiButtonBase-root.MuiTab-root.Mui-selected"]: {
          color: (theme) => theme.palette.text.primary,
        },
      }}
    >
      <Tab
        value={"/admin/orders"}
        href="/admin/orders"
        LinkComponent={Link}
        label="Orders"
      />
      <Tab
        value={"/admin/registrations"}
        href="/admin/registrations"
        LinkComponent={Link}
        label="Registrations"
      />
      <Tab
        value={"/admin/classlist"}
        href="/admin/classlist"
        LinkComponent={Link}
        label="Class list"
      />
    </Tabs>
  );
}
