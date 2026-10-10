"use client";

import { useState } from "react";
import {
  Avatar,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import Link from "next/link";
import { logout } from "@/src/features/authentication";
import PersonIcon from "@mui/icons-material/Person";

export default function AppBar({
  variant = "default",
  noBorder,
}: {
  variant?: "default" | "admin";
  noBorder?: boolean;
}) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);

  return (
    <Stack
      bgcolor={"white"}
      className={variant == "admin" ? "adminLayout" : "layout"}
      height={"64px"}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      position={"sticky"}
      top={0}
      zIndex={3}
      borderBottom={noBorder ? undefined : "1px solid"}
      borderColor={(theme) => theme.palette.divider}
    >
      <Link href={"/"} style={{ paddingTop: "8px" }}>
        <Image
          src={
            variant == "admin"
              ? "/LiguaSprouts-Admin-Logo.svg"
              : "/Logo-LinguaSprouts.svg"
          }
          alt="Logo"
          width={variant == "admin" ? 169 : 132}
          height={variant == "admin" ? 24 : 26}
          loading="eager"
        />
      </Link>
      {variant == "admin" ? (
        <>
          <IconButton
            onClick={(e) => setAnchorEl(e.currentTarget)}
            aria-label="Open account menu"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            size="small"
            sx={{ p: 0 }}
          >
            <Avatar sx={{ width: 30, height: 30, bgcolor: "#10D6FF" }}>
              <PersonIcon sx={{ fontSize: 18 }} />
            </Avatar>
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem
              component={Link}
              href="/admin/settings"
              onClick={handleClose}
            >
              <ListItemIcon>
                <SettingsOutlinedIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
              sx={{ color: "error.main" }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                <LogoutIcon sx={{ fontSize: 20 }} />
              </ListItemIcon>
              <ListItemText>Log out</ListItemText>
            </MenuItem>
          </Menu>
        </>
      ) : undefined}
    </Stack>
  );
}
