"use client";

import {
  HeroButton,
  PrimaryButton,
} from "@/components/PrimaryButton/PrimaryButton";
import { alpha, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <Box
      position={"relative"}
      sx={{
        overflowX: "clip",
        marginBottom: { xs: "80px", sm: "100px", md: "120px" },
      }}
    >
      <Box
        component={"div"}
        className="layout"
        position={"relative"}
        overflow={"hidden"}
      >
        {/* Circle Vector */}
        <Stack
          height={"513px"}
          width={"513px"}
          borderRadius={"2000px"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"absolute"}
          left={"-200px"}
          top={"-320px"}
          bgcolor={(theme) => alpha(theme.palette.primary.main, 0.08)}
          zIndex={-1}
          sx={{
            height: { xs: "270px", sm: "513px" },
            width: { xs: "270px", sm: "513px" },
            left: { xs: "-110px", sm: "-200px" },
            top: { xs: "-130px", sm: "-320px" },
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

        {/* Two column section */}
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            marginTop: { xs: "40px", md: "60px" },
            gap: { xs: "60px", md: "60px" },
          }}
        >
          <Stack
            width={"100%"}
            sx={{
              maxWidth: { xs: "unset", md: "600px" },
              alignItems: { xs: "center", md: "unset" },
            }}
          >
            {/* Chip with canadian flag */}
            <Stack
              flexDirection={"row"}
              gap={"8px"}
              padding={"0px 6px"}
              border={"1px solid"}
              borderColor={(theme) => theme.palette.ibmgrey[30]}
              borderRadius={"200px"}
              width={"fit-content"}
            >
              <Image
                src={"/program/french-immigration/cad-flag.svg"}
                alt="french flag"
                width={24}
                height={24}
              />
              <Typography
                variant="body2"
                color="textSecondary"
                padding={"6px 0px"}
              >
                Designed for Canadian immigration success
              </Typography>
            </Stack>

            <Typography
              variant="h1"
              sx={{
                marginTop: { xs: "16px", md: "0px" },
                marginBottom: { xs: "16px", md: "20px" },
                textAlign: { xs: "center", md: "left" },
                position: "relative",
                zIndex: 2,
              }}
            >
              Your French, Your Future in Canada.
            </Typography>

            <Typography
              color="textSecondary"
              marginBottom={"32px"}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Build the French skills you need for your Canadian immigration
              journey, from beginner to TEF success.
            </Typography>

            <Stack flexDirection={"row"} gap={"8px"}>
              <HeroButton
                component={Link}
                href="/french-immigration-pathway/register"
                sx={{
                  paddingRight: "24px",
                  paddingLeft: "24px",
                  width: "170px",
                }}
              >
                Register Now
              </HeroButton>
              <PrimaryButton
                color="inherit"
                variant="outlined"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: (theme) => theme.palette.ibmgrey[70],
                  borderColor: (theme) => theme.palette.ibmgrey[30],
                  bgcolor: "white",
                  "&:hover": {
                    bgcolor: (theme) => theme.palette.ibmgrey[10],
                  },
                }}
              >
                See What’s Included
              </PrimaryButton>
            </Stack>
          </Stack>

          <Box width={"100%"} sx={{ maxWidth: { xs: "unset", md: "600px" } }}>
            <Box
              borderRadius={"24px"}
              sx={{ height: { xs: "366px", md: "455px" } }}
              position={"relative"}
              overflow={"clip"}
              maxWidth={"460px"}
              margin={"0px auto"}
            >
              <Image
                src={"/program/french-immigration/frenchimmig-hero.png"}
                alt="children image"
                loading="eager"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
