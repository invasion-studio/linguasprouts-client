"use client";

import { styled, Tabs } from "@mui/material";

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginBottom: "24px",
  ["& .MuiButtonBase-root.MuiTab-root"]: {
    textTransform: "capitalize",
    fontWeight: 600,
  },
  ["& .MuiButtonBase-root.MuiTab-root.Mui-selected"]: {
    color: theme.palette.text.primary,
  },
}));
