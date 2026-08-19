"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Language() {
  return (
    <Box component={"div"} className="layout section">
      <Stack sx={{ gap: { xs: "40px", md: "60px" } }}>
        <Box maxWidth={"664px"} margin={"0px auto"}>
          <Typography variant="h2" marginBottom={"8px"} textAlign={"center"}>
            Choose the language that's right for your child
          </Typography>
          <Typography color="textSecondary" textAlign={"center"}>
            From playful first words to confident conversations, help your child
            discover a language they’ll love to use.
          </Typography>
        </Box>

        {/* Language cards */}
        <Stack gap={"24px"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
          {/* French */}
          <Stack
            flex={1}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
            borderRadius={"12px"}
            gap={"24px"}
            padding={"20px"}
          >
            <Image
              src={"/flag-french.svg"}
              alt="french flag"
              width={48}
              height={48}
            />
            <Box>
              <Typography
                variant="h4"
                textAlign={"center"}
                marginBottom={"4px"}
              >
                French
              </Typography>
              <Typography color="textSecondary" textAlign={"center"}>
                Apprendre. Communiquer. Réussir.
              </Typography>
            </Box>
          </Stack>

          {/* Spanish */}
          <Stack
            flex={1}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
            borderRadius={"12px"}
            gap={"24px"}
            padding={"20px"}
          >
            <Image
              src={"/flag-spanish.svg"}
              alt="french flag"
              width={48}
              height={48}
            />
            <Box>
              <Typography
                variant="h4"
                textAlign={"center"}
                marginBottom={"4px"}
              >
                Spanish
              </Typography>
              <Typography color="textSecondary" textAlign={"center"}>
                Aprender. Comunicar. Triunfar.
              </Typography>
            </Box>
          </Stack>

          {/* Mandarin */}
          <Stack
            flex={1}
            alignItems={"center"}
            border={"1px solid"}
            borderColor={(theme) => theme.palette.ibmgrey[20]}
            borderRadius={"12px"}
            gap={"24px"}
            padding={"20px"}
          >
            <Image
              src={"/flag-china.svg"}
              alt="french flag"
              width={48}
              height={48}
            />
            <Box>
              <Typography
                variant="h4"
                textAlign={"center"}
                marginBottom={"4px"}
              >
                Mandarin
              </Typography>
              <Typography color="textSecondary" textAlign={"center"}>
                学习。交流。成功。
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
