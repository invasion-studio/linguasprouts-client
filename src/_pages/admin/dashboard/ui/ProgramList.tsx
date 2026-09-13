"use client";

import { Box, Stack, Typography } from "@mui/material";
import ProgramCard from "./ProgramCard";

export default function ProgramList() {
  return (
    <Stack gap={"40px"}>
      {/* Active Programs */}
      <Box>
        <Stack
          alignItems={"center"}
          gap={"12px"}
          marginBottom={"20px"}
          flexDirection={"row"}
        >
          <Box
            bgcolor={(theme) => theme.palette.primary.main}
            height={"12px"}
            width={"12px"}
            borderRadius={"100%"}
          />
          <Typography variant="subtitle2" color="textSecondary">
            Active programs
          </Typography>
        </Stack>

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
            gap: { xs: "4px", sm: "16px" },
            borderRadius: { xs: "8px", sm: "0px" },
            overflow: "clip",
          }}
        >
          <ProgramCard
            label="After School Language"
            href="/admin/after-school-language"
          />
        </Box>
      </Box>

      {/* Past Programs */}
      <Box>
        <Stack
          alignItems={"center"}
          gap={"12px"}
          marginBottom={"20px"}
          flexDirection={"row"}
        >
          <Box
            bgcolor={(theme) => theme.palette.ibmgrey[40]}
            height={"12px"}
            width={"12px"}
            borderRadius={"100%"}
          />
          <Typography variant="subtitle2" color="textSecondary">
            Past programs
          </Typography>
        </Stack>

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
            gap: { xs: "4px", sm: "16px" },
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
    </Stack>
  );
}
