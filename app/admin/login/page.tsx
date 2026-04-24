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
import { login } from "@/actions/login";
import theme from "@/theme";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await login(email, password);
      router.push("/admin");
    } catch (err) {
      setError("Invalid email or password.");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <Box
      minHeight="100vh"
      bgcolor={(theme) => theme.palette.ibmgrey[10]}
      display="flex"
      flexDirection="column"
    >
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
          bgcolor="white"
          borderRadius="16px"
          p={{ xs: "24px", sm: "32px" }}
          width="100%"
          maxWidth="440px"
        >
          <Stack gap="40px">
            <Box textAlign="left">
              <Image
                src={"/LiguaSprouts-Admin-Logo.svg"}
                alt="Logo"
                width={169.8}
                height={24}
                loading="eager"
                style={{
                  marginBottom: 28,
                }}
              />
              <Typography variant="h3" marginBottom={"4px"}>
                Welcome Back
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Sign in to manage payments
              </Typography>
            </Box>

            {error && <Alert severity="error">{error}</Alert>}

            <Stack gap={"24px"}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                autoComplete="email"
                variant="filled"
                slotProps={{
                  inputLabel: { shrink: true },
                }}
                sx={{
                  "& .MuiInputBase-input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px #ECFDEC inset",
                    WebkitTextFillColor: "rgba(0,0,0,0.85)",
                    caretColor: "#000",
                  },
                }}
              />

              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                autoComplete="current-password"
                variant="filled"
                slotProps={{
                  inputLabel: { shrink: true },
                }}
                sx={{
                  "& .MuiInputBase-input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 100px #ECFDEC inset",
                    WebkitTextFillColor: "rgba(0,0,0,0.85)",
                    caretColor: "#000",
                  },
                }}
              />
            </Stack>

            <Button
              type="submit"
              variant="contained"
              disableElevation
              fullWidth
              loading={loading}
              sx={{
                borderRadius: "100px",
                padding: "10px 40px",
                textTransform: "none",
                color: "white",
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
