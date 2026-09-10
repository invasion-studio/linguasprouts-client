"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";

export default function CEFR() {
  return (
    <Stack
      component={"div"}
      className="layout section"
      sx={{ gap: { xs: "40px", md: "60px" } }}
    >
      <Box maxWidth={"600px"} margin={"0px auto"}>
        <Typography
          variant="h2"
          textAlign={"center"}
          sx={{ color: (theme) => theme.palette.ibmgrey[90] }}
        >
          CEFR-aligned learning,
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          textAlign={"center"}
          marginBottom={"4px"}
        >
          from A1 to C1
        </Typography>
        <Typography color="textSecondary" textAlign={"center"}>
          Follow a clear learning pathway with internationally recognized
          levels, carefully selected resources, and the right materials to
          support you at every stage.
        </Typography>
      </Box>

      <Stack flexDirection={"row"} gap={"24px"} flexWrap={"wrap"}>
        <CEFRCard title="A1" label="BEGINNER" color="#12ABDE" />
        <CEFRCard title="A2" label="ELEMENTARY" color="#2EC610" />
        <CEFRCard title="B1" label="INTERMEDIATE" color="#FF7BD4" />
        <CEFRCard title="B2" label="UPPER INTERMEDIATE" color="#6F6F6F" />
        <CEFRCard title="C1" label="ADVANCED" color="#ED5E76" />
      </Stack>

      <Typography
        color="textSecondary"
        variant="h4"
        textAlign={"center"}
        fontStyle={"italic"}
      >
        All registration covers textbooks and workbooks.
      </Typography>
    </Stack>
  );
}

const CEFRCard = ({
  title,
  label,
  color,
}: {
  title: string;
  label: string;
  color: string;
}) => {
  return (
    <Stack
      gap={"12px"}
      alignItems={"center"}
      borderRadius={"12px"}
      padding={"20px"}
      bgcolor={alpha(color, 0.1)}
      sx={{
        flex: {
          xs: "1 1 calc(50% - 12px)",
          sm: "1 1 calc((100% - 48px) / 3)",
          lg: "1",
        },
      }}
    >
      <Typography
        variant="h3"
        textAlign={"center"}
        color={color}
        sx={{ font: { xs: "var(--font-h4)", md: "var(--font-h3)" } }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign={"center"}
        color={alpha(color, 0.6)}
        sx={{
          font: { xs: "var(--font-subtitle2)", md: "var(--font-subtitle1)" },
        }}
      >
        {label}
      </Typography>
      <Box>
        <Typography
          color="textSecondary"
          variant="subtitle1"
          textAlign={"center"}
        >
          Mon Alter Ego
        </Typography>
        <Typography color="textSecondary" textAlign={"center"}>
          (Livre de l'élève & cahier d'activités)
        </Typography>
      </Box>
    </Stack>
  );
};
