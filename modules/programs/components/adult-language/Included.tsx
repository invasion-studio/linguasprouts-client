"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";

export default function Included() {
  return (
    <Box component={"div"} className="layout section" bgcolor={"#F6FAF5"}>
      <Stack
        sx={{
          gap: { xs: "40px", md: "80px" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ maxWidth: { xs: "unset", md: "600px" } }}>
          <Typography variant="h3" marginBottom={"32px"}>
            Everything included in your monthly fee
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
              Unit 201 TBD - 10090 152 Street Surrey, BC V3R 8X8
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
  "Twice weekly classes, your chosen schedule",
  "Flexible learning — virtual, asynchronous or in-person",
  "CEFR-aligned curriculum",
  "Textbooks & workbooks",
  "Learning materials & digital resources",
  "Interactive activities & practice",
  "Progress tracking & feedback",
  "Community & conversation sessions",
  "Certificate of achievement",
];
