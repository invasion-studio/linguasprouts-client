"use client";

import { alpha, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";

export default function Included() {
  return (
    <Box
      component={"div"}
      className="layout section"
      bgcolor={"#F6FAF5"}
      position={"relative"}
      overflow={"hidden"}
    >
      {/* Circle vector */}
      <Stack
        height={"513px"}
        width={"513px"}
        borderRadius={"2000px"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        right={"-220px"}
        top={"-220px"}
        zIndex={0}
        bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box
          bgcolor={"#F6FAF5"}
          borderRadius={"1000px"}
          height={"222px"}
          width={"222px"}
          sx={{
            height: { xs: "116px", sm: "222px" },
            width: { xs: "116px", sm: "222px" },
          }}
        />
      </Stack>

      <Stack
        position={"relative"}
        zIndex={1}
        sx={{
          gap: { xs: "40px", md: "60px" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "stretch", md: "flex-start" },
        }}
      >
        <Box flex={2} sx={{ maxWidth: { xs: "unset", md: "600px" } }}>
          <Typography variant="h3" marginBottom={"32px"}>
            Full support from day one to exam day
          </Typography>
          <Stack gap={"12px"}>
            {includedList.map((inc) => (
              <Stack key={inc} flexDirection={"row"} gap={"12px"}>
                <Image
                  src={"/illustration6.svg"}
                  alt="vector"
                  width={16}
                  height={16}
                />
                <Typography variant="subtitle1" color="textSecondary">
                  {inc}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Stack
          flex={3}
          bgcolor={"white"}
          borderRadius={"16px"}
          gap={"32px"}
          padding={"24px"}
          border={"1px solid"}
          borderColor={(theme) => theme.palette.ibmgrey[20]}
          sx={{ maxWidth: { xs: "unset", md: "600px" } }}
        >
          <Box>
            <Typography variant="h4" color="primary" marginBottom={"8px"}>
              Our location
            </Typography>

            <Typography color="textSecondary">
              Unit 204B 10190 152A St, Surrey, BC V3R 1J7
            </Typography>
          </Box>

          <Typography color="textSecondary">
            Conveniently located with easy access and ample parking.
          </Typography>

          <Stack gap={"12px"}>
            <Stack flexDirection={"row"} gap={"8px"} alignItems={"center"}>
              <PhoneIcon color="primary" sx={{ fontSize: "24px" }} />
              <Typography color="textSecondary">778-513-2427</Typography>
            </Stack>

            <Stack flexDirection={"row"} gap={"8px"} alignItems={"center"}>
              <LanguageIcon color="primary" sx={{ fontSize: "24px" }} />
              <Typography color="textSecondary">
                www.linguasprouts.ca
              </Typography>
            </Stack>

            <Stack flexDirection={"row"} gap={"8px"} alignItems={"center"}>
              <EmailIcon color="primary" sx={{ fontSize: "24px" }} />
              <Typography color="textSecondary">
                hello@linguasprouts.ca
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

const includedList = [
  "Live interactive classes (small batch — max 6 students)",
  "CEFR-aligned curriculum",
  "TEF Canada focused training",
  "Weekly speaking lab & practice",
  "Homework with personalized feedback",
  "Mock tests & progress assessments",
  "Learning materials & workbooks",
  "Monthly progress reports",
  "Certificate of completion",
  "Student success manager support",
  "Access to student portal & resources",
];
