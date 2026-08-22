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
        bgcolor={"#F4FDF2"}
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
          zIndex={0}
          sx={{
            height: { xs: "270px", sm: "513px" },
            width: { xs: "270px", sm: "513px" },
            left: { xs: "-110px", sm: "-200px" },
            top: { xs: "-130px", sm: "-320px" },
          }}
        >
          <Box
            bgcolor={"#F4FDF2"}
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
          justifyContent={"space-between"}
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
              Grow skills, Build confidence.
            </Typography>

            <Typography
              color="textSecondary"
              marginBottom={"32px"}
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              An engaging after-school program that helps children learn French,
              Spanish or Mandarin in a fun, caring and structured environment.
            </Typography>

            <Stack flexDirection={"row"} gap={"8px"}>
              <HeroButton
                component={Link}
                href="/afterschool/register"
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

            {/* Price container */}
            <Box
              bgcolor={"white"}
              padding={"10px 20px"}
              borderRadius={"16px"}
              border={"1px solid"}
              borderColor={(theme) => theme.palette.ibmgrey[30]}
              width={"fit-content"}
              marginTop={"32px"}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Stack flexDirection={"row"} gap={"8px"} alignItems={"center"}>
                <Stack flex={1} flexDirection={"row"} alignItems={"flex-end"}>
                  <Typography variant="h2" color="textSecondary">
                    $249
                    <Typography component={"span"} color="textSecondary">
                      /month
                    </Typography>
                  </Typography>
                </Stack>

                <Box
                  padding={"6px 16px"}
                  bgcolor={"#E7FEBB"}
                  borderRadius={"200px"}
                  height={"fit-content"}
                >
                  <Typography variant="subtitle2" color="textSecondary" noWrap>
                    All inclusive
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>

          <Box width={"100%"} sx={{ maxWidth: { xs: "unset", md: "600px" } }}>
            {/* Flower vector */}
            <Box
              position={"relative"}
              maxWidth={"460px"}
              margin={"0px auto"}
              zIndex={2}
              sx={{
                "& #after-school-vector2": {
                  width: { xs: "80px", md: "120px" },
                  top: { xs: "-25px", md: "-30px" },
                  left: { xs: "-25px", md: "-55px" },
                },
              }}
            >
              <Image
                src={"/program/afterschool/after-school-vector2.svg"}
                alt="Vector"
                id="after-school-vector2"
                height={87.71}
                width={109}
                style={{
                  position: "absolute",
                  height: "auto",
                }}
              />
            </Box>
            <Box
              borderRadius={"24px"}
              sx={{ height: { xs: "366px", md: "455px" } }}
              position={"relative"}
              overflow={"clip"}
              maxWidth={"460px"}
              margin={"0px auto"}
            >
              <Image
                src={"/program/afterschool/after-school-hero.png"}
                alt="children image"
                loading="eager"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />

              {/* Price container */}
              <Box
                bgcolor={"white"}
                padding={"10px 20px"}
                borderRadius={"16px"}
                border={"1px solid"}
                borderColor={(theme) => theme.palette.ibmgrey[30]}
                width={"fit-content"}
                position={"absolute"}
                bottom={20}
                left={"50%"}
                sx={{ translate: "-50%", display: { xs: "block", md: "none" } }}
              >
                <Stack
                  flexDirection={"row"}
                  gap={"8px"}
                  alignItems={"center"}
                  // flexWrap={"wrap"}
                >
                  <Stack flex={1} flexDirection={"row"} alignItems={"flex-end"}>
                    <Typography variant="h2" color="textSecondary">
                      $249
                      <Typography component={"span"} color="textSecondary">
                        /month
                      </Typography>
                    </Typography>
                  </Stack>

                  <Box
                    padding={"6px 16px"}
                    bgcolor={"#E7FEBB"}
                    borderRadius={"200px"}
                    height={"fit-content"}
                  >
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      noWrap
                    >
                      All inclusive
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>

      {/* Background Elipse*/}
      <Box
        height={"400px"}
        position={"absolute"}
        borderRadius={"50%"}
        bgcolor={"#F4FDF2"}
        zIndex={-1}
        sx={{
          bottom: { xs: "-80px", sm: "-100px", md: "-120px" },
          width: { xs: "150vw", sm: "130vw", md: "120vw" },
          left: { xs: "-25vw", sm: "-15vw", md: "-10vw" },
        }}
      />
    </Box>
  );
}
