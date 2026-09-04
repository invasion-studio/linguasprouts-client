"use client";

import LinguaSproutsMap from "@/components/Map";
import { Box, Typography } from "@mui/material";

export default function VisitUs() {
  return (
    <Box component={"div"} className="section">
      <Box component={"div"} className="layout" marginBottom={"24px"}>
        <Typography
          variant="h2"
          color="textSecondary"
          align="center"
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            lineHeight: { xs: "44px", md: "56px" },
          }}
        >
          Visit{" "}
          <Typography
            component={"span"}
            color="primary"
            sx={{ font: "inherit" }}
          >
            Us
          </Typography>
        </Typography>
      </Box>

      <Box height={"350px"} bgcolor={(theme) => theme.palette.ibmgrey[20]}>
        <LinguaSproutsMap />
      </Box>
    </Box>
  );
}
