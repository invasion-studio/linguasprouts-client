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
      bgcolor={"white"}
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
          bgcolor={"white"}
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
          gap: { xs: "40px", md: "80px" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        {/* Section 1 */}
        <Box flex={2} sx={{ maxWidth: { xs: "unset", md: "600px" } }}>
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

        {/* Section 2 */}
        <Stack
          flex={3}
          gap={"8px"}
          sx={{ maxWidth: { xs: "unset", md: "600px" } }}
        >
          {/* Exclusive bonus */}
          <Stack
            bgcolor={"#E7F7FC"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.secondary.main}
            borderRadius={"16px"}
            padding={"24px"}
            gap={"24px"}
            alignItems={"center"}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Box
              width={"fit-content"}
              height={"fit-content"}
              borderRadius={"16px"}
              bgcolor={"white"}
              padding={"16px"}
            >
              <Image
                src={"/program/afterschool/fluent-color_gift-24.svg"}
                alt="gift"
                width={48}
                height={48}
                style={{ minWidth: 48 }}
              />
            </Box>
            <Box>
              <Typography
                variant="h4"
                marginBottom={"8px"}
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                Exclusive bonus
              </Typography>
              <Typography
                sx={{ textAlign: { xs: "center", md: "left" } }}
                color="textSecondary"
              >
                Every student receives a LinguaSprouts Progress Passport &
                Rewards Program to celebrate progress and achievements.
              </Typography>
            </Box>
          </Stack>

          <Stack
            bgcolor={"white"}
            borderRadius={"16px"}
            gap={"32px"}
            padding={"24px"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
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
      </Stack>
    </Box>
  );
}

const includedList = [
  "Textbooks",
  "Workbooks",
  "Learning materials",
  "Progress tracking",
  "Certificate of achievement",
  "Fun & engaging lessons",
  "Games, songs & interactive activities",
  "Speaking & listening practice",
  "Homework help & study support",
  "Caring & trained instructors",
  "Safe, supportive & inclusive environment",
];
