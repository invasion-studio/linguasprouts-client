"use client";

import { Box, Skeleton, Typography } from "@mui/material";

export type AdminDetailItem = {
  label: string;
  value: string | number;
};

export default function AdminDetailSection({
  header,
  rows,
  isPending = false,
  skeletonRows = 3,
}: {
  header: string;
  rows: AdminDetailItem[];
  isPending?: boolean;
  skeletonRows?: number;
}) {
  return (
    <Box padding={"24px"} borderRadius={"8px"} bgcolor={"white"}>
      <Typography variant="subtitle1" marginBottom={"28px"}>
        {header}
      </Typography>

      <Box
        aria-busy={isPending}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: "20px",
        }}
      >
        {isPending
          ? Array.from({ length: skeletonRows }).map((_, i) => (
              <Box key={i}>
                <Skeleton
                  variant="text"
                  width="40%"
                  sx={{ fontSize: "0.875rem" }}
                />
                <Skeleton
                  variant="text"
                  width="75%"
                  sx={{ fontSize: "1rem" }}
                />
              </Box>
            ))
          : rows.map((r, i) => (
              <Box key={i}>
                <Typography variant="body2" color="textSecondary">
                  {r.label}
                </Typography>
                <Typography variant="body1">{r.value}</Typography>
              </Box>
            ))}
      </Box>
    </Box>
  );
}
