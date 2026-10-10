"use client";

import { Alert, alpha, IconButton, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NextLink from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "admin-emails-notice-dismissed";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

// Hidden on the server so a dismissed alert never flashes on load.
const getServerSnapshot = () => true;

function dismiss() {
  try {
    localStorage.setItem(STORAGE_KEY, "true");
  } catch {
    // Storage unavailable; the alert simply returns on next visit.
  }
  listeners.forEach((listener) => listener());
}

export default function AdminEmailsNotice() {
  const dismissed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (dismissed) return null;

  return (
    <Alert
      severity="info"
      sx={{
        mb: 3,
        bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.08),
      }}
      action={
        <IconButton
          aria-label="Dismiss notice"
          color="inherit"
          size="small"
          onClick={dismiss}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    >
      Manage who receives admin emails in{" "}
      <Link
        component={NextLink}
        href="/admin/settings"
        fontWeight={500}
        color="inherit"
        underline="none"
      >
        settings
      </Link>
      .
    </Alert>
  );
}
