"use client";

import { Tab, Tabs } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminTab() {
  const pathname = usePathname();
  const [tab, setTab] = useState(pathname);

  return (
    <Tabs
      value={tab}
      onChange={(_, value) => setTab(value)}
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
        value={"/admin/french-immigration-sprint/orders"}
        href="/admin/french-immigration-sprint/orders"
        LinkComponent={Link}
        label="Orders"
      />
    </Tabs>
  );
}
