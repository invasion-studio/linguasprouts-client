"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAdminAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const success = login(email, password);
    if (success) {
      router.push("/admin");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <Box
      minHeight="100vh"
      bgcolor="#f4f4f4"
      display="flex"
      flexDirection="column"
    >
      {/* Header */}
      <Box
        component="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={{ xs: "20px", md: "40px" }}
        py="16px"
        bgcolor="#ffffff"
        borderBottom="3px solid var(--brand-green)"
      >
        <Link href="/">
          <Image
            src="/Logo-LinguaSprouts.svg"
            alt="Logo"
            width={132}
            height={26}
          />
        </Link>
      </Box>

      {/* Login Form */}
      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="20px"
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          bgcolor="#ffffff"
          borderRadius="16px"
          p={{ xs: "32px", sm: "40px" }}
          width="100%"
          maxWidth="440px"
        >
          <Stack gap="24px">
            <Box textAlign="center">
              <Typography variant="h3" gutterBottom>
                Admin Login
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Sign in to manage payments
              </Typography>
            </Box>

            {error && <Alert severity="error">{error}</Alert>}

            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              autoComplete="email"
            />

            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              autoComplete="current-password"
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#75C30A",
                borderRadius: "100px",
                padding: "12px 40px",
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#68ad09",
                },
              }}
            >
              Sign In
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
