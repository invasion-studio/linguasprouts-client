"use client";

import { Box, Stack, Typography } from "@mui/material";

export default function TEFCanada() {
  return (
    <Box component={"div"} className="layout section">
      <Stack sx={{ gap: { xs: "40px", md: "60px" } }}>
        {/* Heading */}
        <Box maxWidth={"600px"} margin={"0px auto"}>
          <Typography variant="h2" textAlign={"center"}>
            From beginner to{" "}
            <Typography
              component={"span"}
              color="primary"
              sx={{ font: "inherit" }}
            >
              TEF Canada success
            </Typography>
          </Typography>
          <Typography color="textSecondary" textAlign={"center"}>
            Each level builds on the last, taking you step by step toward the
            French proficiency Canadian immigration pathways require.
          </Typography>
        </Box>

        <Stack></Stack>
      </Stack>
    </Box>
  );
}
