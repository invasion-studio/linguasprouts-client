"use client";

import { Stack, alpha, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

export function TopAd() {
  const [adVisible, setAdVisible] = useState(false);

  useEffect(() => {
    const adClosed = sessionStorage.getItem("adClosed");
    if (!adClosed) {
      setAdVisible(true);
    }
  }, []);

  const handleAdClose = () => {
    setAdVisible(false);
    sessionStorage.setItem("adClosed", "true");
  };

  return (
    <>
      {adVisible && (
        <Stack
          flexDirection={"row"}
          className="layout"
          paddingTop={"8px"}
          paddingBottom={"8px"}
          bgcolor={(theme) => alpha(theme.palette.secondary.main, 0.3)}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"24px"}
          sx={{
            paddingTop: { xs: "16px", sm: "8px" },
            paddingBottom: { xs: "16px", sm: "8px" },
          }}
        >
          <Typography
            flex={1}
            variant="subtitle2"
            sx={{ color: (theme) => theme.palette.secondary.dark }}
          >
            Registration for French Immigration Sprint is now{" "}
            <Typography
              component={Link}
              href="/french-immigration-sprint/register"
              variant="subtitle2"
              sx={{ color: "inherit", textDecoration: "underline" }}
            >
              open
            </Typography>
          </Typography>

          <IconButton onClick={handleAdClose}>
            <CloseIcon
              fontSize="small"
              sx={{ color: (theme) => theme.palette.secondary.dark }}
            />
          </IconButton>
        </Stack>
      )}
    </>
  );
}
